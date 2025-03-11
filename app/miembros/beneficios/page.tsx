import Breadcrumb from "@/components/ui/Breadcrumb";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACRP - Beneficios",
  description:
    "Se encuentra todos los miembros que conforman la organización e información de cómo agregarse a la ACRP",
};

export default function Benefiscios() {
  return (
    <>
      <Header />
      {/* Contenedor para el Breadcrumb */}
      <div className="mt-4 px-4 sm:px-8 lg:px-20">
        <Breadcrumb />
      </div>
      <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="font-bold text-xl text-indigo-600">
            Desde la página de Beneficios de ser Miembros
          </h1>
        </main>
      </div>
      <Footer />
    </>
  );
}
