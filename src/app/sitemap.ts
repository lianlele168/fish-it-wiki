import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fishit.robloxwikihub.com";
  const d = new Date().toISOString();
  return [
    { url: base, lastModified: d, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/codes`, lastModified: d, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/rod-tier-list`, lastModified: d, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/catch-calculator`, lastModified: d, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/fish-database`, lastModified: d, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/bait-guide`, lastModified: d, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/enchantments`, lastModified: d, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/potions-totems`, lastModified: d, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/boats-speed`, lastModified: d, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/crab-cages`, lastModified: d, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/locations-map`, lastModified: d, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/quests-merchants`, lastModified: d, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/aquarium-guide`, lastModified: d, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/secret-rods-crafting`, lastModified: d, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/beginner-guide`, lastModified: d, changeFrequency: "monthly", priority: 0.7 },
  ];
}
