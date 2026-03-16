import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-14">
      <Link
        href="/"
        className="text-sm tracking-wider uppercase hover:opacity-60 transition-opacity duration-300"
      >
        JANG HEE LEE
      </Link>
    </nav>
  );
}
