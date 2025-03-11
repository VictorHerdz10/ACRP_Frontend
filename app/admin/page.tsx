import LoginPage from "@/components/admin/LoginPage";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACRP - Admin Login",
  description: "Esta pagina es el inicio de seccion administrativo",
};

export default function Admin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {/* Contenedor para la imagen */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden relative">
            <Image
              src="/admin-img.png"
              alt="Inicio de Sesión Admin"
              fill
              sizes="(max-width: 768px) 100vw, 192px" 
              className="object-cover"
              priority
            />
          </div>
        </div>
        <LoginPage />
        {/* Enlace para volver a la página inicial */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="relative inline-block text-blue-500 hover:text-blue-700 font-medium transition duration-300 group"
          >
            Volver a la página inicial de ACPR
            {/* Subrayado animado */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-400 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
