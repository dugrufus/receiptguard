"use client";
import React from "react";
import { t } from "@/rg/i18n";
// [RG:BLOCK SCORE.WHY]

export default function ScoreWhyDrawer({
  factors = [],
  triggerLabel = "Why?",
}: {
  factors?: Array<{ id: string; label: string; value?: string | number | boolean }>;
  triggerLabel?: string;
}) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    if (open) { window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }
  }, [open]);

  return (
    <>
      {/* [RG:BLOCK SCORE.WHY START] */}
      <button
        type="button"
        className="underline text-sm"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open ? "true" : "false"}
      >
        {t("score.why.title") || triggerLabel}
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
        >
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} aria-hidden="true" />
          <div className="relative w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl p-4 max-h-[80vh] overflow-y-auto" role="document" aria-label={t("score.why.title")}>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-base font-semibold">{t("score.why.title")}</h2>
              <button onClick={() => setOpen(false)} aria-label="Close">✕</button>
            </div>
            <ul className="space-y-2">
              {factors.map((f) => (
                <li key={f.id} className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span className="text-sm">
                    {String(f.label)}{typeof f.value !== "undefined" ? ` — ${String(f.value)}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/* [RG:BLOCK SCORE.WHY END] */}
    </>
  );
}
