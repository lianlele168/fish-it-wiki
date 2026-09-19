export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/aquarium-guide" },
};

export default function AquariumGuidePage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Fish Collection & Bestiary</h1>
        <p className="text-slate-400 text-sm mt-1">
          How the Fish It! collection system works with real numbers attached.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Verified: The Rarity Ladder</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          The Fish It! Wiki documents <strong className="text-sky-300">415+ fish species</strong>{" "}
          spread across a <strong className="text-sky-300">7-tier rarity ladder</strong>: Common →
          Uncommon → Rare → Epic → Legendary → Mythical → Secret. Collection is the heart of the
          game — each tier comes with documented encounter odds, for example Common fish appear 1
          in 5 casts while the Legendary Colossal Squid at Kohana is 1 in 20,000.
        </p>
        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="text-slate-400">Verified species with full data</div>
            <div className="text-2xl font-black text-emerald-400">22</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="text-slate-400">Documented rarity tiers</div>
            <div className="text-2xl font-black text-sky-400">7</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="text-slate-400">Rarest verified odds</div>
            <div className="text-2xl font-black text-amber-400">1 in 20,000</div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Start Your Collection Right</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-sky-300">Early collection targets</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fisherman Island and the Ocean cover 14 of the 22 fully-verified species — 9 Common
              fish at 1 in 5 odds, 4 Uncommon at 1 in 50, and the Rare Barracuda, Frog and Darwin
              Clownfish.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-sky-300">Trophy hunts</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Once your rod luck is high (Lucky Rod 140% or better), hunt Kohana for the Epic Orca
              (1 in 5,000) and the Legendary Colossal Squid (1 in 20,000) — the rarest verified
              catches in the game.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-amber-950/30 border border-amber-800/50 rounded-2xl p-5 space-y-2">
        <h2 className="text-sm font-bold text-amber-300">Data Verification Notice</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          The old version of this page listed aquarium completion perks (passive C$ bonuses, luck
          boosts at 25/50/75/100% completion) that we could not verify for Fish It! — they have been
          removed. Only the rarity ladder and species data above are confirmed.
        </p>
      </div>

      <p className="text-[11px] text-slate-500">
        Sources: Fish It! Wiki Fish Index and Fish pages, TheGamer price list — verified
        2026-09-19. Fish It! is a separate game from Fisch.
      </p>
    </div>
  );
}
