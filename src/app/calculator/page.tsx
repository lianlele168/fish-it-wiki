"use client";
import React, { useState } from "react";
import Image from "next/image";
import AuthorCard from "@/components/AuthorCard";
import { RODS_DATA, FISH_SPECIES_DATA } from "@/data/wikiData";
import { Calculator, Anchor, DollarSign, Fish } from "lucide-react";

/** "1 in 20,000" -> 20000 */
function oddsNumber(odds: string): number {
  const m = odds.match(/in\s*([\d,]+)/);
  return m ? Number(m[1].replace(/,/g, "")) : 1;
}

function priceNumber(price: string): number | null {
  const m = price.match(/([\d,]+)\s*[–-]\s*([\d,]+)\s*C\$/);
  if (m) return (Number(m[1].replace(/,/g, "")) + Number(m[2].replace(/,/g, ""))) / 2;
  const s = price.match(/^([\d,]+)\s*C\$/);
  return s ? Number(s[1].replace(/,/g, "")) : null;
}

export default function CalculatorPage() {
  const [selectedRodIdx, setSelectedRodIdx] = useState(2);
  const [selectedFishIdx, setSelectedFishIdx] = useState(0);

  const rod = RODS_DATA[selectedRodIdx] ?? RODS_DATA[0];
  const fish = FISH_SPECIES_DATA[selectedFishIdx] ?? FISH_SPECIES_DATA[0];

  // Luck model (approximate, community-observed): each 100% luck multiplies the
  // chance of hooking a rarer fish by 2x. Official formula is not documented.
  const luckMult = 1 + rod.luck / 100;
  const adjustedOdds = Math.max(1, Math.round(oddsNumber(fish.rarityOdds) / luckMult));
  const price = priceNumber(fish.sellPrice);

  // Speed model (approximate): base 60 casts/hour, each +10% lure speed adds ~6 casts.
  const catchesPerHour = Math.round(60 * (1 + rod.speed / 100));
  const perHour = price !== null ? Math.round((catchesPerHour * price) / adjustedOdds) : null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best value rod in Fish It?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Carbon Rod is the best early value buy: it costs only 900 C$ at the Fisherman Island shop and gives 30% luck plus 4% lure speed. Later, the Lucky Rod (15,000 C$, 140% luck) and the Ares Rod (100,000 C$, 300% luck, 500 kg) are the major luck upgrades.",
        },
      },
      {
        "@type": "Question",
        name: "How does Luck work in Fish It?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Luck is a percentage bonus that increases the chance of hooking rarer fish. Each fish has documented base odds such as 1 in 5 for a Common Sardine or 1 in 20,000 for the Legendary Colossal Squid at Kohana. The exact official formula is not published, so this calculator uses an approximate community model.",
        },
      },
      {
        "@type": "Question",
        name: "Where is the best money-making spot in Fish It?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kohana Volcano is widely reported as the best money-making location in Fish It. Fisherman Island and the surrounding Ocean are the best starting areas, and Kohana is home to high-rarity catches like the Orca (1 in 5,000) and Colossal Squid (1 in 20,000).",
        },
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Fish It Luck & Rarity Calculator",
    applicationCategory: "GameApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      <div className="border-b border-cyan-900/60 pb-5 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 text-xs font-semibold mb-3">
          <Calculator className="w-3.5 h-3.5" /> Verified Data Calculator
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Fish It! Luck & Rarity Calculator
        </h1>
        <p className="text-slate-300 text-sm mt-2 max-w-2xl">
          Pick a rod and a target fish to see your luck-adjusted hook odds and estimated C$/hour.
          All inputs use verified game values (Fish It! Wiki, 2026-09-19); the luck formula itself
          is an approximate community model since the official math is not documented.
        </p>
      </div>

      <AuthorCard />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-5">
          <div className="bg-slate-900/90 border border-cyan-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Anchor className="w-4 h-4 text-cyan-400" /> 1. Select Your Rod
            </h2>
            <select
              value={selectedRodIdx}
              onChange={(e) => setSelectedRodIdx(Number(e.target.value))}
              className="w-full bg-slate-950 border border-cyan-800/60 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"
            >
              {RODS_DATA.map((r, idx) => (
                <option key={r.id} value={idx}>
                  {r.name} — {r.price}, +{r.luck}% luck
                </option>
              ))}
            </select>
            <div className="text-xs text-slate-400 flex justify-between flex-wrap gap-2">
              <span>Luck: <strong className="text-emerald-400">+{rod.luck}%</strong></span>
              <span>Speed: <strong className="text-cyan-300">+{rod.speed}%</strong></span>
              <span>Max Weight: <strong className="text-slate-200">{rod.maxWeight} kg</strong></span>
              <span>Source: <strong className="text-amber-300">{rod.location}</strong></span>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-cyan-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Fish className="w-4 h-4 text-yellow-400" /> 2. Target Fish
            </h2>
            <select
              value={selectedFishIdx}
              onChange={(e) => setSelectedFishIdx(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"
            >
              {FISH_SPECIES_DATA.map((f, idx) => (
                <option key={f.id} value={idx}>
                  {f.name} ({f.rarity}, {f.rarityOdds})
                </option>
              ))}
            </select>
            <div className="text-xs text-slate-400 flex justify-between flex-wrap gap-2">
              <span>Location: <strong className="text-cyan-300">{fish.spawnZone}</strong></span>
              <span>Sell Price: <strong className="text-emerald-400">{fish.sellPrice}</strong></span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-cyan-950/80 to-slate-950 border border-cyan-500/40 rounded-2xl p-6 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-cyan-400">
              {fish.name} — Hook Chances
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4">
                <div className="text-[11px] text-slate-400 uppercase tracking-wide">Base Odds</div>
                <div className="text-xl font-black text-slate-200 font-mono mt-1">{fish.rarityOdds}</div>
              </div>
              <div className="bg-slate-950/70 border border-cyan-800/60 rounded-xl p-4">
                <div className="text-[11px] text-cyan-400 uppercase tracking-wide">With {rod.name}</div>
                <div className="text-xl font-black text-cyan-300 font-mono mt-1">1 in {adjustedOdds.toLocaleString()}</div>
              </div>
            </div>
            <div className="pt-3 border-t border-cyan-900/50 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Estimated casts / hour (speed model):</span>
                <span className="font-bold text-cyan-300 font-mono">~{catchesPerHour}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated C$ / hour:</span>
                <span className="font-bold text-emerald-400 font-mono">
                  {perHour !== null ? `~${perHour.toLocaleString()} C$` : "— (sell price not documented)"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Rod total luck:</span>
                <span className="font-bold text-yellow-300 font-mono">+{rod.luck}%</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Model note: base odds are verified in-game values. The luck-to-odds conversion is a
              community approximation — Fish It&apos;s official luck formula has not been published.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-cyan-900/60 bg-cyan-950/30 p-2">
              <Image
                src="/images/fishit-header.webp"
                alt="Fish It Official Game Icon"
                width={512}
                height={512}
                className="rounded-lg object-cover w-full h-36"
              />
              <p className="text-[11px] text-cyan-400 text-center mt-1.5 font-medium">Official Game Icon</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-cyan-900/60 bg-cyan-950/30 p-2">
              <Image
                src="/images/fishit-gameplay.webp"
                alt="Fish It Ocean Fishing Gameplay"
                width={768}
                height={432}
                className="rounded-lg object-cover w-full h-36"
              />
              <p className="text-[11px] text-cyan-400 text-center mt-1.5 font-medium">Ocean Fishing Arena</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-slate-500 flex items-start gap-2">
        <DollarSign className="w-3.5 h-3.5 shrink-0 mt-0.5" />
        Sell prices float with fish weight; ranges come from TheGamer&apos;s verified price list.
        Fish marked &quot;Not documented&quot; have no verifiable sell price yet and show no C$/hour
        estimate instead of a made-up number.
      </p>
    </div>
  );
}
