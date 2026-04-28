"use client";

export default function QRCodePage() {
  // Data dummy untuk list di bawah
  const qrBoxes = [
    { id: "BOX-001", code: "AIVAS-SHP2026001-BOX001", detail: "2 item • 350 pcs total" },
    { id: "BOX-002", code: "AIVAS-SHP2026001-BOX002", detail: "3 item • 650 pcs total" },
  ];

  return (
    <div className="max-w-4xl space-y-8 text-slate-800 pb-20">
      {/* Header Halaman */}
      <div>
        <h1 className="text-2xl font-extrabold text-[#1e293b]">QR Code Shipment</h1>
        <p className="text-slate-400 text-sm font-medium mt-1">
          SHP-2026-001 • PT. Maju Komponen
        </p>
      </div>

      {/* Card Utama: Shipment QR Code */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-8">
          <div className="text-blue-500">
             {/* Ikon kecil di samping judul */}
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
             </svg>
          </div>
          <h2 className="text-lg font-bold text-[#1e293b]">Shipment QR Code</h2>
        </div>

        <div className="flex flex-col items-center justify-center py-4">
          {/* Container QR Code dengan dashed border */}
          <div className="border-2 border-dashed border-slate-100 rounded-[2.5rem] p-10 mb-6">
            <div className="w-48 h-48">
              <img 
                src="/qrcode_dummy.jpg" 
                alt="QR Code" 
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
          </div>

          <div className="text-center space-y-1 mb-8">
            <p className="text-blue-500 font-bold tracking-wider text-xs">AIVAS-SHP2026001-BOX001</p>
            <p className="text-slate-400 text-xs font-medium">Tempel QR Code ini pada box fisik</p>
          </div>

          {/* Tombol Aksi Utama */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 font-bold text-slate-600 text-sm transition-all shadow-sm">
              <img src="/ic_download.jpg" alt="Download" className="w-4 h-4" />
              Download
            </button>
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#0ea5e9] text-white rounded-xl shadow-lg shadow-blue-100 hover:bg-[#0284c7] font-bold text-sm transition-all"
            >
              <img src="/ic_print.jpg" alt="Print" className="w-4 h-4 brightness-0 invert" />
              Cetak
            </button>
          </div>
        </div>
      </div>

      {/* Section: QR Code per Box */}
      <div className="space-y-4">
        <h3 className="text-md font-bold text-[#1e293b] px-1">QR Code per Box</h3>
        
        <div className="space-y-3">
          {qrBoxes.map((box) => (
            <div key={box.id} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-200 transition-colors group">
              <div className="flex items-center gap-4">
                {/* Preview QR Kecil */}
                <div className="w-12 h-12 bg-slate-50 rounded-lg p-2 border border-slate-50 flex items-center justify-center">
                  <img src="/qrcode_dummy.jpg" alt="QR Mini" className="w-full h-full object-contain opacity-80" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1e293b]">{box.id}</h4>
                  <p className="text-[10px] text-blue-500 font-semibold tracking-tight">{box.code}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{box.detail}</p>
                </div>
              </div>
              
              <button className="p-2.5 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all">
                <img src="/ic_download.jpg" alt="Download Box" className="w-4 h-4 opacity-60 group-hover:opacity-100" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}