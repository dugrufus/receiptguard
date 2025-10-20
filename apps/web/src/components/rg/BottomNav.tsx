"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "@/rg/copy";

export default function BottomNav() {
  const pathname = usePathname();
  const items = [
    { href: "/", key: "bottomNav.home" },
    { href: "/activity", key: "bottomNav.activity" },
    { href: "/settings", key: "bottomNav.settings" },
  ];
  return (
    <nav
      aria-label="Main"
      role="navigation"
      className="fixed bottom-0 left-0 right-0 border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      {/* [RG:BLOCK UI.BOTTOM_NAV JSX START] */}
      <ul className="mx-auto grid max-w-xl grid-cols-3 gap-0 text-sm">
        {items.map(({ href, key }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex h-12 items-center justify-center ${active ? "font-semibold" : ""}`}
              >
                {t(key) ?? key}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* [RG:BLOCK UI.BOTTOM_NAV JSX END] */}
    </nav>
  );
}
