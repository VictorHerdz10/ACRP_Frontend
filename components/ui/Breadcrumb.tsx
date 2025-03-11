"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Breadcrumb = () => {
  const pathname = usePathname();

  // Divide la ruta en segmentos
  const segments = pathname.split("/").filter((segment) => segment !== "");

  // Mapea los segmentos a nombres legibles
  const breadcrumbMap: { [key: string]: string } = {
    nosotros: "Nosotros",
    "historia-acrp": "Historia de la ACRP",
    comites: "Comités",
    estatutos: "Estatutos y Reglamentos",
    contacto: "Contacto",
    premios: "Premios",
    anuales: "Premios Anuales",
    becas: "Becas",
    conferencias: "Conferencias",
    "conferencia-anual": "Conferencia Anual",
    talleres: "Talleres y Seminarios",
    calendario: "Calendario de Eventos",
    "programa-conferencias": "Programa de Conferencias",
    publicaciones: "Publicaciones",
    revista: "Revista Científica",
    boletin: "Boletín Informativo",
    documentos: "Documentos Técnicos",
    noticias: "Noticias",
    ultimas: "Últimas Noticias",
    archivo: "Archivo de Noticias",
    miembros: "Miembros",
    unete: "Únete a la ACRP",
    directorio: "Directorio de Miembros",
    beneficios: "Beneficios de ser Miembro",
  };

  return (
    <nav className="flex items-center text-lg text-gray-600 m-auto p-2 pt-5">
      <Link
        href="/"
        className="hover:text-indigo-600 relative inline-block font-medium transition duration-300 group"
      >
        Inicio
        <span
          className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-indigo-500 transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
      w-0 group-hover:w-full"
        ></span>
      </Link>
      {segments.map((segment, index) => (
        <div key={index} className="flex items-center">
          <ChevronRightIcon className="w-4 h-4 mx-2" />
          <Link
            href={`/${segments.slice(0, index + 1).join("/")}`}
            className="hover:text-indigo-600 relative inline-block font-medium transition duration-300 group"
          >
            {breadcrumbMap[segment] || segment}
            <span
              className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-indigo-500 transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
      w-0 group-hover:w-full"
            ></span>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
