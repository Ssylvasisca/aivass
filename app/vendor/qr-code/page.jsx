"use client";

import React from "react";

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
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">QR Code Shipment</h1>
        <p className="text-sm text-slate-500 mt-1">SHP-2026-001 • PT. Filkom Sejahtera</p>
      </div>

      {/* Main QR Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-8 max-w-2xl mx-auto mt-8 flex flex-col items-center">
        
        <div className="w-full flex items-center gap-2 mb-6 text-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#38bdf8]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
          </svg>
          <h2 className="font-bold text-sm">Shipment QR Code</h2>
        </div>

        {/* Placeholder QR */}
        <div className="w-56 h-56 bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-center shadow-sm">
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download
          </button>
          <button 
            onClick={() => window.print()}
            className="flex-1 flex justify-center items-center gap-2 bg-[#38bdf8] hover:bg-[#0284c7] rounded-lg py-2.5 text-sm font-bold text-white transition-colors shadow-sm shadow-blue-500/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.724.092m6.524-4.316A8.962 8.962 0 0112 21c-4.97 0-9-4.03-9-9s4.03-9 9-9c1.658 0 3.21.448 4.5 1.229m2.25 3.328v6.75" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 15h.008v.008H17.25V15zM17.25 18h.008v.008H17.25V18zM17.25 21h.008v.008H17.25V21zM20.25 15h.008v.008H20.25V15zM20.25 18h.008v.008H20.25V18zM20.25 21h.008v.008H20.25V21z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
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
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-[15px]">{box.id}</h4>
                <p className="text-[11px] text-slate-400 font-medium mb-1">{box.items} Item • {box.date}</p>
                <p className="text-xs font-bold text-slate-400 tracking-wider">{box.qrText}</p>
              </div>
            </div>
            <div className="text-slate-300 group-hover:text-slate-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}