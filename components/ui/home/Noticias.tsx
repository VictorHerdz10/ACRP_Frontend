"use client";

import Image from "next/image";
import Link from "next/link";

export default function Noticias() {
  const noticias = [
    {
      id: 1,
      imagen: "/imagen 1.jpeg",
      titulo: "Lanzamiento del nuevo programa de becas",
      resumen:
        "El ACRP anuncia un nuevo programa de becas para estudiantes destacados.",
      enlace: "#",
    },
    {
      id: 2,
      imagen: "/imagen 2.jpg",
      titulo: "Nueva asociación con universidades",
      resumen:
        "El ACRP firma un acuerdo con varias universidades para promover la investigación.",
      enlace: "#",
    },
    {
      id: 3,
      imagen: "/imagen 3.jpg",
      titulo: "Evento benéfico recauda fondos",
      resumen:
        "El evento anual del ACRP recauda fondos para proyectos comunitarios.",
      enlace: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {noticias.map((noticia) => (
        <div
          key={noticia.id}
          className="relative bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-transform duration-300 hover:scale-102"
        >
          {/* Contenedor para la animación del borde */}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div className="absolute inset-0 border-2 border-transparent rounded-lg" />
          </div>

          {/* Imagen */}
          <div className="relative h-48">
            <Image
              src={noticia.imagen}
              alt={noticia.titulo}
              fill
              className="object-cover"
            />
          </div>

          {/* Contenido */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{noticia.titulo}</h3>
            <p className="text-gray-600 mb-4">{noticia.resumen}</p>
            <Link href={noticia.enlace} className="text-blue-500 relative inline-block font-medium transition duration-300 group">
              Leer más
              <span
              className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-indigo-500 transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
      w-0 group-hover:w-full"
            ></span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}