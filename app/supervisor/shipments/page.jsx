"use client";


export default function ShipmentsPage() {
  const shipments = [
    {
      id: "SHP-2026-001",
      status: "Diterima",
      date: "3/4/2026",
      vendor: "PT. Maju Komponen",
      po: "PO-2026-001",
      progress: 4, // 4 out of 5 segments filled
      boxes: 2,
      items: 5,
      lockedDate: "3/4/2026",
    },
    {
      id: "SHP-2026-002",
      status: "Dalam Perjalanan",
      date: "6/4/2026",
      vendor: "PT. Maju Komponen",
      po: "PO-2026-003",
      progress: 3, // 3 out of 5 segments filled
      boxes: 1,
      items: 2,
      lockedDate: "6/4/2026",
    },
  ];

  return (
    <div className="space-y-6 text-black">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Tracking Shipment</h1>
        <p className="text-gray-500 text-sm mt-1">Monitor status semua pengiriman</p>
      </div>

      {/* Shipments List */}
      <div className="space-y-4">
        {shipments.map((shipment) => (
          <div
            key={shipment.id}
            className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-6 flex flex-col gap-4"
          >
            {/* Top Area: Header, Badge, Date */}
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-bold text-slate-800 text-base">{shipment.id}</h2>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      shipment.status === "Diterima"
                        ? "bg-blue-50 text-blue-500"
                        : "bg-amber-50 text-amber-500"
                    }`}
                  >
                    {shipment.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {shipment.vendor} • PO: {shipment.po}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {shipment.date}
              </div>
            </div>

            {/* Progress Bar Area */}
            <div className="flex gap-1.5 h-2 w-full mt-2 mb-2">
              {[...Array(5)].map((_, idx) => (
                <div
                  key={idx}
                  className={`flex-1 rounded-full ${
                    idx < shipment.progress ? "bg-blue-500" : "bg-slate-100"
                  }`}
                ></div>
              ))}
            </div>

            {/* Bottom Area: Info */}
            <div className="flex items-center gap-4 text-[11px] font-medium text-slate-500 pt-1">
              <div className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                {shipment.boxes} box
              </div>
              <div className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                {shipment.items} item
              </div>
              <div className="flex items-center gap-1.5 text-emerald-500 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-500">Locked: {shipment.lockedDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
