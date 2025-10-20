"use client";
import * as React from "react";

export function Stepper({ step, total, children }: { step: number; total: number; children?: React.ReactNode }) {
  const label = `Step ${step} of ${total}`;
  return (
    <div role="group" aria-label={label} aria-live="polite" className="flex items-center gap-2">
      <span className="text-sm font-medium">{label}</span>
      {children}
    </div>
  );
}