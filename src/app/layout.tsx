import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://fishit.robloxwikihub.com"),
  title: { default: "Fish It! Wiki — Rod Tier List, Codes & Luck Calculator", template: "%s | Fish It! Wiki" },
  description: "Ultimate Fish It! guide (by Fish Atelier) — active redeem codes, verified rod tier list, luck & rarity calculator, fish database, locations, enchanting, and potions.",
  openGraph: { type: "website", siteName: "Fish It! Wiki" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#06121e] text-slate-200 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
