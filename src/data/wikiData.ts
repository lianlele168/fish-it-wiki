/**
 * Fish It! (Roblox) — Verified Data Layer
 *
 * Every entry below is sourced from the real-data verification file
 * (tier1-rescue/real-data/fishit.md), cross-checked between the Fish It! Wiki
 * (fish-it.fandom.com) and at least one media source (Beebom / Pocket Tactics /
 * TheGamer / Eldorado.gg) on 2026-09-19.
 *
 * Fish It! is a separate game from Fisch: no Fisch locations (Moosewood,
 * Roslit Bay, Terrapin, Snowcap, Sunstone) appear anywhere in this file.
 * Luck values are percentages (%), prices are in C$.
 * Fields that could not be verified are marked "Not documented" — no invented data.
 */

export interface FishingRod {
  id: string;
  name: string;
  /** Verified price in C$, or "Free (default)" for the starter rod. */
  price: string;
  /** Verified luck bonus as a percentage number (e.g. 140 = 140%). */
  luck: number;
  /** Verified lure-speed bonus as a percentage number (e.g. 25 = 25%). */
  speed: number;
  /** Verified max load in kg. */
  maxWeight: number;
  /** Verified source / purchase location. */
  location: string;
}

export type FishRarity =
  | 'Common'
  | 'Uncommon'
  | 'Rare'
  | 'Epic'
  | 'Legendary'
  | 'Mythical'
  | 'Secret';

export interface FishSpecies {
  id: string;
  name: string;
  rarity: FishRarity;
  /** Verified encounter odds, e.g. "1 in 5" or "1 in 20,000". */
  rarityOdds: string;
  /** Verified spawn location(s) — Fish It! locations only. */
  spawnZone: string;
  /** Verified sell price range in C$, or "Not documented (varies with weight)". */
  sellPrice: string;
}

/**
 * 15 verified rods — Fisherman Island shop is the verified purchase hub for
 * all non-starter rods (Fish It! Wiki Fishing Rods page).
 */
export const RODS_DATA: FishingRod[] = [
  { id: 'starter-rod', name: 'Starter Rod', price: 'Free (default)', luck: 0, speed: 0, maxWeight: 10, location: 'Given to every new player at the start' },
  { id: 'bottle-rod', name: 'Bottle Rod', price: '300 C$', luck: 20, speed: 0, maxWeight: 30, location: 'Fisherman Island shop' },
  { id: 'carbon-rod', name: 'Carbon Rod', price: '900 C$', luck: 30, speed: 4, maxWeight: 20, location: 'Fisherman Island shop' },
  { id: 'plastic-rod', name: 'Plastic Rod', price: '1,500 C$', luck: 15, speed: 0, maxWeight: 45, location: 'Fisherman Island shop' },
  { id: 'chrome-rod', name: 'Chrome Rod', price: '6,500 C$', luck: 80, speed: 3, maxWeight: 50, location: 'Fisherman Island shop' },
  { id: 'fluorescent-rod', name: 'Fluorescent Rod', price: '9,000 C$', luck: 85, speed: 0, maxWeight: 50, location: 'Fisherman Island shop' },
  { id: 'lucky-rod', name: 'Lucky Rod', price: '15,000 C$', luck: 140, speed: 0, maxWeight: 40, location: 'Fisherman Island shop' },
  { id: 'kiwichi-rod', name: 'Kiwichi Rod', price: '15,000 C$', luck: 110, speed: 1, maxWeight: 80, location: 'Fisherman Island shop' },
  { id: 'dark-blade-rod', name: 'Dark Blade (Solo) Rod', price: '50,000 C$', luck: 200, speed: 15, maxWeight: 60, location: 'Fisherman Island shop' },
  { id: 'ghostfire-rod', name: 'Ghostfire Rod', price: '55,000 C$', luck: 180, speed: 20, maxWeight: 80, location: 'Fisherman Island shop' },
  { id: 'red-ghostfire-rod', name: 'Red Ghostfire Rod', price: '55,000 C$', luck: 180, speed: 20, maxWeight: 80, location: 'Ghostfire variant' },
  { id: 'korig-rod', name: 'Korig Rod', price: '75,000 C$', luck: 250, speed: 25, maxWeight: 80, location: 'Fisherman Island shop' },
  { id: 'ares-rod', name: 'Ares Rod', price: '100,000 C$', luck: 300, speed: 25, maxWeight: 500, location: 'Fisherman Island shop' },
  { id: 'lava-rod', name: 'Lava Rod', price: '175,000 C$', luck: 200, speed: 0, maxWeight: 500, location: 'Fisherman Island shop' },
  { id: 'steampunk-rod', name: 'Steampunk Rod', price: '215,000 C$', luck: 175, speed: 30, maxWeight: 700, location: 'Fisherman Island shop' },
];

/**
 * 22 verified fish — rarity and location from the Fish It! Wiki Fish Index,
 * sell prices (where visible) from TheGamer's Fish It fish price list.
 * Sell prices float with fish weight; the values are common ranges.
 * Fish with no verifiable sell price are marked "Not documented".
 */
