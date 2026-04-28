"use client";

import React, { useState, useEffect } from "react";

export default function AdminScanPage() {
  const [step, setStep] = useState(1);
  const [qrInput, setQrInput] = useState("");
  const [photoTaken, setPhotoTaken] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Simulasi set timestamp saat halaman dimuat atau step berubah
    const now = new Date();
    setCurrentTime(now.toLocaleString('id-ID', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).replace(/\./g, ':'));
  }, [step]);

  const handleScan = () => {
    if (qrInput.trim() !== "") {
      setStep(2);
    }
  };

  const handleVerifikasi = () => {
    setStep(3);
  };

  const handleTakeFoto = () => {
    setPhotoTaken(true);
  };

  const handleSubmit = () => {
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setQrInput("");
    setPhotoTaken(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Stepper */}
      <div className="flex items-center justify-center pt-4 pb-8">
        <div className="flex items-center w-full max-w-2xl">
          {/* Step 1 */}
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm ${step >= 1 ? 'bg-[#2cb2e0]' : 'bg-slate-200 text-slate-500'}`}>
              1
            </div>
            <span className={`ml-3 text-sm font-bold ${step >= 1 ? 'text-slate-800' : 'text-slate-500'}`}>Scan QR</span>
          </div>
          <div className={`flex-1 h-[2px] mx-4 ${step >= 2 ? 'bg-[#2cb2e0]' : 'bg-slate-200'}`}></div>

          {/* Step 2 */}
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm ${step >= 2 ? 'bg-[#2cb2e0]' : 'bg-slate-200 text-slate-500'}`}>
              2
            </div>
            <span className={`ml-3 text-sm font-bold ${step >= 2 ? 'text-slate-800' : 'text-slate-500'}`}>Verifikasi</span>
          </div>
          <div className={`flex-1 h-[2px] mx-4 ${step >= 3 ? 'bg-[#2cb2e0]' : 'bg-slate-200'}`}></div>

          {/* Step 3 */}
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm ${step >= 3 ? 'bg-[#2cb2e0] text-white' : 'bg-slate-100 text-slate-500'}`}>
              3
            </div>
            <span className={`ml-3 text-sm font-bold ${step >= 3 ? 'text-slate-800' : 'text-slate-500'}`}>Bukti</span>
          </div>
          <div className={`flex-1 h-[2px] mx-4 ${step >= 4 ? 'bg-[#2cb2e0]' : 'bg-slate-200'}`}></div>

          {/* Step 4 */}
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm ${step >= 4 ? 'bg-[#2cb2e0] text-white' : 'bg-slate-100 text-slate-500'}`}>
              4
            </div>
            <span className={`ml-3 text-sm font-bold ${step >= 4 ? 'text-slate-800' : 'text-slate-500'}`}>Hasil</span>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 p-8 max-w-3xl mx-auto">
        
        {/* === STEP 1: SCAN QR === */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-[#2cb2e0]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
              </svg>
              Scan QR Code
            </h2>

            <div 
              onClick={() => {
                setQrInput("AIVAS-SHP2026001-BOX001");
                setTimeout(() => setStep(2), 500); // Simulate processing time
              }}
              className="border-2 border-dashed border-slate-300 rounded-xl h-64 bg-[#f8fafc] flex flex-col items-center justify-center text-center px-4 cursor-pointer hover:bg-slate-50 hover:border-[#2cb2e0] transition-colors group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-slate-400 mb-4 group-hover:text-[#2cb2e0] transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
              <p className="text-sm font-medium text-slate-500">Kamera akan aktif untuk scan QR</p>
              <p className="text-xs text-slate-400 mt-1">(Simulasi: klik kotak ini atau masukkan manual di bawah)</p>
            </div>

            <div className="flex gap-3">
              <input 
                type="text" 
                placeholder="Masukkan kode QR atau scan..." 
                className="flex-1 border border-slate-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#2cb2e0] focus:ring-1 focus:ring-[#2cb2e0]"
                value={qrInput}
                onChange={(e) => setQrInput(e.target.value)}
              />
              <button 
                onClick={() => {
                  if (!qrInput.trim()) {
                    setQrInput("AIVAS-SHP2026001-BOX001");
                    setTimeout(() => setStep(2), 500);
                  } else {
                    setStep(2);
                  }
                }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-all bg-[#38bdf8] hover:bg-[#0284c7]`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                </svg>
                Scan
              </button>
            </div>
          </div>
        )}

        {/* === STEP 2: VERIFIKASI QTY === */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800">Verifikasi Qty Aktual</h2>
              <p className="text-sm font-medium text-slate-400 mt-1">SHP-2026-001 • BOX-001 • PT. Maju Komponen</p>
            </div>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className="border border-slate-300 rounded-xl p-5 bg-[#fafbfc]">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-slate-800 text-[15px]">Ink Cartridge Black</h3>
                    <p className="text-xs text-slate-400 font-medium">EPN-INK-001</p>
                  </div>
                  <div className="px-3 py-1 rounded border border-slate-300 text-[10px] font-bold text-slate-600 bg-white shadow-sm">
                    Deklarasi: 250 pcs
                  </div>
                </div>
                <div className="mt-2">
                  <label className="text-[11px] font-bold text-slate-600 mb-1.5 block">Qty Aktual</label>
                  <input type="number" defaultValue={250} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#2cb2e0] focus:ring-1 focus:ring-[#2cb2e0]" />
                </div>
              </div>

              {/* Item 2 */}
              <div className="border border-slate-300 rounded-xl p-5 bg-[#fafbfc]">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-slate-800 text-[15px]">Print Head Assembly</h3>
                    <p className="text-xs text-slate-400 font-medium">EPN-PH-002</p>
                  </div>
                  <div className="px-3 py-1 rounded border border-slate-300 text-[10px] font-bold text-slate-600 bg-white shadow-sm">
                    Deklarasi: 100 pcs
                  </div>
                </div>
                <div className="mt-2">
                  <label className="text-[11px] font-bold text-slate-600 mb-1.5 block">Qty Aktual</label>
                  <input type="number" defaultValue={100} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#2cb2e0] focus:ring-1 focus:ring-[#2cb2e0]" />
                </div>
              </div>
            </div>

            <button 
              onClick={handleVerifikasi}
              className="w-full py-3 rounded-lg text-sm font-bold text-white transition-all bg-[#38bdf8] hover:bg-[#0284c7] mt-6 shadow-sm shadow-blue-500/20"
            >
              Lanjut ke Bukti Digital
            </button>
          </div>
        )}

        {/* === STEP 3: BUKTI DIGITAL === */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#38bdf8]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
              Ambil Bukti Digital
            </h2>

            {!photoTaken ? (
              <div 
                onClick={handleTakeFoto}
                className="border-2 border-dashed border-slate-300 rounded-xl h-72 bg-[#fafbfc] flex flex-col items-center justify-center text-center px-4 cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-slate-500 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <p className="text-sm font-medium text-slate-500">Klik untuk ambil foto bukti</p>
              </div>
            ) : (
              <div className="border-2 border-dashed border-green-400 rounded-xl h-72 bg-green-50 flex flex-col items-center justify-center text-center px-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-green-500 mb-3 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-green-600">Foto berhasil diambil</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute top-2 left-3 flex items-center gap-1.5 text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[9px] font-bold uppercase tracking-wider">Timestamp</span>
                </div>
                <input 
                  type="text" 
                  disabled 
                  value={currentTime || "24/4/2026, 20.48.31"} 
                  className="w-full border border-slate-300 rounded-lg pl-3 pr-3 pt-7 pb-2 text-xs font-medium text-slate-600 bg-[#fafbfc]" 
                />
              </div>
              <div className="relative">
                <div className="absolute top-2 left-3 flex items-center gap-1.5 text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-[9px] font-bold uppercase tracking-wider">GPS Location</span>
                </div>
                <input 
                  type="text" 
                  disabled 
                  value="-6.9175, 107.6191" 
                  className="w-full border border-slate-300 rounded-lg pl-3 pr-3 pt-7 pb-2 text-xs font-medium text-slate-600 bg-[#fafbfc]" 
                />
              </div>
            </div>

            <button 
              onClick={handleSubmit}
              disabled={!photoTaken}
              className={`w-full py-3 rounded-lg text-sm font-bold text-white transition-all mt-6 shadow-sm shadow-blue-500/20 ${photoTaken ? 'bg-[#38bdf8] hover:bg-[#0284c7]' : 'bg-slate-300 cursor-not-allowed'}`}
            >
              Submit Verifikasi
            </button>
          </div>
        )}

        {/* === STEP 4: HASIL (SUCCESS) === */}
        {step === 4 && (
          <div className="flex flex-col items-center justify-center text-center space-y-6 py-12">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center border-4 border-emerald-50 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 text-emerald-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Verifikasi Berhasil!</h2>
              <p className="text-sm text-slate-500">Data penerimaan barang telah disubmit ke dalam sistem AIVAS.</p>
            </div>
            <div className="w-full max-w-sm bg-slate-50 border border-slate-100 rounded-xl p-4 text-left space-y-2 mt-4">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">ID Shipment:</span>
                <span className="font-bold text-slate-800">SHP-2026-001</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Box ID:</span>
                <span className="font-bold text-slate-800">BOX-001</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Status:</span>
                <span className="font-bold text-emerald-600">Verified</span>
              </div>
            </div>
            <div className="pt-6 w-full flex flex-col sm:flex-row gap-3">
               <button 
                onClick={handleReset}
                className="flex-1 py-3 rounded-lg text-sm font-bold text-white transition-all bg-[#38bdf8] hover:bg-[#0284c7] shadow-sm shadow-blue-500/20"
              >
                Scan Tiket Lain
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
