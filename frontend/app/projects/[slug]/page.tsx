import { projects, getProjectBySlug } from "@/constants/projects"
import { redirect } from "next/navigation"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    redirect("/#projects")
  }

  // For now, redirect to GitHub if available, otherwise to projects section
  if (project.githubUrl) {
    redirect(project.githubUrl)
  }

  redirect("/#projects")
}