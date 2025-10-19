import React from "react";

/* [RG:BLOCK SCORE.WHY] */

export interface WhyFactor { label: string; value?: string | number; hint?: string; }
export interface ScoreWhyDrawerProps {
  title?: string;
  factors: WhyFactor[];
  open?: boolean;
  onClose?: () => void;
}

export default function ScoreWhyDrawer({
  title = "Why this score?",
  factors,
  open = false,
  onClose,
}: ScoreWhyDrawerProps) {
  if (!open) return null;
  return (
    <div role="dialog" aria-modal className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full md:w-[520px] max-h-[85vh] overflow-auto rounded-t-2xl md:rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} aria-label="Close" className="p-2 rounded">✕</button>
        </div>
        <ul className="space-y-3">
          {factors.map((f, i) => (
            <li key={i} className="flex items-start justify-between gap-4">
              <div>
                <div className="font-medium">{f.label}</div>
                {f.hint && <div className="text-sm opacity-70">{f.hint}</div>}
              </div>
              {f.value !== undefined && <div className="text-sm font-mono">{f.value}</div>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
