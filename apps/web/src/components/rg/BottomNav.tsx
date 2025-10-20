"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "../../rg/i18n";

const tabs = [
  { href: "/home", key: "nav.home" },
  { href: "/activity", key: "nav.activity" },
  { href: "/history", key: "nav.history" },
  { href: "/settings", key: "nav.settings" },
];

export default function BottomNav() {
  const path = usePathname() || "";
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur border-t z-40" role="navigation" aria-label="Primary">
      <ul className="grid grid-cols-4">
        {tabs.map((tdef) => {
          const current = path === tdef.href || (tdef.href !== "/" && path.startsWith(tdef.href));
          return (
            <li key={tdef.href}>
              <Link
                href={tdef.href}
                className={"block text-center text-sm py-3 min-h-[44px] focus:outline-none focus-visible:ring " + (current ? "font-semibold" : "text-gray-600")}
                aria-current={current ? "page" : undefined}
              >
                {t(tdef.key)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}