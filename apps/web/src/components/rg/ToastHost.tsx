"use client";
import * as React from "react";

export function ToastHost() {
  return <div aria-live="polite" role="status" className="fixed bottom-16 inset-x-0 flex justify-center pointer-events-none"></div>;
}