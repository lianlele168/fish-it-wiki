export default function BoatsSpeedPage() {
  const boats = [
    { name: "Kayak", speed: "100 S/ps", seats: 1, cost: "45,000 C$", vendor: "Wandering Merchant", note: "Fastest solo ocean transport" },
    { name: "Speedboat", speed: "85 S/ps", seats: 2, cost: "25,000 C$", vendor: "Roslit Shipwright", note: "Top mid-game option" },
    { name: "Hovercraft", speed: "55 S/ps", seats: 2, cost: "12,000 C$", vendor: "Moosewood Shipwright (Req Lv 15)", note: "Can glide over shallow waters" },
    { name: "Bass Boat", speed: "45 S/ps", seats: 4, cost: "6,000 C$", vendor: "Moosewood Shipwright", note: "Great multi-player boat" },
    { name: "Surfboard", speed: "30 S/ps", seats: 1, cost: "1,500 C$", vendor: "Moosewood Shipwright", note: "Agile solo board" },
    { name: "Rowboat", speed: "25 S/ps", seats: 3, cost: "Free / 500 C$", vendor: "Moosewood Starter Dock", note: "Default starter boat" },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-black text-white">Fish It! Boats & Watercraft Speed Guide 🛥️</h1>
        <p className="text-slate-400 text-sm mt-1">Compare speed (S/ps), passenger capacity, pricing, and Shipwright vendor locations across all boats in Roblox Fisch.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="divide-y divide-slate-800">
          {boats.map((b) => (
            <div key={b.name} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
              <div className="space-y-1 w-44">
                <div className="font-bold text-white text-base">{b.name}</div>
                <div className="text-slate-400">📍 {b.vendor}</div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
                <div>Max Speed: <strong className="text-sky-300 text-sm">{b.speed}</strong></div>
                <div>Passenger Seats: <strong className="text-purple-300 text-sm">{b.seats} seats</strong></div>
                <div>Cost: <strong className="text-emerald-400 text-sm">{b.cost}</strong></div>
              </div>
              <div className="text-slate-400 italic text-xs max-w-xs">{b.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
