"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter(); // Hook untuk navigasi halaman

  let role = "vendor";
  if (pathname.startsWith("/supervisor")) role = "supervisor";
  if (pathname.startsWith("/ppic")) role = "ppic";
  if (pathname.startsWith("/admin")) role = "admin";

  // Konfigurasi data untuk masing-masing role
  const config = {
    vendor: {
      title: "AIVAS",
      subtitle: "Vendor Portal",
      menuItems: [
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
      ],
      bottomProfile: (
        <div className="flex items-center gap-3 px-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-xs border border-blue-500/20">
            P
          </div>
          <div>
            <p className="text-[10px] font-bold text-white leading-none">PT. Maju Komponen</p>
            <p className="text-[9px] text-slate-500 mt-1">Vendor Account</p>
          </div>
        </div>
      )
    },
    supervisor: {
      title: "AIVAS",
      subtitle: "Supervisor",
      menuItems: [
        {
          name: "Dashboard",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
          ),
          path: "/supervisor",
        },
        {
          name: "Discrepancy",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          ),
          path: "/supervisor/discrepancy",
        },
        {
          name: "Shipments",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
          ),
          path: "/supervisor/shipments",
        },
      ],
      bottomProfile: (
        <div className="flex items-center gap-3 px-2 mb-4">
          <div>
            <p className="text-sm font-medium text-white leading-none">Rina Wijaya</p>
          </div>
        </div>
      )
    },
    ppic: {
      title: "AIVAS",
      subtitle: "PPIC Portal",
      menuItems: [
        {
          name: "Purchase Order",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          ),
          path: "/ppic",
        },
        {
          name: "Dashboard",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
          ),
          path: "/ppic/dashboard",
        },
      ],
      bottomProfile: (
        <div className="flex items-center gap-3 px-2 mb-4">
          <div>
            <p className="text-sm font-medium text-white leading-none">Ahmad Fauzi</p>
          </div>
        </div>
      )
    },
    admin: {
      title: "AIVAS",
      subtitle: "Inbound Scanner",
      menuItems: [
        {
          name: "Scan & Verifikasi",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
            </svg>
          ),
          path: "/admin",
        },
        {
          name: "Riwayat Verifikasi",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
            </svg>
          ),
          path: "/admin/riwayat",
        },
      ],
      bottomProfile: (
        <div className="flex items-center gap-3 px-2 mb-4">
          <div>
            <p className="text-sm font-medium text-white leading-none">Budi Santoso</p>
          </div>
        </div>
      )
    }
  };

  const currentConfig = config[role];

  // Fungsi untuk Logout
  const handleLogout = () => {
    // Navigasi kembali ke app/page.jsx (halaman pilih role)
    router.push("/");
  };

  return (
    <aside className="w-64 bg-[#1e293b] text-white flex flex-col h-screen border-r border-slate-800 shrink-0">
      
      {/* Logo & Header Sidebar */}
      <div className="p-6 pb-2">
        {/* Menggunakan Logo dari SS Pertama (logoaivas.jpg) */}
        <div className="flex items-center gap-3">
          <img 
            src="/logoaivas.jpg" 
            alt="AIVAS Logo" 
            className="h-10 w-auto object-contain mix-blend-screen brightness-200" 
          />
        </div>
      </div>

      <div className="px-6 mb-2 mt-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider">{currentConfig.subtitle}</div>

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
                  ? "bg-slate-800 text-white" 
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
              }`}
            >
              <div className={`flex items-center justify-center transition-all ${isActive ? "text-blue-400" : "text-slate-400 group-hover:text-white"}`}>
                {typeof item.icon === 'string' ? (
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    className="w-5 h-5 object-contain"
                  />
                ) : (
                  item.icon
                )}
              </div>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bagian Bawah: Info & Keluar */}
      <div className="p-4 border-t border-slate-800">
        
        {currentConfig.bottomProfile}
        
        {/* Tombol Keluar */}
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-2 w-full text-red-400 hover:text-red-300 text-sm font-medium transition-all group"
        >
          <div className="flex items-center justify-center transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
          </div>
          Keluar
        </button>
      </div>
    </aside>
  );
}