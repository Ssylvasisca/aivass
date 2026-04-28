import Sidebar from "../components/Sidebar";

export default function VendorLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f1f5f9]">
      {/* Panggil komponen Sidebar disini */}
      <Sidebar />
      
      {/* Konten Halaman Sebelah Kanan */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Topbar kecil */}
        <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
            <div className="text-gray-500 cursor-pointer">☰</div>
            <div className="flex items-center gap-3">
                <div className="text-right">
                    <p className="text-sm font-bold text-gray-700">PT. Maju Komponen</p>
                    <p className="text-xs text-gray-500">Vendor</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">P</div>
            </div>
        </header>

        {/* Area utama tempat konten halaman (seperti daftar PO) akan dirender */}
        <main className="p-6 overflow-y-auto flex-1">
          {children}
        </main>
        
      </div>
    </div>
  );
}