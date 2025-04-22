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
    company: "New York University",
    role: "Research Assistant",
    period: "June 2024 - Present",
    location: "New York, NY",
    institution: "Tandon School of Engineering",
    supervisor: "Professor Torsten Suel",
    description: [
      "Conducted a systematic study on how seed quality impacts graph-based expansion in LADR (Lexically-Accelerated Dense Retrieval); designed a plug-and-play retrieval pipeline supporting multiple sparse retrieval models (BM25, DeepImpact, SPLADE, etc.) as initial seed sets.",
      "Implemented a graph expansion module for candidate documents using KNN/HNSW; incorporated a vector dimension masking mechanism (PRFDIME) that constructs semantic masks via pseudo relevance feedback to enhance query representation and improve reranking effectiveness.",
      "Through multiple experiments, demonstrated that reranking using only the top-3000 graph-expanded passages via Bi-Encoder/Cross-Encoder models can achieve comparable performance to full-corpus reranking, while improving recall and reducing computational cost.",
    ],
    technologies: ["Information Retrieval", "Search Engine", "Query Processing", "Database", "Python"],
    image: "/nyu-logo.png"
  },
  {
    company: "TripPlanner",
    role: "Full Stack Developer",
    period: "September 2024 - Present",
    location: "Remote",
    description: [
      "Designed and implemented a route optimization module leveraging Amazon Location Service and AWS Lambda, supporting multi-point route planning and POI sequence optimization (lightweight TSP); cached static route maps in S3 to improve loading efficiency.",
      "Built a configurable real-time notification system enabling users to customize frequency and level of alerts; combined OpenWeatherMap API with SNS to push alerts for weather or itinerary changes; introduced a message aggregation mechanism to reduce redundant notifications.",
      "Adopted a fully Serverless architecture (Lambda, DynamoDB, Step Functions, ElastiCache, SNS) to ensure high availability, low maintenance cost, and scalability.",
    ],
    technologies: ["Python", "AWS Serverless", "API Integration", "React"],
    image: "/tripplanner-logo.png"
  },
  {
    company: "ShadowDash",
    role: "Build System Engineer",
    period: "September 2024 - Jan 2025",
    location: "Remote",
    description: [
      "Redefined build configuration by developing a C-based declarative language that replaced .ninja files, enabling direct in-memory graph construction and eliminating inefficiencies in Ninja's character-by-character parsing process.",
      "Engineered advanced optimizations, including scope encapsulation and parallel compilation, achieving up to a 2x speedup for LLVM manifests and a 1.73x improvement for zlib parsing, making ShadowDash a high-performance alternative for large-scale projects.",
      "Streamlined CI/CD pipelines by integrating CircleCI, enabling automated testing, benchmarking, and deployment workflows to ensure reliability and maintainability across complex configurations.",
    ],
    technologies: ["Build Optimization", "C", "CI/CD Deployment"],
    image: "/shadowdash-logo.png"
  },
  {
    company: "CITIC Poly Fund",
    role: "Data Analyst Intern",
    period: "June 2023 - August 2023",
    location: "Guangzhou, China",
    description: [
      "Led the development of a structured investment news processing system by integrating Wind data and web crawlers; extracted key fields such as company names, funding rounds, amounts, and investors; enriched company profiles using financial indicators (P/E ratio, revenue, valuation) to improve data quality.",
      "Designed semantic analysis and event extraction modules using a Chinese BERT model for sentiment classification, keyword aggregation, summary generation, and news type labeling; output results in a unified JSON format and pushed them to Kafka for daily reports and frontend display.",
      "Prototyped a visualization component using Streamlit, supporting word clouds, investor rankings, label distribution charts, and news card previews; contributed to the standardization of data formats and field definitions across frontend and backend systems.",
    ],
    technologies: ["Machine Learning", "Web Scraping", "Data Engineering", "Python", "AWS", "NoSQL", "NLP"],
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
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4">
                  {exp.image && (
                    <div className="w-[72px] h-[72px] relative flex-shrink-0 opacity-40 transition-opacity duration-300 group-hover:opacity-100 aspect-square">
                      <Image
                        src={getImagePath(exp.image)}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    {exp.institution && (
                      <p className="text-sm text-muted-foreground">{exp.institution}</p>
                    )}
                    {exp.supervisor && (
                      <p className="text-sm text-muted-foreground">Supervised by {exp.supervisor}</p>
                    )}
                  </div>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside mb-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 