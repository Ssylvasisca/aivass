"use client";


export default function SupervisorDashboard() {
  return (
    <div className="space-y-6 text-black">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard Analytics</h1>
        <p className="text-gray-500 text-sm mt-1">Monitoring performa supply chain & discrepancy secara real-time</p>
      </div>
        <div className="flex items-center gap-1.5 text-sm text-slate-500">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Terakhir update: 9 April 2026
        </div>
      </div>

      {/* 4 Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Total Shipment */}
        <div className="bg-white rounded-xl p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 flex flex-col justify-between relative">
          <div className="absolute top-5 right-5 text-emerald-500 text-xs font-bold flex items-center gap-1">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
             +12%
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800">47</h2>
          <p className="text-xs text-slate-400 mt-1 font-medium">Total Shipment</p>
        </div>

        {/* Terverifikasi */}
        <div className="bg-white rounded-xl p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 flex flex-col justify-between relative">
          <div className="absolute top-5 right-5 text-emerald-500 text-xs font-bold flex items-center gap-1">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
             +89%
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800">42</h2>
          <p className="text-xs text-slate-400 mt-1 font-medium">Terverifikasi</p>
        </div>

        {/* Match Rate */}
        <div className="bg-white rounded-xl p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 flex flex-col justify-between relative">
           <div className="absolute top-5 right-5 text-emerald-500 text-xs font-bold flex items-center gap-1">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
             +2.3%
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800">78.6%</h2>
          <p className="text-xs text-slate-400 mt-1 font-medium">Match Rate</p>
        </div>

        {/* Open Tickets */}
        <div className="bg-white rounded-xl p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 flex flex-col justify-between relative">
          <div className="absolute top-5 right-5 text-red-500 text-xs font-bold flex items-center gap-1">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" /></svg>
             -3
          </div>
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800">5</h2>
          <p className="text-xs text-slate-400 mt-1 font-medium">Open Tickets</p>
        </div>

      </div>

      {/* Verifikasi Overview Panel */}
      <div className="bg-white rounded-xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
        <div className="flex items-center gap-2 mb-6">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <h3 className="text-base font-bold text-slate-800">Verifikasi Overview</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Cards */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bg-[#f8fafc] rounded-xl p-4 flex flex-col items-center justify-center relative border border-slate-100">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mb-2"></div>
              <div className="text-2xl font-bold text-emerald-500">33</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Match</div>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-4 flex flex-col items-center justify-center relative border border-slate-100">
              <div className="w-2 h-2 rounded-full bg-red-500 mb-2"></div>
              <div className="text-2xl font-bold text-red-500">5</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Mismatch</div>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-4 flex flex-col items-center justify-center relative border border-slate-100">
              <div className="w-2 h-2 rounded-full bg-orange-400 mb-2"></div>
              <div className="text-2xl font-bold text-orange-400">3</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Missing</div>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-4 flex flex-col items-center justify-center relative border border-slate-100">
              <div className="w-2 h-2 rounded-full bg-blue-500 mb-2"></div>
              <div className="text-2xl font-bold text-blue-500">1</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Over</div>
            </div>

          </div>

          {/* Right Distribution */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <h4 className="text-xs font-semibold text-slate-500 mb-4">Distribusi Hasil Verifikasi</h4>
            
            <div className="space-y-3 w-full">
              {/* Match */}
              <div className="flex items-center gap-3">
                <div className="w-16 text-xs text-slate-600 font-medium">Match</div>
                <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: "78.6%" }}></div>
                </div>
                <div className="w-10 text-xs text-slate-800 text-right font-medium">78.6%</div>
              </div>
              
              {/* Mismatch */}
              <div className="flex items-center gap-3">
                <div className="w-16 text-xs text-slate-600 font-medium">Mismatch</div>
                <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-red-500 h-full rounded-full" style={{ width: "11.9%" }}></div>
                </div>
                <div className="w-10 text-xs text-slate-800 text-right font-medium">11.9%</div>
              </div>

              {/* Missing */}
              <div className="flex items-center gap-3">
                <div className="w-16 text-xs text-slate-600 font-medium">Missing</div>
                <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-orange-400 h-full rounded-full" style={{ width: "7.1%" }}></div>
                </div>
                <div className="w-10 text-xs text-slate-800 text-right font-medium">7.1%</div>
              </div>

              {/* Over */}
              <div className="flex items-center gap-3">
                <div className="w-16 text-xs text-slate-600 font-medium">Over</div>
                <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: "2.4%" }}></div>
                </div>
                <div className="w-10 text-xs text-slate-800 text-right font-medium">2.4%</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Panels Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Vendor Performance Scorecard */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
           <div className="flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
            <h3 className="text-base font-bold text-slate-800">Vendor Performance Scorecard</h3>
          </div>

          <div className="space-y-4">
            {/* Vendor 1 */}
            <div className="bg-[#f8fafc] rounded-xl p-4 border border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs">
                    #1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">PT. Maju Komponen</h4>
                    <p className="text-xs text-slate-500">25 total shipment</p>
                  </div>
                </div>
                <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">
                  80%
                </div>
              </div>
              
              <div className="w-full bg-slate-200 rounded-full h-2 mb-3 overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: "80%" }}></div>
              </div>

              <div className="flex gap-4 text-xs font-medium">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-slate-600">20 match</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-slate-600">5 discrepancy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  <span className="text-slate-600">0 pending</span>
                </div>
              </div>
            </div>

            {/* Vendor 2 */}
            <div className="bg-[#f8fafc] rounded-xl p-4 border border-slate-100 opacity-60">
               <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-slate-200 text-slate-600 font-bold flex items-center justify-center text-xs">
                    #2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">CV. Sejahtera Parts</h4>
                    <p className="text-xs text-slate-500">12 total shipment</p>
                  </div>
                </div>
                <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">
                  66.7%
                </div>
              </div>
              
              <div className="w-full bg-slate-200 rounded-full h-2 mb-3 overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: "66.7%" }}></div>
              </div>

              <div className="flex gap-4 text-xs font-medium">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-slate-600">8 match</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-slate-600">4 discrepancy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  <span className="text-slate-600">0 pending</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Shipment Terbaru */}
        <div className="bg-white rounded-xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
           <div className="flex items-center gap-2 mb-6">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
            <h3 className="text-base font-bold text-slate-800">Shipment Terbaru</h3>
          </div>

          <div className="space-y-3">
            {/* Shipment 1 */}
            <div className="bg-[#f8fafc] rounded-xl p-4 border border-slate-100">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold text-slate-800">SHP-2026-001</h4>
                <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider">RECEIVED</span>
              </div>
              <p className="text-xs text-slate-500 mb-2">PT. Maju Komponen</p>
              <div className="flex gap-4 text-xs font-medium text-slate-600">
                <span>2 box</span>
                <span>5 item</span>
              </div>
            </div>

            {/* Shipment 2 */}
            <div className="bg-[#f8fafc] rounded-xl p-4 border border-slate-100 opacity-70">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold text-slate-800">SHP-2026-002</h4>
                <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider">IN TRANSIT</span>
              </div>
              <p className="text-xs text-slate-500 mb-2">CV. Sejahtera Parts</p>
              <div className="flex gap-4 text-xs font-medium text-slate-600">
                <span>5 box</span>
                <span>12 item</span>
              </div>
            </div>
            
             {/* Shipment 3 */}
            <div className="bg-[#f8fafc] rounded-xl p-4 border border-slate-100 opacity-70">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold text-slate-800">SHP-2026-003</h4>
                <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider">RECEIVED</span>
              </div>
              <p className="text-xs text-slate-500 mb-2">PT. Abadi Teknik</p>
              <div className="flex gap-4 text-xs font-medium text-slate-600">
                <span>1 box</span>
                <span>3 item</span>
              </div>
            </div>
          </div>

        </div>

      </div>
      
    </div>
  );
}
