import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between py-10">
      <div className="w-full flex justify-center">
        <Link
          href="/"
          className="text-xs tracking-[0.2em] uppercase font-light hover:opacity-40 transition-opacity duration-300"
        >
          ← Back
        </Link>
      </div>

      <div className="max-w-prose px-6 flex flex-col gap-2 text-center">
        <h1 className="text-xs tracking-[0.25em] uppercase font-light mb-4">Contact</h1>
        <a href="mailto:janghee.lee600@gmail.com" className="text-xs font-light leading-loose tracking-wide text-neutral-500">
        janghee.lee600@gmail.com
        </a>
        <a href="https://www.instagram.com/janghee.lee6/" target="_blank" className="text-xs font-light leading-loose tracking-wide text-neutral-500">
        IG. janghee.lee6
        </a>
      </div>

      <div className="py-10" />
    </main>
  );
}
