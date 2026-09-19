export const metadata = {
  alternates: { canonical: "https://fishit.robloxwikihub.com/locations-map" },
};

const spots = [
  {
    name: "Fisherman Island",
    tag: "Starter Hub",
    desc: "The beginner main island and the shop hub — every non-starter rod in the game is bought here, from the Bottle Rod (300 C$) up to the Steampunk Rod (215,000 C$). Common fish like Sardine, Mackerel, Herring and Catfish are caught around the island.",
    fish: "Sardine, Mackerel, Herring, Anchovy, Bream, Tilapia, Carp, Catfish, Flounder, Halibut, Barracuda, Frog, Darwin Clownfish",
    source: "Fish It! Wiki",
  },
  {
    name: "Ocean",
    tag: "Open Waters",
    desc: "The open sea surrounding the islands. Home to the Common baitfish schools plus Uncommon movers like Salmon and Mahi Mahi, and the Rare Swordfish (1 in 300).",
    fish: "Sardine, Mackerel, Herring, Anchovy, Bream, Tuna, Salmon, Mahi Mahi, Swordfish, Pufferfish",
    source: "Fish It! Wiki",
  },
  {
    name: "Kohana",
    tag: "High Rarity",
    desc: "Kohana is the verified home of the game's headline rare catches: the Epic Orca (1 in 5,000) and the Legendary Colossal Squid (1 in 20,000), plus the Uncommon Axolotl and Rare Sea Turtle.",
    fish: "Axolotl, Sea Turtle, Orca, Colossal Squid",
    source: "Fish It! Wiki",
  },
  {
    name: "Kohana Volcano",
    tag: "Best Money Spot",
    desc: "Beebom's Fish It money-making guide names Kohana Volcano as the best grinding location for C$ in the game. Bring a high-luck rod — the Lucky Rod (140%) or better — to make the most of the trip.",
    fish: "Not fully documented — see fish database for verified species",
    source: "Beebom",
  },
  {
    name: "Coral Reef (Tropical Garden)",
    tag: "Rare Encounters",
    desc: "A verified location for the Rare Pufferfish (1 in 350) and one of the Sea Turtle's two spawn areas (1 in 350).",
    fish: "Pufferfish, Sea Turtle",
    source: "Fish It! Wiki",
  },
  {
    name: "Esoteric Depths",
    tag: "Enchanting",
    desc: "Pocket Tactics' Fish It enchant guide confirms Esoteric Depths as the game's enchanting location with its enchant NPC and fishing spot.",
    fish: "Not fully documented",
    source: "Pocket Tactics",
  },
  {
    name: "Ancient Isle",
    tag: "Exploration",
    desc: "Listed on the Fish It! Wiki locations index. Its exact fish table has not been verified yet — we only list it, never invent its catches.",
    fish: "Not documented",
    source: "Fish It! Wiki",
  },
  {
    name: "Enchant Temple",
    tag: "Endgame Area",
    desc: "Listed on the Fish It! Wiki locations index alongside Esoteric Depths as one of the game's mystical areas. Fish table not yet verified.",
    fish: "Not documented",
    source: "Fish It! Wiki",
  },
  {
    name: "Weather Machine",
    tag: "Special Area",
    desc: "A special location on the Fish It! Wiki index, tied to the game's weather system. Details pending verification.",
    fish: "Not documented",
    source: "Fish It! Wiki",
  },
  {
    name: "The Land of Lost, Forgotten and Discovered",
    tag: "Secret Area",
    desc: "The game's longest-named secret area, listed on the Fish It! Wiki locations index. Fish table not yet verified.",
    fish: "Not documented",
    source: "Fish It! Wiki",
  },
  {
    name: "Winter Shepherd",
    tag: "Themed Area",
    desc: "A winter-themed location on the Fish It! Wiki locations index. Fish table not yet verified.",
    fish: "Not documented",
    source: "Fish It! Wiki",
  },
  {
    name: "Geminian Beach",
    tag: "Beach Area",
    desc: "A beach location on the Fish It! Wiki locations index. Fish table not yet verified.",
    fish: "Not documented",
    source: "Fish It! Wiki",
  },
];

export default function LocationsMapPage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Locations & Best Fishing Spots</h1>
        <p className="text-slate-400 text-sm mt-1">
          All 12 verified Fish It! locations with what is confirmed at each one. Sources: Fish It!
          Wiki (Locations / Fish Index), Beebom and Pocket Tactics, verified 2026-09-19. Areas
          without verified catch tables say so instead of listing made-up fish.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {spots.map((s) => (
          <div key={s.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex justify-between items-center gap-2">
              <span className="font-bold text-white text-base">{s.name}</span>
              <span className="text-xs bg-emerald-950 border border-emerald-800 text-emerald-300 font-bold px-2 py-0.5 rounded whitespace-nowrap">{s.tag}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            <p className="text-xs text-sky-300 font-semibold">Verified fish: {s.fish}</p>
            <p className="text-[11px] text-slate-500">Source: {s.source}</p>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed">
        Note: Fish It! is a separate game from Fisch. Location names such as Moosewood, Roslit Bay,
        Terrapin Island, Snowcap or Sunstone do not exist in Fish It! and will never appear on this
        site.
      </p>
    </div>
  );
}
