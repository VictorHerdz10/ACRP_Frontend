import Link from "next/link";

export default function Publicaciones() {
    // Datos de prueba para las publicaciones
    const publicaciones = [
      {
        id: 1,
        titulo: "Nuevo estudio sobre cambio climático",
        descripcion: "Descubre los hallazgos más recientes en nuestro informe.",
        enlace: "#",
      },
      {
        id: 2,
        titulo: "Guía de buenas prácticas agrícolas",
        descripcion: "Conoce las mejores prácticas para una agricultura sostenible.",
        enlace: "#",
      },
      {
        id: 3,
        titulo: "Informe anual 2023",
        descripcion: "Revisa nuestro informe anual con los logros del año.",
        enlace: "#",
      },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {publicaciones.map((publicacion) => (
          <div
            key={publicacion.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-2">{publicacion.titulo}</h3>
            <p className="text-gray-600 mb-4">{publicacion.descripcion}</p>
            <Link
              href={publicacion.enlace}
              className="text-blue-500 relative inline-block font-medium transition duration-300 group"
            >
              Leer más
              <span
              className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-indigo-500 transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
      w-0 group-hover:w-full"
            ></span>
            </Link>
          </div>
        ))}
      </div>
    );
  }