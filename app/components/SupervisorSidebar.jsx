"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SupervisorSidebar() {
  const pathname = usePathname();
  const router = useRouter(); // Hook untuk navigasi halaman

  const menuItems = [
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
  ];

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <aside className="w-64 bg-[#1e293b] text-white flex flex-col h-screen border-r border-slate-800">
      
      {/* Logo & Header Sidebar */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20 shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg>
        </div>
        <div>
          <h1 className="text-base font-bold tracking-tight leading-none text-white">AIVAS</h1>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Supervisor
          </p>
        </div>
      </div>

      <div className="px-6 mb-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Supervisor</div>

      {/* Menu Navigasi */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
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
                {item.icon}
              </div>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bagian Bawah: Info Supervisor & Keluar */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-2 mb-4">
          <div>
            <p className="text-sm font-medium text-white leading-none">Rina Wijaya</p>
          </div>
        </div>
        
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
