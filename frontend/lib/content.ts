// ============================================
// CONTENT DATA - Single source of truth
// ============================================

export const personal = {
  name: "Wayne Wang",
  tagline: "Building tools for the post-AI world.",
  email: "w.wayne.vip@gmail.com",
  current: "MS Computer Science @ UCSD",
  previous: "ByteDance, NYU Research",
};

export const research = {
  question: "How do we evaluate if AI can actually predict the future?",
  teaser: "I found the problems. Now I'm building the solutions.",
  insight: "Don't just find the problems—build the solutions.",
  critique: {
    year: "2025",
    intro: "I found two fatal flaws in how the field approaches this:",
    papers: [
      {
        id: "01",
        title: "Search engines leak future information",
        stat: "71% of date-filtered queries return post-cutoff data",
        venue: "ACL 2026",
        position: "4th author",
        fullTitle: "Temporal Leakage in Search-Engine Date-Filtered Web Retrieval",
      },
      {
        id: "02",
        title: "Models can't 'forget' what they know",
        stat: "52% performance gap when simulating ignorance",
        venue: "arXiv",
        position: "2nd author",
        link: "https://arxiv.org/abs/2601.13717",
        fullTitle: "Simulated Ignorance Fails",
      },
    ],
  },
  construction: {
    year: "2026",
    intro: "Now I'm building systems that make leakage impossible:",
    project: {
      id: "03",
      title: "Systemic World Models",
      description: "Structured forecasting with Threads, Timelines, Causes",
      detail: "Leakage-controlled by design, not by prompting",
      status: "Active",
      role: "UCSD · Collaborator",
    },
  },
};

export const projects = [
  {
    slug: "graphex",
    name: "Graphex",
    oneLiner: "AI-powered learning canvas for document understanding",
    problem: "People drown in AI-processed documents without truly learning from them.",
    solution: "Interactive canvas that transforms documents into explorable knowledge graphs.",
    tech: ["React", "TypeScript", "Canvas API", "OpenAI"],
    url: "https://graphex.app",
    featured: true,
  },
  {
    slug: "notate",
    name: "Notate",
    oneLiner: "Knowledge layer that captures AI, retrieves for humans",
    problem: "AI captures information faster than humans can organize it.",
    solution: "Automatic knowledge capture with human-friendly retrieval interface.",
    tech: ["React", "TypeScript", "Vector DB"],
    url: "https://vw-ai.github.io/Notate.ai/",
    featured: true,
  },
  {
    slug: "vibehub",
    name: "VibeHub",
    oneLiner: "Team collaboration OS for the AI-accelerated workplace",
    problem: "AI makes individuals 26% faster but teams collectively slower.",
    solution: "Coordination layer that keeps teams aligned when everyone moves faster.",
    tech: ["Next.js", "TypeScript", "Real-time sync"],
    url: "https://vibehub.icu/",
    featured: true,
  },
  {
    slug: "where2meet",
    name: "Where2Meet",
    oneLiner: "Fair meeting point finder for distributed groups",
    problem: "Finding equitable meeting locations is surprisingly hard.",
    solution: "Algorithm that optimizes for fairness across all participants.",
    tech: ["React", "Maps API", "Optimization"],
    url: "https://www.where2meet.org/",
    featured: false,
  },
  {
    slug: "inxtone",
    name: "Inxtone",
    oneLiner: "AI fiction writing CLI with memory and consistency",
    problem: "AI-generated fiction loses consistency over long narratives.",
    solution: "CLI tool that maintains character, plot, and style memory.",
    tech: ["Rust", "Gemini API", "CLI"],
    url: "https://inxtone.com",
    featured: false,
  },
];

export const experience = [
  {
    company: "ByteDance",
    role: "Software Engineer Intern",
    period: "Jun – Sep 2025",
    location: "San Jose, CA",
    highlights: ["TikTok Ads Diagnosis", "Copilot Knowledge Layer", "Chart AI"],
  },
  {
    company: "NYU Research",
    role: "Research Assistant",
    period: "Jun 2024 – May 2025",
    location: "Brooklyn, NY",
    highlights: ["Information Retrieval", "Graph-based search", "ACL publication"],
  },
  {
    company: "CITIC Poly Fund",
    role: "Data Intern",
    period: "Jun – Aug 2023",
    location: "Beijing, China",
    highlights: ["Macro Research Intelligence Platform", "NLP pipelines"],
  },
];

export const education = [
  {
    school: "UC San Diego",
    degree: "MS Computer Science",
    period: "2025 – 2027",
    current: true,
  },
  {
    school: "NYU Tandon",
    degree: "BS Computer Science, Math Minor",
    period: "2021 – 2025",
    current: false,
  },
];

// Helper to get featured projects
export const featuredProjects = projects.filter((p) => p.featured);
