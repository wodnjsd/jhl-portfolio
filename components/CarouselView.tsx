"use client";

import { useState, useCallback } from "react";

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
    <div className="min-h-screen flex flex-col items-center text-sm">
      <div className="w-full max-w-2xl px-9 flex-1 flex flex-col">
        {/* number (left) | content | arrows (right), equidistant gaps, top-aligned */}
        <div className="flex items-start gap-8">
          <div className="shrink-0">
            <span className="font-light ">
              {current + 1} / {totalSlides}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            {current === 0 ? (
              <div className="max-w-xl mx-auto flex flex-col items-center">
                <div className="w-full grid grid-cols-3 items-baseline mb-5">
                  <span>
                    {category}
                  </span>
                  <h1 className="text-center">
                    {title}
                  </h1>
                  <span className="text-right">
                    {year}
                  </span>
                </div>

                <div className="w-full mx-auto ">
                  {children}
                </div>
              </div>
            ) : (
              <div className="w-full mx-auto">
                <img
                  src={images[current - 1]}
                  alt={`${title} — image ${current}`}
                  className="w-full h-auto block"
                />
              </div>
            )}
          </div>
          <div className="shrink-0 flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="hover:opacity-40 transition-opacity duration-300 select-none"
            >
              {"<"}
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="hover:opacity-40 transition-opacity duration-300 select-none"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>

      {/* <div className="py-10" /> */}
    </div>
  );
}
