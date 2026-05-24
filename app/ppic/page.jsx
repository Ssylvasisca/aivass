"use client";

import { useEffect, useRef, useState } from "react";

export default function PpicPurchaseOrderPage() {
  // State untuk mengontrol buka/tutup Modal Popup
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mengubah data list Anda menjadi state agar data otomatis bertambah saat sukses "Buat PO"
  const [orders, setOrders] = useState([
    {
      id: "PO-2026-001",
      status: "submitted",
      vendor: "PT. Maju Komponen",
      items: 3,
      date: "1/4/2026",
    },
    {
      id: "PO-2026-002",
      status: "acknowledged",
      vendor: "CV. Sejahtera Parts",
      items: 2,
      date: "2/4/2026",
    },
    {
      id: "PO-2026-003",
      status: "shipped",
      vendor: "PT. Maju Komponen",
      items: 2,
      date: "5/4/2026",
    },
  ]);

  // ==========================================
  // STATE & DATA UNTUK FORM MODAL PO BARU
  // ==========================================
  const poTypes = [
    { id: "STD", title: "Standard PO", desc: "Pembelian regular sekali kirim" },
    { id: "BLK", title: "Blanket PO", desc: "Kontrak harga, multi-pengiriman" },
    { id: "CTR", title: "Contract PO", desc: "Kontrak periode panjang" },
    { id: "PLN", title: "Planned PO", desc: "Berdasarkan forecast produksi" },
    { id: "URG", title: "Urgent PO", desc: "Pengiriman prioritas tinggi" },
  ];

  const vendorsMaster = [
    { id: "V01", name: "PT. Maju Komponen" },
    { id: "V02", name: "CV. Sejahtera Parts" },
  ];

  const [selectedType, setSelectedType] = useState(poTypes[1]); // Default Blanket PO
  const [selectedVendor, setSelectedVendor] = useState(vendorsMaster[1]); // Default CV. Sejahtera
  
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isVendorOpen, setIsVendorOpen] = useState(false);

  // Data baris item di dalam modal form
  const [modalItems, setModalItems] = useState([
    { id: 1, name: "Ink Cartridge Blue", qty: 4, price: 50000 },
    { id: 2, name: "", qty: 1, price: 0 },
  ]);

  const typeRef = useRef(null);
  const vendorRef = useRef(null);

  // Mendeteksi klik di luar custom dropdown modal agar tertutup otomatis
  useEffect(() => {
    function handleClickOutside(event) {
      if (typeRef.current && !typeRef.current.contains(event.target)) setIsTypeOpen(false);
      if (vendorRef.current && !vendorRef.current.contains(event.target)) setIsVendorOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Format IDR & Kalkulasi
  const formatRupiah = (number) => new Intl.NumberFormat("id-ID").format(number);
  const totalAmount = modalItems.reduce((sum, item) => sum + item.qty * item.price, 0);
  
  // PEMBARUAN LOGIC: Nomor PO sekarang otomatis mengikuti ID Jenis PO yang dipilih (Contoh: PO-BLK-2026-004)
  const generatePONumber = () => `PO-${selectedType.id}-2026-00${orders.length + 1}`;

  // Handler Aksi Baris Item Form
  const handleAddItem = () => setModalItems([...modalItems, { id: Date.now(), name: "", qty: 1, price: 0 }]);
  const handleRemoveItem = (id) => setModalItems(modalItems.filter((item) => item.id !== id));
  const handleItemChange = (id, field, value) => {
    setModalItems(modalItems.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  // Handler Kirim / Submit Simpan PO Baru ke list utama
  const handleSubmitPO = (e) => {
    e.preventDefault();
    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    
    const newOrder = {
      id: generatePONumber(),
      status: "submitted",
      vendor: selectedVendor.name,
      items: modalItems.filter(i => i.name.trim() !== "").length,
      date: formattedDate
    };

    setOrders([newOrder, ...orders]); // Menambah PO baru di urutan teratas list halaman utama
    setIsModalOpen(false); // Menutup modal

    // Reset data form modal kembali ke semula
    setModalItems([
      { id: 1, name: "Ink Cartridge Blue", qty: 4, price: 50000 },
      { id: 2, name: "", qty: 1, price: 0 },
    ]);
  };

  return (
    <div className="space-y-6 text-black">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Purchase Order</h1>
          <p className="text-gray-500 text-sm mt-1">Kelola Dokumen Purchase Order</p>
        </div>
        {/* Menambahkan aksi trigger onClick untuk membuka modal */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-[#38bdf8] hover:bg-blue-400 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Buat PO Baru
        </button>
      </div>

      {/* List of Purchase Orders */}
      <div className="space-y-4">
        {orders.map((po) => (
          <div
            key={po.id}
            className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-4 flex items-center gap-4"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#38bdf8" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
              </svg>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-bold text-slate-800 text-sm">{po.id}</h3>
                <span
                  className={`px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider ${
                    po.status === "submitted"
                      ? "bg-blue-50 text-blue-500"
                      : po.status === "acknowledged"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-yellow-50 text-yellow-500"
                  }`}
                >
                  {po.status}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                {po.vendor} • {po.items} item • {po.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ============================================================== */}
      {/* MODAL POPUP FORM PO BARU                                       */}
      {/* ============================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-sans text-slate-800">
          <div className="bg-white rounded-2xl w-full max-w-2xl flex flex-col max-h-[95vh] shadow-2xl relative animate-fade-in">
            
            {/* Header Modal */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-start shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5 text-[#0f8bfd]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h2 className="text-xl font-bold text-slate-800">Buat Purchase Order Baru</h2>
                </div>
                <p className="text-sm text-slate-500">Isi detail PO. Nomor PO akan dibuat otomatis berdasarkan jenis PO.</p>
              </div>
              <button type="button" onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Body Modal (Scrollable) */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              
              {/* Preview Nomor PO */}
              <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-[#0f8bfd] rounded-lg flex items-center justify-center font-bold text-lg">#</div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Nomor PO (auto-generated)</p>
                    <p className="text-[15px] font-bold text-blue-700 tracking-wide">{generatePONumber()}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-blue-100/50 text-[#0f8bfd] text-xs font-semibold rounded-full">Preview</span>
              </div>

              {/* Jenis PO Custom Dropdown */}
              <div className="space-y-2 relative" ref={typeRef}>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                  Jenis Purchase Order
                </label>
                <div 
                  onClick={() => setIsTypeOpen(!isTypeOpen)}
                  className="w-full border border-slate-200 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:border-blue-400 bg-white"
                >
                  <div>
                    <div className="font-semibold text-slate-800 text-[15px]">{selectedType.title}</div>
                    <div className="text-xs text-slate-500">{selectedType.desc}</div>
                  </div>
                  <svg className={`w-5 h-5 text-slate-400 transition-transform ${isTypeOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
                
                {isTypeOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-20 overflow-hidden">
                    {poTypes.map((type) => (
                      <div 
                        key={type.id} 
                        onClick={() => { setSelectedType(type); setIsTypeOpen(false); }}
                        className={`p-3 cursor-pointer flex items-center gap-3 hover:bg-slate-50 ${selectedType.id === type.id ? "bg-blue-50/50" : ""}`}
                      >
                        <div className="w-5 flex justify-center text-[#0f8bfd]">
                          {selectedType.id === type.id && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                        </div>
                        <div>
                          <div className={`text-sm font-semibold ${selectedType.id === type.id ? "text-blue-700" : "text-slate-700"}`}>{type.title}</div>
                          <div className="text-xs text-slate-500">{type.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Vendor Tujuan Custom Dropdown */}
              <div className="space-y-2 relative" ref={vendorRef}>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  Vendor Tujuan
                </label>
                <div 
                  onClick={() => setIsVendorOpen(!isVendorOpen)}
                  className="w-full border border-slate-200 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:border-blue-400 bg-white"
                >
                  <div className="text-[15px] font-medium text-slate-800">{selectedVendor ? selectedVendor.name : "Pilih vendor..."}</div>
                  <svg className={`w-5 h-5 text-slate-400 transition-transform ${isVendorOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>

                {isVendorOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-20 overflow-hidden py-1">
                    {vendorsMaster.map((vendor) => (
                      <div 
                        key={vendor.id} 
                        onClick={() => { setSelectedVendor(vendor); setIsVendorOpen(false); }}
                        className={`px-4 py-2.5 cursor-pointer text-sm hover:bg-slate-50 ${selectedVendor.id === vendor.id ? "bg-blue-50/50 text-blue-700 font-medium" : "text-slate-700"}`}
                      >
                        {vendor.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <hr className="border-slate-100" />

              {/* Item Pesanan */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-800">Item Pesanan</h3>
                  <button type="button" onClick={handleAddItem} className="flex items-center gap-1.5 px-3 py-1.5 border border-blue-500 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    Tambah Item
                  </button>
                </div>

                <div className="space-y-4">
                  {modalItems.map((item, index) => (
                    <div key={item.id} className="border border-slate-100 bg-slate-50/50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-slate-500 tracking-wider">Item #{index + 1}</span>
                        <button type="button" onClick={() => handleRemoveItem(item.id)} className="text-red-400 hover:text-red-600 p-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
                        <div className="md:col-span-6">
                          <label className="block text-[11px] font-semibold text-slate-500 mb-1">Nama Item</label>
                          <input 
                            type="text" 
                            value={item.name}
                            onChange={(e) => handleItemChange(item.id, "name", e.target.value)}
                            placeholder="cth: Ink Cartridge Black" 
                            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white text-slate-800"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-[11px] font-semibold text-slate-500 mb-1">Qty</label>
                          <input 
                            type="number" 
                            min="1"
                            value={item.qty}
                            onChange={(e) => handleItemChange(item.id, "qty", Number(e.target.value))}
                            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white text-slate-800"
                          />
                        </div>
                        <div className="md:col-span-4">
                          <label className="block text-[11px] font-semibold text-slate-500 mb-1">Harga Satuan (IDR)</label>
                          <input 
                            type="number"
                            value={item.price || ""}
                            onChange={(e) => handleItemChange(item.id, "price", Number(e.target.value))}
                            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white text-slate-800"
                          />
                        </div>
                      </div>
                      <div className="text-right mt-3 text-[13px]">
                        <span className="text-slate-500 mr-2">Subtotal:</span>
                        <span className="font-bold text-slate-800">Rp {formatRupiah(item.qty * item.price)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer Modal Banner Total & Tombol Aksi */}
            <div className="p-6 border-t border-slate-100 bg-white rounded-b-2xl shrink-0 space-y-4">
              
              {/* Blue Banner Total Amount */}
              <div className="bg-[#0f8bfd] rounded-xl p-4 flex items-center justify-between text-white shadow-lg shadow-blue-500/20">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  <span className="font-semibold text-sm">Total Amount</span>
                </div>
                <div className="text-xl font-bold">
                  Rp {formatRupiah(totalAmount)}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                  Batal
                </button>
                <button type="button" onClick={handleSubmitPO} className="px-5 py-2.5 bg-[#0f8bfd] hover:bg-blue-600 text-white text-sm font-bold rounded-lg shadow-md flex items-center gap-2 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  Buat PO
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}