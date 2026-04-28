"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PilihRolePage() {
  const router = useRouter();
  const [roleTerpilih, setRoleTerpilih] = useState("");

  const daftarRole = [
    { id: "vendor", title: "Vendor", desc: "Kelola pengiriman & buat DO digital", icon: "ic_truck.jpg" },
    { id: "admin", title: "Admin Inbound", desc: "Scan QR & verifikasi barang masuk", icon: "ic_scan.jpg" },
    { id: "supervisor", title: "Supervisor", desc: "Monitor analytics & kelola discrepancy", icon: "ic_chart.jpg" },
    { id: "ppic", title: "PPIC / Purchasing", desc: "Buat & kelola Purchase Order", icon: "ic_box.jpg" },
  ];

  const handleLanjut = () => {
    if (roleTerpilih) {
      // Pindah ke halaman login sambil membawa info role
      router.push(`/login?role=${roleTerpilih}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2f4c] to-[#0a4b9c] flex flex-col items-center justify-center text-white font-sans">
      
      {/* Header / Logo */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-2 mb-2">
          <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain mix-blend-screen" />
          <h1 className="text-3xl font-bold">AIVAS</h1>
        </div>
        <p className="text-gray-300">Automated Inbound Verification & Analytics System</p>
        <p className="text-gray-400 text-sm">PT. Indonesia Epson Industry</p>
      </div>

      {/* Grid Menu Role */}
      <div className="grid grid-cols-2 gap-4 max-w-2xl w-full px-4">
        {daftarRole.map((role) => (
          <div
            key={role.id}
            onClick={() => setRoleTerpilih(role.id)}
            className={`p-6 rounded-xl cursor-pointer border-2 transition-all bg-white/10 backdrop-blur-sm
              ${roleTerpilih === role.id ? "border-blue-400 bg-white/20" : "border-transparent hover:border-gray-500"}
            `}
          >
            <img src={`/${role.icon}`} alt={role.title} className="w-8 h-8 mb-4 opacity-80" />
            <h2 className="text-lg font-semibold mb-1">{role.title}</h2>
            <p className="text-sm text-gray-300">{role.desc}</p>
          </div>
        ))}
      </div>

      {/* Tombol Masuk (Muncuk jika ada role yang dipilih) */}
      {roleTerpilih && (
        <button
          onClick={handleLanjut}
          className="mt-8 bg-[#0f8bfd] hover:bg-blue-500 text-white font-semibold py-3 px-12 rounded-lg transition-all"
        >
          Masuk sebagai {daftarRole.find((r) => r.id === roleTerpilih)?.title}
        </button>
      )}
    </div>
  );
}