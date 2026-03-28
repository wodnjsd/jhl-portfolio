interface Props {
  title: string;
  category: string;
  year: number;
  images: string[];
}

export default function GalleryView({ title, category, year, images }: Props) {
  return (
    <div className="flex flex-col items-center px-6">
      <div className="w-full max-w-xl grid grid-cols-3 items-baseline mb-5 text-sm">
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

      {/* stacked images */}
      <div className="w-full max-w-xl flex flex-col gap-2 pb-20">
        <div className="mx-auto w-full flex flex-col gap-2">
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
