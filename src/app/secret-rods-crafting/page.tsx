import { RODS_DATA } from "@/data/wikiData";

export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/secret-rods-crafting" },
};

export default function SecretRodsCraftingPage() {
  const ghostfire = RODS_DATA.find(r => r.id === "ghostfire-rod");
  const redGhostfire = RODS_DATA.find(r => r.id === "red-ghostfire-rod");

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Secret Rods & Rare Variants</h1>
        <p className="text-slate-400 text-sm mt-1">
          What is actually verified about special and variant rods in Roblox Fish It! — no invented
          crafting recipes.
        </p>
      </div>

      <div className="bg-amber-950/30 border border-amber-800/50 rounded-2xl p-5 space-y-2">
        <h2 className="text-sm font-bold text-amber-300">Data Verification Notice</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Fish It! does not use a &quot;secret rod crafting&quot; system like other fishing games —
          every verified rod in the game is purchased at the Fisherman Island shop. Older versions
          of this page listed crafting recipes (Great Rod of Oscar, Element Rod, Scalding Hook) that
          belonged to a different game entirely and have been removed.
        </p>
      </div>

      {/* The one verified variant rod */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Verified Variant: Red Ghostfire Rod</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-white">Red Ghostfire Rod</h2>
            <span className="text-xs bg-red-950 border border-red-800 text-red-300 font-bold px-3 py-1 rounded-full">Variant</span>
          </div>
          <div className="grid md:grid-cols-3 gap-3 text-xs bg-slate-950 p-4 rounded-xl">
            <div>Price: <strong className="text-emerald-400">{redGhostfire?.price ?? "55,000 C$"}</strong></div>
            <div>Luck: <strong className="text-sky-300">{redGhostfire?.luck ?? 180}%</strong></div>
            <div>Max Weight: <strong className="text-amber-300">{redGhostfire?.maxWeight ?? 80} kg</strong></div>
          </div>
          <div className="text-xs text-slate-300 leading-relaxed">
            The Red Ghostfire Rod is the verified recolor variant of the Ghostfire Rod — identical
            stats ({ghostfire?.luck ?? 180}% luck, {ghostfire?.speed ?? 20}% lure speed,{" "}
            {ghostfire?.maxWeight ?? 80} kg max weight at the same 55,000 C$ price), differentiated
            by its red appearance. Source: Fish It! Wiki Fishing Rods page.
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Full Verified Rod Progression</h2>
        <p className="text-xs text-slate-400 leading-relaxed">
          Instead of fake recipes, here is the real purchase ladder at Fisherman Island: Starter Rod
          (free) → Bottle Rod (300 C$) → Carbon Rod (900 C$) → Plastic Rod (1,500 C$) → Chrome Rod
          (6,500 C$) → Fluorescent Rod (9,000 C$) → Lucky Rod / Kiwichi Rod (15,000 C$) → Dark Blade
          (50,000 C$) → Ghostfire / Red Ghostfire (55,000 C$) → Korig Rod (75,000 C$) → Ares Rod
          (100,000 C$) → Lava Rod (175,000 C$) → Steampunk Rod (215,000 C$). See the full{" "}
          <a href="/rod-tier-list" className="text-sky-400 underline">rod tier list</a> for stats.
        </p>
      </section>

      <p className="text-[11px] text-slate-500">
        Verified 2026-09-19 against fish-it.fandom.com/wiki/Fishing_Rods, cross-checked with Beebom,
        Pocket Tactics and Eldorado.gg.
      </p>
    </div>
  );
}
