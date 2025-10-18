import { PropsWithChildren, ReactNode } from 'react';
type CardProps = PropsWithChildren<{ id?: string; title?: ReactNode; actions?: ReactNode }>;
export default function Card({ id, title, actions, children }: CardProps) {
  return (
    // [RG:BLOCK UI.CARD JSX START]
    <section role=""region"" aria-labelledby={id} className=""rounded-2xl border bg-card text-card-foreground shadow-sm"">
      {(title || actions) && (
        <header className=""flex items-center justify-between gap-2 p-4"">
          {title && <h2 id={id} className=""text-base font-medium"">{title}</h2>}
          {actions}
        </header>
      )}
      <div className=""p-4"">{children}</div>
    </section>
    // [RG:BLOCK UI.CARD JSX END]
  );
}