import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Usage:
 * <Pill tone="success">Connected</Pill>
 * <Pill>2 notices</Pill> // neutral
 */
type PillTone = "neutral" | "info" | "success" | "warning" | "danger";
type PillProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: PillTone;
  as?: React.ElementType;
  soft?: boolean; // softer background (default true)
};
const toneMap: Record<PillTone, string> = {
  neutral: "text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700",
  info:    "text-sky-700 dark:text-sky-300 bg-sky-100 dark:bg-sky-900/30 border-sky-200 dark:border-sky-800",
  success: "text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800",
  warning: "text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800",
  danger:  "text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/30 border-rose-200 dark:border-rose-800",
};

export function Pill({ tone = "neutral", as: Tag = "span", soft = true, className, ...rest }: PillProps) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center rounded-full border",
        "min-h-[28px] px-3 text-sm font-medium",
        toneMap[tone],
        className
      )}
      {...rest}
    />
  );
}