export default function CrabCagesPage() {
  const cages = [
    { name: "Golden Crab Cage", luck: "50%", speed: "70%", doubleCatch: "40%", location: "Crowned Ruins / Tidefall Castle", note: "Top passive income cage" },
    { name: "Relic Crab Cage", luck: "40%", speed: "50%", doubleCatch: "25%", location: "Sunken Reliquary (Mella)", note: "Can be placed in any liquid" },
    { name: "Heavy Iron Cage", luck: "25%", speed: "30%", doubleCatch: "10%", location: "Roslit Bay Merchant", note: "Mid-game passive farming" },
    { name: "Wooden Crab Cage", luck: "10%", speed: "15%", doubleCatch: "0%", location: "Moosewood Shop", note: "Starter cage" },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Crab Cages Passive Farm Guide 🦀</h1>
        <p className="text-slate-400 text-sm mt-1">Set up Golden and Relic Crab Cages across islands for 24/7 passive C$ income and rare crab catches.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="divide-y divide-slate-800">
          {cages.map((c) => (
            <div key={c.name} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
              <div className="space-y-1 w-48">
                <div className="font-bold text-white text-base">{c.name}</div>
                <div className="text-slate-400">📍 {c.location}</div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
                <div>Luck Boost: <strong className="text-emerald-400 text-sm">{c.luck}</strong></div>
                <div>Lure Speed: <strong className="text-sky-300 text-sm">{c.speed}</strong></div>
                <div>Double Catch: <strong className="text-purple-300">{c.doubleCatch}</strong></div>
              </div>
              <div className="text-slate-400 italic text-xs max-w-xs">{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
