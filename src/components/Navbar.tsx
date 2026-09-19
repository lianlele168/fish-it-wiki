"use client";

import { useState } from "react";
import Link from "next/link";
import { Anchor, Gift, Sparkles, Calculator, Database, ShieldAlert, Compass, BookOpen, Menu, X, Waves, CompassIcon } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const mainLinks = [
    { name: "Codes", href: "/codes", icon: Gift },
    { name: "Rod Tiers", href: "/rod-tier-list", icon: Anchor },
    { name: "Profit Calc", href: "/catch-calculator", icon: Calculator },
    { name: "Fish Index", href: "/fish-database", icon: Database },
    { name: "Enchants", href: "/enchantments", icon: Sparkles },
    { name: "Totems & Potions", href: "/potions-totems", icon: ShieldAlert },
    { name: "Boats", href: "/boats-speed", icon: Waves },
    { name: "Locations", href: "/locations-map", icon: Compass },
    { name: "Guide", href: "/beginner-guide", icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#06121e]/90 backdrop-blur-md border-b border-sky-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-sky-950/80 group-hover:scale-105 transition-transform border border-sky-300/30">
              <span className="text-xl">🎣</span>
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white group-hover:text-sky-300 transition-colors">
                FISH IT! <span className="text-sky-400">WIKI</span>
              </span>
              <span className="block text-[10px] text-sky-400/80 font-mono -mt-1 uppercase tracking-widest">
                Roblox Fish It Database
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-sky-950/60 border border-transparent hover:border-sky-800/50 transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-400" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-sky-950/60"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-[#06121e]/95 border-b border-sky-900/40 px-4 pt-2 pb-4 space-y-1">
          <div className="grid grid-cols-2 gap-2">
            {mainLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-200 hover:bg-sky-950/80 hover:text-white border border-slate-800"
                >
                  <Icon className="w-4 h-4 text-sky-400" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
