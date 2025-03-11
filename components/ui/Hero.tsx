import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mt-16 sm:mt-0">
      {/* Imagen de fondo */}
      <Image
        src="/pattern-recognition-hero.jpg"
        alt="Reconocimiento de patrones e IA"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>

      {/* Contenido del Hero */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-shadow-lg">
          Asociación Cubana de Reconocimiento de Patrones
        </h1>

        {/* Descripción */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-2xl text-shadow">
          Desde 1999, la ACRP ha sido un pilar en el desarrollo del reconocimiento de patrones
          y la minería de datos en Cuba. Promovemos la colaboración entre especialistas,
          fomentamos la investigación y llevamos los avances de nuestra disciplina al mundo.
          Únete a nosotros y sé parte de una comunidad que transforma el futuro con inteligencia
          artificial y análisis de datos.
        </p>

        {/* Botón de llamado a la acción */}
        <Link
          href={"/miembros/unete"}
          className="bg-indigo-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
        >
          Únete a la ACRP
        </Link>
      </div>
    </div>
  );
}