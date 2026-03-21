"use client";

import { useState, useCallback, useRef } from "react";

interface Props {
  title: string;
  category: string;
  year: number;
  images: string[];
  children: React.ReactNode;
}

const SWIPE_MIN_PX = 50;

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

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;
      touchStartX.current = null;
      touchStartY.current = null;
      if (Math.abs(dx) < SWIPE_MIN_PX) return;
      if (Math.abs(dy) >= Math.abs(dx)) return;
      if (dx < 0) next();
      else prev();
    },
    [next, prev]
  );

  const counter = (
    <span className="font-light tabular-nums">
      {current + 1} / {totalSlides}
    </span>
  );

  const headerRow = (
    <div className="w-full grid grid-cols-3 items-baseline mb-5">
      <span>{category}</span>
      <h1 className="text-center">{title}</h1>
      <span className="text-right">{year}</span>
    </div>
  );

  const arrows = (
    <div className="flex gap-2 shrink-0">
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
  );

  const slideBody =
    current === 0 ? (
      <div className="w-full sm:max-w-xl sm:mx-auto flex flex-col items-stretch sm:items-center">
        {headerRow}
        <div className="w-full">{children}</div>
      </div>
    ) : (
      <div className="w-full">
        <img
          src={images[current - 1]}
          alt={`${title} — image ${current}`}
          className="w-full h-auto block"
        />
      </div>
    );

  const mobileSlideContent =
    current === 0 ? (
      <>
        {headerRow}
        <div className="w-full">{children}</div>
      </>
    ) : (
      <div className="w-full">
        <img
          src={images[current - 1]}
          alt={`${title} — image ${current}`}
          className="w-full h-auto block"
        />
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center text-sm">
      <div className="w-full max-w-2xl px-6 flex-1 flex flex-col">
        {/* Mobile: full-width content; swipe on whole area; side tap zones overlaid */}
        <div
          className="sm:hidden relative w-full min-h-0 flex-1 touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative z-0 flex w-full min-h-0 flex-col">
            <div className="text-left mb-3">{counter}</div>
            {mobileSlideContent}
          </div>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="absolute inset-y-0 left-0 z-10 w-[18%] min-h-[40vh] border-0 bg-transparent p-0 cursor-default"
          />
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="absolute inset-y-0 right-0 z-10 w-[18%] min-h-[40vh] border-0 bg-transparent p-0 cursor-default"
          />
        </div>

        {/* Desktop: number | content | arrows */}
        <div className="hidden sm:flex items-start gap-8">
          <div className="shrink-0">{counter}</div>
          <div className="flex-1 min-w-0">{slideBody}</div>
          {arrows}
        </div>
      </div>
    </div>
  );
}
