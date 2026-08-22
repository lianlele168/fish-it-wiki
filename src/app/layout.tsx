import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fishit.robloxwikihub.com"),
  title: { default: "Fish It! Wiki (Fisch) — Rod Tier List, Codes & Profit Calculator", template: "%s | Fish It! Wiki" },
  description: "Ultimate Fish It! (Fisch) guide — active redeem codes, rod tier list, catch profit calculator, fish database, bait guide, enchantments, weather totems, boats speed, and quests.",
  openGraph: { type: "website", siteName: "Fish It! Wiki" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-sky-900/40">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-black text-lg text-white flex items-center gap-2">
              <span className="text-2xl">🎣</span>
              <span>Fish It! Wiki</span>
            </a>
            <nav className="flex items-center space-x-4 text-xs md:text-sm font-medium text-slate-300 overflow-x-auto py-1">
              <a href="/codes" className="hover:text-sky-400 transition-colors whitespace-nowrap">🎁 Codes</a>
              <a href="/rod-tier-list" className="hover:text-sky-400 transition-colors whitespace-nowrap">🎣 Rod Tier</a>
              <a href="/catch-calculator" className="hover:text-sky-400 transition-colors whitespace-nowrap">🧮 Catch Calc</a>
              <a href="/fish-database" className="hover:text-sky-400 transition-colors whitespace-nowrap">🐟 Fish Index</a>
              <a href="/bait-guide" className="hover:text-sky-400 transition-colors whitespace-nowrap">🪱 Baits</a>
              <a href="/enchantments" className="hover:text-sky-400 transition-colors whitespace-nowrap">🔮 Enchants</a>
              <a href="/potions-totems" className="hover:text-sky-400 transition-colors whitespace-nowrap">🗿 Totems & Potions</a>
              <a href="/boats-speed" className="hover:text-sky-400 transition-colors whitespace-nowrap">🛥️ Boats</a>
              <a href="/crab-cages" className="hover:text-sky-400 transition-colors whitespace-nowrap">🦀 Crab Cages</a>
              <a href="/locations-map" className="hover:text-sky-400 transition-colors whitespace-nowrap">🗺️ Locations</a>
              <a href="/quests-merchants" className="hover:text-sky-400 transition-colors whitespace-nowrap">📜 Quests</a>
              <a href="/aquarium-guide" className="hover:text-sky-400 transition-colors whitespace-nowrap">🏛️ Aquarium</a>
              <a href="/secret-rods-crafting" className="hover:text-sky-400 transition-colors whitespace-nowrap">⚒️ Crafting</a>
              <a href="/beginner-guide" className="hover:text-sky-400 transition-colors whitespace-nowrap">📖 Guide</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-sky-900/30 mt-16 py-8 text-center text-xs text-slate-500 space-y-2">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-slate-400 mb-2">
            <a href="/codes" className="hover:underline">Codes</a>
            <a href="/rod-tier-list" className="hover:underline">Rod Tier</a>
            <a href="/catch-calculator" className="hover:underline">Catch Calc</a>
            <a href="/fish-database" className="hover:underline">Fish Index</a>
            <a href="/bait-guide" className="hover:underline">Bait Guide</a>
            <a href="/enchantments" className="hover:underline">Enchants</a>
            <a href="/potions-totems" className="hover:underline">Totems & Potions</a>
            <a href="/boats-speed" className="hover:underline">Boats Guide</a>
            <a href="/crab-cages" className="hover:underline">Crab Cages</a>
            <a href="/locations-map" className="hover:underline">Locations</a>
            <a href="/quests-merchants" className="hover:underline">Quests & NPCs</a>
            <a href="/aquarium-guide" className="hover:underline">Aquarium</a>
            <a href="/secret-rods-crafting" className="hover:underline">Secret Crafting</a>
            <a href="/beginner-guide" className="hover:underline">Beginner Guide</a>
          </div>
          <p>© {new Date().getFullYear()} Fish It! Wiki — Fan site, not affiliated with Roblox or the game developer.</p>
        </footer>
      </body>
    </html>
  );
}
