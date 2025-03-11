import Link from "next/link";

export default function Conferencias() {
    // Datos de prueba para las conferencias
    const conferencias = [
      {
        id: 1,
        fecha: "15 de Octubre, 2023",
        titulo: "Conferencia sobre sostenibilidad",
        enlace: "#",
      },
      {
        id: 2,
        fecha: "20 de Noviembre, 2023",
        titulo: "Seminario de innovación tecnológica",
        enlace: "#",
      },
      {
        id: 3,
        fecha: "5 de Diciembre, 2023",
        titulo: "Taller de energías renovables",
        enlace: "#",
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {conferencias.map((conferencia) => (
          <div
            key={conferencia.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-gray-500 mb-2">{conferencia.fecha}</p>
            <h3 className="text-xl font-bold mb-2">{conferencia.titulo}</h3>
            <Link
              href={conferencia.enlace}
              className="text-blue-500 relative inline-block font-medium transition duration-300 group"
            >
              Más detalles
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