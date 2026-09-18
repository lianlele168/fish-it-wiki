export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/beginner-guide" },
};

export default function BeginnerGuidePage() {
  const steps = [
    { title: "1. Start at Moosewood", desc: "Use your free Flimsy Rod to catch basic Moosewood Bass until you reach 900 C$." },
    { title: "2. Upgrade to Plastic & Carbon Rod", desc: "Buy the Plastic Rod (150% Luck) first, then save 15,000 C$ for the Carbon Rod at Moosewood." },
    { title: "3. Level 10 Code Redemption", desc: "Redeem working codes like POTIONSSS to receive Mutation II Potions and free Cash boosts." },
    { title: "4. Travel to Roslit Bay & Living Garden", desc: "Rent a boat to unlock higher-tier spots. Use Golden Shrimp bait for high-value Koi." },
    { title: "5. Set Up Crab Cages", desc: "Place Wooden and Heavy Iron Crab Cages to generate passive C$ while fishing." },
    { title: "6. Enchant at Keeper's Altar", desc: "Collect Enchant Relics and visit the Statue of Sovereignty at night for Greed (+50% Weight) or Santa enchants." },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Beginner Guide & FAQ 📖</h1>
        <p className="text-slate-400 text-sm mt-1">Step-by-step rod progression and moneymaking strategy for new players in Roblox Fisch.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">🚀 6-Step Fastest Moneymaking Progression</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.title} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="font-bold text-sky-400 text-sm">{s.title}</div>
              <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-white">❓ Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-3 text-xs">
          <div>
            <span className="font-bold text-sky-300">Q: How do I remove the rod shaking minigame?</span>
            <p className="text-slate-400 mt-1">A: Reach 99%+ total Lure Speed by combining high speed rods (e.g. Diamond Rod) with Singularity or Aether Bait.</p>
          </div>
          <div className="border-t border-slate-800 pt-3">
            <span className="font-bold text-sky-300">Q: What is the single best money spot in the game?</span>
            <p className="text-slate-400 mt-1">A: The Mineshaft deep pool currently yields 150,000+ C$/Hour when using S+ tier rods and Greed enchantments.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
