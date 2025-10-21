"use client";
import * as React from "react";

export function Card(props: { title?: React.ReactNode; actions?: React.ReactNode; children?: React.ReactNode; className?: string }) {
  return (
    <section className={"rounded-2xl shadow-sm border bg-white px-4 py-3 " + (props.className ?? "")} role="region" aria-label={typeof props.title === "string" ? props.title : undefined}>
      <div className="flex items-center justify-between gap-3">
        {props.title ? <h2 className="text-base font-semibold">{props.title}</h2> : <span aria-hidden="true" />}
        {props.actions}
      </div>
      <div className="mt-2">{props.children}</div>
    </section>
  );
}