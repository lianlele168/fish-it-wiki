export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/bait-guide" },
};

export default function BaitGuidePage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Bait & Bobber Guide</h1>
        <p className="text-slate-400 text-sm mt-1">
          What is verified about the Fish It! bait system — and what is still being checked.
        </p>
      </div>

      <div className="bg-amber-950/30 border border-amber-800/50 rounded-2xl p-5 space-y-2">
        <h2 className="text-sm font-bold text-amber-300">Data Verification Notice</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Fish It! does have a bait / bobber system — Eldorado.gg&apos;s game guide references a set
          of bobbers players can equip. However, a complete, cross-checkable table of bait names and
          their exact luck / speed bonuses is <strong>not yet documented</strong>: the Fish It! Wiki
          baits page could not be retrieved during verification (2026-09-19) and no media source
          publishes the numbers.
        </p>
        <p className="text-xs text-slate-300 leading-relaxed">
          To keep this site 100% accurate, we do not publish invented bait stats. This page will be
          filled in once a verified source becomes available.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">What You Can Do Instead</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-sky-300">Upgrade luck with rods</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rods carry verified percentage luck bonuses — from the free Starter Rod (0%) through
              the Carbon Rod (30% for just 900 C$) up to the Ares Rod (300%). Rod luck is the most
              reliable way to hook rarer fish while bait numbers are unverified.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-sky-300">Use working codes</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Redeemable codes hand out Luck Potions (e.g. PIRATEMAJA and DIVING give 2x Luck II
              Potions) and limited-time bait skins (CRESCENT). Check the{" "}
              <a href="/codes" className="text-sky-400 underline">codes page</a> for the current
              verified list.
            </p>
          </div>
        </div>
      </section>

      <p className="text-[11px] text-slate-500">
        Sources checked 2026-09-19: fish-it.fandom.com (baits page unavailable), Eldorado.gg,
        Beebom. Fish It! is a separate game from Fisch — bait names from other fishing games are
        intentionally excluded.
      </p>
    </div>
  );
}
