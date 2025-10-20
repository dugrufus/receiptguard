"use client";
import React, { useState } from "react";
import { t } from "@/rg/copy/t";
import { useRouter } from "next/navigation";

type Props = { caseId: string; onSend?: (text: string) => void; redirectToCase?: boolean };

export default function Compose({ caseId, onSend, redirectToCase = true }: Props) {
  const [text, setText] = useState("");
  const router = useRouter();
  const quicks = [
    { key: "messages.quick.nudge" },
    { key: "messages.quick.moreInfo" },
    { key: "messages.quick.confirm" },
  ];
  function append(key: string) {
    setText((prev) => (prev ? prev + "\\n\\n" : "") + t(key));
  }
  function send() {
    const payload = text.trim();
    if (!payload) return;
    onSend?.(payload);
    setText("");
    if (redirectToCase && caseId) {
      router.push(`/messages/${caseId}`);
    }
  }
  return (
    <div className="w-full border-t p-3 space-y-2">
      {/* [RG:BLOCK MSG.COMPOSE START] */}
      <div className="flex flex-wrap gap-2">
        {quicks.map((q) => (
          <button
            key={q.key}
            type="button"
            className="px-3 py-2 rounded-2xl border focus:outline-none focus:ring"
            onClick={() => append(q.key)}
          >
            {t(q.key)}
          </button>
        ))}
      </div>
      <label className="sr-only" htmlFor="rg-compose">
        {t("messages.compose.ariaLabel")}
      </label>
      <textarea
        id="rg-compose"
        aria-label={t("messages.compose.ariaLabel")}
        className="w-full min-h-[96px] p-3 border rounded-2xl focus:outline-none focus:ring"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          type="button"
          onClick={send}
          className="px-4 py-2 rounded-2xl border focus:outline-none focus:ring"
        >
          {t("messages.send")}
        </button>
      </div>
      {/* [RG:BLOCK MSG.COMPOSE END] */}
    </div>
  );
}