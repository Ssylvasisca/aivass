"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function BuatShipmentPage() {
  const router = useRouter();
  
  // State for multiple boxes
  const [boxes, setBoxes] = useState([
    {
      id: "BOX-001",
      items: [
        { partNumber: "EPN-INK-001", partName: "Ink Catridge Black", qty: "250" }
      ]
    }
  ]);

  const handleAddBox = () => {
    const newBoxId = `BOX-${String(boxes.length + 1).padStart(3, '0')}`;
    setBoxes([
      ...boxes,
      {
        id: newBoxId,
        items: [
          { partNumber: "EPN-INK-001", partName: "Ink Catridge Black", qty: "250" }
        ]
      }
    ]);
  };

  const handleRemoveBox = (boxIndex) => {
    const newBoxes = [...boxes];
    newBoxes.splice(boxIndex, 1);
    // Re-index remaining boxes
    newBoxes.forEach((box, i) => {
      box.id = `BOX-${String(i + 1).padStart(3, '0')}`;
    });
    setBoxes(newBoxes);
  };

  const handleAddItem = (boxIndex) => {
    const newBoxes = [...boxes];
    newBoxes[boxIndex].items.push({ partNumber: "", partName: "", qty: "" });
    setBoxes(newBoxes);
  };

  const handleItemChange = (boxIndex, itemIndex, field, value) => {
    const newBoxes = [...boxes];
    newBoxes[boxIndex].items[itemIndex][field] = value;
    setBoxes(newBoxes);
  };

  const handleGenerateQR = () => {
    // Navigate to QR code page
    router.push("/vendor/qr-code");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Buat Delivery Order</h1>
        <p className="text-sm text-slate-500 mt-1">PO-2026-001 • PT. Indonesia Epson Industry</p>
      </div>

      {/* Boxes List */}
      <div className="space-y-6 mt-8">
        {boxes.map((box, boxIndex) => (
          <div key={boxIndex} className="relative">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              
              {/* Box Header */}
              <div className="flex items-center gap-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#38bdf8]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                <h2 className="text-base font-bold text-slate-800">{box.id}</h2>
              </div>

              {/* Items in Box */}
              <div className="space-y-4">
                {box.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex gap-4 items-end">
                    <div className="flex-1">
                      <label className="text-[10px] font-bold text-slate-400 mb-1.5 block">Part Number</label>
                      <input 
                        type="text" 
                        value={item.partNumber}
                        onChange={(e) => handleItemChange(boxIndex, itemIndex, 'partNumber', e.target.value)}
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] text-slate-700 bg-[#fafbfc]" 
                      />
                    </div>
                    <div className="flex-[1.5]">
                      <label className="text-[10px] font-bold text-slate-400 mb-1.5 block">Part Name</label>
                      <input 
                        type="text" 
                        value={item.partName}
                        onChange={(e) => handleItemChange(boxIndex, itemIndex, 'partName', e.target.value)}
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] text-slate-700 bg-[#fafbfc]" 
                      />
                    </div>
                    <div className="w-32">
                      <label className="text-[10px] font-bold text-slate-400 mb-1.5 block">Qty</label>
                      <input 
                        type="number" 
                        value={item.qty}
                        onChange={(e) => handleItemChange(boxIndex, itemIndex, 'qty', e.target.value)}
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] text-slate-700 bg-[#fafbfc]" 
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tambah Item Button */}
              <button 
                onClick={() => handleAddItem(boxIndex)}
                className="flex items-center gap-2 text-[#38bdf8] hover:text-[#0284c7] text-xs font-bold mt-5 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Tambah Item
              </button>
            </div>

            {/* Remove Box Icon (shown for boxes > 1) */}
            {boxes.length > 1 && (
              <div className="flex justify-center mt-3 mb-1">
                <button 
                  onClick={() => handleRemoveBox(boxIndex)}
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        <button 
          onClick={handleAddBox}
          className="flex-1 flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-lg py-3.5 text-sm font-bold shadow-sm transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Tambah Box
        </button>
        <button 
          onClick={handleGenerateQR}
          className="flex-[1.5] flex items-center justify-center gap-2 bg-[#38bdf8] hover:bg-[#0284c7] text-white rounded-lg py-3.5 text-sm font-bold shadow-sm shadow-blue-500/20 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          Kunci & Generate QR
        </button>
      </div>

    </div>
  );
}