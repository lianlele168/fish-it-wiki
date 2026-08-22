import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-sky-900/30 bg-[#040d16] mt-20 py-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300">
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-sky-400">Core Tools</h4>
            <div className="flex flex-col space-y-1">
              <Link href="/codes" className="hover:text-white">Active Codes</Link>
              <Link href="/rod-tier-list" className="hover:text-white">Rod Tier List</Link>
              <Link href="/catch-calculator" className="hover:text-white">Profit Calculator</Link>
              <Link href="/fish-database" className="hover:text-white">Fish Database</Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-sky-400">Guides & Meta</h4>
            <div className="flex flex-col space-y-1">
              <Link href="/bait-guide" className="hover:text-white">Bait Tier List</Link>
              <Link href="/enchantments" className="hover:text-white">Rod Enchantments</Link>
              <Link href="/potions-totems" className="hover:text-white">Weather Totems</Link>
              <Link href="/boats-speed" className="hover:text-white">Boats Speed Guide</Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-sky-400">Progression</h4>
            <div className="flex flex-col space-y-1">
              <Link href="/crab-cages" className="hover:text-white">Crab Cages Farm</Link>
              <Link href="/locations-map" className="hover:text-white">Fishing Spots Map</Link>
              <Link href="/quests-merchants" className="hover:text-white">Quests & NPCs</Link>
              <Link href="/aquarium-guide" className="hover:text-white">Aquarium Perks</Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-sky-400">Endgame</h4>
            <div className="flex flex-col space-y-1">
              <Link href="/secret-rods-crafting" className="hover:text-white">Secret Rod Crafting</Link>
              <Link href="/beginner-guide" className="hover:text-white">Beginner Guide & FAQ</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-900/30 pt-6 text-center text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Fish It! Wiki — Community database and utility toolset for Roblox Fisch.</p>
        </div>
      </div>
    </footer>
  );
}
