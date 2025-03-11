import Breadcrumb from "@/components/ui/Breadcrumb";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import type { Metadata } from "next";
//import Link from "next/link";

export const metadata: Metadata = {
  title: "ACRP - Anuales",
  description: "Todas las noticias acontecidas en orden cronológico",
};
export default function Anuales() {
  return (
    <>
      <Header />
       {/* Contenedor para el Breadcrumb */}
       <div className="mt-4 px-4 sm:px-8 lg:px-20">
        <Breadcrumb />
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1
          className="font-bold text-xl text-indigo-600">Desde la pagina de Premios anuales</h1>
        </main>
      </div>

      <Footer />
    </>
  );
}
