"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let role = "vendor";
  if (pathname.startsWith("/supervisor")) role = "supervisor";
  if (pathname.startsWith("/ppic")) role = "ppic";
  if (pathname.startsWith("/admin")) role = "admin";

  const config = {
    vendor: {
      title: "AIVAS",
      subtitle: "Vendor Portal",
      menuItems: [
        { name: "Purchase Orders", icon: "/ic_list.jpg", path: "/vendor" },
        { name: "Buat Shipment", icon: "/ic_truck.jpg", path: "/vendor/buat-shipment" },
        { name: "QR Code", icon: "/ic_qr.jpg", path: "/vendor/qr-code" },
      ],
      bottomProfile: (
        <div className="flex items-center gap-3 px-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs border border-white/30">P</div>
          <div>
            <p className="text-[10px] font-bold text-white leading-none">PT. Maju Komponen</p>
            <p className="text-[9px] text-blue-200 mt-1">Vendor Account</p>
          </div>
        </div>
      ),
    },
    supervisor: {
      title: "AIVAS",
      subtitle: "Supervisor",
      menuItems: [
        { name: "Dashboard", icon: "/ic_barchart.jpg", path: "/supervisor" },
        { name: "Discrepancy", icon: "/ic_alert.jpg", path: "/supervisor/discrepancy" },
        { name: "Shipments", icon: "/ic_truck.jpg", path: "/supervisor/shipments" },
      ],
      bottomProfile: (
        <div className="flex items-center gap-3 px-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs border border-white/30">R</div>
          <div>
            <p className="text-sm font-medium text-white leading-none">Rina Wijaya</p>
            <p className="text-[9px] text-blue-200 mt-1">Supervisor</p>
          </div>
        </div>
      ),
    },
    ppic: {
      title: "AIVAS",
      subtitle: "PPIC Portal",
      menuItems: [
        { name: "Purchase Order", icon: "/ic_list.jpg", path: "/ppic" },
        { name: "Dashboard", icon: "/ic_barchart.jpg", path: "/ppic/dashboard" },
      ],
      bottomProfile: (
        <div className="flex items-center gap-3 px-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs border border-white/30">A</div>
          <div>
            <p className="text-sm font-medium text-white leading-none">Ahmad Fauzi</p>
            <p className="text-[9px] text-blue-200 mt-1">PPIC / Purchasing</p>
          </div>
        </div>
      ),
    },
    admin: {
      title: "AIVAS",
      subtitle: "Inbound Scanner",
      menuItems: [
        { name: "Scan & Verifikasi", icon: "/ic_qr.jpg", path: "/admin/scan" },
        { name: "Riwayat Verifikasi", icon: "/ic_list.jpg", path: "/admin/riwayat" },
      ],
      bottomProfile: (
        <div className="flex items-center gap-3 px-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs border border-white/30">B</div>
          <div>
            <p className="text-sm font-medium text-white leading-none">Budi Santoso</p>
            <p className="text-[9px] text-blue-200 mt-1">Admin Inbound</p>
          </div>
        </div>
      ),
    },
  };

  const currentConfig = config[role];

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <>
      {/* TOP BAR KHUSUS MOBILE (Warna sesuai gradient asli) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#1a2f4c] to-[#0a4b9c] text-white flex items-center justify-between px-5 z-[60] shadow-md w-full">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="AIVAS Logo" className="h-8 w-auto object-contain mix-blend-screen" />
          <h1 className="text-lg font-bold tracking-tight leading-none">AIVAS</h1>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 focus:outline-none">
          {/* Ikon Hamburger / X */}
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* OVERLAY GELAP SAAT SIDEBAR TERBUKA DI MOBILE */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-slate-900/60 z-[50] transition-opacity" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* SIDEBAR ASLI (Sembunyi di kiri saat mode mobile, muncul saat diklik) */}
      <aside className={`fixed lg:static top-0 left-0 h-full z-[55] w-64 bg-gradient-to-br from-[#1a2f4c] to-[#0a4b9c] text-white flex flex-col border-r border-white/10 shrink-0 transform transition-transform duration-300 ease-in-out shadow-2xl lg:shadow-none ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        {/* Logo & Header Sidebar */}
        <div className="p-6 pb-2 mt-2 lg:mt-0 hidden lg:block">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="AIVAS Logo" className="h-10 w-auto object-contain mix-blend-screen" />
            <h1 className="text-[25px] font-bold tracking-tight leading-none">AIVAS</h1>
          </div>
        </div>

        <div className="px-6 mb-2 mt-20 lg:mt-2 text-[11px] font-bold text-blue-200/60 uppercase tracking-wider">
          {currentConfig.subtitle}
        </div>

        {/* Menu Navigasi */}
        <nav className="flex-1 px-4 mt-2 space-y-1">
          {currentConfig.menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                  isActive ? "bg-white/10 border border-white/20 text-white" : "text-blue-100/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className={`flex items-center justify-center transition-all ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}>
                  <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain mix-blend-screen" />
                </div>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bagian Bawah: Info & Keluar */}
        <div className="p-4 border-t border-white/10">
          {currentConfig.bottomProfile}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 px-2 w-full text-red-600 hover:text-red-300 hover:bg-red-700/10 py-2 rounded-lg text-sm font-medium transition-all group"
          >
            <div className="flex items-center justify-center transition-transform group-hover:scale-110 opacity-80 group-hover:opacity-100">
              <img src="/ic_logout.jpg" alt="Logout" className="w-5 h-5 object-contain mix-blend-screen" />
            </div>
            Keluar
          </button>
        </div>
      </aside>
    </>
  );
}