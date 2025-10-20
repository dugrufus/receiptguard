"use client";

import * as React from "react";

type Props = {
  summary: React.ReactNode;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export default function CollapsibleSection({
  summary,
  children,
  defaultOpen = false,
  className = "",
}: Props) {
  const [open, setOpen] = React.useState(defaultOpen);
  const toggle = () => setOpen((o) => !o);
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <section className={`rounded-xl border ${className}`}>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={onKeyDown}
        className="flex items-center justify-between gap-2 p-4 cursor-pointer select-none"
      >
        <div>{summary}</div>
        <div aria-hidden="true">{open ? "−" : "+"}</div>
      </div>
      {open && <div className="p-4">{children}</div>}
    </section>
  );
}
