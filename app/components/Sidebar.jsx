"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter(); // Hook untuk navigasi halaman

  const menuItems = [
    {
      name: "Purchase Orders",
      icon: "/ic_list.jpg",
      path: "/vendor",
    },
    {
      name: "Buat Shipment",
      icon: "/ic_truck.jpg",
      path: "/vendor/buat-shipment",
    },
    {
      name: "QR Code",
      icon: "/ic_qr.jpg",
      path: "/vendor/qr-code",
    },
  ];

  // Fungsi untuk Logout
  const handleLogout = () => {
    // Navigasi kembali ke app/page.jsx (halaman pilih role)
    router.push("/");
  };

  return (
    <aside className="w-64 bg-[#1e293b] text-white flex flex-col h-screen border-r border-slate-800">
      
      {/* Logo & Header Sidebar */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
          <img 
            src="/logo.jpg" 
            alt="AIVAS Logo" 
            className="w-full h-full object-contain mix-blend-screen"
          />
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-tight leading-none">AIVAS</h1>
          <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-widest">
            Vendor Portal
          </p>
        </div>
      </div>

      {/* Menu Navigasi */}
      <nav className="flex-1 px-4 mt-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all group ${
                isActive
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20" 
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
              }`}
            >
              <div className={`w-5 h-5 flex items-center justify-center transition-all ${isActive ? "brightness-200" : "opacity-60 group-hover:opacity-100"}`}>
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bagian Bawah: Info Vendor & Keluar */}
      <div className="p-4 bg-[#1a2433] border-t border-slate-800">
        <div className="flex items-center gap-3 px-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-xs border border-blue-500/20">
            P
          </div>
          <div>
            <p className="text-[10px] font-bold text-white leading-none">PT. Maju Komponen</p>
            <p className="text-[9px] text-slate-500 mt-1">Vendor Account</p>
          </div>
        </div>
        
        {/* Tombol Keluar */}
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:bg-red-500/10 rounded-xl text-xs font-bold transition-all group"
        >
          <div className="w-4 h-4 flex items-center justify-center group-hover:scale-110 transition-transform">
             <img 
               src="/ic_logout.jpg" 
               alt="Logout" 
               className="w-full h-full object-contain"
             />
          </div>
          Keluar
        </button>
      </div>
    </aside>
  );
}