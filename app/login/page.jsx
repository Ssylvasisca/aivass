"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/vendor");
  };

  return (
    <div className="flex min-h-screen bg-white">
      
      {/* Bagian Kiri (Form Login) */}
      <div className="w-1/2 flex flex-col justify-center items-center p-12 bg-gradient-to-br from-white to-blue-50">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <img src="/logoaivas.jpg" alt="AIVAS Logo" className="h-16" />
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Input Email */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-1">Email</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <img src="/ic_mail.jpg" alt="mail" className="w-full h-full object-contain opacity-60" />
                </div>
                <input
                  type="email"
                  placeholder="Alamat Email"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm text-black bg-white transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Input Password */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-1">Kata Sandi</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <img src="/ic_key.jpg" alt="key" className="w-full h-full object-contain opacity-60" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Kata Sandi"
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm text-black bg-white transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* Tombol Show/Hide Password */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center hover:opacity-70 transition-opacity"
                >
                  <img 
                    src="/ic_visability.jpg" 
                    alt="toggle visibility" 
                    className={`w-full h-full object-contain ${showPassword ? 'brightness-50' : 'opacity-40'}`} 
                  />
                </button>
              </div>
            </div>

            {/* Lupa Password */}
            <div className="flex justify-end">
              <button 
                type="button"
                onClick={() => alert("Silahkan hubungi Admin Inbound untuk reset password.")}
                className="text-xs font-semibold text-gray-400 hover:text-blue-600 transition-colors"
              >
                Lupa Password?
              </button>
            </div>

            {/* Button Masuk */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#3b82f6] to-[#2dd4bf] hover:opacity-90 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>

      {/* Bagian Kanan (Gambar Gedung) */}
      <div className="w-1/2 bg-[#0a3d8b] p-8 flex items-center justify-center">
        <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
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