import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      <Navbar />

      <ul className="flex flex-col items-center gap-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="text-xs tracking-[0.2em] uppercase font-light hover:opacity-40 transition-opacity duration-300"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>

      <nav className="flex gap-10 py-10">
        <Link
          href="/about"
          className="text-xs tracking-[0.2em] uppercase font-light hover:opacity-40 transition-opacity duration-300"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-xs tracking-[0.2em] uppercase font-light hover:opacity-40 transition-opacity duration-300"
        >
          Contact
        </Link>
      </nav>
    </main>
  );
}
