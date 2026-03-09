"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  category: string;
  year: number;
  images: string[];
  children: React.ReactNode;
}

export default function CarouselView({
  title,
  category,
  year,
  images,
  children,
}: Props) {
  const totalSlides = 1 + images.length;
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + totalSlides) % totalSlides),
    [totalSlides]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % totalSlides),
    [totalSlides]
  );

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl px-6 pt-10 pb-4">
        <Link
          href="/"
          className="text-xs tracking-[0.2em] uppercase font-light hover:opacity-40 transition-opacity duration-300"
        >
          ← Back
        </Link>
      </div>

      <div className="w-full max-w-3xl px-6 flex-1 flex flex-col">
        {/* page counter + arrows */}
        <div className="flex justify-end items-start mb-8">
          <div className="flex flex-col items-end gap-2">
            <span className="text-xs tracking-[0.15em] font-light tabular-nums">
              {current + 1} / {totalSlides}
            </span>
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="text-xs tracking-[0.15em] font-light hover:opacity-40 transition-opacity duration-300 select-none"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="text-xs tracking-[0.15em] font-light hover:opacity-40 transition-opacity duration-300 select-none"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* slide content */}
        {current === 0 ? (
          <div className="flex flex-col items-center">
            <div className="w-full grid grid-cols-3 items-baseline mb-10">
              <span className="text-xs tracking-[0.2em] uppercase font-light">
                {category}
              </span>
              <h1 className="text-xs tracking-[0.2em] uppercase font-light text-center">
                {title}
              </h1>
              <span className="text-xs tracking-[0.2em] font-light text-right">
                {year}
              </span>
            </div>

            <div className="w-full max-w-prose prose prose-sm prose-neutral font-light leading-relaxed tracking-wide">
              {children}
            </div>
          </div>
        ) : (
          <div className="w-full aspect-[3/2] relative">
            <Image
              src={images[current - 1]}
              alt={`${title} — image ${current}`}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}
      </div>

      <div className="py-10" />
    </div>
  );
}
