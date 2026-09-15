"use client";
import React, { useState } from "react";
import Image from "next/image";
import AuthorCard from "@/components/AuthorCard";
import { RODS_DATA, BAITS_DATA } from "@/data/wikiData";
import { Calculator, Sparkles, Anchor, DollarSign } from "lucide-react";

export default function CalculatorPage() {
  const SPOTS = [
    { name: "Mineshaft (Endgame Profit)", avgBasePrice: 1800, catchesPerHrBase: 60 },
    { name: "Forsaken Shores Pond", avgBasePrice: 1400, catchesPerHrBase: 55 },
    { name: "Living Garden Waterfall", avgBasePrice: 1100, catchesPerHrBase: 50 },
    { name: "Roslit Bay Harbor", avgBasePrice: 600, catchesPerHrBase: 45 },
    { name: "Moosewood Starter Spot", avgBasePrice: 150, catchesPerHrBase: 40 },
  ];

  const ENCHANTS = [
    { name: "Sovereign / Divine", luckMult: 1.8, weightMult: 1.5 },
    { name: "Greed (+50% Weight)", luckMult: 1.2, weightMult: 1.5 },
    { name: "Santa (+30% Speed)", luckMult: 1.3, weightMult: 1.2 },
    { name: "Mystical", luckMult: 1.4, weightMult: 1.1 },
    { name: "None", luckMult: 1.0, weightMult: 1.0 },
  ];

  const [selectedRodIdx, setSelectedRodIdx] = useState(0);
  const [selectedBaitIdx, setSelectedBaitIdx] = useState(0);
  const [selectedEnchantIdx, setSelectedEnchantIdx] = useState(0);
  const [selectedSpotIdx, setSelectedSpotIdx] = useState(0);

  const r = RODS_DATA[selectedRodIdx] || RODS_DATA[0];
  const b = BAITS_DATA[selectedBaitIdx] || BAITS_DATA[0];
  const e = ENCHANTS[selectedEnchantIdx] || ENCHANTS[0];
  const s = SPOTS[selectedSpotIdx] || SPOTS[0];

  const totalLuck = Math.round((r.luck + b.luckBonus) * e.luckMult);
  const catchesPerHour = Math.round(s.catchesPerHrBase * (1 + (r.speed + b.speedBonus) / 100));
  const avgFishPrice = Math.round(s.avgBasePrice * (1 + totalLuck / 400) * e.weightMult);
  const estimatedPerHour = (catchesPerHour * avgFishPrice).toLocaleString();
  const mythicChance = Math.min(85, Math.round((totalLuck / 2500) * 100));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best rod setup for maximum profit in Fish It?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The highest earning setup is the Diamond Rod paired with Singularity Bait and the Sovereign/Divine enchantment, fishing exclusively in the Mineshaft zone for up to C$ 500,000+ per hour.",
        },
      },
      {
        "@type": "Question",
        name: "How does Luck affect fish rarity and values?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Luck increases the chance of hooking Mythic and Legendary species while scaling up the average weight multiplier of common fish, directly boosting their merchant sell price.",
        },
      },
      {
        "@type": "Question",
        name: "Does fishing location change catch speed in Fish It?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, deeper waters like Mineshaft and Forsaken Shores have slightly slower base bite intervals but contain exponentially higher-value fish tables.",
        },
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Fish It Catch & Profit Calculator",
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
          <Calculator className="w-3.5 h-3.5" /> Interactive Fishing Engine
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Fish It! Catch & Profit Calculator
        </h1>
        <p className="text-slate-300 text-sm mt-2 max-w-2xl">
          Simulate rod luck, bait speed, enchantments, and fishing spots to calculate estimated hourly C$ profit and Mythic hook rates.
        </p>
      </div>

      <AuthorCard />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-5">
          <div className="bg-slate-900/90 border border-cyan-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Anchor className="w-4 h-4 text-cyan-400" /> 1. Select Fishing Rod
            </h2>
            <select
              value={selectedRodIdx}
              onChange={(e) => setSelectedRodIdx(Number(e.target.value))}
              className="w-full bg-slate-950 border border-cyan-800/60 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"
            >
              {RODS_DATA.map((rod, idx) => (
                <option key={rod.id} value={idx}>
                  {rod.name} (Luck: +{rod.luck}, Spd: +{rod.speed}%)
                </option>
              ))}
            </select>
            <div className="text-xs text-slate-400 flex justify-between">
              <span>Price: <strong className="text-emerald-400">{r.price}</strong></span>
              <span>Tier: <strong className="text-cyan-300">{r.tier}</strong></span>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-cyan-900/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" /> 2. Bait & Enchantment
            </h2>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-slate-400 block mb-1 font-semibold">Active Bait</label>
                <select
                  value={selectedBaitIdx}
                  onChange={(e) => setSelectedBaitIdx(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cyan-500"
                >
                  {BAITS_DATA.map((bait, idx) => (
                    <option key={bait.id} value={idx}>
                      {bait.name} (+{bait.luckBonus} Luck)
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1 font-semibold">Rod Enchantment</label>
                <select
                  value={selectedEnchantIdx}
                  onChange={(e) => setSelectedEnchantIdx(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cyan-500"
                >
                  {ENCHANTS.map((enc, idx) => (
                    <option key={enc.name} value={idx}>
                      {enc.name} ({enc.luckMult}x Luck Mult)
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1 font-semibold">Fishing Destination</label>
                <select
                  value={selectedSpotIdx}
                  onChange={(e) => setSelectedSpotIdx(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-cyan-500"
                >
                  {SPOTS.map((spot, idx) => (
                    <option key={spot.name} value={idx}>
                      {spot.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results & Visuals */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-cyan-950/80 to-slate-950 border border-cyan-500/40 rounded-2xl p-6 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-cyan-400">
              Estimated Hourly Earnings
            </h2>
            <div className="text-4xl sm:text-5xl font-black text-white font-mono">
              C$ {estimatedPerHour}
              <span className="text-sm font-sans font-medium text-slate-400 ml-2">/ Hour</span>
            </div>
            <div className="pt-3 border-t border-cyan-900/50 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Total Combined Luck:</span>
                <span className="font-bold text-yellow-300 font-mono">+{totalLuck}</span>
              </div>
              <div className="flex justify-between">
                <span>Catch Rate Speed:</span>
                <span className="font-bold text-cyan-300">~{catchesPerHour} fish / hr</span>
              </div>
              <div className="flex justify-between">
                <span>Mythic Hook Probability:</span>
                <span className="font-bold text-emerald-400 font-mono">{mythicChance}%</span>
              </div>
            </div>
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
    </div>
  );
}
