"use client";
import { useState } from "react";

export default function HomePage() {
  const [copied, setCopied] = useState("");

  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-cyan-950 to-slate-950 border border-sky-800/30 rounded-3xl p-10 text-center space-y-5">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-48 bg-sky-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-64 h-40 bg-cyan-500/8 blur-[80px] rounded-full" />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-700/50 text-sky-300 text-xs font-semibold">
          🌊 Complete Roblox Fisch Database
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Fish It! <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Wiki (Fisch)</span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Active redeem codes, Rod Tier List, Catch & Profit Calculator, 100+ Fish Index, Bait multipliers, and Altar Enchants.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a href="/codes" className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold px-7 py-3 rounded-xl transition shadow-lg shadow-sky-500/25">
            🎁 Active Codes
          </a>
          <a href="/rod-tier-list" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-7 py-3 rounded-xl transition border border-slate-700">
            🎣 Rod Tier List
          </a>
          <a href="/catch-calculator" className="bg-sky-950/70 hover:bg-sky-900/70 text-sky-300 font-bold px-7 py-3 rounded-xl transition border border-sky-800/50">
            🧮 Profit Calculator
          </a>
        </div>
      </section>

      {/* Grid of Tool Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <a href="/codes" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-sky-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🎁</div>
          <h2 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">Redeem Codes</h2>
          <p className="text-xs text-slate-400 leading-relaxed">Working codes for free Mutation Potions, Cash, and Relics. Must be Level 10 to redeem.</p>
          <span className="text-xs text-sky-400 font-semibold">View codes →</span>
        </a>

        <a href="/rod-tier-list" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🎣</div>
          <h2 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Rod Tier List & Stats</h2>
          <p className="text-xs text-slate-400 leading-relaxed">Diamond Rod (1300% Luck), Element Rod, Carbon Rod — complete Luck, Lure Speed & Max Kg table.</p>
          <span className="text-xs text-cyan-400 font-semibold">View rod tiers →</span>
        </a>

        <a href="/catch-calculator" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🧮</div>
          <h2 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">Catch & Profit Calculator</h2>
          <p className="text-xs text-slate-400 leading-relaxed">Select your Rod + Bait + Enchant + Fishing Spot to calculate estimated C$/Hour and Mythic catch chance.</p>
          <span className="text-xs text-teal-400 font-semibold">Calculate now →</span>
        </a>

        <a href="/fish-database" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-blue-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🐟</div>
          <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">Fish Database & Bestiary</h2>
          <p className="text-xs text-slate-400 leading-relaxed">Search 100+ fish species — locations, bait preferences, weather/time requirements, and base prices.</p>
          <span className="text-xs text-blue-400 font-semibold">Search database →</span>
        </a>

        <a href="/enchantments" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-purple-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🔮</div>
          <h2 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">Enchantments & Altar</h2>
          <p className="text-xs text-slate-400 leading-relaxed">Keeper's Altar guide — Sovereign, Greed (+50% Weight), Santa (+30% Speed), and Relic drop locations.</p>
          <span className="text-xs text-purple-400 font-semibold">View enchants →</span>
        </a>

        <a href="/locations-map" className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-700/50 rounded-2xl p-6 space-y-3 transition-all duration-200 hover:-translate-y-1">
          <div className="text-3xl">🗺️</div>
          <h2 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Best Fishing Locations</h2>
          <p className="text-xs text-slate-400 leading-relaxed">Mineshaft, Forsaken Shores, Living Garden — top C$/Hour fishing spots and secret weather triggers.</p>
          <span className="text-xs text-emerald-400 font-semibold">View map guide →</span>
        </a>
      </section>

      {/* Codes Section */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">🔥 Active Codes (Requires Level 10)</h2>
          <a href="/codes" className="text-xs text-sky-400 hover:underline">See all codes →</a>
        </div>
        <div className="space-y-3">
          {[
            { code: "POTIONSSS", reward: "2x Mutation II Potions" },
            { code: "MUTATION2", reward: "2x Mutation II Potions" },
            { code: "MERDEKA", reward: "2x Mutation II Potions" },
            { code: "Fischfest2026", reward: "Exclusive Celebration Relic & Cash" },
          ].map(({ code, reward }) => (
            <div key={code} className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-5 py-3">
              <div>
                <span className="font-mono text-white font-bold">{code}</span>
                <span className="ml-3 text-xs text-sky-400 bg-sky-950/80 border border-sky-800 px-2 py-0.5 rounded">✓ Active</span>
                <span className="ml-2 text-xs text-slate-400">{reward}</span>
              </div>
              <button onClick={() => copy(code)} className="text-xs bg-sky-600 hover:bg-sky-500 text-white font-bold px-4 py-1.5 rounded-lg transition flex-shrink-0">
                {copied === code ? "✓ Copied!" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Top S+ Rod Preview */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-bold text-white">🌟 Meta Endgame Rods Preview</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Diamond Rod", luck: "1300%", speed: "167%", maxKg: "1,000,000 kg", tier: "S+ Meta" },
            { name: "Element Rod", luck: "1111%", speed: "130%", maxKg: "750,000 kg", tier: "S+ Meta" },
            { name: "Ghostfinn Rod", luck: "950%", speed: "120%", maxKg: "500,000 kg", tier: "S Tier" },
          ].map(r => (
            <div key={r.name} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white text-sm">{r.name}</span>
                <span className="text-xs bg-sky-950 border border-sky-800 text-sky-300 font-bold px-2 py-0.5 rounded">{r.tier}</span>
              </div>
              <div className="text-xs text-slate-400 space-y-1">
                <div>Luck: <strong className="text-emerald-400">{r.luck}</strong></div>
                <div>Lure Speed: <strong className="text-sky-300">{r.speed}</strong></div>
                <div>Max Kg: <strong className="text-slate-200">{r.maxKg}</strong></div>
              </div>
            </div>
          ))}
        </div>
        <a href="/rod-tier-list" className="text-xs text-sky-400 hover:underline block">View complete 20+ Rod Tier List →</a>
      </section>
    </div>
  );
}
