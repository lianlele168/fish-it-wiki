"use client";
import { useState } from "react";
import Link from "next/link";
import { FISH_IT_FAQS as FAQS } from "@/data/codesFaq";

type CodeItem = { code: string; reward: string; req: string };

const activeCodes: CodeItem[] = [
  { code: "MERDEKA", reward: "Special lantern", req: "Level 10+" },
  { code: "POTIONSSS", reward: "2x Mutation II Potion", req: "Level 10+" },
  { code: "MUTATION2", reward: "2x Mutation II Potion", req: "Level 10+" },
  { code: "CONTRA", reward: "2x Mutation II Potion", req: "Level 10+" },
  { code: "ELEMENTAL26", reward: "Freebies", req: "Level 10+" },
  { code: "YEEHAW", reward: "Cowboy Hat Halo", req: "Level 10+" },
  { code: "1M_GOAL", reward: "Community Rod", req: "Level 10+" },
  { code: "500K_GOAL_FXCB", reward: "Assorted potions", req: "Level 10+" },
  { code: "EASTER2026", reward: "2x Luck II Potion + 1x Carrot I Potion", req: "Level 10+" },
  { code: "CRESCENT", reward: "Limited-time bait skin", req: "Level 10+" },
  { code: "NEWYEARLANTERN", reward: "Lantern skin", req: "Level 10+" },
  { code: "GO2026", reward: "New Year rod skin", req: "Level 10+" },
  { code: "FREECRYSTAL", reward: "2x Cave Crystal", req: "Level 10+" },
  { code: "THEDEN", reward: "1x Leviathan Scale", req: "Level 10+ and must have visited the Leviathan's Den" },
  { code: "LEVDEN", reward: "1x Leviathan Scale", req: "Level 10+ and must have visited the Leviathan's Den" },
  { code: "SCALE2", reward: "1x Leviathan Scale", req: "Level 10+ and must have visited the Leviathan's Den" },
  { code: "SCALEREFUND", reward: "1x Leviathan Scale", req: "Level 10+ and must have visited the Leviathan's Den" },
  { code: "PIRATEMAJA", reward: "2x Luck II Potion", req: "Level 10+" },
  { code: "DIVING", reward: "2x Luck II Potion", req: "Level 10+" },
  { code: "3BILLION", reward: "2x Luck II Potion", req: "Level 10+" },
  { code: "CRYSTALS", reward: "Luck II Potion", req: "Level 10+" },
  { code: "LUCKYTOTEM", reward: "Luck Totem", req: "Level 10+" },
  { code: "GIFTGIVING", reward: "Epic Present", req: "Level 10+" },
  { code: "FREEPRESENTS", reward: "Presents", req: "Level 10+" },
  { code: "BLAMETALON", reward: "3x Luck I Potion + 2x Luck II Potion", req: "Level 10+" },
  { code: "TRAVEL", reward: "3x Luck I Potion", req: "Level 10+" },
  { code: "SHARKSSS", reward: "2x Mutation I Potion + 1x Luck II Potion", req: "Level 10+" },
];

const expiredCodes: string[] = [
  "SORRYQUEST",
  "PURPLEMOON",
  "TROPICAL",
  "THEWHEEL",
  "100M",
  "ARMOR",
  "MEGA",
  "SORRY",
  "MUTATE",
  "INDO",
  "SORRYSPINS",
  "LOBSTAH",
  "LOST",
];

export default function CodesPage() {
  const [copied, setCopied] = useState("");

  const copy = (c: string) => {
    navigator.clipboard.writeText(c);
    setCopied(c);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Codes</h1>
        <p className="text-slate-400 text-sm mt-1">
          {activeCodes.length} working codes for free Mutation Potions, Luck Potions, totems and rod
          skins in Roblox Fish It! Every code needs an account at Level 10 or above.
        </p>
      </div>

      <div className="bg-gradient-to-r from-sky-950 to-slate-900 border border-sky-800/40 rounded-2xl p-5 space-y-2">
        <h2 className="text-sm font-bold text-sky-300">How to Redeem Codes in Fish It!</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Open the game → reach <strong>Level 10</strong> → press the <strong>Store</strong> button →
          scroll down to the bottom of the store window → paste the code into the box → press{" "}
          <strong>Redeem</strong>.
        </p>
        <p className="text-xs text-amber-300/90 leading-relaxed">
          Note: this is <strong>Fish It!</strong> by Fish Atelier, not Fisch. Codes from one will not
          work in the other.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">
          Active Working Codes ({activeCodes.length})
        </h2>
        <div className="space-y-3">
          {activeCodes.map((item) => (
            <div
              key={item.code}
              className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between gap-4"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-white font-bold text-base">{item.code}</span>
                  <span className="text-[10px] bg-emerald-950 border border-emerald-800 text-emerald-300 font-bold px-2 py-0.5 rounded">
                    Active
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {item.reward} • <span className="text-amber-400 font-medium">{item.req}</span>
                </p>
              </div>
              <button
                onClick={() => copy(item.code)}
                className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-4 py-2 rounded-lg transition shrink-0"
              >
                {copied === item.code ? "Copied!" : "Copy Code"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Fish It! Codes FAQ</h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <div key={f.q} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <h3 className="text-sm font-bold text-sky-300">{f.q}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white">Spend Those Potions Well</h2>
        <p className="text-xs text-slate-400">
          Codes only hand out consumables. Where you fish and what you equip decides what you catch.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <Link href="/rod-tier-list" className="text-sky-300 hover:text-sky-200 font-semibold">
            Rod Tier List — which rod to save for
          </Link>
          <Link href="/bait-guide" className="text-sky-300 hover:text-sky-200 font-semibold">
            Bait Guide — match bait to the fish
          </Link>
          <Link href="/locations-map" className="text-sky-300 hover:text-sky-200 font-semibold">
            Locations Map — where the rare fish are
          </Link>
          <Link href="/secret-rods-crafting" className="text-sky-300 hover:text-sky-200 font-semibold">
            Secret Rods & Crafting — hidden unlocks
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-400">
          Expired Codes ({expiredCodes.length})
        </h2>
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex flex-wrap gap-2">
            {expiredCodes.map((code) => (
              <span
                key={code}
                className="font-mono text-xs text-slate-500 line-through bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg"
              >
                {code}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Several of these are still listed as working by some aggregator sites. They are worth a
            try, but treat them as dead until one actually redeems for you.
          </p>
        </div>
      </section>
    </div>
  );
}
