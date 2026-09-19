export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/potions-totems" },
};

const codePotions = [
  { name: "Luck II Potion", via: "PIRATEMAJA, DIVING, 3BILLION, SHARKSSS (with Mutation I), CRYSTALS, EASTER2026" },
  { name: "Luck I Potion", via: "BLAMETALON (3x), TRAVEL (3x)" },
  { name: "Mutation II Potion", via: "POTIONSSS, MUTATION2, CONTRA (2x each)" },
  { name: "Mutation I Potion", via: "SHARKSSS (2x)" },
  { name: "Carrot I Potion", via: "EASTER2026 (with Luck II Potions)" },
  { name: "Luck Totem", via: "LUCKYTOTEM" },
  { name: "Cave Crystal", via: "FREECRYSTAL, CRYSTALS (2x)" },
];

export default function PotionsTotemsPage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Potions & Totems Guide</h1>
        <p className="text-slate-400 text-sm mt-1">
          Every potion and totem below is verified through Fish It! redeemable codes — the only
          fully checkable source right now.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Verified Potions & Totems (via Codes)</h2>
        <p className="text-xs text-slate-400 leading-relaxed">
          These items are confirmed to exist in Fish It! because official redeem codes grant them.
          Every entry links to a working code on our{" "}
          <a href="/codes" className="text-sky-400 underline">codes page</a> (all codes need an
          account at Level 10 or above).
        </p>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="divide-y divide-slate-800">
            {codePotions.map((p) => (
              <div key={p.name} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs">
                <div className="font-bold text-white text-sm md:w-48">{p.name}</div>
                <div className="text-slate-400 flex-1">
                  Granted by: <span className="font-mono text-sky-300">{p.via}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-amber-950/30 border border-amber-800/50 rounded-2xl p-5 space-y-2">
        <h2 className="text-sm font-bold text-amber-300">Data Verification Notice</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          The old version of this page listed Weather Totems at named islands (Tempest, Sundial,
          Wind) with exact costs — those locations and prices belong to a different fishing game and
          have been removed. Fish It! does have a Weather Machine area on its verified map, but a
          verified totem price table is not available yet.
        </p>
      </div>

      <p className="text-[11px] text-slate-500">
        Verified 2026-09-19 against the working Fish It! code list and the Fish It! Wiki locations
        index. Fish It! is a separate game from Fisch.
      </p>
    </div>
  );
}
