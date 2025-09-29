import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import CustomFontText from "@/components/animations/custom-font-text";
import { getImagePath } from "@/lib/image";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  image?: string;
  supervisor?: string;
  institution?: string;
}

const experiences: Experience[] = [
  {
    company: "ByteDance",
    role: "Data (+Software) Engineer Intern",
    period: "May 2025 - September 2025",
    location: "Shanghai, China",
    description: [
      "Global Monetization Product and Technology - TikTok Ads Diagnosis",
    ],
    technologies: ["Data Migration", "Workflow Automation", "Data Migration", "Data Pipelining",  "Java", "SQL", "Hive", "Spark"],
    image: "/bytedance-logo.jpg"
  },
  {
    company: "New York University",
    role: "Research Assistant",
    period: "June 2024 - Present",
    location: "New York, NY",
    institution: "Tandon School of Engineering",
    supervisor: "Professor Torsten Suel",
    description: [
      "Researching graph-based expansion in dense retrieval systems.",
    ],
    technologies: ["Information Retrieval", "Search Engine", "Query Processing", "Database", "Python"],
    image: "/nyu-logo.png"
  },
  {
    company: "CITIC Poly Fund",
    role: "Data Analyst Intern",
    period: "June 2023 - August 2023",
    location: "Guangzhou, China",
    description: [
      "Shipped Internal NLP-powered investment news processing systems.",
    ],
    technologies: ["Web Scraping", "Data Engineering", "AWS", "Workflow", "Python"],
    image: "/CITIC-logo.png"
  },
];

export function ExperienceSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <CustomFontText
          text="My Experience"
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          interval={1500}
        />
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group border-l-4 border-l-primary/30 hover:border-l-primary">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  {exp.image && (
                    <div className="w-16 h-16 relative flex-shrink-0 opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                      <Image
                        src={getImagePath(exp.image)}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                        <p className="text-lg font-medium">{exp.company}</p>
                        {exp.institution && (
                          <p className="text-sm text-muted-foreground">{exp.institution}</p>
                        )}
                        {exp.supervisor && (
                          <p className="text-sm text-muted-foreground">Supervised by {exp.supervisor}</p>
                        )}
                      </div>
                      <div className="text-left md:text-right mt-2 md:mt-0">
                        <p className="text-sm font-medium text-primary">{exp.period}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      {exp.description.map((item, i) => (
                        <p key={i} className="text-muted-foreground italic text-sm leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 