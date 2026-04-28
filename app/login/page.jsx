"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "supervisor") {
      router.push("/supervisor");
    } else if (role === "admin") {
      router.push("/admin");
    } else if (role === "ppic") {
      router.push("/ppic");
    } else {
      router.push("/vendor");
    }
  };

  return (
    <div className="flex h-screen bg-[#1e3a8a]">
      
      {/* Bagian Kiri (Form Login) */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gradient-to-b from-[#f0f8ff] to-[#e6f4ff] h-full">
        <div className="w-full max-w-[340px]">
          
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <img src="/logoaivas.jpg" alt="AIVAS Logo" className="h-20 object-contain mix-blend-multiply" />
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Input Email */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-1.5">Email</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Alamat Email"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-sm text-gray-700 bg-[#eff6ff] shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Input Password */}
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-1.5">Kata Sandi</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1-.43-1.563A6 6 0 1121.75 8.25z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Kata Sandi"
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-sm text-gray-700 bg-[#eff6ff] shadow-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* Tombol Show/Hide Password */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Lupa Password */}
            <div className="flex justify-end pt-1">
              <button 
                type="button"
                onClick={() => alert("Silahkan hubungi Admin Inbound untuk reset password.")}
                className="text-[10px] font-semibold text-gray-400 hover:text-blue-600 transition-colors"
              >
                Lupa Password?
              </button>
            </div>

            {/* Button Masuk */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#38bdf8] hover:bg-blue-400 text-white font-bold py-2.5 px-4 rounded-lg shadow-sm transition-colors"
              >
                Masuk {role ? `sebagai ${role}` : ""}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bagian Kanan (Gambar Gedung) */}
      <div className="w-1/2 bg-[#1e3a8a] p-12 flex items-center justify-center">
        <div className="w-full h-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl relative border-4 border-transparent">
          <img 
            src="/gedungepson.jpg" 
            alt="Gedung Epson" 
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}