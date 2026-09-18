export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/enchantments" },
};

export default function EnchantmentsPage() {
  const enchants = [
    { name: "Sovereign", tier: "S+ Godly", effect: "+80% Luck, +50% Fish Weight, +30% Lure Speed", req: "Sovereign Relic at Keeper's Altar", note: "Extremely rare godly drop" },
    { name: "Santa", tier: "S Tier", effect: "+30% Progress Speed, +30% Fish Size, Holiday Mutations", req: "Enchant Relic at Statue of Sovereignty", note: "Meta speed & size combo" },
    { name: "Greed", tier: "S Tier", effect: "+50% Fish Weight (significantly higher selling price)", req: "Enchant Relic", note: "Best pure moneymaking enchant" },
    { name: "Mystical", tier: "A Tier", effect: "+40% Luck, +20% Control bar width", req: "Enchant Relic", note: "Great for reeling difficult fish" },
    { name: "Abyssal", tier: "A Tier", effect: "+30% Chance for Abyssal Mutations", req: "Enchant Relic", note: "High multiplier mutations" },
    { name: "Putrid / Weak", tier: "F Tier", effect: "Negative stats or 0% boost", req: "Reroll immediately", note: "Avoid using" },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Enchantments & Keeper's Altar Guide 🔮</h1>
        <p className="text-slate-400 text-sm mt-1">How to obtain Enchant Relics and apply Sovereign, Greed, and Santa enchants to your fishing rods.</p>
      </div>

      <div className="bg-gradient-to-r from-purple-950 to-slate-900 border border-purple-800/40 rounded-2xl p-5 space-y-2">
        <h2 className="text-sm font-bold text-purple-300">📍 How to Enchant Rods at Keeper's Altar</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          1. Collect <strong>Enchant Relics</strong> from treasure chests or rare fishing drops.<br/>
          2. Travel to the <strong>Statue of Sovereignty</strong> at night.<br/>
          3. Talk to Cole and place your rod on the <strong>Keeper's Altar</strong> to apply a random enchantment.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {enchants.map((e) => (
          <div key={e.name} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-white text-base">{e.name}</span>
              <span className="text-xs bg-purple-950 border border-purple-800 text-purple-300 px-2 py-0.5 rounded font-bold">{e.tier}</span>
            </div>
            <p className="text-xs text-emerald-400 font-semibold">{e.effect}</p>
            <div className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 flex justify-between">
              <span>Req: {e.req}</span>
              <span className="italic">{e.note}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
