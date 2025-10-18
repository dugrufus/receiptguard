# RG.Helpers.psm1 — canonical helpers for ReceiptGuard

function Ensure-Dir([Parameter(Mandatory)][string]$Path) {
  if (-not (Test-Path -LiteralPath $Path)) {
    if ($env:RG_DRY_RUN -eq 'true') { Write-Host "[SKIP] Would create dir: $Path" }
    else { New-Item -ItemType Directory -Force -Path $Path | Out-Null; Write-Host "[CHANGE] Created dir: $Path" }
  } else { Write-Host "[OK] Dir exists: $Path" }
}

function Get-FileContentOrEmpty([Parameter(Mandatory)][string]$Path) {
  if (Test-Path -LiteralPath $Path) { return [System.IO.File]::ReadAllText($Path) } else { return "" }
}

function Write-Utf8([Parameter(Mandatory)][string]$Path, [Parameter(Mandatory)][string]$Content) {
  $tmp = "$Path.tmp"
  [System.IO.File]::WriteAllText($tmp, $Content, (New-Object System.Text.UTF8Encoding($false)))
  if (Test-Path -LiteralPath $Path) { Remove-Item -LiteralPath $Path -Force }
  Move-Item -LiteralPath $tmp -Destination $Path -Force
}

function Backup-File([Parameter(Mandatory)][string]$Path) {
  if (-not (Test-Path -LiteralPath $Path)) { return }
  $backupDir = if ($env:RG_BACKUP_DIR) { $env:RG_BACKUP_DIR } else { (Join-Path $PSScriptRoot '..\backup') }
  if (-not (Test-Path -LiteralPath $backupDir)) { return }
  $name = (Split-Path -Leaf $Path) + '.' + (Get-Date -Format 'yyyyMMddHHmmss') + '.bak'
  $dest = Join-Path $backupDir $name
  Copy-Item -LiteralPath $Path -Destination $dest -Force
  Write-Host "[OK] Backup: $dest"
}

function Write-IfChanged([Parameter(Mandatory)][string]$Path, [Parameter(Mandatory)][string]$Content) {
  $existing = Get-FileContentOrEmpty -Path $Path
  if ($existing -ceq $Content) { Write-Host "[SKIP] No change: $Path"; return $false }
  if ($env:RG_DRY_RUN -eq 'true') { Write-Host "[SKIP] Would write: $Path"; return $true }
  if (Test-Path -LiteralPath $Path) { Backup-File -Path $Path }
  $dir = Split-Path -Parent $Path
  if ($dir) { Ensure-Dir -Path $dir }
  Write-Utf8 -Path $Path -Content $Content
  Write-Host "[CHANGE] Wrote: $Path"
  return $true
}

function Merge-Json([hashtable]$dest, [hashtable]$src) {
  foreach ($k in $src.Keys) {
    if ($dest.ContainsKey($k)) {
      if ($dest[$k] -is [hashtable] -and $src[$k] -is [hashtable]) { Merge-Json -dest $dest[$k] -src $src[$k] }
      else { $dest[$k] = $src[$k] }
    } else { $dest[$k] = $src[$k] }
  }
}

function Add-Or-UpdateJson([Parameter(Mandatory)][string]$Path, [Parameter(Mandatory)][hashtable]$Data) {
  $obj = @{}
  if (Test-Path -LiteralPath $Path) {
    try { $obj = Get-Content -LiteralPath $Path -Raw | ConvertFrom-Json -AsHashtable -Depth 100 } catch { $obj = @{} }
  }
  Merge-Json -dest $obj -src $Data
  $json = ($obj | ConvertTo-Json -Depth 100)
  return Write-IfChanged -Path $Path -Content $json
}

function Replace-Or-Insert(
  [Parameter(Mandatory)][string]$Path,
  [Parameter(Mandatory)][string]$Pattern,
  [Parameter(Mandatory)][string]$Replacement,
  [Parameter(Mandatory)][string]$AppendIfMissing
) {
  $text = Get-FileContentOrEmpty -Path $Path
  if ($text -match $Pattern) {
    $new = [regex]::Replace($text, $Pattern, $Replacement, 'Singleline')
  } else {
    $new = if ($text.Length -gt 0) { $text.TrimEnd() + "`r`n`r`n" + $AppendIfMissing } else { $AppendIfMissing }
  }
  return Write-IfChanged -Path $Path -Content $new
}

function Ensure-RouteDir([Parameter(Mandatory)][string]$Path) {
  Ensure-Dir -Path $Path
  Write-Host "[OK] Route dir ensured: $Path"
}

function Run-Tool([Parameter(Mandatory)][string]$File, [string[]]$Args, [int]$TimeoutSec = 60) {
  $psi = [System.Diagnostics.ProcessStartInfo]::new()
  $psi.FileName = $File
  $psi.RedirectStandardError = $true
  $psi.RedirectStandardOutput = $true
  $psi.UseShellExecute = $false
  $psi.CreateNoWindow = $true
  if ($Args) { foreach ($a in $Args) { [void]$psi.ArgumentList.Add($a) } }
  $p = [System.Diagnostics.Process]::new()
  $p.StartInfo = $psi
  try { $null = $p.Start() } catch { return @{ ExitCode = 127; StdOut = ""; StdErr = $_.Exception.Message } }
  if (-not $p.WaitForExit($TimeoutSec * 1000)) { try { $p.Kill() } catch {}; return @{ ExitCode = 124; StdOut = $p.StandardOutput.ReadToEnd(); StdErr = "[timeout] Exceeded ${TimeoutSec}s" } }
  return @{ ExitCode = $p.ExitCode; StdOut = $p.StandardOutput.ReadToEnd(); StdErr = $p.StandardError.ReadToEnd() }
}

function New-GitBranch([Parameter(Mandatory)][string]$Branch) {
  $check = Run-Tool -File 'git' -Args @('rev-parse','--is-inside-work-tree')
  if ($check.ExitCode -ne 0) { Write-Host "[SKIP] Not a git repo; skipping branch"; return }
  $res = Run-Tool -File 'git' -Args @('checkout','-B', $Branch)
  if ($res.ExitCode -eq 0) { Write-Host "[OK] On branch: $Branch" } else { Write-Host "[ERROR] git checkout -B $Branch failed: $($res.StdErr)" }
}

function Safe-Commit([Parameter(Mandatory)][string]$Message) {
  if ($env:RG_DRY_RUN -eq 'true') { Write-Host "[SKIP] Would commit: $Message"; return }
  $add = Run-Tool -File 'git' -Args @('add','-A')
  if ($add.ExitCode -ne 0) { Write-Host "[ERROR] git add failed: $($add.StdErr)"; return }
  $diff = Run-Tool -File 'git' -Args @('diff','--cached','--name-only')
  if ([string]::IsNullOrWhiteSpace($diff.StdOut)) { Write-Host "[SKIP] No staged changes to commit"; return }
  $commit = Run-Tool -File 'git' -Args @('commit','-m', $Message)
  if ($commit.ExitCode -eq 0) { Write-Host "[OK] Commit created: $Message" } else { Write-Host "[ERROR] git commit failed: $($commit.StdErr)" }
}

Export-ModuleMember -Function Ensure-Dir, Get-FileContentOrEmpty, Write-Utf8, Backup-File, Write-IfChanged, Add-Or-UpdateJson, Replace-Or-Insert, Ensure-RouteDir, Run-Tool, New-GitBranch, Safe-Commit