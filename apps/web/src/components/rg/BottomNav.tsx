"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Activity, History as HistoryIcon, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Bottom tab bar (mobile):
 * - 3–5 items
 * - label under icon
 * - active item uses accent color (sky)
 */
export function BottomNav() {
  const pathname = usePathname();
  const items = [
    { href: "/home",     label: "Home",     icon: Home },
    { href: "/activity", label: "Activity", icon: Activity },
    { href: "/history",  label: "History",  icon: HistoryIcon },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 md:hidden", // mobile only
        "border-t border-zinc-200 dark:border-zinc-800",
        "bg-white/90 dark:bg-zinc-950/80 backdrop-blur"
      )}
      aria-label="Primary"
    >
      <ul className="grid grid-cols-4">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <li key={href} className="contents">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 py-2 h-16", // 64px tap area
                  "text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                  active
                    ? "text-sky-600 dark:text-sky-400"
                    : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                )}
              >
                <Icon size={20} aria-hidden />
                <span className="leading-none">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}