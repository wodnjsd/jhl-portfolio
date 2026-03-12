import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import CarouselView from "@/components/CarouselView";
import EmbedView from "@/components/EmbedView";
import GalleryView from "@/components/GalleryView";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  let project;
  try {
    project = getProjectBySlug(slug);
  } catch {
    notFound();
  }

  if (project.projectType === "gallery") {
    return (
      <GalleryView
        title={project.title}
        category={project.category}
        year={project.year}
        images={project.images ?? []}
      />
    );
  }

  if (project.projectType === "embed") {
    if (!project.embedUrl) notFound();
    return (
      <EmbedView embedUrl={project.embedUrl} />
    );
  }

  return (
    <CarouselView
      title={project.title}
      category={project.category}
      year={project.year}
      images={project.images ?? []}
    >
      <MDXRemote source={project.content} />
    </CarouselView>
  );
}
