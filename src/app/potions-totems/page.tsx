export default function PotionsTotemsPage() {
  const totems = [
    { name: "Tempest Totem", effect: "Changes active weather to Rain", location: "Hidden Underwater Cave (Terrapin Island)", cost: "2,000 C$", note: "Essential for Ghost Angler & rainy Mythics" },
    { name: "Sundial Totem", effect: "Toggles between Day & Night", location: "Top Cliff Cave (Sunstone Island)", cost: "2,000 C$", note: "Use GPS (100 C$) to reach cave coordinates" },
    { name: "Wind Totem", effect: "Triggers Strong Wind weather", location: "Snowcap Mountain Cave", cost: "3,500 C$", note: "+25% Lure speed boost" },
  ];

  const potions = [
    { name: "Luck Potion III", effect: "+100% Luck boost for 60 mins", craft: "Blue Moon Cave Cauldron / Shady Alchemist", cost: "3x Luck Potion II + Shady Scrip" },
    { name: "Luck Potion II", effect: "+75% Luck boost for 30 mins", craft: "Blue Moon Cave Cauldron", cost: "2x Luck Potion I" },
    { name: "Mutation II Potion", effect: "Guarantees Tier II Mutation on next 3 catches", craft: "Code POTIONSSS / Cauldron", cost: "Rare Alchemy Ingredients" },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Weather Totems & Potions Guide 🗿</h1>
        <p className="text-slate-400 text-sm mt-1">Locations for Tempest and Sundial Totems, Cauldron brewing recipes, and Luck Potion boosts.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-amber-400">🗿 Weather Totems Locations & Effects</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {totems.map((t) => (
            <div key={t.name} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white text-base">{t.name}</span>
                <span className="text-xs text-emerald-400 font-bold">{t.cost}</span>
              </div>
              <p className="text-xs text-sky-300 font-semibold">{t.effect}</p>
              <p className="text-[11px] text-slate-400">📍 {t.location}</p>
              <p className="text-[11px] text-slate-500 italic">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">🧪 Potions & Cauldron Alchemy Recipes</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="divide-y divide-slate-800">
            {potions.map((p) => (
              <div key={p.name} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
                <div className="font-bold text-white text-sm w-44">{p.name}</div>
                <div className="text-emerald-400 font-semibold w-56">{p.effect}</div>
                <div className="text-slate-400 flex-1">{p.craft}</div>
                <div className="text-sky-300 font-medium">{p.cost}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
