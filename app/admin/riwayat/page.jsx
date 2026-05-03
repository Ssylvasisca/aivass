"use client";


export default function AdminRiwayatPage() {
  return (
   <div className="space-y-6 text-black">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Riwayat Verifikasi</h1>
        <p className="text-gray-500 text-sm mt-1">Log semua verifikasi inbound yang telah dilakukan</p>
      </div>

      {/* List Riwayat */}
      <div className="space-y-4 mt-6">
        
        {/* Card 1 - MATCH */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-emerald-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-slate-800 text-[15px]">SHP-2026-001 / BOX-001</h3>
                <span className="px-2 py-0.5 rounded text-[9px] font-bold tracking-wider bg-emerald-50 text-emerald-500 uppercase">
                  MATCH
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1.5 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                5/4/2026, 16.30.00
                <span className="mx-1 text-slate-300">|</span>
                oleh Budi Santoso
              </div>
            </div>
          </div>
          <div className="text-xs text-slate-400 font-medium">
            2 item
          </div>
        </div>

        {/* Card 2 - MISMATCH */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-slate-800 text-[15px]">SHP-2026-001 / BOX-002</h3>
                <span className="px-2 py-0.5 rounded text-[9px] font-bold tracking-wider bg-red-50 text-red-500 uppercase">
                  MISMATCH
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1.5 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                5/4/2026, 17.15.00
                <span className="mx-1 text-slate-300">|</span>
                oleh Budi Santoso
              </div>
            </div>
          </div>
          <div className="text-xs text-slate-400 font-medium">
            3 item
          </div>
        </div>

      </div>
    </div>
  );
}
