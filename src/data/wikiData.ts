export interface FishingRod {
  id: string;
  name: string;
  tier: 'Mythic' | 'Legendary' | 'Epic' | 'Rare' | 'Basic';
  luck: number;
  speed: number;
  resilience: number;
  price: string;
  location: string;
}

export interface FishBait {
  id: string;
  name: string;
  luckBonus: number;
  speedBonus: number;
  cost: number;
  preferredFish: string;
}

export interface FishSpecies {
  id: string;
  name: string;
  rarity: 'Mythic' | 'Legendary' | 'Epic' | 'Rare' | 'Uncommon' | 'Common';
  baseValue: number;
  spawnZone: string;
  preferredWeather: string;
  description: string;
}

export interface FishCode {
  id: string;
  code: string;
  reward: string;
  status: 'ACTIVE' | 'EXPIRED';
  dateAdded: string;
}

export const RODS_DATA: FishingRod[] = [
  { id: 'diamond-rod', name: 'Diamond Rod', tier: 'Mythic', luck: 1300, speed: 167, resilience: 95, price: 'C$ 1,500,000', location: 'Deep Trenches Merchant' },
  { id: 'element-rod', name: 'Element Rod', tier: 'Mythic', luck: 1111, speed: 130, resilience: 90, price: 'C$ 850,000', location: 'Elemental Shrine' },
  { id: 'oscar-rod', name: 'Great Rod of Oscar', tier: 'Legendary', luck: 1050, speed: 140, resilience: 88, price: 'C$ 600,000', location: 'Forsaken Shore NPC' },
  { id: 'ghostfinn-rod', name: 'Ghostfinn Rod', tier: 'Legendary', luck: 950, speed: 120, resilience: 85, price: 'C$ 450,000', location: 'Ghost Ship Wreck' },
  { id: 'scalding-hook', name: 'Scalding Hook (T7)', tier: 'Epic', luck: 880, speed: 115, resilience: 80, price: 'C$ 280,000', location: 'Volcanic Springs' },
  { id: 'carbon-rod', name: 'Carbon Rod', tier: 'Rare', luck: 450, speed: 80, resilience: 65, price: 'C$ 75,000', location: 'Roslit Harbour' },
  { id: 'plastic-rod', name: 'Reinforced Plastic Rod', tier: 'Basic', luck: 150, speed: 40, resilience: 45, price: 'C$ 12,000', location: 'Starter Tackle' },
  { id: 'flimsy-rod', name: 'Flimsy Bamboo Rod', tier: 'Basic', luck: 50, speed: 10, resilience: 20, price: 'C$ 500', location: 'Moosewood Dock' }
];

export const BAITS_DATA: FishBait[] = [
  { id: 'singularity-bait', name: 'Singularity Bait', luckBonus: 300, speedBonus: 50, cost: 2500, preferredFish: 'Void Kraken, Celestial Ray' },
  { id: 'aether-bait', name: 'Aether Glow Bait', luckBonus: 200, speedBonus: 35, cost: 1200, preferredFish: 'Prismatic Trout, Phantom Eel' },
  { id: 'dark-matter-bait', name: 'Dark Matter Nugget', luckBonus: 150, speedBonus: 25, cost: 800, preferredFish: 'Abyssal Angler, Shadow Bass' },
  { id: 'golden-shrimp', name: 'Golden Sugar Shrimp', luckBonus: 100, speedBonus: 20, cost: 400, preferredFish: 'Golden Koi, Sunfish' },
  { id: 'nightcrawler', name: 'Glow Nightcrawler', luckBonus: 50, speedBonus: 15, cost: 150, preferredFish: 'River Salmon, Perch' },
  { id: 'basic-worm', name: 'Common Earthworm', luckBonus: 10, speedBonus: 5, cost: 10, preferredFish: 'Minnow, Carp' }
];

