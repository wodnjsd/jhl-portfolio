import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  category: string;
  year: number;
  images: string[];
}

export default function GalleryView({ title, category, year, images }: Props) {
  return (
    <div className="flex flex-col items-center">
      {/* back link */}
      <div className="w-full max-w-3xl px-6 pt-10 pb-4">
        <Link
          href="/"
          className="text-xs tracking-[0.2em] uppercase font-light hover:opacity-40 transition-opacity duration-300"
        >
          ← Back
        </Link>
      </div>

      {/* header */}
      <div className="w-full max-w-3xl px-6 grid grid-cols-3 items-baseline mb-10">
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

      {/* stacked images */}
      <div className="w-full max-w-3xl px-6 flex flex-col gap-2 pb-20">
        {images.map((src, i) => (
          <div key={i} className="w-full aspect-3/2 relative">
            <Image
              src={src}
              alt={`${title} — image ${i + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