export const FISH_SPECIES_DATA: FishSpecies[] = [
  { id: 'sardine', name: 'Sardine', rarity: 'Common', rarityOdds: '1 in 5', spawnZone: 'Fisherman Island / Ocean', sellPrice: '2–3 C$' },
  { id: 'mackerel', name: 'Mackerel', rarity: 'Common', rarityOdds: '1 in 5', spawnZone: 'Fisherman Island / Ocean', sellPrice: '2–4 C$' },
  { id: 'herring', name: 'Herring', rarity: 'Common', rarityOdds: '1 in 5', spawnZone: 'Fisherman Island / Ocean', sellPrice: '2–3 C$' },
  { id: 'anchovy', name: 'Anchovy', rarity: 'Common', rarityOdds: '1 in 5', spawnZone: 'Fisherman Island / Ocean', sellPrice: '2–3 C$' },
  { id: 'bream', name: 'Bream', rarity: 'Common', rarityOdds: '1 in 5', spawnZone: 'Fisherman Island / Ocean', sellPrice: '2–4 C$' },
  { id: 'tilapia', name: 'Tilapia', rarity: 'Common', rarityOdds: '1 in 5', spawnZone: 'Fisherman Island', sellPrice: '3–5 C$' },
  { id: 'carp', name: 'Carp', rarity: 'Common', rarityOdds: '1 in 5', spawnZone: 'Fisherman Island', sellPrice: '3–5 C$' },
  { id: 'catfish', name: 'Catfish', rarity: 'Common', rarityOdds: '1 in 5', spawnZone: 'Fisherman Island', sellPrice: '3–5 C$' },
  { id: 'tuna', name: 'Tuna', rarity: 'Common', rarityOdds: '1 in 5', spawnZone: 'Ocean', sellPrice: 'Not documented (varies with weight)' },
  { id: 'flounder', name: 'Flounder', rarity: 'Uncommon', rarityOdds: '1 in 50', spawnZone: 'Fisherman Island', sellPrice: '3–5 C$' },
  { id: 'halibut', name: 'Halibut', rarity: 'Uncommon', rarityOdds: '1 in 50', spawnZone: 'Fisherman Island', sellPrice: '5–8 C$' },
  { id: 'salmon', name: 'Salmon', rarity: 'Uncommon', rarityOdds: '1 in 50', spawnZone: 'Ocean', sellPrice: '8–12 C$' },
  { id: 'mahi-mahi', name: 'Mahi Mahi', rarity: 'Uncommon', rarityOdds: '1 in 50', spawnZone: 'Ocean', sellPrice: '10–15 C$' },
  { id: 'axolotl', name: 'Axolotl', rarity: 'Uncommon', rarityOdds: '1 in 50', spawnZone: 'Kohana', sellPrice: 'Not documented (varies with weight)' },
  { id: 'swordfish', name: 'Swordfish', rarity: 'Rare', rarityOdds: '1 in 300', spawnZone: 'Ocean', sellPrice: '40–60 C$' },
  { id: 'barracuda', name: 'Barracuda', rarity: 'Rare', rarityOdds: '1 in 300', spawnZone: 'Fisherman Island', sellPrice: 'Not documented (varies with weight)' },
  { id: 'frog', name: 'Frog', rarity: 'Rare', rarityOdds: '1 in 350', spawnZone: 'Fisherman Island', sellPrice: 'Not documented (varies with weight)' },
  { id: 'pufferfish', name: 'Pufferfish', rarity: 'Rare', rarityOdds: '1 in 350', spawnZone: 'Ocean / Coral Reef', sellPrice: 'Not documented (varies with weight)' },
  { id: 'darwin-clownfish', name: 'Darwin Clownfish', rarity: 'Rare', rarityOdds: '1 in 750', spawnZone: 'Fisherman Island', sellPrice: 'Not documented (varies with weight)' },
  { id: 'sea-turtle', name: 'Sea Turtle', rarity: 'Rare', rarityOdds: '1 in 350', spawnZone: 'Kohana / Coral Reef', sellPrice: 'Not documented (varies with weight)' },
  { id: 'orca', name: 'Orca', rarity: 'Epic', rarityOdds: '1 in 5,000', spawnZone: 'Kohana', sellPrice: 'Not documented (varies with weight)' },
  { id: 'colossal-squid', name: 'Colossal Squid', rarity: 'Legendary', rarityOdds: '1 in 20,000', spawnZone: 'Kohana', sellPrice: 'Not documented (varies with weight)' },
];

/**
 * Verified Fish It! locations (Fish It! Wiki Locations + Pocket Tactics).
 * These are Fish It!'s own map areas — never replace them with Fisch names.
 */
export const LOCATIONS_DATA: string[] = [
  'Fisherman Island',
  'Ocean',
  'Kohana',
  'Kohana Volcano',
  'Coral Reef (Tropical Garden)',
  'Ancient Isle',
  'Enchant Temple',
  'Weather Machine',
  'Esoteric Depths',
  'The Land of Lost, Forgotten and Discovered',
  'Winter Shepherd',
  'Geminian Beach',
];

/**
 * Bait / bobber data: NOT verified. The Fish It! Wiki baits page could not be
 * retrieved and no cross-checkable numeric bait table exists (2026-09-19), so
 * no bait entries are shipped here. Do not add bait stats without sources.
 */
