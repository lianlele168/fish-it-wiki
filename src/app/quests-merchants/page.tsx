export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/quests-merchants" },
};

const verifiedNpcs = [
  {
    name: "Fisherman Island Rod Shop",
    loc: "Fisherman Island",
    role: "Rod Merchant",
    detail: "The verified hub for all 14 purchasable rods — from the Bottle Rod (300 C$) all the way to the Steampunk Rod (215,000 C$). If a rod exists in Fish It, this is where you buy it.",
    req: "Level 1+",
  },
  {
    name: "Enchant NPC",
    loc: "Esoteric Depths",
    role: "Enchanting",
    detail: "Pocket Tactics' Fish It enchant guide confirms Esoteric Depths as the location of the game's enchant NPC and its fishing spot. Bring your rod here to enchant it.",
    req: "Travel to Esoteric Depths",
  },
];

export default function QuestsMerchantsPage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! NPCs & Merchant Locations</h1>
        <p className="text-slate-400 text-sm mt-1">
          Only verified Fish It! NPCs and vendors are listed here. Named questlines from other
          fishing games have been removed.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {verifiedNpcs.map((n) => (
          <div key={n.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-white text-base">{n.name}</span>
              <span className="text-xs bg-purple-950 border border-purple-800 text-purple-300 font-bold px-2 py-0.5 rounded">{n.req}</span>
            </div>
            <div className="text-xs text-sky-300">📍 {n.loc} · {n.role}</div>
            <p className="text-xs text-slate-300 leading-relaxed">{n.detail}</p>
          </div>
        ))}
      </div>

      <div className="bg-amber-950/30 border border-amber-800/50 rounded-2xl p-5 space-y-2">
        <h2 className="text-sm font-bold text-amber-300">Data Verification Notice</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Fish It! also features daily quests, potions and totems, but a verified NPC-by-NPC quest
          table is not available yet — the previous version of this page listed characters and
          questlines that belong to a different game and have been removed. Redeemable code rewards
          (Luck Potions, Mutation Potions, totems) are verified on our codes page instead.
        </p>
      </div>

      <p className="text-[11px] text-slate-500">
        Sources: Fish It! Wiki, Pocket Tactics (verified 2026-09-19). Fish It! is a separate game
        from Fisch.
      </p>
    </div>
  );
}
