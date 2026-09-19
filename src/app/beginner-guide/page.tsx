import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/beginner-guide" },
};

const steps = [
  {
    title: "1. Start with the Free Starter Rod",
    desc: "Every player begins with the free Starter Rod: 0% luck, 0% speed and a 10 kg limit. Sell your first Common catches — Sardines and Mackerel sell for 2–4 C$ each — around Fisherman Island to build your first purse.",
  },
  {
    title: "2. Buy the Bottle Rod (300 C$)",
    desc: "The Bottle Rod is the first real upgrade: 20% luck and a 30 kg limit for only 300 C$ at the Fisherman Island shop. A few dozen Common fish gets you there.",
  },
  {
    title: "3. Save for the Carbon Rod (900 C$)",
    desc: "The Carbon Rod is the best value buy in the game: just 900 C$ for 30% luck plus 4% lure speed. It is cheap enough to reach on day one and carries you well into the mid game.",
  },
  {
    title: "4. Climb the Rod Ladder",
    desc: "From there the verified ladder at Fisherman Island runs: Chrome Rod (6,500 C$, 80% luck) → Fluorescent Rod (9,000 C$, 85%) → Lucky Rod (15,000 C$, 140%) → Kiwichi Rod (15,000 C$, 110%, 80 kg) → Dark Blade (50,000 C$, 200%) → Ares Rod (100,000 C$, 300%).",
  },
  {
    title: "5. Grind Money at Kohana Volcano",
    desc: "Beebom's Fish It guide names Kohana Volcano as the best money-making location. Once you can reach it with a high-luck rod, that is where your C$ per hour jumps — and Kohana itself hides the Epic Orca (1 in 5,000) and Legendary Colossal Squid (1 in 20,000).",
  },
  {
    title: "6. Redeem Codes at Level 10",
    desc: "Reach Level 10, then redeem working codes in the Store menu: PIRATEMAJA and DIVING each give 2x Luck II Potions, and new codes drop regularly. Full list on our codes page.",
  },
];

const faqs = [
  {
    q: "What is the single best money spot in Fish It?",
    a: "Kohana Volcano is the community's verified best money-making location, per Beebom's Fish It guide. Start at Fisherman Island, upgrade through the Bottle Rod and Carbon Rod, then head to Kohana Volcano with a Lucky Rod or better.",
  },
  {
    q: "Which rod should I buy first?",
    a: "The Bottle Rod at 300 C$ is the first stop, but the Carbon Rod at 900 C$ is the real goal — 30% luck and 4% lure speed for under a thousand C$ is the best stat-per-C$ ratio among all 15 verified rods.",
  },
  {
    q: "How many fish are in Fish It?",
    a: "The Fish It! Wiki indexes 415+ species across a 7-tier rarity ladder (Common, Uncommon, Rare, Epic, Legendary, Mythical, Secret). Our fish database lists the 22 species that have been fully verified with locations and odds.",
  },
];

export default function BeginnerGuidePage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Beginner Guide & FAQ</h1>
        <p className="text-slate-400 text-sm mt-1">
          A rod progression and moneymaking path built entirely on verified Fish It! data — real
          rod prices, real fish odds, real locations (Fish It! Wiki, Beebom, TheGamer; verified
          2026-09-19).
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">6-Step Fastest Moneymaking Progression</h2>
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
        <h2 className="text-xl font-bold text-white">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-3 text-xs">
          {faqs.map((f) => (
            <div key={f.q}>
              <span className="font-bold text-sky-300">{f.q}</span>
              <p className="text-slate-400 mt-1 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-[11px] text-slate-500 leading-relaxed">
        Fish It! is a separate game from Fisch. Names like Moosewood or Roslit Bay belong to that
        other game and never appear in this guide — every location and price here comes from Fish
        It!-specific sources.
      </p>
    </div>
  );
}
