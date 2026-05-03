"use client";

export default function QRCodeShipmentPage() {
  const dummyBoxes = [
    {
      id: "BOX-001",
      items: 3,
      date: "1/4/2026",
      qrText: "AIVAS-SHP2026001-BOX001"
    },
    {
      id: "BOX-001", // According to the screenshot dummy data
      items: 3,
      date: "1/4/2026",
      qrText: "AIVAS-SHP2026001-BOX001"
    }
  ];

  return (
    <div className="space-y-6 text-black">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">QR Code Shipment</h1>
        <p className="text-gray-500 text-sm mt-1">SHP-2026-001 • PT. Filkom Sejahtera</p>
      </div>

      {/* Main QR Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-8 max-w-2xl mx-auto mt-8 flex flex-col items-center">
        
        <div className="w-full flex items-center gap-2 mb-6 text-slate-800">
          <img 
            src="/ic_qrblue.jpg" 
            alt="QR Icon" 
            className="w-5 h-5 object-contain" 
          />
          <h2 className="font-bold text-sm">Shipment QR Code</h2>
        </div>

        {/* Placeholder QR */}
        <div className="w-56 h-56 bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-center shadow-sm">
          {/* gambar generate qr */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-slate-800">
             <path fillRule="evenodd" d="M3 4.5A1.5 1.5 0 014.5 3h4.5A1.5 1.5 0 0110.5 4.5v4.5A1.5 1.5 0 019 10.5H4.5A1.5 1.5 0 013 9V4.5zM4.5 4.5v4.5h4.5V4.5H4.5z" clipRule="evenodd" />
             <path fillRule="evenodd" d="M13.5 4.5A1.5 1.5 0 0115 3h4.5A1.5 1.5 0 0121 4.5v4.5a1.5 1.5 0 01-1.5 1.5H15a1.5 1.5 0 01-1.5-1.5V4.5zM15 4.5v4.5h4.5V4.5H15z" clipRule="evenodd" />
             <path fillRule="evenodd" d="M3 15A1.5 1.5 0 014.5 13.5h4.5A1.5 1.5 0 0110.5 15v4.5A1.5 1.5 0 019 21H4.5A1.5 1.5 0 013 19.5V15zM4.5 15v4.5h4.5V15H4.5z" clipRule="evenodd" />
             <path d="M15 13.5H13.5V15H15v-1.5zM18 13.5h-1.5V15H18v-1.5zM21 13.5h-1.5V15H21v-1.5zM15 16.5H13.5V18H15v-1.5zM16.5 16.5h1.5V15h-1.5v1.5zM18 16.5v1.5h1.5v-1.5H18zM19.5 18h1.5v-1.5h-1.5V18zM15 19.5v1.5h1.5v-1.5H15zM18 19.5H16.5v1.5h1.5v-1.5zM21 19.5h-1.5v1.5H21v-1.5z" />
             <rect x="6" y="6" width="1.5" height="1.5" />
             <rect x="16.5" y="6" width="1.5" height="1.5" />
             <rect x="6" y="16.5" width="1.5" height="1.5" />
          </svg>
        </div>

        <div className="text-center mt-6 mb-8">
          <p className="font-bold text-slate-500 tracking-wider text-sm mb-1">AIVAS-SHP2026001-BOX001</p>
          <p className="text-xs text-slate-400">Tempel QR Code ini pada box fisik</p>
        </div>

        <div className="flex gap-4 w-full max-w-sm">
          <button className="flex-1 flex justify-center items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg py-2.5 text-sm font-bold text-slate-600 transition-colors shadow-sm">
            <img 
              src="/ic_download.jpg" 
              alt="Download Icon" 
              className="w-5 h-5 object-contain" 
            />
            Download
          </button>
          <button 
            onClick={() => window.print()}
            className="flex-1 flex justify-center items-center gap-2 bg-[#38bdf8] hover:bg-[#0284c7] rounded-lg py-2.5 text-sm font-bold text-white transition-colors shadow-sm shadow-blue-500/20"
          >
            <img 
              src="/ic_print.jpg" 
              alt="Print Icon" 
              className="w-5 h-5 object-contain" 
            />
            Cetak
          </button>
        </div>
      </div>

      {/* QR Code Box List */}
      <div className="mt-8 max-w-2xl mx-auto space-y-3">
        <h3 className="text-sm font-bold text-slate-800 mb-3">QR Code Box</h3>
        {dummyBoxes.map((box, index) => (
          <div key={index} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center transition-colors group-hover:bg-blue-100">
                <img 
                  src="/ic_qrblue.jpg" 
                  alt="QR Box Icon" 
                  className="w-6 h-6 object-contain" 
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-[15px]">{box.id}</h4>
                <p className="text-[11px] text-slate-400 font-medium mb-1">{box.items} Item • {box.date}</p>
                <p className="text-xs font-bold text-slate-400 tracking-wider">{box.qrText}</p>
              </div>
            </div>
            
            {/* Button Arrow */}
            <div className="mr-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              <img 
                src="/ic_arrow.jpg" 
                alt="Arrow Right" 
                className="w-5 h-5 object-contain" 
              />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}