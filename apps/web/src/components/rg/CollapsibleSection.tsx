"use client";
import * as React from "react";

export function CollapsibleSection(props: { title: string; children?: React.ReactNode }) {
  return (
    <details className="rounded-xl border px-4 py-3">
      <summary className="cursor-pointer select-none text-base font-medium focus:outline-none focus-visible:ring min-h-[44px] flex items-center">
        {props.title}
      </summary>
      <div className="mt-2">{props.children}</div>
    </details>
  );
}