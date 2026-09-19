export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/boats-speed" },
};

export default function BoatsSpeedPage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Boats & Watercraft Guide</h1>
        <p className="text-slate-400 text-sm mt-1">
          What is verified about travel in Roblox Fish It! — and why we removed the old speed table.
        </p>
      </div>

      <div className="bg-amber-950/30 border border-amber-800/50 rounded-2xl p-5 space-y-2">
        <h2 className="text-sm font-bold text-amber-300">Data Verification Notice</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Boats and watercraft exist in Fish It! and are how you reach outlying islands like
          Kohana, Ancient Isle and Winter Shepherd. However, a verified table of boat names, prices
          and speeds is <strong>not available yet</strong>: the sources checked on 2026-09-19 (Fish
          It! Wiki, Beebom, Pocket Tactics, Eldorado.gg) do not publish comparable boat stats.
        </p>
        <p className="text-xs text-slate-300 leading-relaxed">
          The previous version of this page listed a boat table (Kayak, Speedboat, Hovercraft with
          exact prices and speeds) that we could not verify for Fish It! — it has been removed
          rather than left up as misinformation. This page will be updated the moment a reliable
          source is available.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Verified Travel Destinations</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Wherever your boat takes you, these are the verified destinations on the map:{" "}
          <strong className="text-sky-300">Fisherman Island</strong> (the starter hub with every rod
          shop), the surrounding <strong className="text-sky-300">Ocean</strong>,{" "}
          <strong className="text-sky-300">Kohana</strong> and{" "}
          <strong className="text-sky-300">Kohana Volcano</strong> (the best money-making spot per
          Beebom), <strong className="text-sky-300">Coral Reef (Tropical Garden)</strong>,{" "}
          <strong className="text-sky-300">Ancient Isle</strong>,{" "}
          <strong className="text-sky-300">Enchant Temple</strong>,{" "}
          <strong className="text-sky-300">Weather Machine</strong>,{" "}
          <strong className="text-sky-300">Esoteric Depths</strong> (enchanting),{" "}
          <strong className="text-sky-300">Winter Shepherd</strong> and{" "}
          <strong className="text-sky-300">Geminian Beach</strong>.
        </p>
      </section>

      <p className="text-[11px] text-slate-500">
        Fish It! is a separate game from Fisch — boat names and stats from other fishing games are
        intentionally excluded from this page.
      </p>
    </div>
  );
}
