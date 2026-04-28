"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Arahkan ke halaman dashboard vendor setelah login ditekan
    router.push("/vendor");
  };

  return (
    <div className="flex min-h-screen bg-[#f0f4f8]">
      
      {/* Bagian Kiri (Form Login) */}
      <div className="w-1/2 flex flex-col justify-center items-center p-12 bg-gradient-to-br from-white to-blue-50">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <img src="/logoaivas.jpg" alt="AIVAS Logo" className="h-16" />
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">✉️</span>
                <input
                  type="email"
                  placeholder="Alamat Email"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Kata Sandi</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">🔑</span>
                <input
                  type="password"
                  placeholder="Kata Sandi"
                  className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">👁️</span>
              </div>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-sm text-gray-500 hover:text-blue-500">Lupa Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3b9ded] hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-all"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>

      {/* Bagian Kanan (Gambar Gedung) */}
      <div className="w-1/2 bg-[#0a4b9c] p-6">
        <div className="w-full h-full bg-gray-300 rounded-3xl overflow-hidden">
          {/* Pastikan kamu punya gambar gedungepson.jpg di folder public/ */}
          <img 
            src="/gedungepson.jpg" 
            alt="Gedung Epson" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
}