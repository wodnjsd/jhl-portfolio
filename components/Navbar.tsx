import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-10">
      <Link
        href="/"
        className="text-sm tracking-[0.25em] uppercase font-light hover:opacity-50 transition-opacity duration-300"
      >
        JANG HEE LEE
      </Link>
    </nav>
  );
}
