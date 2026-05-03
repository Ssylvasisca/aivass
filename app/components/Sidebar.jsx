"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

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
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs border border-white/30">
            P
          </div>
          <div>
            <p className="text-[10px] font-bold text-white leading-none">PT. Maju Komponen</p>
            <p className="text-[9px] text-blue-200 mt-1">Vendor Account</p>
          </div>
        </div>
      )
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
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs border border-white/30">
            R
          </div>
          <div>
            <p className="text-sm font-medium text-white leading-none">Rina Wijaya</p>
            <p className="text-[9px] text-blue-200 mt-1">Supervisor</p>
          </div>
        </div>
      )
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
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs border border-white/30">
            A
          </div>
          <div>
            <p className="text-sm font-medium text-white leading-none">Ahmad Fauzi</p>
            <p className="text-[9px] text-blue-200 mt-1">PPIC / Purchasing</p>
          </div>
        </div>
      )
    },
    admin: {
      title: "AIVAS",
      subtitle: "Inbound Scanner",
      menuItems: [
        { name: "Scan & Verifikasi", icon: "/ic_qr.jpg", path: "/admin" },
        { name: "Riwayat Verifikasi", icon: "/ic_list.jpg", path: "/admin/riwayat" },
      ],
      bottomProfile: (
        <div className="flex items-center gap-3 px-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs border border-white/30">
            B
          </div>
          <div>
            <p className="text-sm font-medium text-white leading-none">Budi Santoso</p>
            <p className="text-[9px] text-blue-200 mt-1">Admin Inbound</p>
          </div>
        </div>
      )
    }
  };

  const currentConfig = config[role];

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <aside className="w-64 bg-gradient-to-br from-[#1a2f4c] to-[#0a4b9c] text-white flex flex-col h-screen border-r border-white/10 shrink-0 sticky top-0">
      
      {/* Logo & Header Sidebar */}
      <div className="p-6 pb-2">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.jpg" 
            alt="AIVAS Logo" 
            className="h-10 w-auto object-contain mix-blend-screen" 
          />
          <h1 className="text-[25px] text-sm font-bold tracking-tight leading-none">AIVAS</h1>
        </div>
      </div>

      <div className="px-6 mb-2 mt-2 text-[11px] font-bold text-blue-200/60 uppercase tracking-wider">{currentConfig.subtitle}</div>

      {/* Menu Navigasi */}
      <nav className="flex-1 px-4 mt-2 space-y-1">
        {currentConfig.menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                isActive
                  ? "bg-white/10 border border-white/20 text-white" 
                  : "text-blue-100/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className={`flex items-center justify-center transition-all ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}>
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-5 h-5 object-contain mix-blend-screen"
                />
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
             <img 
               src="/ic_logout.jpg" 
               alt="Logout" 
               className="w-5 h-5 object-contain mix-blend-screen"
             />
          </div>
          Keluar
        </button>
      </div>
    </aside>
  );
}