import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900 text-white py-16 px-6 text-center">
  <h2 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a Mi Viejo Garage</h2>
  <p className="max-w-xl mx-auto text-lg mb-6">
    Barbería montada en mi garage, construida de a poco. Ofrece productos para el cabello y la barba, bebidas, snacks y cócteles. Siempre con la mejor vibra, energía y buena música.
  </p>
  <a href="/book" className="inline-block bg-amber-500 text-black font-semibold px-6 py-3 rounded hover:bg-amber-600 transition">
    Reservar Turno
  </a>
</section>

  );
}
