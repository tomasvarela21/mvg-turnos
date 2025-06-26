"use client";

import Image from "next/image";
import Carousel from "@/components/CarruselTrabajos";

export default function HomePage() {
  return (
    <div className="space-y-24">

      {/* HERO SECTION */}
      <section className="text-center py-20 bg-gradient-to-b from-black to-gray-900 text-white rounded-lg">
        <h2 className="text-5xl font-bold mb-4">Bienvenido a Mi Viejo Garage</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Barbería montada en mi garage, construida de a poco. Ofrece productos para el cabello y la barba, además de bebidas, snacks y cócteles. Siempre con la mejor vibra, energía y buena música.
        </p>
        <a href="/book" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
          Reservar Turno
        </a>
      </section>

      {/* TRABAJOS REALIZADOS */}
<section id="trabajos" className="text-center px-4">
  <h3 className="text-3xl font-bold mb-6">Trabajos Realizados</h3>
  <Carousel />
</section>


      {/* UBICACIÓN */}
      <section id="ubicacion" className="text-center space-y-4">
        <h3 className="text-3xl font-bold">¿Dónde Estamos?</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300">Maipú 1122, San Miguel de Tucumán, Tucumán, Argentina</p>
        <a
          href="https://g.co/kgs/Jas2t7Q"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Ver en Google Maps
        </a>
      </section>

    </div>
  );
}
