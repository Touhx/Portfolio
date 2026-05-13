import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import ProjectClient from "./project-client";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex(p => p.slug === slug);
  
  if (projectIndex === -1) return notFound();
  
  const project = { ...projects[projectIndex] };
  
  // Calculate next project
  const nextIndex = (projectIndex + 1) % projects.length;
  project.nextProject = {
    slug: projects[nextIndex].slug,
    title: projects[nextIndex].title,
  };
  
  return <ProjectClient project={project} />;
}
