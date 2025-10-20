"use client";
import * as React from "react";

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center text-sm text-gray-600 py-8" role="status">
      {message}
    </div>
  );
}