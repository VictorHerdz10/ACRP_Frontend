import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Carrusel from "@/components/ui/home/Carrusel";
import Conferencias from "@/components/ui/home/Conferencias";
import Noticias from "@/components/ui/home/Noticias";
import Publicaciones from "@/components/ui/home/Publicaciones";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
        <main className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* Sección: Últimas publicaciones del ACRP */}
          <section id="publicaciones" className="w-full">
            <h2 className="text-3xl font-bold mb-8">Últimas Publicaciones</h2>
            <Publicaciones />
          </section>

          {/* Sección: Conferencias y seminarios programados */}
          <section id="conferencias" className="w-full">
            <h2 className="text-3xl font-bold mb-8">Conferencias y Seminarios</h2>
            <Conferencias />
          </section>

          {/* Sección: Noticias y eventos */}
          <section id="noticias" className="w-full">
            <h2 className="text-3xl font-bold mb-8">Noticias y Eventos</h2>
            <Noticias />
          </section>

          {/* Sección: Carrusel o animaciones */}
          <section id="carrusel" className="w-full">
            <h2 className="text-3xl font-bold mb-8">Galería</h2>
            <Carrusel />
          </section>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}