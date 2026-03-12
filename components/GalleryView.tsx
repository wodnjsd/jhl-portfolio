interface Props {
  title: string;
  category: string;
  year: number;
  images: string[];
}

export default function GalleryView({ title, category, year, images }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-prose prose-sm grid grid-cols-3 items-baseline mb-4 pt-4">
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
        <div className="max-w-prose prose prose-sm prose-neutral mx-auto w-full flex flex-col gap-2 [&_:first-child]:mt-0 [&_:last-child]:mb-0">
          {images.map((src, i) => (
            <div key={i} className="w-full">
              <img
                src={src}
                alt={`${title} — image ${i + 1}`}
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
