"use client";
import { useState } from "react";
import { FISH_SPECIES_DATA, LOCATIONS_DATA } from "@/data/wikiData";

const RARITY_STYLES: Record<string, string> = {
  Common: "bg-slate-800 border-slate-600 text-slate-200",
  Uncommon: "bg-emerald-950 border-emerald-700 text-emerald-300",
  Rare: "bg-sky-950 border-sky-700 text-sky-300",
  Epic: "bg-purple-950 border-purple-700 text-purple-300",
  Legendary: "bg-amber-950 border-amber-700 text-amber-300",
};

export default function FishDatabasePage() {
  const [search, setSearch] = useState("");
  const [filterRarity, setFilterRarity] = useState("All");

  const rarities = ["All", "Common", "Uncommon", "Rare", "Epic", "Legendary"];

  const filtered = FISH_SPECIES_DATA.filter(f => {
    const q = search.toLowerCase();
    const mSearch =
      f.name.toLowerCase().includes(q) ||
      f.spawnZone.toLowerCase().includes(q);
    const mRarity = filterRarity === "All" || f.rarity === filterRarity;
    return mSearch && mRarity;
  });

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Fish Database & Bestiary</h1>
        <p className="text-slate-400 text-sm mt-1">
          {FISH_SPECIES_DATA.length} verified species with spawn locations, rarity odds (1 in X),
          and sell prices. Sourced from the Fish It! Wiki Fish Index and cross-checked with
          TheGamer&apos;s price list (2026-09-19). Sell prices float with fish weight.
        </p>
      </div>

      {/* Verified rarity ladder */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed">
        <strong className="text-sky-300">Rarity ladder (7 tiers):</strong> Common → Uncommon →
        Rare → Epic → Legendary → Mythical → Secret. Every fish entry below lists its verified
        encounter odds, e.g. the Legendary Colossal Squid at Kohana is 1 in 20,000.
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search fish name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
        />
        <div className="flex gap-2 overflow-x-auto pb-1">
          {rarities.map(r => (
            <button
              key={r}
              onClick={() => setFilterRarity(r)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${filterRarity === r ? "bg-sky-600 text-white" : "bg-slate-900 border border-slate-800 text-slate-400 hover:bg-slate-800"}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filtered.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center space-y-2">
          <p className="text-slate-300 font-bold text-sm">No fish match your search</p>
          <p className="text-xs text-slate-500">
            Try a verified location like Fisherman Island, Ocean, Kohana or Coral Reef — or reset
            the rarity filter to All.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map(f => (
            <div key={f.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white text-base">{f.name}</h3>
                  <span className="text-xs text-slate-400">📍 {f.spawnZone}</span>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${RARITY_STYLES[f.rarity]}`}>
                  {f.rarity}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950 p-3 rounded-xl">
                <div>Encounter Odds: <strong className="text-purple-300">{f.rarityOdds}</strong></div>
                <div>Sell Price: <strong className="text-emerald-400">{f.sellPrice}</strong></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Verified location index */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">Verified Fish It! Locations</h2>
        <div className="flex flex-wrap gap-2">
          {LOCATIONS_DATA.map(loc => (
            <span key={loc} className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg">
              {loc}
            </span>
          ))}
        </div>
        <p className="text-[11px] text-slate-500">
          Fish It! is a separate game from Fisch — location names like Moosewood or Roslit Bay do
          not exist in this game and are intentionally excluded everywhere on this site.
        </p>
      </section>
    </div>
  );
}
