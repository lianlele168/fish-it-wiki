"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthorCard from "@/components/AuthorCard";
import { Gift, Anchor, Calculator, Database, Sparkles, ShieldAlert, Waves, Compass, BookOpen, ChevronRight, Check, Copy } from "lucide-react";

export default function HomePage() {
  const [copied, setCopied] = useState("");

  const copyCode = (c: string) => {
    navigator.clipboard.writeText(c);
    setCopied(c);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-slate-900 to-[#06121e] border border-sky-800/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-700/50 text-sky-300 text-xs font-semibold">
          🌊 Complete Roblox Fisch Community Database & Toolset
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          Fish It! <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Wiki (Fisch)</span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Active redeem codes, Rod Tier Lists, Catch & Profit Calculator, 100+ Fish Index, Weather Totems, and Keeper's Altar Enchants.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link href="/codes" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-sky-500/20 text-sm">
            <Gift className="w-4 h-4" /> Active Codes
          </Link>
          <Link href="/rod-tier-list" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl transition border border-slate-700 text-sm">
            <Anchor className="w-4 h-4 text-sky-400" /> Rod Tier List
          </Link>
          <Link href="/catch-calculator" className="inline-flex items-center gap-2 bg-sky-950/80 hover:bg-sky-900/80 text-sky-300 font-bold px-6 py-3 rounded-xl transition border border-sky-800/60 text-sm">
            <Calculator className="w-4 h-4" /> Profit Calculator
          </Link>
        </div>
      </section>

      {/* E-E-A-T AUTHOR VERIFICATION */}
      <AuthorCard />

      {/* VISUAL GAMEPLAY SHOWCASE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="rounded-2xl overflow-hidden border border-cyan-900/60 bg-cyan-950/40 p-4">
          <Image
            src="/images/fishit-header.webp"
            alt="Fish It Official Game Icon"
            width={512}
            height={512}
            className="rounded-xl object-cover w-full h-56 border border-cyan-800/40"
            priority
          />
          <p className="text-xs text-cyan-300 mt-2.5 text-center font-medium">
            Figure 1: Official Fish It! Icon by Fish Atelier.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-cyan-900/60 bg-cyan-950/40 p-4">
          <Image
            src="/images/fishit-gameplay.webp"
            alt="Fish It Deep Sea Fishing Arena"
            width={768}
            height={432}
            className="rounded-xl object-cover w-full h-56 border border-cyan-800/40"
          />
          <p className="text-xs text-cyan-300 mt-2.5 text-center font-medium">
            Figure 2: Active Ocean Waters with High-Tier Rod Casting and Reel Mechanics.
          </p>
        </div>
      </div>

      {/* Grid of Main Features */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>⚡</span> Community Databases & Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Active Codes", href: "/codes", icon: Gift, color: "text-amber-400", desc: "Working promo codes for free Mutation Potions, Cash, and Relics." },
            { title: "Rod Tier List", href: "/rod-tier-list", icon: Anchor, color: "text-sky-400", desc: "Diamond Rod (1300% Luck), Element Rod, Carbon Rod — full stat table." },
            { title: "Profit Calculator", href: "/catch-calculator", icon: Calculator, color: "text-emerald-400", desc: "Select your Rod + Bait + Enchant to estimate C$/Hour and Mythic rate." },
            { title: "100+ Fish Index", href: "/fish-database", icon: Database, color: "text-cyan-400", desc: "Search species, weather conditions, bait preferences, and sell prices." },
            { title: "Altar Enchants", href: "/enchantments", icon: Sparkles, color: "text-purple-400", desc: "Sovereign, Greed (+50% Weight), and Santa enchantments guide." },
            { title: "Weather Totems", href: "/potions-totems", icon: ShieldAlert, color: "text-red-400", desc: "Tempest & Sundial Totem cave locations and potion recipes." },
            { title: "Boats Speed", href: "/boats-speed", icon: Waves, color: "text-blue-400", desc: "Kayak (100 S/ps), Speedboat, and Hovercraft speed comparison." },
            { title: "Fishing Spots", href: "/locations-map", icon: Compass, color: "text-emerald-400", desc: "Mineshaft, Forsaken Shores, and Living Garden C$/Hour locations." },
            { title: "Beginner Guide", href: "/beginner-guide", icon: BookOpen, color: "text-amber-300", desc: "Step-by-step rod progression and anti-shake minigame guide." },
          ].map(item => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="group glass-panel glass-panel-hover rounded-2xl p-6 space-y-3 block">
                <div className="flex justify-between items-center">
                  <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Active Codes Card */}
      <section className="glass-panel rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Gift className="w-5 h-5 text-amber-400" /> Active Redeem Codes (Level 10 Required)
          </h2>
          <Link href="/codes" className="text-xs text-sky-400 hover:underline flex items-center gap-1">
            View All Codes <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { code: "POTIONSSS", reward: "2x Mutation II Potion" },
            { code: "MUTATION2", reward: "2x Mutation II Potion" },
            { code: "CONTRA", reward: "2x Mutation II Potion" },
            { code: "MERDEKA", reward: "Special lantern" },
          ].map(({ code, reward }) => (
            <div key={code} className="flex items-center justify-between bg-slate-950/80 border border-slate-800 rounded-xl p-3.5">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-white font-bold text-sm">{code}</span>
                  <span className="text-[10px] bg-emerald-950 border border-emerald-800 text-emerald-300 px-1.5 py-0.2 rounded font-semibold">Active</span>
                </div>
                <div className="text-xs text-slate-400">{reward}</div>
              </div>
              <button
                onClick={() => copyCode(code)}
                className="inline-flex items-center gap-1 text-xs bg-sky-600 hover:bg-sky-500 text-white font-bold px-3 py-1.5 rounded-lg transition"
              >
                {copied === code ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
