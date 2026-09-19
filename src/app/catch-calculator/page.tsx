"use client";
import { useState } from "react";
import { RODS_DATA, FISH_SPECIES_DATA } from "@/data/wikiData";

function oddsNumber(odds: string): number {
  const m = odds.match(/in\s*([\d,]+)/);
  return m ? Number(m[1].replace(/,/g, "")) : 1;
}

function priceNumber(price: string): number | null {
  const m = price.match(/([\d,]+)\s*[–-]\s*([\d,]+)\s*C\$/);
  if (m) return (Number(m[1].replace(/,/g, "")) + Number(m[2].replace(/,/g, ""))) / 2;
  const s = price.match(/^([\d,]+)\s*C\$/);
  return s ? Number(s[1].replace(/,/g, "")) : null;
}

export default function CatchCalculatorPage() {
  const [selectedRod, setSelectedRod] = useState(2);
  const [selectedFish, setSelectedFish] = useState(0);

  const rod = RODS_DATA[selectedRod] ?? RODS_DATA[0];
  const fish = FISH_SPECIES_DATA[selectedFish] ?? FISH_SPECIES_DATA[0];

  const luckMult = 1 + rod.luck / 100;
  const adjustedOdds = Math.max(1, Math.round(oddsNumber(fish.rarityOdds) / luckMult));
  const price = priceNumber(fish.sellPrice);
  const castsPerHour = Math.round(60 * (1 + rod.speed / 100));
  const perHour = price !== null ? Math.round((castsPerHour * price) / adjustedOdds) : null;

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Catch & Rarity Calculator</h1>
        <p className="text-slate-400 text-sm mt-1">
          Simulate your setup — verified rod stats (luck %, lure speed %) against verified fish
          odds (1 in X) to estimate hook chances and C$/hour. Official luck formula is not
          published, so the conversion below is an approximate community model.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
          <h2 className="text-lg font-bold text-white">Your Fishing Setup</h2>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Select Fishing Rod</label>
            <select
              value={selectedRod}
              onChange={(e) => setSelectedRod(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs"
            >
              {RODS_DATA.map((r, idx) => (
                <option key={r.id} value={idx}>
                  {r.name} — {r.price}, +{r.luck}% luck, +{r.speed}% speed
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-500">📍 {rod.location}</p>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Select Target Fish</label>
            <select
              value={selectedFish}
              onChange={(e) => setSelectedFish(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs"
            >
              {FISH_SPECIES_DATA.map((f, idx) => (
                <option key={f.id} value={idx}>
                  {f.name} ({f.rarity}, {f.rarityOdds})
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-500">📍 {fish.spawnZone}</p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-sky-950 to-slate-900 border border-sky-800/50 rounded-2xl p-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-sky-300">Simulation Results</h2>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-1 text-center">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {fish.name} Hook Odds
              </span>
              <div className="text-3xl md:text-4xl font-black text-emerald-400">
                1 in {adjustedOdds.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-500">Base odds {fish.rarityOdds} · luck model ×{luckMult.toFixed(2)}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-slate-400">Rod Luck</span>
                <div className="text-lg font-bold text-sky-300">+{rod.luck}%</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-slate-400">Rod Lure Speed</span>
                <div className="text-lg font-bold text-teal-300">+{rod.speed}%</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-slate-400">Casts / Hour (model)</span>
                <div className="text-lg font-bold text-amber-300">~{castsPerHour}</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-slate-400">Sell Price</span>
                <div className="text-lg font-bold text-emerald-400">{fish.sellPrice}</div>
              </div>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-center">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Estimated Profit per Hour
              </span>
              <div className="text-2xl font-black text-emerald-400">
                {perHour !== null ? `~${perHour.toLocaleString()} C$` : "— not documented"}
              </div>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 bg-sky-950/50 border border-sky-900/30 p-3 rounded-lg">
            Model note: base odds ({fish.rarityOdds}), rod stats and prices are verified values from
            the Fish It! Wiki (2026-09-19). Catches-per-hour and the luck conversion are
            approximations — do not treat them as official in-game numbers.
          </p>
        </div>
      </div>
    </div>
  );
}
