#!/usr/bin/env tsx
/**
 * ReceiptGuard Acceptance Smoke (Request 17)
 * Validates markers, imports, copy keys, and a11y hints.
 */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

function log(label: string, msg: string) {
  console.log(`[${label}] ${msg}`);
}

// --- Env check ---
const tools = ["node -v", "pnpm -v", "git --version", "tsx -v"];
for (const t of tools) {
  try {
    const v = execSync(t, { encoding: "utf8" }).trim();
    log("TOOL", `${t.split(" ")[0]} => ${v}`);
  } catch {
    log("ERROR", `Missing tool: ${t}`);
  }
}

// --- Markers ---
const markersPath = path.join("docs", "ui", "markers.md");
let missing = [], duplicate = [];
if (fs.existsSync(markersPath)) {
  const lines = fs.readFileSync(markersPath, "utf8").split(/\r?\n/);
  const regex = /\[RG:BLOCK ([^\s]+) START\]/;
  for (const ln of lines) {
    const m = regex.exec(ln);
    if (m) {
      const marker = m[1];
      const search = execSync(`git grep -F "[RG:BLOCK ${marker} START]" apps/web/src`, { encoding: "utf8" }).trim().split(/\r?\n/).filter(Boolean);
      if (search.length === 0) missing.push(marker);
      if (search.length > 1) duplicate.push(marker);
    }
  }
}
if (missing.length) log("WARN", `Missing markers: ${missing.join(", ")}`);
if (duplicate.length) log("WARN", `Duplicate markers: ${duplicate.join(", ")}`);

// --- Imports ---
const pages = execSync('git ls-files apps/web/src/app/**/page.tsx', { encoding: "utf8" }).trim().split(/\r?\n/);
let badImports = [];
for (const file of pages) {
  const src = fs.readFileSync(file, "utf8");
  if (!src.includes("BottomNav")) badImports.push(file);
}
if (badImports.length) log("WARN", `Missing BottomNav import in: ${badImports.join(", ")}`);

// --- Copy coverage ---
const stringsPath = path.join("apps","web","src","rg","copy","strings.json");
const strings = fs.existsSync(stringsPath) ? JSON.parse(fs.readFileSync(stringsPath,"utf8")) : {};
function hasKey(obj, pathStr) {
  return pathStr.split(".").reduce((o,k)=>o && o[k], obj) !== undefined;
}
let literalViolations = [];
for (const file of pages) {
  const src = fs.readFileSync(file,"utf8");
  const jsxText = src.match(/>([^<>{}]+)</g)?.map(x=>x.slice(1,-1).trim()).filter(x=>x && !x.startsWith("{"))||[];
  for (const text of jsxText) {
    if (text.length>1 && !/^\s*$/.test(text)) literalViolations.push(`${file}: "${text}"`);
  }
  const tKeys = src.match(/t\(['"]([^'"]+)['"]\)/g)?.map(m=>m.match(/t\(['"]([^'"]+)['"]\)/)![1])||[];
  for (const k of tKeys) if (!hasKey(strings,k)) log("WARN",`Missing copy key: ${k}`);
}
if (literalViolations.length) log("WARN",`Literal text found:\n${literalViolations.join("\n")}`);

// --- A11y & feature hints ---
function findMissing(pattern,label){
  const cmd=`git grep -L "${pattern}" apps/web/src`;
  try{
    const res=execSync(cmd,{encoding:"utf8"}).trim();
    if(res) log("WARN",`${label} missing in:\n${res}`);
  }catch{}
}
findMissing('aria-live="polite"',"Stepper aria-live");
findMissing('aria-label',"Icon button aria-label");
findMissing('<main',"Page main landmark");
findMissing('Matched as',"Aggregator text");
findMissing('privacy',"Settings privacy banner");
findMissing('Linked by',"Message Hub text");

console.log("---- Summary ----");
console.log("Smoke completed with warnings above if any.");