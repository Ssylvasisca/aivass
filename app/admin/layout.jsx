import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "AIVAS - Admin Inbound",
  description: "Admin Inbound Scanner for AIVAS",
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Area Konten Utama */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10 shrink-0">
          
          {/* Bagian kiri dikosongkan karena ikon kotak dihapus */}
          <div className="flex items-center">
            
          </div>

          {/* Bagian Profil Kanan (Tetap Utuh) */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-slate-800 leading-tight">Budi Santoso</div>
              <div className="text-xs text-slate-500">Admin Inbound</div>
            </div>
            <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-slate-400 mt-1.5">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}