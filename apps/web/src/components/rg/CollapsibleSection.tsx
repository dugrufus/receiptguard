'use client';
import { useState, PropsWithChildren, ReactNode, KeyboardEvent } from 'react';
type Props = PropsWithChildren<{ summary: ReactNode; defaultOpen?: boolean }>;
export default function CollapsibleSection({ summary, defaultOpen = false, children }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const toggle = () => setOpen(o => !o);
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } };
  return (
    // [RG:BLOCK UI.COLLAPSIBLE JSX START]
    <div className=""rounded-xl border"">
      <div role=""button"" tabIndex={0} aria-expanded={open} onClick={toggle} onKeyDown={onKey}
           className=""flex items-center justify-between gap-2 p-4 cursor-pointer select-none"">
        <div>{summary}</div>
        <span aria-hidden=""true"" className={	ransition-transform }>⌄</span>
      </div>
      {open && <div className=""p-4 pt-0"">{children}</div>}
    </div>
    // [RG:BLOCK UI.COLLAPSIBLE JSX END]
  );
}