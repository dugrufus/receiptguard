import React from "react";

/* [RG:BLOCK SCORE.PILL] */

export type ScoreBand = "High" | "Medium" | "Low";

export interface ScorePillProps {
  band: ScoreBand;
  minutesApprox?: number;
  onWhy?: () => void;
  className?: string;
}

const COLORS: Record<ScoreBand, string> = {
  High: "bg-emerald-100 text-emerald-800 border-emerald-300",
  Medium: "bg-amber-100 text-amber-800 border-amber-300",
  Low: "bg-rose-100 text-rose-800 border-rose-300",
};

export default function ScorePill({ band, minutesApprox, onWhy, className = "" }: ScorePillProps) {
  const color = COLORS[band] ?? "bg-gray-100 text-gray-800 border-gray-300";
  return (
    <button
      type="button"
      onClick={onWhy}
      className={
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium " +
        color + " " + className
      }
      aria-label="Refund score"
    >
      <span>{band}</span>
      {typeof minutesApprox === "number" && (
        <span className="opacity-80">~{Math.round(minutesApprox)} min</span>
      )}
    </button>
  );
}
