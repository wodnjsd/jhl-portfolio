import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDir = path.join(process.cwd(), "content", "projects");

export interface ProjectFrontmatter {
  title: string;
  category: string;
  year: number;
  projectType: "carousel" | "gallery";
  images: string[];
}

export interface ProjectMeta extends ProjectFrontmatter {
  slug: string;
}

export interface Project extends ProjectMeta {
  content: string;
}

export function getAllProjects(): ProjectMeta[] {
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".mdx"));

  return files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(projectsDir, filename), "utf-8");
    const { data } = matter(raw);
    return { slug, ...(data as ProjectFrontmatter) };
  });
}

export function getProjectBySlug(slug: string): Project {
  const filepath = path.join(projectsDir, `${slug}.mdx`);
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, ...(data as ProjectFrontmatter), content };
}
