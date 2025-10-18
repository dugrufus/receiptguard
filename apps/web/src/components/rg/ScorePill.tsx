"use client";
import React from "react";
import { t } from "@/rg/i18n";

type ScoreLevel = "high" | "medium" | "low";

export function levelToLabel(level: ScoreLevel) {
  switch (level) {
    case "high":   return t("score.pill.high");
    case "medium": return t("score.pill.medium");
    default:       return t("score.pill.low");
  }
}

export default function ScorePill({ level, minutes }: { level: ScoreLevel; minutes?: number }) {
  const label = levelToLabel(level);
  const minutesText = typeof minutes === "number"
    ? (t("score.pill.minutesApprox") || "≈ {minutes} min").replace("{minutes}", String(minutes))
    : null;

  return (
    <span
      aria-label={`${label}${minutesText ? " • " + minutesText : ""}`}
      className={[
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium",
        level === "high" ? "bg-green-100 text-green-800" :
        level === "medium" ? "bg-yellow-100 text-yellow-800" :
        "bg-gray-100 text-gray-800"
      ].join(" ")}
    >
      {/* [RG:BLOCK SCORE.PILL START] */}
      <span>{label}</span>
      {minutesText ? <span aria-hidden="true">• {minutesText}</span> : null}
      {/* [RG:BLOCK SCORE.PILL END] */}
    </span>
  );
}