"use client";

import Image from "next/image";
import { useRef } from "react";

const images = [
  "/trabajo1.jpg",
  "/trabajo2.jpg",
  "/trabajo3.jpg",
  "/trabajo4.jpg",
];

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 z-10 hover:bg-black/70"
      >
        ◀
      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-4 p-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {images.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-64 snap-center">
            <Image
              src={src}
              alt={`Trabajo ${i + 1}`}
              width={256}
              height={256}
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 z-10 hover:bg-black/70"
      >
        ▶
      </button>
    </div>
  );
}
