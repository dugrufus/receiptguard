import Link from 'next/link';
import { ReactNode } from 'react';
type Props = { icon?: ReactNode; line?: ReactNode; cta?: { href: string; label: ReactNode } };
export default function EmptyState({ icon, line, cta }: Props) {
  return (
    // [RG:BLOCK UI.EMPTY JSX START]
    <div className=""grid place-items-center gap-3 p-6 text-center opacity-90"">
      {icon && <div className=""text-3xl"">{icon}</div>}
      {line && <p className=""text-sm"">{line}</p>}
      {cta && <Link href={cta.href} className=""rounded-full border px-3 py-1 text-sm"">{cta.label}</Link>}
    </div>
    // [RG:BLOCK UI.EMPTY JSX END]
  );
}