import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  title?: React.ReactNode;
  icon?: React.ReactNode;      // 20px lucide icon recommended
  badge?: React.ReactNode;     // right-side small pill / count
  footer?: React.ReactNode;    // optional footer row
  actions?: React.ReactNode;   // kept for backward-compat (renders at right of header if provided)
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  tabIndex?: number;
  role?: string;
  pressable?: boolean;         // adds hover/active/elevation affordance
};

export function Card({
  title,
  icon,
  badge,
  footer,
  actions,
  className,
  children,
  as: Tag = "section",
  pressable = false,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border shadow-sm",
        "bg-white text-zinc-900 border-zinc-200",
        "dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800",
        "p-4 sm:p-5 transition-shadow focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-sky-500",
        pressable && "hover:shadow-md active:shadow-sm cursor-pointer",
        className
      )}
      {...rest}
    >
      {(title || actions || badge || icon) && (
        <header className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            {icon && <div className="shrink-0">{icon}</div>}
            {title && (
              <h2 className="truncate text-base font-semibold leading-none tracking-tight">
                {title}
              </h2>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {badge && <div>{badge}</div>}
            {actions && <div>{actions}</div>}
          </div>
        </header>
      )}
      <div className="space-y-3">{children}</div>
      {footer && <footer className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800">{footer}</footer>}
    </Tag>
  );
}