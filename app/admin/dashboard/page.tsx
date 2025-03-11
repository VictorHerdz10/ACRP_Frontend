
import { verifySession } from "@/src/auth/dal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACRP - Admin Dasboard",
  description: "Se administera todo el contenido que se muestra en la pagina principal de la asociacion cubana de reconocimiento de patrones",
};


export default async function Dashboard() {
  await verifySession();
  
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
         Desde el dashboard
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        </footer>
      </div>
    );
  }
  