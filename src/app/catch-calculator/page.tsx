"use client";
import { useState } from "react";

export default function CatchCalculatorPage() {
  const rods = [
    { name: "Diamond Rod", luck: 1300, speed: 167 },
    { name: "Element Rod", luck: 1111, speed: 130 },
    { name: "Great Rod of Oscar", luck: 1050, speed: 140 },
    { name: "Ghostfinn Rod", luck: 950, speed: 120 },
    { name: "Scalding Hook (T7)", luck: 880, speed: 115 },
    { name: "Carbon Rod", luck: 450, speed: 80 },
    { name: "Plastic Rod", luck: 150, speed: 40 },
    { name: "Flimsy Rod", luck: 50, speed: 10 },
  ];

  const baits = [
    { name: "Singularity Bait", luckBonus: 300, speedBonus: 50, cost: 2500 },
    { name: "Aether Bait", luckBonus: 200, speedBonus: 35, cost: 1200 },
    { name: "Dark Matter Bait", luckBonus: 150, speedBonus: 25, cost: 800 },
    { name: "Golden Shrimp", luckBonus: 100, speedBonus: 20, cost: 400 },
    { name: "Basic Worm", luckBonus: 10, speedBonus: 5, cost: 10 },
  ];

  const enchants = [
    { name: "Sovereign / Divine", luckMult: 1.8, weightMult: 1.5 },
    { name: "Greed (+50% Weight)", luckMult: 1.2, weightMult: 1.5 },
    { name: "Santa (+30% Speed)", luckMult: 1.3, weightMult: 1.2 },
    { name: "Mystical", luckMult: 1.4, weightMult: 1.1 },
    { name: "None", luckMult: 1.0, weightMult: 1.0 },
  ];

  const spots = [
    { name: "Mineshaft (Endgame Profit)", avgBasePrice: 1800, catchesPerHrBase: 60 },
    { name: "Forsaken Shores Pond", avgBasePrice: 1400, catchesPerHrBase: 55 },
    { name: "Living Garden", avgBasePrice: 1100, catchesPerHrBase: 50 },
    { name: "Roslit Bay", avgBasePrice: 600, catchesPerHrBase: 45 },
    { name: "Moosewood Starter Spot", avgBasePrice: 150, catchesPerHrBase: 40 },
  ];

  const [selectedRod, setSelectedRod] = useState(0);
  const [selectedBait, setSelectedBait] = useState(0);
  const [selectedEnchant, setSelectedEnchant] = useState(0);
  const [selectedSpot, setSelectedSpot] = useState(0);

  const r = rods[selectedRod];
  const b = baits[selectedBait];
  const e = enchants[selectedEnchant];
  const s = spots[selectedSpot];

  const totalLuck = (r.luck + b.luckBonus) * e.luckMult;
  const catchesPerHour = Math.round(s.catchesPerHrBase * (1 + (r.speed + b.speedBonus) / 100));
  const avgFishPrice = Math.round(s.avgBasePrice * (1 + totalLuck / 400) * e.weightMult);
  const estimatedPerHour = (catchesPerHour * avgFishPrice).toLocaleString();
  const mythicChance = Math.min(85, Math.round((totalLuck / 2500) * 100));

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Catch & Profit Calculator 🧮</h1>
        <p className="text-slate-400 text-sm mt-1">Simulate your setup — Rod + Bait + Enchant + Location to calculate estimated C$/Hour earnings and Mythic catch probability.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
          <h2 className="text-lg font-bold text-white">⚙️ Your Fishing Setup</h2>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Select Fishing Rod</label>
            <select value={selectedRod} onChange={(e) => setSelectedRod(Number(e.target.value))} className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs">
              {rods.map((rod, idx) => (
                <option key={rod.name} value={idx}>{rod.name} (+{rod.luck}% Luck, {rod.speed}% Speed)</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Select Bait</label>
            <select value={selectedBait} onChange={(e) => setSelectedBait(Number(e.target.value))} className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs">
              {baits.map((bait, idx) => (
                <option key={bait.name} value={idx}>{bait.name} (+{bait.luckBonus}% Luck, +{bait.speedBonus}% Speed)</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Select Altar Enchantment</label>
            <select value={selectedEnchant} onChange={(e) => setSelectedEnchant(Number(e.target.value))} className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs">
              {enchants.map((enc, idx) => (
                <option key={enc.name} value={idx}>{enc.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Select Fishing Spot</label>
            <select value={selectedSpot} onChange={(e) => setSelectedSpot(Number(e.target.value))} className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs">
              {spots.map((spot, idx) => (
                <option key={spot.name} value={idx}>{spot.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-sky-950 to-slate-900 border border-sky-800/50 rounded-2xl p-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-sky-300">📊 Simulation Results</h2>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-5 space-y-1 text-center">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Estimated Profit per Hour</span>
              <div className="text-3xl md:text-4xl font-black text-emerald-400">{estimatedPerHour} C$</div>
              <p className="text-[11px] text-slate-500">Based on current lure speed & fish weight multipliers</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-slate-400">Total Luck Stat</span>
                <div className="text-lg font-bold text-sky-300">{Math.round(totalLuck)}%</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-slate-400">Catches / Hour</span>
                <div className="text-lg font-bold text-teal-300">{catchesPerHour} fish</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-slate-400">Avg Price / Catch</span>
                <div className="text-lg font-bold text-amber-300">{avgFishPrice.toLocaleString()} C$</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-slate-400">Mythic / Exotic Rate</span>
                <div className="text-lg font-bold text-purple-300">~{mythicChance}%</div>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 bg-sky-950/50 border border-sky-900/30 p-3 rounded-lg">
            ⚡ <strong>Pro Tip:</strong> Reaching 99%+ total lure speed removes the manual shake requirement, enabling semi-AFK fishing!
          </p>
        </div>
      </div>
    </div>
  );
}
