"use client";


export default function PpicDashboardPage() {
  return (
    <div className="space-y-6 text-black">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard Analytics</h1>
        <p className="text-gray-500 text-sm mt-1">Monitoring performa supply chain & discrepancy secara real-time</p>
      </div>
    
      {/* 4 Cards (Metrics) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] relative overflow-hidden group hover:border-blue-200 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>
            <div className="flex items-center text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 mr-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>
              12%
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">47</h3>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Total Shipment</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] relative overflow-hidden group hover:border-emerald-200 transition-colors">
           <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex items-center text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 mr-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>
              89%
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">42</h3>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Terverifikasi</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] relative overflow-hidden group hover:border-emerald-200 transition-colors">
           <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
            <div className="flex items-center text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 mr-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>
              2.3%
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">78.6%</h3>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Match Rate</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] relative overflow-hidden group hover:border-rose-200 transition-colors">
           <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
              </svg>
            </div>
            <div className="flex items-center text-rose-500 text-xs font-bold bg-rose-50 px-2 py-0.5 rounded-full">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 mr-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
              3
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">5</h3>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Open Tickets</p>
          </div>
        </div>
      </div>

      {/* Grid Bawah: Verifikasi Overview & Distribusi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Panel Kiri: Distribusi Discrepancy */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-6">
           <div className="flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
            <h3 className="text-base font-bold text-slate-800">Distribusi Discrepancy</h3>
          </div>

          <div className="space-y-5">
            {/* Match */}
            <div>
              <div className="flex justify-between items-end mb-1.5">
                <span className="text-sm font-semibold text-slate-700">Match</span>
                <span className="text-sm font-bold text-slate-800">33 <span className="text-xs text-slate-400 font-medium">(78.6%)</span></span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '78.6%' }}></div>
              </div>
            </div>
            {/* Mismatch */}
            <div>
              <div className="flex justify-between items-end mb-1.5">
                <span className="text-sm font-semibold text-slate-700">Mismatch</span>
                <span className="text-sm font-bold text-slate-800">5 <span className="text-xs text-slate-400 font-medium">(11.9%)</span></span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-rose-500 h-2 rounded-full" style={{ width: '11.9%' }}></div>
              </div>
            </div>
            {/* Missing */}
            <div>
              <div className="flex justify-between items-end mb-1.5">
                <span className="text-sm font-semibold text-slate-700">Missing</span>
                <span className="text-sm font-bold text-slate-800">3 <span className="text-xs text-slate-400 font-medium">(7.1%)</span></span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-amber-400 h-2 rounded-full" style={{ width: '7.1%' }}></div>
              </div>
            </div>
            {/* Over */}
            <div>
              <div className="flex justify-between items-end mb-1.5">
                <span className="text-sm font-semibold text-slate-700">Over</span>
                <span className="text-sm font-bold text-slate-800">1 <span className="text-xs text-slate-400 font-medium">(2.4%)</span></span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '2.4%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel Kanan: Vendor Performance Scorecard */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-6 flex flex-col h-full">
           <div className="flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
            <h3 className="text-base font-bold text-slate-800">Vendor Performance</h3>
          </div>

          <div className="space-y-4 flex-1">
            {/* Vendor 1 */}
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-slate-800">PT. Maju Komponen</span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">Score: 92%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5 mb-2">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <div className="flex gap-3 text-[10px] text-slate-500 font-medium">
                <span>24 shipment</span>
                <span className="text-emerald-500">22 match</span>
                <span className="text-rose-500">2 discrepancy</span>
              </div>
            </div>

            {/* Vendor 2 */}
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-slate-800">CV. Sejahtera Parts</span>
                <span className="text-[10px] font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">Score: 66.7%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5 mb-2">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '66.7%' }}></div>
              </div>
              <div className="flex gap-3 text-[10px] text-slate-500 font-medium">
                <span>12 shipment</span>
                <span className="text-emerald-500">8 match</span>
                <span className="text-rose-500">4 discrepancy</span>
              </div>
            </div>

            {/* Vendor 3 */}
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-slate-800">PT. Abadi Teknik</span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">Score: 90%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5 mb-2">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <div className="flex gap-3 text-[10px] text-slate-500 font-medium">
                <span>10 shipment</span>
                <span className="text-emerald-500">9 match</span>
                <span className="text-rose-500">1 discrepancy</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Full Width Bawah: Ticket Discrepancy Terbaru */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center gap-2 bg-slate-50/50">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-amber-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="text-base font-bold text-slate-800">Ticket Discrepancy Terbaru</h3>
        </div>
        <div className="p-2 space-y-1">
          {/* Ticket 1 */}
          <div className="p-3 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between group">
            <div>
              <h4 className="text-sm font-bold text-slate-800">TKT-2026-001</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">PT. Maju Komponen • SHP-2026-001</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-rose-50 text-rose-600 text-[10px] font-bold tracking-wide uppercase">Mismatch</span>
              <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-[10px] font-bold tracking-wide uppercase">Open</span>
            </div>
          </div>
          
          {/* Ticket 2 */}
          <div className="p-3 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between group">
            <div>
              <h4 className="text-sm font-bold text-slate-800">TKT-2026-002</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">CV. Sejahtera Parts • SHP-2026-002</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-600 text-[10px] font-bold tracking-wide uppercase">Missing</span>
              <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-600 text-[10px] font-bold tracking-wide uppercase">Hold</span>
            </div>
          </div>

          {/* Ticket 3 */}
          <div className="p-3 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between group">
            <div>
              <h4 className="text-sm font-bold text-slate-800">TKT-2026-003</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">PT. Maju Komponen • SHP-2026-003</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wide uppercase">Over</span>
              <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-600 text-[10px] font-bold tracking-wide uppercase">Resolved</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
