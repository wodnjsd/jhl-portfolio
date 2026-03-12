export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <div className="max-w-prose px-6 flex flex-col gap-6 text-center">
        {/* <h1 className="text-xs tracking-[0.25em] uppercase font-light">About</h1> */}
        <p className="text-sm font-light tracking-wide text-neutral-700">
          Jang Hee Lee is an ARB-registered architect and researcher whose work explores
          the intersections of architecture, city, and political economy. He graduated from
          Yonsei University and the Architectural Association (AA) with commendation,
          and is currently a PhD candidate at the AA. He has led design-research workshops
          at the AA, Royal Academy of Fine Arts Antwerp, University of Antwerp,
          Leeds Beckett University and Kaywon University of Art and Design. He also
          serves as an architect on the Construction Committee of Dhamma Padhāna, a
          Vipassana meditation centre in Hereford, UK.
        </p>
      </div>

      <div className="py-10" />
    </main>
  );
}
