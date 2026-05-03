"use client";
import { useState } from "react";

export default function ScanPage() {
  const [step, setStep] = useState(1); // 1: Scan, 2: Verifikasi, 3: Bukti, 4: Hasil

  return (
    <div className="max-w-4xl mx-auto">
      {/* Stepper */}
      <div className="flex items-center justify-center mb-8 gap-4">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              step >= s ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500"
            }`}>
              {s}
            </div>
            <span className={`text-[10px] font-bold ${step >= s ? "text-slate-800" : "text-slate-400"}`}>
              {s === 1 ? "Scan QR" : s === 2 ? "Verifikasi" : s === 3 ? "Bukti" : "Hasil"}
            </span>
            {s < 4 && <div className={`w-12 h-[2px] ${step > s ? "bg-blue-600" : "bg-slate-200"}`} />}
          </div>
        ))}
      </div>

      {/* Card Content */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 min-h-[400px] flex flex-col items-center justify-center">
        {step === 1 && (
          <div className="w-full max-w-lg text-center">
            <div className="mb-4 text-blue-600 font-bold flex items-center justify-center gap-2">
              <span></span> Scan QR Code
            </div>
            <div className="border-2 border-dashed border-slate-200 rounded-2xl aspect-video flex flex-col items-center justify-center bg-slate-50 mb-6">
              <span className="text-4xl mb-2 text-slate-300">📷</span>
              <p className="text-xs text-slate-400">Kamera akan aktif untuk scan QR</p>
              <p className="text-[10px] text-slate-300 mt-1">(Simulasi: input manual di bawah)</p>
            </div>
            <div className="flex gap-2">
              <input 
                placeholder="Masukkan kode QR atau scan..." 
                className="flex-1 px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <button 
                onClick={() => setStep(2)}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all flex gap-2 items-center"
              >
                <span>🔍</span> Scan
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="w-full">
            <h2 className="text-lg font-bold text-slate-800 mb-1">Verifikasi Qty Aktual</h2>
            <p className="text-xs text-slate-400 mb-6 font-medium tracking-tight">SHP-2026-001 • BOX-001 • PT. Maju Komponen</p>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-none">Ink Cartridge Black</p>
                    <p className="text-[10px] text-slate-500 mt-1 font-mono">EPN-INK-001</p>
                  </div>
                  <span className="text-[10px] bg-white px-3 py-1 rounded-full border border-slate-200 font-bold text-slate-600">
                    Deklarasi: 250 pcs
                  </span>
                </div>
                <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">Qty Aktual</label>
                <input type="number" defaultValue={250} className="w-full mt-1 px-4 py-2 border border-blue-500 rounded-xl bg-white text-sm focus:outline-none ring-4 ring-blue-500/10" />
              </div>
            </div>

            <button 
              onClick={() => setStep(3)}
              className="w-full bg-blue-600 text-white py-3 rounded-xl mt-8 font-bold text-sm hover:shadow-lg transition-all"
            >
              Lanjut ke Bukti Digital
            </button>
          </div>
        )}
      </div>
    </div>
  );
}