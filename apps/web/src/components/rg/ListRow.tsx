import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type RightKind = { value?: React.ReactNode; showChevron?: boolean };

type BaseProps = {
  icon?: React.ReactNode;             // 20–24px lucide icon/thumb
  title: React.ReactNode;
  meta?: React.ReactNode;             // second line (secondary text)
  right?: RightKind;
  className?: string;
  insetDivider?: boolean;             // divider aligns with text start
};

type AsButton = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button"; href?: never };
type AsLink   = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>   & { as?: "a"; href: string };
type AsDiv    = BaseProps & React.HTMLAttributes<HTMLDivElement>            & { as?: "div"; href?: never };

export function ListRow(props: AsButton | AsLink | AsDiv) {
  const { icon, title, meta, right, className, insetDivider = true, as = "div", ...rest } = props as any;

  const inner = (
    <div className={cn(
      "w-full grid grid-cols-[auto,1fr,auto] items-center gap-3",
      "min-h-[56px] py-3"
    )}>
      <div className="shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">{title}</div>
        {meta && <div className="truncate text-sm text-zinc-600 dark:text-zinc-400">{meta}</div>}
      </div>
      <div className="flex items-center gap-1 shrink-0">
        {right?.value && <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 text-right">{right.value}</div>}
        {right?.showChevron && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-70" aria-hidden="true">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    </div>
  );

  const Wrapper: any = (as === "a") ? Link : (as === "button" ? "button" : "div");
  const wrapperProps: any = { ...rest };

  return (
    <div className={cn("group/listrow", className)}>
      <Wrapper
        className={cn(
          "block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg",
          "px-2 -mx-2"
        )}
        {...wrapperProps}
      >
        {inner}
      </Wrapper>
      <div className={cn("h-px bg-zinc-200 dark:bg-zinc-800", insetDivider ? "ml-10" : "")} />
    </div>
  );
}