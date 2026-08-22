export default function BaitGuidePage() {
  const baits = [
    { name: "Singularity Bait", luck: "+300%", speed: "+50%", cost: "2,500 C$ / crate", target: "Mythic & Exotic Abyssal species", tier: "S+ Meta" },
    { name: "Aether Bait", luck: "+200%", speed: "+35%", cost: "1,200 C$ / crate", target: "Mineshaft & Deep Trench fish", tier: "S Tier" },
    { name: "Dark Matter Bait", luck: "+150%", speed: "+25%", cost: "800 C$ / crate", target: "Night & Moonlit species", tier: "A Tier" },
    { name: "Golden Shrimp", luck: "+100%", speed: "+20%", cost: "400 C$ / crate", target: "Living Garden Golden Koi", tier: "A Tier" },
    { name: "Lava Worm", luck: "+80%", speed: "+15%", cost: "250 C$ / crate", target: "Volcano Pool & Magma fish", tier: "B Tier" },
    { name: "Basic Worm", luck: "+10%", speed: "+5%", cost: "10 C$ / crate", target: "Starter Moosewood fish", tier: "Starter" },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Bait Tier List & Multipliers 🪱</h1>
        <p className="text-slate-400 text-sm mt-1">Compare luck boosts, lure speed bonuses, prices, and target fish species for every bait in Roblox Fisch.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="divide-y divide-slate-800">
          {baits.map((b) => (
            <div key={b.name} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
              <div className="space-y-1 w-48">
                <div className="font-bold text-white text-base">{b.name}</div>
                <div className="text-sky-400 font-semibold">{b.cost}</div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
                <div>Luck Boost: <strong className="text-emerald-400 text-sm">{b.luck}</strong></div>
                <div>Lure Speed: <strong className="text-sky-300 text-sm">{b.speed}</strong></div>
                <div>Target Fish: <strong className="text-slate-200">{b.target}</strong></div>
              </div>
              <div className="text-right">
                <span className="bg-sky-950 border border-sky-800 text-sky-300 font-bold px-3 py-1 rounded-full">{b.tier}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
