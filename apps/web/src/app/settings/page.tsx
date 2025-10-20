"use client";

import React, { useState } from "react";
import { t } from "@/rg/copy";
import BottomNav from "@/components/rg/BottomNav";

export default function SettingsPage() {
  const [email, setEmail] = useState("");
  return (
    <main className="mx-auto max-w-xl pb-20 p-4 space-y-4">
      <h1 className="text-xl font-semibold">{t("settings.title") ?? "Settings"}</h1>
      <label className="block text-sm">
        {t("settings.email") ?? "Email"}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-lg border p-2"
        />
      </label>
      <BottomNav />
    </main>
  );
}
