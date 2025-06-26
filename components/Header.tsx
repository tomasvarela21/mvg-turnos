"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogin = () => router.push("/admin/login");

  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-4">
        {/* Logo opcional, se puede reemplazar cuando lo tengas */}
        <Image src="/logo.png" alt="Mi Viejo Garage" width={40} height={40} />
        <h1 className="text-xl font-bold">Mi Viejo Garage</h1>
      </div>
      <nav className="flex gap-6 items-center">
        <Link href="/" className="hover:underline">Inicio</Link>
        <Link href="#trabajos" className="hover:underline">Trabajos</Link>
        <Link href="#ubicacion" className="hover:underline">Ubicación</Link>
        {user ? (
          <button onClick={logout} className="hover:underline text-red-400">Salir</button>
        ) : (
          <button onClick={handleLogin} className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300">Ingresar</button>
        )}
        <button onClick={toggleTheme} className="text-sm border px-2 py-1 rounded hover:bg-gray-700 transition">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}
