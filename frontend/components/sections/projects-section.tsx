"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Eye, Play } from "lucide-react"
import InteractiveCard from "@/components/animations/interactive-card"
import { projects } from "@/constants/projects"
import CustomFontText from "@/components/animations/custom-font-text"
import { getImagePath } from "@/lib/image"

export default function ProjectsSection() {
  const handleProjectClick = (project: any) => {
    // If project only has GitHub link and no other content, open GitHub directly
    if (project.githubUrl && !project.detailDescription && !project.videoUrl && !project.images?.length) {
      window.open(project.githubUrl, "_blank")
      return
    }
    // Otherwise, navigate to project detail page
    window.location.href = `/projects/${project.slug}`
  }

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <CustomFontText
          text="My Projects"
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          interval={1500}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <InteractiveCard key={index}>
              <Card className="overflow-hidden h-full border-2 hover:border-primary/50 transition-colors group cursor-pointer flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={getImagePath(project.image || "/placeholder.svg")}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Video Play Button Overlay */}
                  {project.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/70 rounded-full p-4 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {!project.videoUrl && <Eye className="h-8 w-8 text-white" />}
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4 text-muted-foreground line-clamp-2">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    {project.githubUrl && (
                      <Button
                        variant="default"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open(project.githubUrl, "_blank")
                        }}
                        className="flex-1"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.open(project.liveUrl, "_blank")
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </InteractiveCard>
          ))}
        </div>
      </div>
    </section>
  )
}
