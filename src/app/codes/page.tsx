"use client";
import { useState } from "react";

export default function CodesPage() {
  const [copied, setCopied] = useState("");

  const copy = (c: string) => {
    navigator.clipboard.writeText(c);
    setCopied(c);
    setTimeout(() => setCopied(""), 2000);
  };

  const activeCodes = [
    { code: "POTIONSSS", reward: "2x Mutation II Potions", req: "Level 10+" },
    { code: "MUTATION2", reward: "2x Mutation II Potions", req: "Level 10+" },
    { code: "MERDEKA", reward: "2x Mutation II Potions", req: "Level 10+" },
    { code: "Fischfest2026", reward: "Celebration Relic + 5,000 Cash", req: "Level 10+" },
    { code: "CONTRA", reward: "1x Special Rod Token", req: "Level 10+" },
    { code: "scarlet", reward: "1,000 Cash", req: "Level 10+" },
  ];

  const expiredCodes = [
    "Fischy2025", "100MVisits", "SummerCatch", "DepthsSecret", "FishermanPro"
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Codes (August 2026)</h1>
        <p className="text-slate-400 text-sm mt-1">Working promo codes for free Mutation Potions, Cash, and Enchantment Relics in Roblox Fisch.</p>
      </div>

      <div className="bg-gradient-to-r from-sky-950 to-slate-900 border border-sky-800/40 rounded-2xl p-5 space-y-2">
        <h2 className="text-sm font-bold text-sky-300">💡 How to Redeem Codes in Fish It!</h2>
        <p className="text-xs text-slate-300 leading-relaxed">
          Open the game → Reach <strong>Level 10</strong> → Press the Menu / Settings gear icon at the top of the screen → Scroll down to the Code Redemption input box → Enter code and click Redeem.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">🎁 Active Working Codes</h2>
        <div className="space-y-3">
          {activeCodes.map((item) => (
            <div key={item.code} className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-white font-bold text-base">{item.code}</span>
                  <span className="text-[10px] bg-emerald-950 border border-emerald-800 text-emerald-300 font-bold px-2 py-0.5 rounded">Active</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{item.reward} • <span className="text-amber-400 font-medium">{item.req}</span></p>
              </div>
              <button onClick={() => copy(item.code)} className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-4 py-2 rounded-lg transition">
                {copied === item.code ? "✓ Copied!" : "Copy Code"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-400">❌ Expired Codes</h2>
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
          <div className="flex flex-wrap gap-2">
            {expiredCodes.map((code) => (
              <span key={code} className="font-mono text-xs text-slate-500 line-through bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg">
                {code}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
