"use client";

import Link from "next/link";

export default function VendorPurchaseOrderPage() {
  const dummyPO = [
    {
      id: "PO-2026-001",
      status: "shipped",
      items: 3,
      date: "1/4/2026",
    },
    {
      id: "PO-2026-001",
      status: "submitted",
      items: 3,
      date: "1/4/2026",
    },
  ];

  return (
    <div className="space-y-6 text-black">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Purchase Order</h1>
        <p className="text-gray-500 text-sm mt-1">Daftar PO yang diterima dari PPIC EPSON</p>
      </div>

      {/* List PO */}
      <div className="space-y-4 mt-6">
        {dummyPO.map((po, index) => (
          <Link
            key={index}
            href={`/vendor/buat-shipment?po=${po.id}`}
            className="bg-white rounded-xl border border-slate-200 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-5 flex items-center justify-between hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-5">
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center transition-colors group-hover:bg-blue-100 shadow-inner border border-blue-100">
                <img 
                  src="/ic_listblue.jpg" 
                  alt="PO Icon" 
                  className="w-8 h-8 object-contain opacity-100 transition-transform group-hover:scale-110" 
                />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-slate-900 text-lg">{po.id}</h3>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                      po.status === "shipped"
                        ? "bg-amber-100 text-amber-600"
                        : "bg-blue-100 text-blue-500"
                    }`}
                  >
                    {po.status}
                  </span>
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  {po.items} Item • {po.date}
                </div>
              </div>
            </div>
            
            {/* Arrow Icon */}
            <div className="mr-2 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              <img 
                src="/ic_arrow.jpg" 
                alt="Arrow Right" 
                className="w-6 h-6 object-contain" 
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}