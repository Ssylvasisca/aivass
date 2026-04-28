"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BuatShipmentPage() {
  const router = useRouter();

  const [boxes, setBoxes] = useState([
    {
      id: 1,
      name: "BOX-001",
      items: [{ id: Date.now(), partNumber: "EPN-INK-001", partName: "Ink Cartridge Black", qty: 250, unit: "pcs" }]
    }
  ]);

  const tambahBox = () => {
    const nextId = boxes.length + 1;
    setBoxes([...boxes, {
      id: nextId,
      name: `BOX-${String(nextId).padStart(3, '0')}`,
      items: [{ id: Date.now(), partNumber: "EPN-XXX-000", partName: "Nama part", qty: 0, unit: "pcs" }]
    }]);
  };

  const hapusBox = (boxId) => {
    if (boxes.length > 1) setBoxes(boxes.filter(b => b.id !== boxId));
  };

  const tambahItem = (boxId) => {
    setBoxes(boxes.map(box => box.id === boxId ? {
      ...box,
      items: [...box.items, { id: Date.now(), partNumber: "EPN-XXX-000", partName: "Nama part", qty: 0, unit: "pcs" }]
    } : box));
  };

  const hapusItem = (boxId, itemId) => {
    setBoxes(boxes.map(box => {
      if (box.id === boxId && box.items.length > 1) {
        return { ...box, items: box.items.filter(i => i.id !== itemId) };
      }
      return box;
    }));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 text-slate-700 pb-20">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-[#1e293b]">Buat Delivery Order</h1>
        <p className="text-slate-400 text-sm font-medium">PO-2026-001 • PT. Indonesia Epson Industry</p>
      </div>

      {/* Render Boxes */}
      <div className="space-y-8">
        {boxes.map((box) => (
          <div key={box.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
            {/* Box Header */}
            <div className="px-8 py-5 border-b border-slate-50 flex justify-between items-center bg-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold tracking-widest text-[#1e293b]">{box.name}</h3>
              </div>
              <button onClick={() => hapusBox(box.id)} className="hover:opacity-70 transition-opacity">
                <img src="/ic_trash.jpg" alt="Delete Box" className="w-5 h-5 object-contain" />
              </button>
            </div>

            {/* Items Content */}
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-12 gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
                <div className="col-span-3">Part Number</div>
                <div className="col-span-4">Part Name</div>
                <div className="col-span-2">Qty</div>
                <div className="col-span-2">Unit</div>
                <div className="col-span-1"></div>
              </div>

              {box.items.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-6 items-center group">
                  <div className="col-span-3">
                    <input type="text" defaultValue={item.partNumber} className="w-full bg-[#f8fafc] border border-slate-100 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all" />
                  </div>
                  <div className="col-span-4">
                    <input type="text" defaultValue={item.partName} className="w-full bg-[#f8fafc] border border-slate-100 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all" />
                  </div>
                  <div className="col-span-2">
                    <input type="number" defaultValue={item.qty} className="w-full bg-[#f8fafc] border border-slate-100 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-50/50 outline-none transition-all text-center" />
                  </div>
                  <div className="col-span-2">
                    <select className="w-full bg-[#f8fafc] border border-slate-100 rounded-xl px-4 py-3 text-sm focus:bg-white outline-none appearance-none cursor-pointer">
                      <option>pcs</option>
                      <option>box</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <button onClick={() => hapusItem(box.id, item.id)} className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <img src="/ic_trash.jpg" alt="Delete Item" className="w-4 h-4 opacity-60 hover:opacity-100" />
                    </button>
                  </div>
                </div>
              ))}

              <button 
                onClick={() => tambahItem(box.id)}
                className="flex items-center gap-2 text-blue-500 font-bold text-sm mt-2 hover:text-blue-600 transition-colors"
              >
                <span className="text-lg">+</span> Tambah Item
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Action Footer */}
      <div className="flex gap-5 mt-10 h-16">
        <button 
          onClick={tambahBox}
          className="flex-[0.4] bg-white border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center gap-2 text-slate-500 font-bold hover:border-blue-300 hover:text-blue-500 transition-all"
        >
          <span className="text-xl">+</span> Tambah Box
        </button>
        
        <button 
          onClick={() => router.push("/vendor/qr-code")}
          className="flex-[0.6] bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-2xl flex items-center justify-center gap-3 font-bold shadow-lg shadow-blue-100 transition-all active:scale-[0.98]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Kunci & Generate QR
        </button>
      </div>
    </div>
  );
}