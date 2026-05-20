import type { Metadata } from "next";
import { MobileNav } from "@/components/MobileNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoleVault | Buy. Sell. Trade. Authenticated.",
  description: "Authenticated sneaker marketplace with trade escrow and live drop reveals."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pb-20 md:pb-0">
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
