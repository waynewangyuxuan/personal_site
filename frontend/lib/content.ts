// ============================================
// CONTENT DATA - Single source of truth
// ============================================

export const personal = {
  name: "Wayne Wang",
  tagline: "Building tools for the post-AI world.",
  email: "w.wayne.vip@gmail.com",
  current: "MS Computer Science @ UCSD",
  previous: "TikTok Ads, NYU Research",
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
    slug: "nomi",
    name: "Nomi",
    oneLiner: "Capture anything, at any time.",
    problem: "Ideas, links, and notes slip away between apps.",
    solution: "One place to capture anything, then let it sort itself.",
    tech: ["macOS"],
    url: "https://getnomi.net",
    featured: true,
  },
  {
    slug: "vibehub",
    name: "VibeHub",
    oneLiner: "Team collaboration OS for the AI-accelerated workplace",
    problem: "AI makes individuals 26% faster but teams collectively slower.",
    solution: "Coordination layer that keeps teams aligned when everyone moves faster.",
    tech: ["Next.js", "TypeScript", "Real-time sync"],
    url: "https://vibehub.team",
    featured: true,
  },
  {
    slug: "where2meet",
    name: "Where2Meet",
    oneLiner: "Meet in the middle — fair by travel time.",
    problem: "Finding equitable meeting locations is surprisingly hard.",
    solution: "Compare routes by travel time so nobody gets a much longer trip.",
    tech: ["React", "Maps API", "Optimization"],
    url: "https://www.where2meet.org/",
    featured: true,
  },
  {
    slug: "peel",
    name: "Peel",
    oneLiner: "Peel a thought off the current Codex conversation.",
    problem: "A long Codex thread flattens every direction into one list of chats.",
    solution: "A spatial workspace that keeps each real fork, and lets you return to it.",
    tech: ["Electron", "Codex", "TypeScript"],
    url: "https://github.com/waynewangyuxuan/Peel",
    featured: true,
  },
];

export const experience = [
  {
    company: "TikTok",
    role: "TikTok Ads customer support agent",
    period: "Jun – Sep 2026",
    location: "San Jose, CA",
    highlights: ["Support-ticket agents"],
  },
  {
    company: "TikTok Ads",
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
    school: { en: "UC San Diego", zh: "加州大学圣地亚哥分校" },
    degree: { en: "MS Computer Science", zh: "计算机科学硕士" },
    period: "2025 – 2027",
    current: true,
    note: null as { en: string; zh: string } | null,
  },
  {
    school: { en: "NYU Tandon", zh: "纽约大学工学院" },
    degree: { en: "BS Computer Science, Math Minor", zh: "计算机科学学士" },
    period: "2021 – 2025",
    current: false,
    note: { en: "Summa Cum Laude", zh: "最优等毕业" },
  },
];

// Helper to get featured projects
export const featuredProjects = projects.filter((p) => p.featured);
