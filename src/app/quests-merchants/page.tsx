export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/quests-merchants" },
};

export default function QuestsMerchantsPage() {
  const npcs = [
    { name: "Dr. Monty", loc: "Outer Deep Lab (The Deep - Beacon 1P-2)", quest: "Halibut Harpoon Questline", reward: "Halibut Harpoon (Hybrid Rod + Harpoon)", req: "Level 150+" },
    { name: "Cole", loc: "Statue of Sovereignty", quest: "Keeper's Altar Enchantment", reward: "Rod Enchants (Sovereign, Greed, Santa)", req: "Night Time + Enchant Relic" },
    { name: "Angler NPC", loc: "Moosewood Main Plaza", quest: "Daily Fishing Quests", reward: "XP Boosts & C$ Rewards", req: "Level 1+" },
    { name: "Mella", loc: "Sunken Reliquary", quest: "Relic Cage Exchange", reward: "Relic Crab Cage", req: "Sunken Key" },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Quests & NPC Merchant Locations 📜</h1>
        <p className="text-slate-400 text-sm mt-1">Complete Dr. Monty's lab questline for the Halibut Harpoon, Angler daily quests, and Cole's Altar location.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {npcs.map((n) => (
          <div key={n.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-white text-base">{n.name}</span>
              <span className="text-xs bg-purple-950 border border-purple-800 text-purple-300 font-bold px-2 py-0.5 rounded">{n.req}</span>
            </div>
            <div className="text-xs text-sky-300">📍 {n.loc}</div>
            <div className="text-xs text-slate-300"><strong>Quest:</strong> {n.quest}</div>
            <div className="text-xs text-emerald-400 font-semibold">🎁 Reward: {n.reward}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
