"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const adminMenu = [
    { name: "Scan & Verifikasi", icon: "🔍", path: "/admin/scan" },
    { name: "Riwayat Verifikasi", icon: "📜", path: "/admin/riwayat" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* Sidebar Admin */}
      <aside className="w-64 bg-[#1e293b] text-white flex flex-col h-screen sticky top-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden">
            <img src="/logo.jpg" className="w-full h-full object-cover mix-blend-screen" />
          </div>
          <div>
            <h1 className="text-sm font-bold leading-none">AIVAS</h1>
            <p className="text-[10px] text-slate-400 mt-1">Inbound Scanner</p>
          </div>
        </div>

        <nav className="flex-1 px-4 mt-4 space-y-2">
          <p className="text-[10px] uppercase text-slate-500 font-bold ml-2 mb-4">Scanner Menu</p>
          {adminMenu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                pathname.startsWith(item.path) ? "bg-blue-600 shadow-lg" : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              <span>{item.icon}</span> {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-[10px]">B</div>
            <div>
              <p className="text-[10px] font-bold">Budi Santoso</p>
              <p className="text-[9px] text-slate-500">Admin Inbound</p>
            </div>
          </div>
          <button onClick={() => router.push("/")} className="text-red-400 text-xs font-bold flex gap-2 items-center px-4 py-2 hover:bg-red-500/10 w-full rounded-lg">
            <span>↪️</span> Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <header className="h-16 bg-white border-b flex items-center justify-between px-8">
          <button className="text-slate-400">☰</button>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-bold text-slate-800">Budi Santoso</p>
              <p className="text-[10px] text-slate-500">Admin Inbound</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">B</div>
          </div>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}