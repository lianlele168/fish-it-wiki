export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/aquarium-guide" },
};

export default function AquariumGuidePage() {
  const perks = [
    { tier: "25% Bestiary Completion", perk: "+5% Passive C$ Bonus from all fish sales", req: "25 Species Discovered" },
    { tier: "50% Bestiary Completion", perk: "+10% Permanent Luck Boost across all plots", req: "50 Species Discovered" },
    { tier: "75% Bestiary Completion", perk: "Unlocks Aquarium Display Hall expansion", req: "75 Species Discovered" },
    { tier: "100% Bestiary Completion", perk: "Golden Fisher Trophy + 25% Lure Speed Perk", req: "All Species Discovered" },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Aquarium & Bestiary Collection Guide 🏛️</h1>
        <p className="text-slate-400 text-sm mt-1">Unlock passive C$ bonuses and permanent luck boosts by completing your fish bestiary index.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="divide-y divide-slate-800">
          {perks.map((p) => (
            <div key={p.tier} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
              <div className="font-bold text-white text-base w-52">{p.tier}</div>
              <div className="text-emerald-400 font-bold text-sm flex-1">{p.perk}</div>
              <div className="text-slate-400 bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg">{p.req}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
