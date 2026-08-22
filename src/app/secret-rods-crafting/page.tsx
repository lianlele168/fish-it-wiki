export default function SecretRodsCraftingPage() {
  const craftables = [
    { name: "Great Rod of Oscar", levelReq: "Level 250", cost: "2,500,000 C$", mats: "1x Oscar Crystal + 5x Deep Sea Relics", stats: "1050% Luck, 140% Speed", location: "Ancient Archives Altar" },
    { name: "Scalding Hook (Tier 7)", levelReq: "Level 180", cost: "1,200,000 C$", mats: "3x Magma Cores + 1x Obsidian Rod", stats: "880% Luck, 115% Speed", location: "The Deep Crafting Station" },
    { name: "Element Rod", levelReq: "Level 300", cost: "5,000,000 C$", mats: "4x Elemental Shards (Fire, Ice, Lightning, Dark)", stats: "1111% Luck, 130% Speed", location: "Ancient Archives Altar" },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Secret Rods & Crafting Recipes ⚒️</h1>
        <p className="text-slate-400 text-sm mt-1">Material requirements, level limits, and altar locations for crafting endgame rods in Roblox Fisch.</p>
      </div>

      <div className="space-y-4">
        {craftables.map((c) => (
          <div key={c.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-white">{c.name}</h2>
              <span className="text-xs bg-purple-950 border border-purple-800 text-purple-300 font-bold px-3 py-1 rounded-full">{c.levelReq}</span>
            </div>
            <div className="grid md:grid-cols-3 gap-3 text-xs bg-slate-950 p-4 rounded-xl">
              <div>Cost: <strong className="text-emerald-400">{c.cost}</strong></div>
              <div>Stats: <strong className="text-sky-300">{c.stats}</strong></div>
              <div>Location: <strong className="text-amber-300">{c.location}</strong></div>
            </div>
            <div className="text-xs text-slate-300">
              <strong>Required Materials:</strong> <span className="text-slate-400">{c.mats}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
