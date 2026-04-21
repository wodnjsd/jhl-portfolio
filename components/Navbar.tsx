import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center pt-14 py-12">
      <Link
        href="/"
        className="text-sm/tight uppercase hover:opacity-60 transition-opacity duration-300"
      >
        JANG HEE LEE
      </Link>
    </nav>
  );
}
