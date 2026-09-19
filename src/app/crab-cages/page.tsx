export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/crab-cages" },
};

export default function CrabCagesPage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Crab Cages & Passive Farming</h1>
        <p className="text-slate-400 text-sm mt-1">
          What is verified about passive farming in Roblox Fish It! — and what is not.
        </p>
      </div>

      <div className="bg-amber-950/30 border border-amber-800/50 rounded-2xl p-5 space-y-2">
        <h2 className="text-sm font-bold text-amber-300">Data Verification Notice</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          A verified crab cage table (names, luck boosts, double-catch rates, prices) is{" "}
          <strong>not available for Fish It!</strong> The sources checked on 2026-09-19 (Fish It!
          Wiki, Beebom, Pocket Tactics, Eldorado.gg) do not document crab cage stats, and the cage
          list that used to be on this page could not be confirmed for this game — it has been
          removed rather than left up as misinformation.
        </p>
        <p className="text-xs text-slate-300 leading-relaxed">
          This page will be filled in as soon as a reliable, cross-checkable source appears.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Verified Ways to Earn C$ While You Play</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-sky-300">Grind Kohana Volcano</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Beebom identifies Kohana Volcano as Fish It&apos;s best money-making location. Pair it
              with a high-luck rod — Lucky Rod (140%) or better — and sell documented catches like
              Swordfish (40–60 C$ each).
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-sky-300">Redeem codes at Level 10</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Codes such as PIRATEMAJA and DIVING grant 2x Luck II Potions, which boost your catch
              quality for free. See the codes page for the full verified list.
            </p>
          </div>
        </div>
      </section>

      <p className="text-[11px] text-slate-500">
        Fish It! is a separate game from Fisch — passive-farming items from other fishing games are
        intentionally excluded.
      </p>
    </div>
  );
}
