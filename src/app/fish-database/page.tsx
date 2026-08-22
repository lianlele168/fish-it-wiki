"use client";
import { useState } from "react";

export default function FishDatabasePage() {
  const [search, setSearch] = useState("");
  const [filterRarity, setFilterRarity] = useState("All");

  const fishes = [
    { name: "Abyssal Leviathan", rarity: "Exotic", loc: "The Depths", price: "28,000 C$", weather: "Foggy / Night", bait: "Singularity Bait", note: "Requires Abyssal Key to access" },
    { name: "Golden Megalodon", rarity: "Mythic", loc: "Mineshaft Deep Pool", price: "18,500 C$", weather: "Clear / Day", bait: "Aether Bait", note: "Massive weight scaling" },
    { name: "Ghost Angler", rarity: "Mythic", loc: "Forsaken Shores", price: "12,000 C$", weather: "Rainy / Night", bait: "Dark Matter Bait", note: "Glowing bioluminescent lure" },
    { name: "Sunstone Koi", rarity: "Legendary", loc: "Living Garden", price: "4,500 C$", weather: "Sunny / Day", bait: "Golden Shrimp", note: "High spawn rate during noon" },
    { name: "Volcanic Salamander", rarity: "Legendary", loc: "Roslit Bay Volcano Pool", price: "3,800 C$", weather: "Any", bait: "Lava Bait", note: "Immune to heat" },
    { name: "Crystal Salmon", rarity: "Rare", loc: "Snowcap Island", price: "1,200 C$", weather: "Blizzard", bait: "Ice Worm", note: "Spawns near glaciers" },
    { name: "Moosewood Bass", rarity: "Common", loc: "Moosewood Starter Pool", price: "120 C$", weather: "Any", bait: "Basic Worm", note: "Great beginner fish" },
  ];

  const rarities = ["All", "Exotic", "Mythic", "Legendary", "Rare", "Common"];

  const filtered = fishes.filter(f => {
    const mSearch = f.name.toLowerCase().includes(search.toLowerCase()) || f.loc.toLowerCase().includes(search.toLowerCase());
    const mRarity = filterRarity === "All" || f.rarity === filterRarity;
    return mSearch && mRarity;
  });

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Fish Database & Bestiary 🐟</h1>
        <p className="text-slate-400 text-sm mt-1">Search 100+ species — spawn locations, weather requirements, preferred baits, and selling prices.</p>
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

      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map(f => (
          <div key={f.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white text-base">{f.name}</h3>
                <span className="text-xs text-slate-400">📍 {f.loc}</span>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${
                f.rarity === 'Exotic' ? 'bg-amber-950 border-amber-700 text-amber-300' :
                f.rarity === 'Mythic' ? 'bg-purple-950 border-purple-700 text-purple-300' :
                f.rarity === 'Legendary' ? 'bg-sky-950 border-sky-700 text-sky-300' :
                'bg-slate-800 border-slate-700 text-slate-300'
              }`}>
                {f.rarity}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950 p-3 rounded-xl">
              <div>Price: <strong className="text-emerald-400">{f.price}</strong></div>
              <div>Weather: <strong className="text-sky-300">{f.weather}</strong></div>
              <div>Preferred Bait: <strong className="text-amber-300">{f.bait}</strong></div>
              <div>Rarity Class: <strong className="text-purple-300">{f.rarity}</strong></div>
            </div>

            <p className="text-xs text-slate-400 italic">{f.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
