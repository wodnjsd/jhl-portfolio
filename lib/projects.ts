import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDir = path.join(process.cwd(), "content", "projects");

export interface ProjectFrontmatter {
  title: string;
  category: string;
  location: string;
  year: number;
  projectType: "carousel" | "gallery" | "embed";
  order?: number;
  images?: string[];
  embedUrl?: string;
}

export interface ProjectMeta extends ProjectFrontmatter {
  slug: string;
}

export interface Project extends ProjectMeta {
  content: string;
  endContent?: string;
}

const END_SLIDE_MARKER = "<!-- end-slide -->";

export function getAllProjects(): ProjectMeta[] {
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".mdx"));

  const projects = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(projectsDir, filename), "utf-8");
    const { data } = matter(raw);
    return { slug, ...(data as ProjectFrontmatter) };
  });
  return projects.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export function getProjectBySlug(slug: string): Project {
  const filepath = path.join(projectsDir, `${slug}.mdx`);
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);

  const [main, end] = content.split(END_SLIDE_MARKER);
  const endContent = end?.trim() ? end.trim() : undefined;
  return {
    slug,
    ...(data as ProjectFrontmatter),
    content: main.trim(),
    endContent,
  };
}
