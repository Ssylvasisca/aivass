"use client";

import React from "react";
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
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Purchase Order</h1>
        <p className="text-sm text-slate-500 mt-1">Daftar PO yang diterima dari PPIC EPSON</p>
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
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                </svg>
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
            
            <div className="text-slate-300 group-hover:text-blue-500 transition-colors mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}