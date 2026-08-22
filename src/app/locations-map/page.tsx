export default function LocationsMapPage() {
  const spots = [
    { name: "The Mineshaft", tier: "S+ Meta", avgProfit: "150,000+ C$ / Hr", req: "Level 150+", topFish: "Golden Megalodon, Diamond Sturgeon", desc: "Best endgame money spot. Deep pool requires high weight rods." },
    { name: "Forsaken Shores (Upper Pond)", tier: "S Tier", avgProfit: "110,000+ C$ / Hr", req: "Level 80+", topFish: "Ghost Angler, Phantom Ray", desc: "Consistent high-value catches. Excellent for night fishing." },
    { name: "Living Garden", tier: "A Tier", avgProfit: "80,000+ C$ / Hr", req: "Level 50+", topFish: "Sunstone Koi, Golden Shrimp", desc: "Pair with Golden Shrimp bait for high Koi spawn rates." },
    { name: "Roslit Bay", tier: "B Tier", avgProfit: "35,000+ C$ / Hr", req: "Level 20+", topFish: "Volcanic Salamander, Red Snapper", desc: "Great mid-game progression spot with volcano pool." },
    { name: "Moosewood Island", tier: "Starter", avgProfit: "8,000+ C$ / Hr", req: "Level 1+", topFish: "Moosewood Bass, Salmon", desc: "Starter island with main shops, basic rod vendors, and boat rental." },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Best Fishing Spots & Locations Map 🗺️</h1>
        <p className="text-slate-400 text-sm mt-1">Top C$/Hour fishing spots, island requirements, and exclusive fish species locations.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {spots.map((s) => (
          <div key={s.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-white text-base">{s.name}</span>
              <span className="text-xs bg-emerald-950 border border-emerald-800 text-emerald-300 font-bold px-2 py-0.5 rounded">{s.tier}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950 p-3 rounded-xl">
              <div>Avg Profit: <strong className="text-emerald-400">{s.avgProfit}</strong></div>
              <div>Req Level: <strong className="text-amber-400">{s.req}</strong></div>
            </div>
            <p className="text-xs text-sky-300 font-semibold">Key Fish: {s.topFish}</p>
            <p className="text-xs text-slate-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
