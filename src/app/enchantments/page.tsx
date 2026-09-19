export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/enchantments" },
};

export default function EnchantmentsPage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Enchanting Guide</h1>
        <p className="text-slate-400 text-sm mt-1">
          The verified enchanting location in Roblox Fish It! — and an honest note on what is still
          unverified.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Verified: Enchanting at Esoteric Depths</h2>
        <div className="bg-gradient-to-r from-purple-950 to-slate-900 border border-purple-800/40 rounded-2xl p-5 space-y-2">
          <p className="text-xs text-slate-300 leading-relaxed">
            Pocket Tactics&apos; Fish It enchant guide confirms <strong className="text-purple-300">Esoteric Depths</strong>{" "}
            as the game&apos;s enchanting area, with its enchant NPC and a dedicated fishing spot.
            The Fish It! Wiki also lists <strong className="text-purple-300">Enchant Temple</strong>{" "}
            among the game&apos;s mystical locations. Get there by boat once you leave Fisherman
            Island, and bring your rod to apply enchantments.
          </p>
        </div>
      </section>

      <div className="bg-amber-950/30 border border-amber-800/50 rounded-2xl p-5 space-y-2">
        <h2 className="text-sm font-bold text-amber-300">Data Verification Notice</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          A verified table of individual enchantment names and their exact stat bonuses is{" "}
          <strong>not available yet</strong> — the enchant list that used to be on this page came
          from a different fishing game and has been removed. We will publish Fish It! enchant
          stats as soon as a cross-checkable source documents them.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Verified Luck Boosters You Can Use Today</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-sky-300">High-luck rods</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rod luck is fully documented: Lucky Rod +140%, Dark Blade +200%, Korig Rod +250%, Ares
              Rod +300% — all bought at Fisherman Island.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-sky-300">Luck Potions from codes</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Redeemable codes grant Luck I and Luck II Potions (e.g. PIRATEMAJA, DIVING, 3BILLION,
              CRYSTALS) and the LUCKYTOTEM code grants a Luck Totem.
            </p>
          </div>
        </div>
      </section>

      <p className="text-[11px] text-slate-500">
        Sources: Pocket Tactics (Fish It enchant guide), Fish It! Wiki — verified 2026-09-19. Fish
        It! is a separate game from Fisch.
      </p>
    </div>
  );
}
