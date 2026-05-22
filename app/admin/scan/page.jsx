"use client";
import { useState } from "react";

export default function ScanPage() {
  // 1: Scan QR, 2: Hitung / Bukti, 3: Reject, 4: Finish Ringkasan
  const [step, setStep] = useState(1); 
  const [currentTab, setCurrentTab] = useState("scan"); // "scan" atau "hitung" pada sub-header step 2
  const [numpadValue, setNumpadValue] = useState("");
  const [rejectReason, setRejectReason] = useState("");
  const [finishComment, setFinishComment] = useState("");
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);

  // Fungsi internal keyboard input handler
  const handleNumpadPress = (val) => {
    if (val === "C") {
      setNumpadValue("");
    } else if (val === "backspace") {
      setNumpadValue(prev => prev.slice(0, -1));
    } else {
      setNumpadValue(prev => prev + val);
    }
  };

  const handleKeyboardPress = (letter) => {
    if (letter === "space") {
      setRejectReason(prev => prev + " ");
    } else if (letter === "backspace") {
      setRejectReason(prev => prev.slice(0, -1));
    } else {
      setRejectReason(prev => prev + letter);
    }
  };

  const handleFinishKeyboardPress = (letter) => {
    if (letter === "space") {
      setFinishComment(prev => prev + " ");
    } else if (letter === "backspace") {
      setFinishComment(prev => prev.slice(0, -1));
    } else {
      setFinishComment(prev => prev + letter);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-2 text-slate-800">
      
      {/* 1. TOP STEPPER NAVIGATION */}
      <div className="flex items-center justify-center mb-6 gap-6 bg-white py-3 rounded-xl border border-slate-100 shadow-sm max-w-2xl mx-auto">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
              (step === 1 && s === 1) || (step === 2 && (s === 2 || s === 3)) || (step === 4 && s === 4)
                ? "bg-blue-600 text-white" 
                : (step === 2 && s === 1) || (step === 4 && s !== 4)
                ? "bg-blue-600 text-white"
                : "bg-slate-200 text-slate-500"
            }`}>
              {s}
            </div>
            <span className={`text-[11px] font-bold ${
              (step === 1 && s === 1) || (step === 2 && (s === 2 || s === 3)) || (step === 4 && s === 4) || (step === 2 && s === 1)
                ? "text-slate-800" 
                : "text-slate-400"
            }`}>
              {s === 1 ? "Scan QR" : s === 2 ? "Verifikasi" : s === 3 ? "Bukti" : "Hasil"}
            </span>
            {s < 4 && <div className={`w-8 h-[2px] ${step >= 2 && s === 1 ? "bg-blue-600" : "bg-slate-200"}`} />}
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* STEP 1: INITIAL QR SCANNER */}
      {/* ========================================================================= */}
      {step === 1 && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 max-w-xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-full text-center">
            <div className="flex items-center justify-center gap-2 mb-4 text-slate-700 font-bold text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>
              <span>Scan QR Code</span>
            </div>
            
            <div className="border border-slate-200 rounded-xl aspect-video flex flex-col items-center justify-center bg-slate-50 mb-6 p-6 relative overflow-hidden group">
              <div className="absolute inset-0 border-2 border-dashed border-slate-300 m-4 rounded-lg pointer-events-none" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-slate-300 mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
              </svg>
              <p className="text-xs text-slate-500 font-medium">Kamera akan aktif untuk scan QR</p>
              <p className="text-[10px] text-slate-400 mt-1 font-medium">(Simulasi: input manual di bawah)</p>
            </div>

            <div className="flex gap-2">
              <input 
                placeholder="Masukkan kode QR atau scan..." 
                className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-700"
              />
              <button 
                onClick={() => setStep(2)}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all flex gap-2 items-center shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.875 13.5a1.125 1.125 0 0 1 1.125 1.125v1.5a1.125 1.125 0 0 1-1.125 1.125h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a1.125 1.125 0 0 1 1.125-1.125h1.5ZM13.5 19.5a.375.375 0 0 1 .375-.375h.75a.375.375 0 0 1 .375.375v.75a.375.375 0 0 1-.375.375h-.75a.375.375 0 0 1-.375-.375v-.75ZM19.5 13.5a.375.375 0 0 1 .375.375v.75a.375.375 0 0 1-.375.375h-.75a.375.375 0 0 1-.375-.375v-.75a.375.375 0 0 1 .375-.375h.75ZM19.5 18a.375.375 0 0 1 .375.375v.75a.375.375 0 0 1-.375.375h-.75a.375.375 0 0 1-.375-.375v-.75a.375.375 0 0 1 .375-.375h.75ZM16.5 19.5a.375.375 0 0 1 .375-.375h.75a.375.375 0 0 1 .375.375v.75a.375.375 0 0 1-.375.375h-.75a.375.375 0 0 1-.375-.375v-.75Z" />
                </svg>
                Scan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STEP 2: LIVE CAMERA COUNTING & SPLIT VIEW INTERACTIVE */}
      {/* ========================================================================= */}
      {step === 2 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* LEFT COLUMN: LIVE AI CAMERA VIEWER */}
          <div className="lg:col-span-7 bg-[#0b1329] rounded-2xl p-4 flex flex-col justify-between text-white relative border border-slate-800 shadow-md min-h-[500px]">
            {/* Header internal camera */}
            <div className="flex justify-between items-center z-10">
              <div className="flex gap-2">
                <button 
                  onClick={() => setCurrentTab("scan")}
                  className={`px-4 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors ${
                    currentTab === "scan" ? "bg-blue-600 text-white" : "bg-slate-800/60 text-slate-400"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-white block"></span> Scan QR
                </button>
                <button 
                  onClick={() => { setCurrentTab("hitung"); setIsPhotoTaken(true); }}
                  className={`px-4 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors ${
                    currentTab === "hitung" ? "bg-blue-600 text-white" : "bg-slate-800/60 text-slate-400"
                  }`}
                >
                  🔍 Hitung / Bukti
                </button>
              </div>
              <span className="text-[10px] font-bold bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded border border-amber-500/30 tracking-wide uppercase">
                ● {currentTab === "scan" ? "Idle" : "Live"}
              </span>
            </div>

            {/* Simulated Frame Object Detection */}
            <div className="flex-1 flex flex-col items-center justify-center py-8 relative">
              {currentTab === "scan" ? (
                <div className="text-center space-y-4">
                  <div className="w-48 h-48 border-2 border-blue-500 rounded-3xl flex items-center justify-center relative mx-auto">
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-blue-400 -mt-1 -ml-1 rounded-tl-md"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-blue-400 -mt-1 -mr-1 rounded-tr-md"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-blue-400 -mb-1 -ml-1 rounded-bl-md"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-blue-400 -mb-1 -mr-1 rounded-br-md"></div>
                    <div className="w-full h-[2px] bg-blue-500 absolute top-1/2 left-0 animate-pulse"></div>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">Arahkan ke QR Code pada Box</p>
                  <button 
                    onClick={() => { setCurrentTab("hitung"); setIsPhotoTaken(true); }}
                    className="bg-blue-600/90 hover:bg-blue-600 text-white font-bold text-xs py-2 px-4 rounded-xl mx-auto shadow-sm transition-all"
                  >
                    Simulasikan Scan
                  </button>
                </div>
              ) : (
                <div className="text-center space-y-4 w-full px-6">
                  {/* Grid layout representasi deteksi object sekrup/item logam */}
                  <div className="border border-slate-700/50 bg-slate-900/40 rounded-2xl p-8 max-w-sm mx-auto grid grid-cols-4 gap-4 justify-items-center relative">
                    <div className="absolute inset-0 border-2 border-dashed border-emerald-500/30 m-2 rounded-xl pointer-events-none" />
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-md bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-[10px] text-emerald-300 font-bold">
                        📦
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-emerald-400 font-semibold tracking-wide">Tata barang dalam frame – Batch 1</p>
                  <p className="text-[10px] text-slate-500">Sistem akan otomatis menyimpan foto saat Anda submit qty</p>
                </div>
              )}
            </div>

            {/* Bottom metadata overlay */}
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800">
              <span>⏱️ 22.45.20</span>
              <span>📍 -6.9175, 107.6191</span>
              <span>📷 CAM-INB-01</span>
            </div>
          </div>

          {/* RIGHT COLUMN: DETAIL BARANG, METRICS, & DIGITAL INTERACTIVE NUMPAD */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Box Information Header */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider mb-0.5">Shipment</span>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">SHP-2026-001</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">PT. Maju Komponen • PO-2026-001</p>
                </div>
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 px-2.5 py-1 rounded-md uppercase">
                  BOX-001
                </span>
              </div>
            </div>

            {/* Expected Item Checklist & Status Progress Tracker */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">📋 Item Diharapkan</h4>
                  <span className="text-[10px] font-bold text-slate-500">Sub-batch 1</span>
                </div>
                
                {/* List Items */}
                <div className="space-y-2.5">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs font-bold text-slate-800 leading-snug">Ink Cartridge Black</p>
                        <p className="text-[9px] text-slate-400 font-mono mt-0.5">EPN-INK-001</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-slate-800">{numpadValue || "0"}</span>
                        <span className="text-[11px] font-bold text-slate-400"> / 250</span>
                        <p className="text-[9px] font-medium text-slate-400">pcs</p>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-blue-600 h-full transition-all duration-300" 
                        style={{ width: `${Math.min((parseInt(numpadValue || "0") / 250) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50/50 rounded-xl border border-slate-100 opacity-60">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs font-bold text-slate-700">Print Head Assembly</p>
                        <p className="text-[9px] text-slate-400 font-mono">EPN-PH-002</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-emerald-600">100</span>
                        <span className="text-[11px] font-bold text-slate-400"> / 100</span>
                        <p className="text-[9px] font-medium text-emerald-600">✓ Match</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time Counter Qty Actual Display */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 block uppercase mb-1">Qty Aktual — Print Head Assembly</span>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 flex justify-between items-center">
                  <span className="text-base font-extrabold text-slate-800 px-1">{numpadValue || "0"}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-white px-2 py-1 rounded border border-slate-200">
                    ⚙️ PCS
                  </span>
                </div>
              </div>

              {/* INTEGRATED FULL NUMPAD INTERFACE */}
              <div className="grid grid-cols-3 gap-2 mt-4 bg-slate-50 p-2 rounded-xl border border-slate-200 shadow-inner">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, "C", 0, "backspace"].map((btn, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleNumpadPress(btn)}
                    className={`py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center justify-center ${
                      btn === "C" 
                        ? "bg-amber-100 text-amber-700 hover:bg-amber-200" 
                        : btn === "backspace"
                        ? "bg-slate-200 text-slate-600 hover:bg-slate-300"
                        : "bg-white text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    {btn === "backspace" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12l-2.25 2.25m-4.516-2.25 4.074-4.075A1.125 1.125 0 0 1 11.516 3h5.609a1.125 1.125 0 0 1 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-5.61a1.125 1.125 0 0 1-.795-.33l-4.074-4.075a1.125 1.125 0 0 1 0-1.59Z" />
                      </svg>
                    ) : btn}
                  </button>
                ))}
              </div>

              {/* ACTION FOOTER BAR */}
              <div className="grid grid-cols-12 gap-2 mt-4">
                <button 
                  onClick={() => setStep(3)}
                  className="col-span-3 border border-red-200 hover:bg-red-50 text-red-600 font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1 shadow-sm"
                >
                  ✕ Reject
                </button>
                <button 
                  onClick={() => { setNumpadValue(""); setIsPhotoTaken(false); }}
                  className="col-span-4 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1 shadow-sm"
                >
                  Next Batch ➜
                </button>
                <button 
                  onClick={() => setStep(4)}
                  className="col-span-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1 shadow-sm"
                >
                  ✓ Finish
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STEP 3: REJECT PAGE WITH BUILT-IN ON-SCREEN KEYBOARD */}
      {/* ========================================================================= */}
      {step === 3 && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 max-w-2xl mx-auto">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-red-500 text-lg">🚩</span>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Reject Item</h3>
                <p className="text-[11px] text-slate-400 font-medium">Item tidak sesuai sebelum perhitungan dimulai</p>
              </div>
            </div>
            <button 
              onClick={() => setStep(2)}
              className="text-slate-400 hover:text-slate-600 font-bold text-xs"
            >
              ✕ Batal
            </button>
          </div>

          <div className="flex gap-2 mb-4 text-[10px] font-bold text-slate-500">
            <span className="bg-slate-100 px-2 py-1 rounded">Shipment: SHP-2026-001</span>
            <span className="bg-slate-100 px-2 py-1 rounded">Box: BOX-001</span>
            <span className="bg-slate-100 px-2 py-1 rounded">Vendor: PT. Maju Komponen</span>
          </div>

          {/* Text Area Input */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 min-h-[80px] text-xs font-medium text-slate-700 mb-4 shadow-inner">
            {rejectReason || <span className="text-slate-400 italic">Tuliskan alasan reject (mis. skrup yang datang 5mm, seharusnya 10mm)</span>}
          </div>

          {/* FULL ON-SCREEN QWERTY KEYBOARD (NO MOBILE POPUP REQUIRED) */}
          <div className="bg-slate-100 p-3 rounded-xl space-y-1.5 border border-slate-200 shadow-inner max-w-xl mx-auto">
            {/* Row 1 */}
            <div className="flex justify-center gap-1">
              {["1","2","3","4","5","6","7","8","9","0"].map((k) => (
                <button key={k} onClick={() => setRejectReason(p => p + k)} className="w-8 h-9 bg-white text-slate-800 font-semibold rounded text-xs shadow-sm active:bg-slate-200">{k}</button>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex justify-center gap-1">
              {["q","w","e","r","t","y","u","i","o","p"].map((k) => (
                <button key={k} onClick={() => setRejectReason(p => p + k)} className="w-8 h-9 bg-white text-slate-800 font-semibold rounded text-xs shadow-sm active:bg-slate-200">{k}</button>
              ))}
            </div>
            {/* Row 3 */}
            <div className="flex justify-center gap-1 pl-4">
              {["a","s","d","f","g","h","j","k","l"].map((k) => (
                <button key={k} onClick={() => setRejectReason(p => p + k)} className="w-8 h-9 bg-white text-slate-800 font-semibold rounded text-xs shadow-sm active:bg-slate-200">{k}</button>
              ))}
            </div>
            {/* Row 4 */}
            <div className="flex justify-center gap-1">
              <span className="w-10 bg-slate-300 text-[10px] font-bold rounded flex items-center justify-center text-slate-600 uppercase">Shift</span>
              {["z","x","c","v","b","n","m"].map((k) => (
                <button key={k} onClick={() => setRejectReason(p => p + k)} className="w-8 h-9 bg-white text-slate-800 font-semibold rounded text-xs shadow-sm active:bg-slate-200">{k}</button>
              ))}
              <button onClick={() => handleKeyboardPress("backspace")} className="w-10 bg-slate-300 text-slate-600 rounded flex items-center justify-center text-xs shadow-sm">⌫</button>
            </div>
            {/* Row 5 */}
            <div className="flex justify-center gap-1">
              <button onClick={() => handleKeyboardPress("space")} className="w-56 h-9 bg-white text-slate-500 text-xs font-medium rounded shadow-sm active:bg-slate-200 uppercase tracking-widest text-[10px]">Space</button>
              <button onClick={() => setRejectReason(p => p + ".")} className="w-8 h-9 bg-white text-slate-800 font-bold rounded text-xs shadow-sm">.</button>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-5 pt-3 border-t border-slate-100">
            <button 
              onClick={() => setStep(2)}
              className="px-4 py-2 bg-slate-100 text-slate-600 font-bold text-xs rounded-lg hover:bg-slate-200 transition-colors"
            >
              Kembali
            </button>
            <button 
              onClick={() => { alert("Item Rejected!"); setStep(1); setRejectReason(""); }}
              className="px-5 py-2 bg-red-600 text-white font-bold text-xs rounded-lg hover:bg-red-700 transition-colors shadow-sm"
            >
              Submit Reject
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STEP 4: FINISH SUMMARY & VERIFICATION CONFIRMATION */}
      {/* ========================================================================= */}
      {step === 4 && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 max-w-2xl mx-auto">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500 text-lg">⚙️</span>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Finish Verifikasi</h3>
                <p className="text-[11px] text-slate-400 font-medium">Konfirmasi & tambahkan komentar (opsional / wajib)</p>
              </div>
            </div>
            <button 
              onClick={() => setStep(2)}
              className="text-slate-400 hover:text-slate-600 font-bold text-xs"
            >
              ✕ Batal
            </button>
          </div>

          <div className="flex gap-2 mb-4 text-[10px] font-bold text-slate-500">
            <span className="bg-slate-100 px-2 py-1 rounded">Shipment: SHP-2026-001</span>
            <span className="bg-slate-100 px-2 py-1 rounded">Box: BOX-001</span>
            <span className="bg-slate-100 px-2 py-1 rounded">Total Batch: 1</span>
          </div>

          {/* Summary Items Comparison Card Grid */}
          <div className="space-y-2 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Ringkasan Hitungan</span>
            
            <div className="p-3 bg-slate-50/70 border border-slate-200 rounded-xl flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-slate-800">Ink Cartridge Black</p>
                <p className="text-[9px] text-slate-400 font-mono">EPN-INK-001</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-800">178 / 250 <span className="text-[10px] text-slate-400 font-normal">pcs</span></span>
                <p className="text-[9px] font-bold text-red-500 bg-red-50 border border-red-200 rounded px-1 mt-0.5 inline-block">-72 kurang</p>
              </div>
            </div>

            <div className="p-3 bg-slate-50/70 border border-slate-200 rounded-xl flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-slate-800">Print Head Assembly</p>
                <p className="text-[9px] text-slate-400 font-mono">EPN-PH-002</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-800">5 / 100 <span className="text-[10px] text-slate-400 font-normal">pcs</span></span>
                <p className="text-[9px] font-bold text-red-500 bg-red-50 border border-red-200 rounded px-1 mt-0.5 inline-block">-95 kurang</p>
              </div>
            </div>
          </div>

          {/* Comment text area box container */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 min-h-[80px] text-xs font-medium text-slate-700 mb-4 shadow-inner">
            {finishComment || <span className="text-slate-400 italic">Komentar verifikasi (kondisi box, catatan untuk supervisor, dsb.)</span>}
          </div>

          {/* BUILT-IN KEYBOARD INTERFACE FOR SUMMARY COMMENTING */}
          <div className="bg-slate-100 p-3 rounded-xl space-y-1.5 border border-slate-200 shadow-inner max-w-xl mx-auto">
            <div className="flex justify-center gap-1">
              {["1","2","3","4","5","6","7","8","9","0"].map((k) => (
                <button key={k} onClick={() => setFinishComment(p => p + k)} className="w-8 h-9 bg-white text-slate-800 font-semibold rounded text-xs shadow-sm active:bg-slate-200">{k}</button>
              ))}
            </div>
            <div className="flex justify-center gap-1">
              {["q","w","e","r","t","y","u","i","o","p"].map((k) => (
                <button key={k} onClick={() => setFinishComment(p => p + k)} className="w-8 h-9 bg-white text-slate-800 font-semibold rounded text-xs shadow-sm active:bg-slate-200">{k}</button>
              ))}
            </div>
            <div className="flex justify-center gap-1 pl-4">
              {["a","s","d","f","g","h","j","k","l"].map((k) => (
                <button key={k} onClick={() => setFinishComment(p => p + k)} className="w-8 h-9 bg-white text-slate-800 font-semibold rounded text-xs shadow-sm active:bg-slate-200">{k}</button>
              ))}
            </div>
            <div className="flex justify-center gap-1">
              <span className="w-10 bg-slate-300 text-[10px] font-bold rounded flex items-center justify-center text-slate-600 uppercase">Shift</span>
              {["z","x","c","v","b","n","m"].map((k) => (
                <button key={k} onClick={() => setFinishComment(p => p + k)} className="w-8 h-9 bg-white text-slate-800 font-semibold rounded text-xs shadow-sm active:bg-slate-200">{k}</button>
              ))}
              <button onClick={() => handleFinishKeyboardPress("backspace")} className="w-10 bg-slate-300 text-slate-600 rounded flex items-center justify-center text-xs shadow-sm">⌫</button>
            </div>
            <div className="flex justify-center gap-1">
              <button onClick={() => handleFinishKeyboardPress("space")} className="w-56 h-9 bg-white text-slate-500 text-xs font-medium rounded shadow-sm active:bg-slate-200 uppercase tracking-widest text-[10px]">Space</button>
              <button onClick={() => setFinishComment(p => p + ".")} className="w-8 h-9 bg-white text-slate-800 font-bold rounded text-xs shadow-sm">.</button>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-5 pt-3 border-t border-slate-100">
            <button 
              onClick={() => setStep(2)}
              className="px-4 py-2 bg-slate-100 text-slate-600 font-bold text-xs rounded-lg hover:bg-slate-200 transition-colors"
            >
              Kembali
            </button>
            <button 
              onClick={() => { alert("Verifikasi Berhasil Disimpan!"); setStep(1); setFinishComment(""); }}
              className="px-5 py-2 bg-blue-600 text-white font-bold text-xs rounded-lg hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-1"
            >
              ✓ Konfirmasi & Simpan
            </button>
          </div>
        </div>
      )}

    </div>
  );
}