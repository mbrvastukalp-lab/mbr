"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/gallery/1.jpg", caption: "Project 1" },
  { src: "/gallery/2.jpg", caption: "Project 2" },
  { src: "/gallery/3.jpg", caption: "Project 3" },
  { src: "/gallery/4.jpg", caption: "Project 4" },
  { src: "/gallery/5.jpg", caption: "Project 5" },
  { src: "/gallery/6.jpg", caption: "Project 6" },
  { src: "/gallery/7.jpg", caption: "Project 7" },
  { src: "/gallery/8.jpg", caption: "Project 8" },
  { src: "/gallery/9.jpg", caption: "Project 9" },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight" && selected !== null) setSelected((s) => (s! + 1) % images.length);
      if (e.key === "ArrowLeft" && selected !== null) setSelected((s) => (s! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <div className="container mx-auto px-4 py-20 flex-1">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Gallery</h1>
        <p className="text-muted-foreground">A showcase of our recent projects and completed works.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className="group overflow-hidden rounded-2xl shadow-soft bg-card border border-border p-2 flex flex-col transition-all hover:shadow-strong"
            aria-label={`Open image ${idx + 1}`}
          >
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image 
                src={item.src} 
                alt={item.caption} 
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
            </div>
            <div className="p-2 text-center">
              <p className="text-sm font-medium text-foreground">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <span className="text-2xl">✕</span>
            </button>
            <div className="relative w-full h-full">
              <Image 
                src={images[selected].src} 
                alt={images[selected].caption} 
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-white text-lg font-medium">{images[selected].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
