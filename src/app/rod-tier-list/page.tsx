import { RODS_DATA } from "@/data/wikiData";

export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/rod-tier-list" },
};

type Rod = (typeof RODS_DATA)[number];

function groupRods(): { label: string; color: string; rods: Rod[] }[] {
  const byName = (id: string) => RODS_DATA.find(r => r.id === id);
  const pick = (ids: string[]) => ids.map(byName).filter((r): r is Rod => Boolean(r));
  return [
    {
      label: "Free & Starter (0 – 300 C$)",
      color: "border-slate-700 bg-slate-900/40 text-slate-300",
      rods: pick(["starter-rod", "bottle-rod"]),
    },
    {
      label: "Budget & Early Game (900 – 1,500 C$)",
      color: "border-emerald-800/60 bg-emerald-950/20 text-emerald-300",
      rods: pick(["carbon-rod", "plastic-rod"]),
    },
    {
      label: "Mid Game (6,500 – 15,000 C$)",
      color: "border-sky-800/60 bg-sky-950/20 text-sky-300",
      rods: pick(["chrome-rod", "fluorescent-rod", "lucky-rod", "kiwichi-rod"]),
    },
    {
      label: "High-End (50,000 – 75,000 C$)",
      color: "border-purple-800/60 bg-purple-950/20 text-purple-300",
      rods: pick(["dark-blade-rod", "ghostfire-rod", "red-ghostfire-rod", "korig-rod"]),
    },
    {
      label: "Endgame (100,000 – 215,000 C$)",
      color: "border-amber-800/60 bg-amber-950/20 text-amber-300",
      rods: pick(["ares-rod", "lava-rod", "steampunk-rod"]),
    },
  ];
}

export default function RodTierListPage() {
  const tiers = groupRods();

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Rod Tier List & Stats</h1>
        <p className="text-slate-400 text-sm mt-1">
          All 15 verified fishing rods in Roblox Fish It!, grouped by price progression. Luck is a
          percentage bonus, prices are in C$, and every non-starter rod is bought at the Fisherman
          Island shop. Sourced from the Fish It! Wiki Fishing Rods page, cross-checked with Beebom,
          Pocket Tactics and Eldorado.gg (2026-09-19).
        </p>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed space-y-1">
        <p><strong className="text-sky-300">Key facts:</strong> the Carbon Rod costs just 900 C$ for 30% luck and 4% lure speed — the best early value buy.</p>
        <p>The Ares Rod (100,000 C$, 300% luck, 500 kg) is the luck benchmark before the Lava Rod (175,000 C$, 500 kg) and Steampunk Rod (215,000 C$, 30% speed, 700 kg) for heavy catches.</p>
      </div>

      <div className="space-y-8">
        {tiers.map((t) => (
          <section key={t.label} className="space-y-4">
            <div className={`px-4 py-2 border rounded-xl font-bold text-sm inline-block ${t.color}`}>
              {t.label}
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="divide-y divide-slate-800">
                {t.rods.map((r) => (
                  <div key={r.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
                    <div className="space-y-1 md:w-52">
                      <div className="font-bold text-white text-base">{r.name}</div>
                      <div className="text-slate-400">📍 {r.location}</div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1 text-slate-300">
                      <div>Luck: <strong className="text-emerald-400 text-sm">{r.luck}%</strong></div>
                      <div>Lure Speed: <strong className="text-sky-300 text-sm">+{r.speed}%</strong></div>
                      <div>Max Weight: <strong className="text-slate-200">{r.maxWeight} kg</strong></div>
                      <div>Price: <strong className="text-amber-300">{r.price}</strong></div>
                    </div>
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
