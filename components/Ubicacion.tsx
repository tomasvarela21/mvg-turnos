import Link from "next/link";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">¿Dónde Estamos?</h2>
      <p className="text-lg mb-6">Maipú 1122, San Miguel de Tucumán, Tucumán, Argentina</p>
      <Link
        href="https://g.co/kgs/Jas2t7Q"
        target="_blank"
        className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
      >
        Ver en Google Maps
      </Link>
    </section>
  );
}
