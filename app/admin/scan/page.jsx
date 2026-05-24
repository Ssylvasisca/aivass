"use client";

import { useEffect, useState } from "react";

export default function AdminScanPage() {
  const [activeTab, setActiveTab] = useState("scan");
  const [isScanned, setIsScanned] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [qtyInput, setQtyInput] = useState("");
  const [reasonInput, setReasonInput] = useState("");
  const [finishComment, setFinishComment] = useState("");
  const [rejectError, setRejectError] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const [items, setItems] = useState([
    { id: 1, name: "Ink Cartridge Black", code: "EPN-INK-001", expected: 250, actual: 0 },
    { id: 2, name: "Print Head Assembly", code: "EPN-PH-002", expected: 100, actual: 0 },
  ]);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(`${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`);
    };
    updateClock(); 
    const intervalId = setInterval(updateClock, 1000); 
    return () => clearInterval(intervalId); 
  }, []);

  const handleSimulasiScan = () => {
    setIsScanned(true); setActiveTab("hitung");
    setItems(items.map(item => ({ ...item, actual: item.expected })));
  };

  const handleNextBatch = () => {
    setIsScanned(false);
    setActiveTab("scan");
    setActiveItemIndex(0);
    setQtyInput("");
    setItems(items.map(item => ({ ...item, actual: 0 })));
  };

  const handleFinish = () => {
    alert("Konfirmasi disimpan! Kembali ke menu Scan.");
    setShowFinishModal(false); setFinishComment(""); setIsScanned(false);
    setActiveTab("scan"); setActiveItemIndex(0); setQtyInput("");
    setItems(items.map(item => ({ ...item, actual: 0 })));
  };

  const handleSubmitReject = () => {
    if (!reasonInput.trim()) { setRejectError(true); return; }
    alert("Reject dikirim sukses!");
    setShowRejectModal(false); setReasonInput(""); setRejectError(false);
  };

  const handleSimpanBukti = () => {
    const updatedItems = [...items];
    updatedItems[activeItemIndex].actual = Number(qtyInput) || 0;
    setItems(updatedItems);
    setQtyInput("");
    if (activeItemIndex < items.length - 1) setActiveItemIndex(activeItemIndex + 1);
  };

  const handleNumpad = (num) => setQtyInput((prev) => prev + num);
  const handleClear = () => setQtyInput("");
  const handleDelete = () => setQtyInput((prev) => prev.slice(0, -1));

  const VirtualKeyboard = ({ value, setValue, onKeyPressCustom }) => {
    const rows = [
      ["1","2","3","4","5","6","7","8","9","0"],
      ["q","w","e","r","t","y","u","i","o","p"],
      ["a","s","d","f","g","h","j","k","l"],
      ["SHIFT","z","x","c","v","b","n","m","⌫"],
    ];
    const handleKeyPress = (key) => {
      let newValue = value;
      if (key === "⌫") newValue = value.slice(0, -1);
      else if (key === "space") newValue = value + " ";
      else if (key !== "SHIFT" && key !== "↵") newValue = value + key;
      setValue(newValue);
      if (onKeyPressCustom) onKeyPressCustom(newValue);
    };
    return (
      <div className="flex flex-col gap-1.5 sm:gap-2 items-center w-full mt-2 select-none overflow-x-auto pb-2">
        {rows.map((row, i) => (
          <div key={i} className="flex gap-1.5 sm:gap-2 justify-center w-full min-w-max">
            {row.map((key) => (
              <button
                key={key}
                onClick={() => handleKeyPress(key)}
                className={`flex items-center justify-center bg-white border border-gray-200 shadow-sm rounded-lg sm:rounded-[10px] text-[12px] sm:text-[13px] font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition-all ${
                  key === "SHIFT" || key === "⌫" ? "px-3 sm:px-4 min-w-[50px] sm:min-w-[60px]" : "w-8 h-8 sm:w-10 sm:h-10"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
        <div className="flex gap-1.5 sm:gap-2 justify-center w-full min-w-max max-w-[440px]">
          <button onClick={() => handleKeyPress("space")} className="flex-1 h-8 sm:h-10 bg-white border border-gray-200 shadow-sm rounded-lg sm:rounded-[10px] text-[12px] sm:text-[13px] text-gray-500 hover:bg-gray-50 active:scale-95">space</button>
          <button onClick={() => handleKeyPress("↵")} className="w-12 sm:w-14 h-8 sm:h-10 bg-white border border-gray-200 shadow-sm rounded-lg sm:rounded-[10px] text-[12px] sm:text-[13px] text-gray-600 hover:bg-gray-50 active:scale-95">↵</button>
        </div>
      </div>
    );
  };

  return (
    // Update Layout Utama: tumpuk di HP (flex-col), kiri-kanan di Desktop (md:flex-row)
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 font-sans">
      
      {/* ================================================================= */}
      {/* KIRI: AREA SCAN (Camera)                                          */}
      {/* ================================================================= */}
      <div className="w-full md:flex-1 h-[60vh] md:h-auto bg-[#0b1120] rounded-[24px] p-4 md:p-6 flex flex-col relative overflow-hidden text-white shadow-xl shrink-0">
        <div className="flex justify-between items-center z-10">
          <div className="flex bg-slate-800/80 rounded-full p-1 border border-slate-700/50 backdrop-blur-sm overflow-x-auto scrollbar-hide">
            <button
              disabled={isScanned}
              onClick={() => setActiveTab("scan")}
              className={`whitespace-nowrap px-4 md:px-6 py-2 rounded-full text-[12px] md:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "scan" ? "bg-blue-600 text-white shadow-md" : "text-gray-400"
              } ${isScanned ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-700/50"}`}
            >
              <img src="/ic_scan.jpg" alt="Scan Icon" className="w-4 h-4 object-contain rounded-sm" /> Scan QR
            </button>
            <button
              disabled={!isScanned}
              onClick={() => setActiveTab("hitung")}
              className={`whitespace-nowrap px-4 md:px-6 py-2 rounded-full text-[12px] md:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "hitung" ? "bg-slate-700 text-white shadow-md" : "text-gray-400"
              } ${!isScanned ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-700/50"}`}
            >
              <img src="/ic_box.jpg" alt="Box Icon" className="w-4 h-4 object-contain rounded-sm" /> Hitung / Bukti
            </button>
          </div>
          
          {isScanned ? (
            <div className="flex items-center gap-2 text-xs font-semibold text-green-400 bg-slate-800/60 px-3 md:px-4 py-1.5 rounded-full border border-slate-700/50 backdrop-blur-sm shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
              LIVE
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 bg-slate-800/60 px-3 md:px-4 py-1.5 rounded-full border border-slate-700/50 backdrop-blur-sm shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              IDLE
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col items-center justify-center relative z-10">
          {activeTab === "scan" ? (
            <>
              <div className={`border-2 border-blue-500 rounded-[28px] relative flex items-center justify-center transition-all duration-500 ${isScanned ? "w-32 h-32 md:w-48 md:h-48 mb-6 border-dashed opacity-40" : "w-48 h-48 md:w-72 md:h-72 mb-8 shadow-[0_0_40px_rgba(59,130,246,0.15)]"}`}>
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl -ml-1 -mt-1"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-500 rounded-tr-2xl -mr-1 -mt-1"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-500 rounded-bl-2xl -ml-1 -mb-1"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-500 rounded-br-2xl -mr-1 -mb-1"></div>
                {!isScanned && <div className="w-full h-[2px] bg-blue-400/80 absolute top-1/4 shadow-[0_0_15px_rgba(59,130,246,0.9)] animate-[bounce_2.5s_infinite]"></div>}
                {isScanned && <div className="w-12 h-12 bg-slate-700/50 rounded-xl backdrop-blur-md"></div>}
              </div>
              
              <p className="text-gray-400 text-[12px] md:text-sm mb-5 font-medium">Arahkan ke QR Code pada Box</p>
              
              {!isScanned && (
                <button onClick={handleSimulasiScan} className="bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-900/40 active:scale-95">
                  <img src="/ic_scan.jpg" alt="Scan Action" className="w-4 h-4 object-contain invert brightness-200" /> Simulasikan Scan
                </button>
              )}
            </>
          ) : (
            <div className="w-full aspect-square max-w-[200px] md:max-w-[350px] border border-dashed border-slate-700 rounded-2xl relative flex flex-col items-center justify-center p-6 bg-slate-900/10">
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-blue-600"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-blue-600"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-blue-600"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-blue-600"></div>
              
              <svg width="76" height="76" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-6 opacity-85">
                <path d="M12 2L16 4.5L12 7L8 4.5L12 2Z" fill="rgba(255,255,255,0.03)" />
                <path d="M8 4.5V9L12 11.5V7" />
                <path d="M16 4.5V9L12 11.5" />
                <path d="M7 9.5L11 12L7 14.5L3 12L7 9.5Z" fill="rgba(255,255,255,0.03)" />
                <path d="M3 12V16.5L7 19V14.5" />
                <path d="M11 12V16.5L7 19" />
                <path d="M17 9.5L21 12L17 14.5L13 12L17 9.5Z" fill="rgba(255,255,255,0.03)" />
                <path d="M13 12V16.5L17 19V14.5" />
                <path d="M21 12V16.5L17 19" />
              </svg>

              <p className="text-gray-200 text-[12px] md:text-[14px] font-bold text-center tracking-wide mb-1">
                Tata barang dalam frame • Batch 1
              </p>
              <p className="text-gray-500 text-[10px] md:text-[11px] text-center max-w-[240px] leading-relaxed hidden md:block">
                Sistem akan otomatis menyimpan foto saat Anda submit qty
              </p>
            </div>
          )}
        </div>

        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex justify-between text-[10px] md:text-[11px] font-medium text-gray-500 z-10 tracking-wider">
          <span>🕒 {currentTime || "00:00:00"}</span>
          <span>📍 {isScanned ? "-6.9175, 107.6191" : "—"}</span>
          <span>📸 CAM-INB-01</span>
        </div>
      </div>

      {/* ================================================================= */}
      {/* KANAN: PANEL DATA & INPUT                                         */}
      {/* ================================================================= */}
      <div className="w-full md:w-[420px] shrink-0 flex flex-col gap-4">
        {/* Header Data */}
        <div className="bg-white rounded-[20px] p-5 border border-gray-200/80 shadow-sm flex items-center min-h-[90px]">
          {!isScanned ? (
            <span className="text-gray-400 italic text-sm w-full text-center">— Menunggu Scan Box —</span>
          ) : (
            <div className="w-full">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">SHIPMENT</span>
                <span className="bg-green-50 text-green-600 border border-green-100 text-[11px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">BOX-001</span>
              </div>
              <h2 className="text-lg font-black text-gray-800 tracking-tight">SHP-2026-001</h2>
              <p className="text-[12px] text-gray-500 mt-0.5 font-medium">PT. Maju Komponen • PO 2026-001</p>
            </div>
          )}
        </div>

        {/* List Item Diharapkan */}
        <div className="bg-white rounded-[20px] p-5 border border-gray-200/80 shadow-sm flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[12px] font-bold text-gray-500 tracking-widest flex items-center gap-2 uppercase">
              <img src="/ic_boxblue.jpg" alt="Box Icon" className="w-4 h-4 object-contain rounded-sm" /> ITEM DIHARAPKAN
            </h3>
            {isScanned && <span className="text-[11px] text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-md">Batch aktif: 1</span>}
          </div>

          {!isScanned ? (
            <div className="flex-1 border-2 border-dashed border-gray-200/80 rounded-2xl flex flex-col items-center justify-center p-6 text-center bg-gray-50/50">
              <img src="/ic_boxblue.jpg" alt="Box Icon" className="w-12 h-12 mb-3 opacity-40 object-contain rounded-md" />
              <p className="text-[13px] text-gray-400 font-medium">Scan QR Code box untuk melihat daftar item.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item, index) => {
                const percentage = Math.min((item.actual / item.expected) * 100, 100);
                const isComplete = item.actual >= item.expected;

                return (
                  <div
                    key={item.id}
                    className={`p-3.5 rounded-[16px] border transition-all duration-300 cursor-pointer ${
                      activeItemIndex === index
                        ? "border-blue-400 bg-blue-50/40 shadow-sm ring-1 ring-blue-400/50"
                        : "border-gray-200/80 hover:border-blue-300/50 hover:bg-gray-50/50"
                    }`}
                    onClick={() => setActiveItemIndex(index)}
                  >
                    <div className="flex justify-between items-start mb-2.5">
                      <div>
                        <h4 className="font-bold text-gray-800 text-[13px]">{item.name}</h4>
                        <p className="text-[11px] text-gray-400 mt-0.5 font-mono">{item.code}</p>
                      </div>
                      <div className="text-right">
                        <span className={`font-black text-[14px] ${isComplete ? "text-green-600" : "text-gray-800"}`}>{item.actual}</span>
                        <span className="text-gray-400 text-[12px] font-medium"> / {item.expected}</span>
                        <span className="text-[10px] text-gray-400 ml-1 font-bold uppercase">pcs</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ease-out ${isComplete ? "bg-green-500" : "bg-blue-500"}`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Numpad Input */}
        <div className={`bg-white rounded-[20px] p-5 border border-gray-200/80 shadow-sm transition-opacity duration-300 ${!isScanned ? "opacity-50 pointer-events-none" : ""}`}>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center flex-wrap">
              QTY AKTUAL 
              {isScanned && (
                <span className="text-blue-600 font-extrabold ml-1 normal-case tracking-normal transition-all duration-300 animate-[fadeIn_0.3s_ease-in-out]">
                  — {items[activeItemIndex].name}
                </span>
              )}
            </h3>
            <span className="text-[10px] font-bold bg-gray-100 px-2 py-0.5 rounded-md text-gray-500 tracking-wider hidden sm:block">Batch 1</span>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200/60 rounded-2xl p-4 mb-4 flex justify-between items-center h-[60px] shadow-inner">
            <span className="text-2xl font-black text-gray-800">{qtyInput || (isScanned ? "0" : "-")}</span>
            <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">PCS</span>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumpad(num.toString())}
                className="py-3 bg-white border border-gray-200/80 rounded-[14px] hover:bg-gray-50 text-gray-700 font-bold text-lg transition-all shadow-sm active:scale-95"
              >
                {num}
              </button>
            ))}
            <button onClick={handleClear} className="py-3 bg-orange-50 border border-orange-200/60 text-orange-600 rounded-[14px] hover:bg-orange-100 font-bold text-lg transition-all shadow-sm active:scale-95">
              C
            </button>
            <button onClick={() => handleNumpad("0")} className="py-3 bg-white border border-gray-200/80 rounded-[14px] hover:bg-gray-50 text-gray-700 font-bold text-lg transition-all shadow-sm active:scale-95">
              0
            </button>
            <button onClick={handleDelete} className="py-3 bg-white border border-gray-200/80 rounded-[14px] hover:bg-gray-50 text-gray-600 flex items-center justify-center transition-all shadow-sm active:scale-95">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>
            </button>
          </div>

          <button
            onClick={handleSimpanBukti}
            className="w-full bg-[#e2e8f0] text-gray-500 font-bold py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 mb-3 hover:bg-blue-500 hover:text-white shadow-sm active:scale-[0.98]"
          >
            Simpan & Ambil Bukti
          </button>

          <div className="flex gap-2">
            <button onClick={() => setShowRejectModal(true)} className="flex-1 bg-white border border-red-200 text-red-500 hover:bg-red-50 font-bold py-3 rounded-[14px] text-[12px] transition-colors shadow-sm tracking-wide">
              ✕ Reject
            </button>
            <button onClick={handleNextBatch} className="flex-1 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 font-bold py-3 rounded-[14px] text-[12px] transition-colors shadow-sm tracking-wide">
              › Next Batch
            </button>
            <button onClick={() => setShowFinishModal(true)} className="flex-1 bg-[#a7f3d0] hover:bg-[#86efac] text-[#065f46] font-bold py-3 rounded-[14px] text-[12px] transition-colors shadow-sm tracking-wide">
              ✓ Finish
            </button>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* MODAL REJECT (KEMBALI 100% ORIGINAL TANPA UBAHAN)                 */}
      {/* ================================================================= */}
      {showRejectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-[900px] bg-white rounded-[24px] shadow-2xl flex flex-col p-8 animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-extrabold text-gray-800 flex items-center gap-2.5 tracking-tight">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                  Reject Item
                </h2>
                <p className="text-sm text-gray-500 mt-1.5 font-medium">Item tidak sesuai sebelum perhitungan</p>
                
                <div className="flex flex-wrap gap-2.5 mt-4 text-[12px]">
                  <span className="bg-gray-50/80 px-3.5 py-1.5 rounded-full text-gray-500 border border-gray-200/80">Shipment: <strong className="text-gray-800 font-bold tracking-wide">SHP-2026-001</strong></span>
                  <span className="bg-gray-50/80 px-3.5 py-1.5 rounded-full text-gray-500 border border-gray-200/80">Box: <strong className="text-gray-800 font-bold tracking-wide">BOX-001</strong></span>
                </div>
              </div>
              <button onClick={() => { setShowRejectModal(false); setRejectError(false); }} className="text-sm font-semibold text-gray-500 hover:text-gray-800 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                ✕ Batal
              </button>
            </div>

            <div className="border border-gray-200 rounded-[20px] p-6 mb-6 bg-gray-50/30">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                    Alasan Reject <span className="text-red-500 font-black text-sm">*</span>
                  </label>
                  {rejectError && (
                    <span className="text-xs font-bold text-red-500 animate-pulse">
                      Alasan wajib diisi!
                    </span>
                  )}
                </div>
                <div className={`w-full bg-white border rounded-xl p-4 shadow-inner transition-all ${rejectError ? "border-red-400 bg-red-50/20" : "border-gray-200 focus-within:border-blue-400"}`}>
                  <textarea 
                    value={reasonInput} 
                    readOnly 
                    placeholder="Wajib menuliskan alasan reject di sini (mis. skrup yang datang berbeda ukuran atau cacat fisik)..." 
                    className="w-full h-20 bg-transparent resize-none outline-none text-gray-700 text-[15px] placeholder-gray-400 font-medium" 
                  />
                </div>
              </div>

              <VirtualKeyboard 
                value={reasonInput} 
                setValue={setReasonInput} 
                onKeyPressCustom={(val) => { if(val.trim()) setRejectError(false); }} 
              />
            </div>

            <div className="flex justify-end gap-3 mt-auto pt-2">
              <button onClick={() => { setShowRejectModal(false); setRejectError(false); }} className="px-6 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-bold text-sm hover:bg-gray-50 transition-colors">
                Kembali
              </button>
              <button 
                onClick={handleSubmitReject} 
                className="px-6 py-2.5 bg-[#d9534f] hover:bg-[#c9302c] text-white rounded-xl font-bold text-sm flex items-center gap-2 transition-colors shadow-sm"
              >
                <div className="border-[1.5px] border-white/60 rounded-full w-[18px] h-[18px] flex items-center justify-center text-[10px]">✕</div> 
                Submit Reject
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* MODAL FINISH (KEMBALI 100% ORIGINAL TANPA UBAHAN)                 */}
      {/* ================================================================= */}
      {showFinishModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-[900px] max-h-[95vh] bg-white rounded-[24px] shadow-2xl flex flex-col p-8 overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-extrabold text-gray-800 flex items-center gap-2.5 tracking-tight">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Finish Verifikasi
                </h2>
                <p className="text-sm text-gray-500 mt-1.5 font-medium">Konfirmasi & tambahkan komentar hasil pengecekan</p>
                
                <div className="flex flex-wrap gap-2.5 mt-4 text-[12px]">
                  <span className="bg-gray-50/80 px-3.5 py-1.5 rounded-full text-gray-500 border border-gray-200/80">Shipment: <strong className="text-gray-800 font-bold tracking-wide">SHP-2026-001</strong></span>
                  <span className="bg-gray-50/80 px-3.5 py-1.5 rounded-full text-gray-500 border border-gray-200/80">Box: <strong className="text-gray-800 font-bold tracking-wide">BOX-001</strong></span>
                </div>
              </div>
              <button onClick={() => setShowFinishModal(false)} className="text-sm font-semibold text-gray-500 hover:text-gray-800 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                ✕ Batal
              </button>
            </div>

            <div className="border border-gray-200 rounded-[16px] mb-6 overflow-hidden shadow-sm">
              <div className="bg-[#f8fafc] px-5 py-3 border-b border-gray-200 text-[11px] font-bold text-gray-500 tracking-widest uppercase">
                RINGKASAN HITUNGAN
              </div>
              <div className="p-0 flex flex-col">
                {items.map((item, idx) => (
                  <div key={item.id} className={`flex justify-between items-center px-5 py-4 ${idx !== items.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div>
                      <h4 className="font-bold text-gray-800 text-[14px]">{item.name}</h4>
                      <p className="text-[12px] text-gray-400 mt-0.5 font-mono">{item.code}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-gray-800 text-[15px]">
                        {item.actual} <span className="font-medium text-gray-400 text-[13px]">/ {item.expected} pcs</span>
                      </div>
                      {item.actual < item.expected && (
                        <div className="text-[12px] font-medium text-red-500 mt-0.5">
                          -{item.expected - item.actual} kurang
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-[20px] p-6 mb-6 bg-gray-50/30">
              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Komentar Verifikasi <span className="text-gray-400 font-normal lowercase">(opsional)</span>
                </label>
                <div className="w-full bg-white border border-gray-200 rounded-xl p-4 shadow-inner focus-within:border-blue-400 transition-colors">
                  <textarea 
                    value={finishComment} 
                    readOnly 
                    placeholder="Tuliskan catatan tambahan mengenai kondisi box, segel, atau catatan lain untuk supervisor..." 
                    className="w-full h-16 bg-transparent resize-none outline-none text-gray-700 text-[15px] placeholder-gray-400 font-medium" 
                  />
                </div>
              </div>
              <VirtualKeyboard value={finishComment} setValue={setFinishComment} />
            </div>

            <div className="flex justify-end gap-3 mt-auto pt-2">
              <button onClick={() => setShowFinishModal(false)} className="px-6 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-bold text-sm hover:bg-gray-50 transition-colors">
                Kembali
              </button>
              <button 
                onClick={handleFinish} 
                className="px-6 py-2.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-xl font-bold text-sm flex items-center gap-2 transition-colors shadow-sm"
              >
                ✓ Konfirmasi & Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}