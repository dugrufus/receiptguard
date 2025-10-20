'use client';
type Props = { value: number; size?: number; stroke?: number };
export default function ProgressRing({ value, size = 40, stroke = 4 }: Props) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    // [RG:BLOCK UI.RING SVG START]
    <svg width={size} height={size} role=""progressbar"" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(value)}>
      <circle cx={size/2} cy={size/2} r={r} strokeWidth={stroke} fill=""none"" className=""opacity-20"" stroke=""currentColor"" />
      <circle cx={size/2} cy={size/2} r={r} strokeWidth={stroke} fill=""none"" strokeDasharray={c} strokeDashoffset={off} stroke=""currentColor"" />
    </svg>
    // [RG:BLOCK UI.RING SVG END]
  );
}