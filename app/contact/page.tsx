export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-sm">
      <div className="max-w-xl px-6 flex flex-col gap-2 text-center">
        <h1 className="tracking-wide uppercase mb-4">Contact</h1>
        <a href="mailto:janghee.lee600@gmail.com" className="font-light tracking-wide text-neutral-700">
        janghee.lee600@gmail.com
        </a>
        <a href="https://www.instagram.com/janghee.lee6/" target="_blank" className="font-light tracking-wide text-neutral-700">
        IG. janghee.lee6
        </a>
      </div>
      <div className="py-16" />
    </main>
  );
}
