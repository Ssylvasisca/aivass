"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BuatShipmentPage() {
  const router = useRouter();
  
  // State for multiple boxes
  const [boxes, setBoxes] = useState([
    {
      id: "BOX-001",
      items: [
        { partNumber: "EPN-INK-001", partName: "Ink Cartridge Black", qty: "250", unit: "pcs" },
        { partNumber: "EPN-XXX-000", partName: "Nama part", qty: "0", unit: "pcs" }
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
          { partNumber: "EPN-XXX-000", partName: "Nama part", qty: "0", unit: "pcs" }
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
    newBoxes[boxIndex].items.push({ partNumber: "EPN-XXX-000", partName: "Nama part", qty: "0", unit: "pcs" });
    setBoxes(newBoxes);
  };

  const handleRemoveItem = (boxIndex, itemIndex) => {
    const newBoxes = [...boxes];
    newBoxes[boxIndex].items.splice(itemIndex, 1);
    setBoxes(newBoxes);
  };

  const handleItemChange = (boxIndex, itemIndex, field, value) => {
    const newBoxes = [...boxes];
    newBoxes[boxIndex].items[itemIndex][field] = value;
    setBoxes(newBoxes);
  };

  const handleGenerateQR = () => {
    router.push("/vendor/qr-code");
  };

  return (
    <div className="space-y-6 text-black">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Buat Delivery Order</h1>
        <p className="text-gray-500 text-sm mt-1">PO-2026-001 • PT. Indonesia Epson Industry</p>
      </div>

      {/* Boxes List */}
      <div className="space-y-6 mt-8">
        {boxes.map((box, boxIndex) => (
          <div key={boxIndex} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 relative">
            
            {/* Box Header & Box Delete */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img 
                  src="/ic_boxblue.jpg" 
                  alt="Box Icon" 
                  className="w-6 h-6 object-contain mix-blend-multiply" 
                />
                <h2 className="text-base font-bold text-slate-800">{box.id}</h2>
              </div>
              
              {/* Box Delete Button at Top Right */}
              <button 
                onClick={() => handleRemoveBox(boxIndex)}
                className="hover:bg-red-50 p-2 rounded-lg transition-colors opacity-70 hover:opacity-100"
                title="Hapus Box"
              >
                <img 
                  src="/ic_trash.jpg" 
                  alt="Delete Box" 
                  className="w-5 h-5 object-contain mix-blend-multiply" 
                />
              </button>
            </div>

            {/* Items in Box */}
            <div className="space-y-4">
              {box.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex gap-4 items-end">
                  <div className="flex-1">
                    {itemIndex === 0 && <label className="text-[10px] font-bold text-slate-400 mb-1.5 block">Part Number</label>}
                    <input 
                      type="text" 
                      value={item.partNumber}
                      onChange={(e) => handleItemChange(boxIndex, itemIndex, 'partNumber', e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] text-slate-700 bg-white" 
                    />
                  </div>
                  <div className="flex-[1.5]">
                    {itemIndex === 0 && <label className="text-[10px] font-bold text-slate-400 mb-1.5 block">Part Name</label>}
                    <input 
                      type="text" 
                      value={item.partName}
                      onChange={(e) => handleItemChange(boxIndex, itemIndex, 'partName', e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] text-slate-700 bg-white" 
                    />
                  </div>
                  <div className="w-24">
                    {itemIndex === 0 && <label className="text-[10px] font-bold text-slate-400 mb-1.5 block">Qty</label>}
                    <input 
                      type="number" 
                      value={item.qty}
                      onChange={(e) => handleItemChange(boxIndex, itemIndex, 'qty', e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] text-slate-700 bg-white" 
                    />
                  </div>
                  <div className="w-24">
                    {itemIndex === 0 && <label className="text-[10px] font-bold text-slate-400 mb-1.5 block">Unit</label>}
                    <input 
                      type="text" 
                      value={item.unit}
                      onChange={(e) => handleItemChange(boxIndex, itemIndex, 'unit', e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] text-slate-700 bg-white" 
                    />
                  </div>
                  
                  {/* Item Delete Button */}
                  <div className="pb-2">
                    <button 
                      onClick={() => handleRemoveItem(boxIndex, itemIndex)}
                      className="transition-colors opacity-50 hover:opacity-100"
                      title="Hapus Item"
                    >
                      <img 
                        src="/ic_trash.jpg" 
                        alt="Delete Item" 
                        className="w-5 h-5 object-contain mix-blend-multiply" 
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Tambah Item Button */}
            <button 
              onClick={() => handleAddItem(boxIndex)}
              className="flex items-center gap-2 text-[#2563eb] hover:text-[#1d4ed8] text-sm font-bold mt-6 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Tambah Item
            </button>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        {/* Tambah Box Button*/}
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
          <img 
            src="/ic_lock.jpg" 
            alt="Lock Icon" 
            className="w-5 h-5 object-contain opacity-90" 
          />
          Kunci & Generate QR
        </button>
      </div>

    </div>
  );
}