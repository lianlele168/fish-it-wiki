export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/rod-tier-list" },
};

export default function RodTierListPage() {
  const tiers = [
    {
      tier: "S+ Meta Tier",
      color: "border-purple-800/60 bg-purple-950/20 text-purple-300",
      rods: [
        { name: "Diamond Rod", luck: "1300%", speed: "167%", maxKg: "1,000,000 kg", control: "0.20", resilience: "0.15", ob: "Level 250 / Special Crafting", note: "Endgame absolute meta rod" },
        { name: "Element Rod", luck: "1111%", speed: "130%", maxKg: "750,000 kg", control: "0.18", resilience: "0.12", ob: "Ancient Archives Craft", note: "High elemental mutation luck" },
        { name: "Great Rod of Oscar", luck: "1050%", speed: "140%", maxKg: "850,000 kg", control: "0.19", resilience: "0.14", ob: "Crafting Altar (Level 250)", note: "Requires 2,500,000 C$ + Materials" },
      ]
    },
    {
      tier: "S Tier",
      color: "border-sky-800/60 bg-sky-950/20 text-sky-300",
      rods: [
        { name: "Ghostfinn Rod", luck: "950%", speed: "120%", maxKg: "500,000 kg", control: "0.15", resilience: "0.10", ob: "Roslit Bay Merchant", note: "Top for ghost/deep sea species" },
        { name: "Angler Rod", luck: "850%", speed: "110%", maxKg: "350,000 kg", control: "0.14", resilience: "0.10", ob: "Deep Sea Trench Quest", note: "Excellent lure speed" },
        { name: "Scalding Hook (T7)", luck: "880%", speed: "115%", maxKg: "450,000 kg", control: "0.15", resilience: "0.08", ob: "The Deep Update Craft", note: "Resistant to lava/scald" },
      ]
    },
    {
      tier: "A Tier (Mid-Late Game)",
      color: "border-emerald-800/60 bg-emerald-950/20 text-emerald-300",
      rods: [
        { name: "Carbon Rod", luck: "450%", speed: "80%", maxKg: "150,000 kg", control: "0.10", resilience: "0.05", ob: "Moosewood Merchant", note: "Best value mid-game transition" },
        { name: "Nocturnal Rod", luck: "500%", speed: "85%", maxKg: "120,000 kg", control: "0.10", resilience: "0.06", ob: "Night Merchant (Sunstone)", note: "+50% Luck during Night time" },
        { name: "Magma Rod", luck: "400%", speed: "75%", maxKg: "200,000 kg", control: "0.08", resilience: "0.05", ob: "Volcano Island Shop", note: "Required for lava fish" },
      ]
    },
    {
      tier: "B & Starter Tier",
      color: "border-slate-800 bg-slate-900/40 text-slate-300",
      rods: [
        { name: "Plastic Rod", luck: "150%", speed: "40%", maxKg: "25,000 kg", control: "0.05", resilience: "0.02", ob: "Moosewood Shop (900 C$)", note: "Starter upgrade" },
        { name: "Flimsy Rod", luck: "50%", speed: "10%", maxKg: "5,000 kg", control: "0.01", resilience: "0.00", ob: "Default Starter Rod", note: "Free starter" },
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Rod Tier List & Stats (August 2026)</h1>
        <p className="text-slate-400 text-sm mt-1">Complete ranking of fishing rods in Roblox Fisch, comparing Luck %, Lure Speed, Max Weight, and Control.</p>
      </div>

      <div className="space-y-8">
        {tiers.map((t) => (
          <section key={t.tier} className="space-y-4">
            <div className={`px-4 py-2 border rounded-xl font-bold text-sm inline-block ${t.color}`}>
              {t.tier}
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="divide-y divide-slate-800">
                {t.rods.map((r) => (
                  <div key={r.name} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
                    <div className="space-y-1 w-52">
                      <div className="font-bold text-white text-base">{r.name}</div>
                      <div className="text-slate-400">{r.ob}</div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1 text-slate-300">
                      <div>Luck: <strong className="text-emerald-400 text-sm">{r.luck}</strong></div>
                      <div>Lure Speed: <strong className="text-sky-300 text-sm">{r.speed}</strong></div>
                      <div>Max Kg: <strong className="text-slate-200">{r.maxKg}</strong></div>
                      <div>Control/Resil: <strong className="text-purple-300">{r.control} / {r.resilience}</strong></div>
                    </div>
                    <div className="text-slate-400 text-xs italic md:text-right max-w-xs">{r.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
