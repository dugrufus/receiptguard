"use client";
import * as React from "react";

export function ProgressRing({ value, size = 28 }: { value: number; size?: number }) {
  const r = size / 2 - 3;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, value));
  const dash = (clamped / 100) * c;
  return (
    <svg width={size} height={size} role="img" aria-label={`${clamped}%`}>
      <circle cx={size/2} cy={size/2} r={r} strokeWidth="3" strokeOpacity="0.2" stroke="currentColor" fill="none" />
      <circle cx={size/2} cy={size/2} r={r} strokeWidth="3" strokeDasharray={`${dash} ${c-dash}`} strokeLinecap="round" stroke="currentColor" fill="none" transform={`rotate(-90 ${size/2} ${size/2})`} />
    </svg>
  );
}