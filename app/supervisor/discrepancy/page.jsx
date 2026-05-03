"use client";

import { useState } from "react";

// Initial dummy data for tickets
const INITIAL_TICKETS = [
  {
    id: "TKT-2026-001",
    status: "Open",
    type: "Mismatch",
    shipment: "SHP-2026-001",
    box: "BOX-002",
    vendor: "PT. Maju Komponen",
    date: "5/4/2026, 17.20.00",
    items: [
      {
        name: "Ink Cartridge Black",
        code: "EPN-INK-001",
        deklarasi: 250,
        aktual: 245,
        selisih: -5,
      },
      {
        name: "Paper Feed Roller",
        code: "EPN-RLR-003",
        deklarasi: 300,
        aktual: 280,
        selisih: -20,
      },
    ],
    actions: ["Approve", "Hold", "Return", "Recount"],
  },
  {
    id: "TKT-2026-002",
    status: "Hold",
    type: "Missing",
    shipment: "SHP-2026-001",
    box: "BOX-003",
    vendor: "CV. Sejahtera Parts",
    date: "4/4/2026, 21.30.00",
    items: [
      {
        name: "Main Control Board",
        code: "EPN-PCB-004",
        deklarasi: 50,
        aktual: 42,
        selisih: -8,
      },
    ],
    actions: ["Approve (Disabled)", "Resume", "Recount"],
  },
];

export default function DiscrepancyPage() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [tickets, setTickets] = useState(INITIAL_TICKETS);

  // Fungsi untuk menangani klik tombol action pada tiket
  const handleAction = (ticketId, actionName) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) => {
        if (ticket.id === ticketId) {
          let newStatus = ticket.status;
          let newActions = ticket.actions;

          // Logika perubahan status dan ketersediaan tombol
          switch (actionName) {
            case "Approve":
              newStatus = "Resolved";
              newActions = ["Approve (Disabled)", "Recount"];
              break;
            case "Hold":
              newStatus = "Hold";
              newActions = ["Approve (Disabled)", "Resume", "Recount"];
              break;
            case "Resume":
              newStatus = "Open";
              newActions = ["Approve", "Hold", "Return", "Recount"];
              break;
            case "Return":
              newStatus = "Resolved"; 
              newActions = ["Recount"];
              break;
            case "Recount":
              newStatus = "Recount";
              newActions = ["Approve", "Hold", "Return"];
              break;
            default:
              break;
          }

          return { ...ticket, status: newStatus, actions: newActions };
        }
        return ticket;
      })
    );
  };

  // Menghitung jumlah tiket untuk setiap tab secara dinamis
  const countStatus = (status) => tickets.filter((t) => t.status === status).length;

  const tabs = [
    { id: "Semua", label: `Semua` },
    { id: "Open", label: `Open (${countStatus("Open")})` },
    { id: "Hold", label: `Hold (${countStatus("Hold")})` },
    { id: "Recount", label: `Recount (${countStatus("Recount")})` },
    { id: "Resolved", label: `Resolved (${countStatus("Resolved")})` },
  ];

  const filteredTickets = tickets.filter((ticket) => {
    if (activeTab === "Semua") return true;
    return ticket.status === activeTab;
  });

  return (
    <div className="space-y-6 text-black">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Discrepancy Handling</h1>
        <p className="text-gray-500 text-sm mt-1">Kelola tiket selisih pengiriman</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-blue-500 text-white shadow-sm shadow-blue-500/20 font-semibold"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Ticket List */}
      <div className="space-y-4">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-5 transition-all"
            >
              {/* Ticket Header */}
              <div className="flex flex-col gap-1.5 mb-5">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-800 text-base">{ticket.id}</span>
                  <div className="flex gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase ${
                        ticket.status === "Open"
                          ? "bg-red-50 text-red-500"
                          : ticket.status === "Resolved"
                          ? "bg-emerald-50 text-emerald-500"
                          : ticket.status === "Recount"
                          ? "bg-blue-50 text-blue-500"
                          : "bg-amber-50 text-amber-500"
                      }`}
                    >
                      {ticket.status}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase ${
                        ticket.type === "Mismatch"
                          ? "bg-red-50 text-red-500"
                          : ticket.type === "Missing"
                          ? "bg-amber-50 text-amber-500"
                          : "bg-blue-50 text-blue-500"
                      }`}
                    >
                      {ticket.type}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {ticket.shipment} • {ticket.box} • {ticket.vendor}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {ticket.date}
                </div>
              </div>

              {/* Ticket Items */}
              <div className="border-t border-b border-slate-100 py-2 space-y-2 mb-4 bg-[#fafbfc] -mx-5 px-5">
                {ticket.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-700">{item.name}</h4>
                      <p className="text-[11px] text-slate-400">{item.code}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-600 font-medium mb-0.5">
                        Deklarasi: <span className="font-bold text-slate-800">{item.deklarasi}</span> → Aktual:{" "}
                        <span className="font-bold text-slate-800">{item.aktual}</span>
                      </div>
                      <div className="text-[11px] text-red-500 font-semibold text-right">
                        Selisih: {item.selisih}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ticket Actions */}
              <div className="flex gap-2">
                {ticket.actions.includes("Approve") && (
                  <button 
                    onClick={() => handleAction(ticket.id, "Approve")}
                    className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-colors active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Approve
                  </button>
                )}
                {ticket.actions.includes("Approve (Disabled)") && (
                  <button className="flex items-center gap-1.5 bg-emerald-500 text-white px-4 py-1.5 rounded-lg text-xs font-bold opacity-50 cursor-not-allowed">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Approve
                  </button>
                )}
                {ticket.actions.includes("Resume") && (
                  <button 
                    onClick={() => handleAction(ticket.id, "Resume")}
                    className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors active:scale-95"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Resume
                  </button>
                )}
                {ticket.actions.includes("Hold") && (
                  <button 
                    onClick={() => handleAction(ticket.id, "Hold")}
                    className="flex items-center gap-1.5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Hold
                  </button>
                )}
                {ticket.actions.includes("Return") && (
                  <button 
                    onClick={() => handleAction(ticket.id, "Return")}
                    className="flex items-center gap-1.5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                    Return
                  </button>
                )}
                {ticket.actions.includes("Recount") && (
                  <button 
                    onClick={() => handleAction(ticket.id, "Recount")}
                    className="flex items-center gap-1.5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    Recount
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl border border-slate-100 p-12 text-center text-slate-500">
            Tidak ada tiket dalam kategori ini.
          </div>
        )}
      </div>
    </div>
  );
}
