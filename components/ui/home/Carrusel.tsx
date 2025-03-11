"use client"; 
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Carrusel() {
  const imagenes = [
    "/imagen 1.jpeg",
    "/imagen 2.jpg",
    "/imagen 3.jpg",
  ];

  const [indiceActual, setIndiceActual] = useState(0);

  // Función para cambiar a la siguiente imagen
  const siguienteImagen = () => {
    setIndiceActual((prev) => (prev + 1) % imagenes.length);
  };

  // Efecto para cambiar automáticamente las imágenes cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(siguienteImagen, 5000); // Cambia cada 5 segundos
    return () => clearInterval(intervalo); // Limpia el intervalo al desmontar el componente
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={indiceActual}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full"
        >
          <Image
            src={imagenes[indiceActual]}
            alt={`Imagen ${indiceActual + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Botones de navegación */}
      <button
        onClick={() =>
          setIndiceActual((prev) =>
            prev === 0 ? imagenes.length - 1 : prev - 1
          )
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md"
      >
        &#10094;
      </button>
      <button
        onClick={siguienteImagen}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md"
      >
        &#10095;
      </button>
    </div>
  );
}