export const FISH_SPECIES_DATA: FishSpecies[] = [
  { id: 'void-kraken', name: 'Void Leviathan Kraken', rarity: 'Mythic', baseValue: 125000, spawnZone: 'Mineshaft Abyss', preferredWeather: 'Solar Eclipse', description: 'Colossal eldritch cephalopod dwelling in the deepest radioactive sinkholes.' },
  { id: 'celestial-ray', name: 'Celestial Manta Ray', rarity: 'Mythic', baseValue: 95000, spawnZone: 'Forsaken Ocean', preferredWeather: 'Aurora Borealis', description: 'Luminescent ray emitting starlight ripples across the ocean surface.' },
  { id: 'prismatic-trout', name: 'Prismatic Rainbow Trout', rarity: 'Legendary', baseValue: 45000, spawnZone: 'Living Garden Waterfall', preferredWeather: 'Rainstorm', description: 'Scales refract full light spectrum into prismatic flashes.' },
  { id: 'phantom-eel', name: 'Spectral Phantom Eel', rarity: 'Legendary', baseValue: 38000, spawnZone: 'Ghostwreck Shoals', preferredWeather: 'Dense Fog', description: 'Translucent predator that slips through ordinary nets.' },
  { id: 'abyssal-angler', name: 'Abyssal Viper Angler', rarity: 'Legendary', baseValue: 32000, spawnZone: 'Mineshaft Floor', preferredWeather: 'Midnight', description: 'Bioluminescent lure that hypnotizes surrounding deep-sea fauna.' },
  { id: 'golden-koi', name: 'Imperial Golden Koi', rarity: 'Epic', baseValue: 18000, spawnZone: 'Zen Shrine Pond', preferredWeather: 'Clear Sky', description: 'Auspicious fish granting lucky aura to lucky anglers.' },
  { id: 'volcano-magma-bass', name: 'Obsidian Magma Bass', rarity: 'Epic', baseValue: 15000, spawnZone: 'Volcanic Springs', preferredWeather: 'Ash Rain', description: 'Armored scales withstand boiling sulfur temperatures.' },
  { id: 'great-white-apex', name: 'Apex Great White Shark', rarity: 'Epic', baseValue: 12000, spawnZone: 'Open Deep Waters', preferredWeather: 'Chop Waves', description: 'Fierce apex hunter requiring high resilience rods to reel in.' },
  { id: 'swordfish-gladiator', name: 'Atlantic Gladiator Swordfish', rarity: 'Rare', baseValue: 6500, spawnZone: 'Roslit Bay', preferredWeather: 'Windy', description: 'Fast-swimming game fish with needle-sharp bill.' },
  { id: 'neon-jellyfish', name: 'Phosphor Neon Jelly', rarity: 'Rare', baseValue: 4800, spawnZone: 'Coral Reefs', preferredWeather: 'Night', description: 'Pulsing electric bells illuminate dark undersea caverns.' },
  { id: 'king-salmon', name: 'Pacific King Salmon', rarity: 'Rare', baseValue: 3500, spawnZone: 'Moosewood Rapids', preferredWeather: 'Rain', description: 'Strong river runner providing steady mid-tier profits.' },
  { id: 'tiger-trout', name: 'Striped Tiger Trout', rarity: 'Uncommon', baseValue: 1800, spawnZone: 'Moosewood River', preferredWeather: 'Any', description: 'Aggressive predatory freshwater trout.' },
  { id: 'emerald-bass', name: 'Emerald Largemouth Bass', rarity: 'Uncommon', baseValue: 1200, spawnZone: 'Roslit Pond', preferredWeather: 'Sunny', description: 'Common sportfish caught using basic lures.' },
  { id: 'clownfish-coral', name: 'Anemone Clownfish', rarity: 'Common', baseValue: 450, spawnZone: 'Shallow Shallows', preferredWeather: 'Clear', description: 'Small colorful reef inhabitant.' },
  { id: 'bluegill-sun', name: 'Common Bluegill', rarity: 'Common', baseValue: 250, spawnZone: 'Moosewood Docks', preferredWeather: 'Any', description: 'First catch for beginner anglers.' },
  { id: 'coastal-minnow', name: 'Bait Minnow', rarity: 'Common', baseValue: 80, spawnZone: 'Shoreline', preferredWeather: 'Any', description: 'Used as fresh bait or sold for pocket change.' }
];

export const FISH_CODES_DATA: FishCode[] = [
  { id: 'code-angler2026', code: 'ANGLER2026', reward: '50,000 C$ + 5x Singularity Bait', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-deepocean', code: 'DEEPOCEAN', reward: 'Free Carbon Rod + 10x Golden Shrimp', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-fishatelier', code: 'FISHATELIER', reward: '25,000 C$ + 3x Luck Potion', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-mineshaft', code: 'MINESHAFT99', reward: 'Super Magnet Lure', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-krakenhunt', code: 'KRAKENHUNT', reward: '15,000 C$', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-starterkit', code: 'STARTERBAIT', reward: '50x Earthworms + 5,000 C$', status: 'ACTIVE', dateAdded: '' }
];
