import './globals.css';
import './globals.css'
export const metadata = { title: 'ReceiptGuard', description: 'Starter' };

import { BottomNav } from "@/components/rg/BottomNav";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}
        {/* [RG:BLOCK NAV.BOTTOM_TABS START] */}
        <BottomNav />
        {/* [RG:BLOCK NAV.BOTTOM_TABS END] */}</body>
    </html>
  );
}