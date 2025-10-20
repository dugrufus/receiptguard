"use client";

import React from "react";
import Link from "next/link";
import BottomNav from "@/components/rg/BottomNav";
import strings from "@/rg/copy/strings.json";

type Kind = "returns" | "claims" | "messages" | "delivery";
type Filter = "all" | Kind;

type EventRow = {
  id: string;
  kind: Kind;
  ts: string; // ISO
  summary: string;
  relatedId?: string;
};

const t = (key: string): string => {
  const parts = key.split(".");
  // @ts-ignore
  let cur: any = strings;
  for (const p of parts) {
    cur = cur?.[p];
    if (cur === undefined) break;
  }
  return typeof cur === "string" ? cur : key;
};

const ICONS: Record<Kind, string> = {
  returns: "↩️",
  claims: "🧾",
  messages: "💬",
  delivery: "📦",
};

const formatAbs = (iso: string) => {
  try {
    const d = new Date(iso);
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZoneName: "short",
    }).format(d);
  } catch {
    return iso;
  }
};

const FILTERS: Filter[] = ["all", "returns", "claims", "messages", "delivery"];

const sample: EventRow[] = [
  { id: "e1", kind: "returns", ts: new Date().toISOString(), summary: "Return window added for Target #A123", relatedId: "A123" },
  { id: "e2", kind: "claims", ts: new Date(Date.now() - 3_600_000).toISOString(), summary: "Price drop found on Best Buy TV", relatedId: "PD456" },
  { id: "e3", kind: "messages", ts: new Date(Date.now() - 86_400_000).toISOString(), summary: "Support replied to your claim", relatedId: "MSG789" },
  { id: "e4", kind: "delivery", ts: new Date(Date.now() - 172_800_000).toISOString(), summary: "Order #4456 delivered", relatedId: "4456" },
];

const kindToHref = (e: EventRow) => {
  if (!e.relatedId) return undefined;
  switch (e.kind) {
    case "returns": return `/returns/${e.relatedId}`;
    case "claims": return `/claim/price-drop/${e.relatedId}`;
    case "messages": return `/messages/${e.relatedId}`;
    case "delivery": return `/purchases/${e.relatedId}`;
  }
};

export default function ActivityPage() {
  const [active, setActive] = React.useState<Filter>("all");
  const list = React.useMemo(
    () => (active === "all" ? sample : sample.filter(s => s.kind === active)),
    [active]
  );

  // Preserve scroll across back/forward
  React.useEffect(() => {
    const key = "activity.scrollY";
    const y = Number(sessionStorage.getItem(key) || "0");
    if (!Number.isNaN(y) && y > 0) {
      window.scrollTo(0, y);
    }
    const onSave = () => sessionStorage.setItem(key, String(window.scrollY));
    window.addEventListener("beforeunload", onSave);
    return () => {
      onSave();
      window.removeEventListener("beforeunload", onSave);
    };
  }, []);

  return (
    <main className="min-h-screen pb-24">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-screen-sm px-4 py-3">
          <h1 className="text-xl font-semibold">{t("activity.title")}</h1>
          {/* [RG:BLOCK ACT.FILTERS START] */}
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1" role="toolbar" aria-label="Activity filters">
            {FILTERS.map((f) => {
              const pressed = active === f;
              const label =
                f === "all" ? t("activity.filters.all")
                : f === "returns" ? t("activity.filters.returns")
                : f === "claims" ? t("activity.filters.claims")
                : f === "messages" ? t("activity.filters.messages")
                : t("activity.filters.delivery");
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  aria-pressed={pressed}
                  className={`px-4 py-3 rounded-full text-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                    ${pressed ? "bg-black text-white border-black" : "bg-white text-gray-800 border-gray-300"}`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          {/* [RG:BLOCK ACT.FILTERS END] */}
        </div>
      </header>

      {/* [RG:BLOCK ACT.LIST START] */}
      <section className="mx-auto max-w-screen-sm px-4">
        <ul role="list" className="divide-y">
          {list.map((e) => {
            const href = kindToHref(e);
            return (
              <li key={e.id} className="py-4 flex items-start gap-3">
                <span aria-hidden="true" className="text-xl leading-6">{ICONS[e.kind]}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">{e.summary}</p>
                  <p className="text-xs text-gray-500 mt-1">{formatAbs(e.ts)}</p>
                </div>
                {href && (
                  <Link
                    href={href}
                    className="shrink-0 text-sm underline decoration-dotted focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-2 py-1 rounded"
                    onClick={() => sessionStorage.setItem("activity.scrollY", String(window.scrollY))}
                  >
                    View
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </section>
      {/* [RG:BLOCK ACT.LIST END] */}

      {/* [RG:BLOCK ACT.FOOTER START] */}
      <footer className="fixed bottom-0 inset-x-0 bg-white/90 backdrop-blur border-t">
        <div className="mx-auto max-w-screen-sm px-4 py-3 flex items-center justify-between">
          <Link
            href="/home"
            className="text-sm underline decoration-dotted focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-2 py-1 rounded"
            onClick={() => sessionStorage.setItem("activity.scrollY", String(window.scrollY))}
          >
            {t("activity.backToHome")}
          </Link>
        </div>
        <BottomNav />
      </footer>
      {/* [RG:BLOCK ACT.FOOTER END] */}
    </main>
  );
}
