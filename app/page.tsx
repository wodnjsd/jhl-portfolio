import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-20">
      <ul className="flex flex-col items-center gap-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="text-sm tracking-wide  hover:opacity-60 transition-opacity duration-300"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>

      <nav className="flex flex-col items-center gap-2 ">
        <Link
          href="/about"
          className="text-sm tracking-wide hover:opacity-60 transition-opacity duration-300"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-sm tracking-wide hover:opacity-40 transition-opacity duration-300"
        >
          Contact
        </Link>
      </nav>
      <div className="py-8" />
    </main>
  );
}
