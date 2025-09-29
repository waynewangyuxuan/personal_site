export interface ProjectImage {
  url: string;
  caption?: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  detailDescription?: string;
  image: string;
  images?: ProjectImage[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  technicalDetails?: string[];
  challenges?: ProjectChallenge[];
}

export const projects: Project[] = [
  {
    title: "SmartHistory",
    slug: "smarthistory",
    description: "AI tool, connected to Notion/Calendar, to track my days.",
    detailDescription: `SmartHistory is an intelligent browser history management system that uses AI to analyze, categorize, and provide insights into your browsing patterns.

The system automatically categorizes websites, tracks productivity metrics, and provides smart search capabilities across your browsing history. It features privacy-first design with local data processing and optional cloud sync.

Built with a focus on user privacy and productivity enhancement, SmartHistory helps users understand their digital habits and optimize their online workflow.`,
    image: "/smarthistory.png",
    images: [
      // Add screenshot objects here if you have them:
      // {
      //   url: "/smarthistory-dashboard.png",
      //   caption: "Main dashboard showing browsing analytics"
      // }
    ],
    tags: ["AI-Native", "Data Engineering", "Python"],
    githubUrl: "https://github.com/waynewangyuxuan/smarthistory",
    // liveUrl: "https://smarthistory-demo.com", // Add if you have a live demo
    videoUrl: "https://youtu.be/rPllW3ofy14",
    technicalDetails: [
      ""
    ],
    challenges: [
    ]
  },
  {
    title: "TripPlanner",
    slug: "tripplanner",
    description: "AI-powered serverless travel planning platform. Graduation project.",
    detailDescription: `TripPlanner is a comprehensive serverless travel planning platform that leverages AI to provide personalized trip recommendations and seamless itinerary management.

The platform features intelligent route optimization, real-time weather integration, and collaborative planning tools. Built entirely on AWS serverless architecture, it scales automatically while maintaining cost efficiency.

Key features include automated POI discovery, budget tracking, real-time notifications, and social sharing capabilities. The system integrates with multiple travel APIs to provide up-to-date information on flights, accommodations, and local attractions.`,
    image: "/tripplanner.png",
    images: [
      // Add screenshot objects here if you have them:
      // {
      //   url: "/tripplanner-dashboard.png",
      //   caption: "Trip planning dashboard with map integration"
      // },
      // {
      //   url: "/tripplanner-itinerary.png",
      //   caption: "Detailed itinerary view with timeline"
      // }
    ],
    tags: ["AWS Serverless", "DynamoDB", "Emmbedded AI"],
    githubUrl: "https://github.com/YuWei-CH/Travel-Planner",
    videoUrl: "https://www.youtube.com/embed/hcUdnSYTza0",
    // liveUrl: "https://tripplanner-app.com", // Add if you have a live demo
    technicalDetails: [
      ""
    ],
    challenges: [
    ]
  },
    {
    title: "StockRadar",
    slug: "stockradar",
    description: "A low frequency quantitative trading analytics tool.",
    detailDescription: `A backtesting built to help me understand quant dev.`,
    image: "/stockRadar.png",
    images: [
    ],
    tags: ["Python", "Quant Trading/Dev"],
    githubUrl: "https://github.com/waynewangyuxuan/StockRadar",
    technicalDetails: [
      "uses yfinance as market data source",
      "backtesting framework with pandas and numpy",
      "strategy implementation with modular design for easy extension"
    ],
    challenges: [
    ]
  },
  {
    title: "myRedis",
    slug: "myredis",
    description: "A hand-made Redis clone in C++/C for fun.",
    detailDescription: `I built the project to refresh my memory of some CS fundamentals to prepare for interviews lol.`,
    image: "/redis.png",
    images: [
    ],
    tags: ["C++", "Cache Design", "Network Programming"],
    githubUrl: "https://github.com/waynewangyuxuan/myRedis",
    technicalDetails: [
      "Event-driven architecture using epoll for handling thousands of concurrent connections",
      "Custom memory allocator optimized for frequent allocation/deallocation patterns",
      "Thread-safe data structures with fine-grained locking mechanisms",
      "Redis Serialization Protocol (RESP) implementation for client compatibility",
      "Persistence layer supporting both RDB snapshots and AOF logging",
      "Pub/Sub messaging system with pattern matching support"
    ],
    challenges: [
      {
        challenge: "Achieving high performance with concurrent access to shared data structures",
        solution: "Implemented lock-free data structures where possible and used reader-writer locks for shared resources"
      },
      {
        challenge: "Memory management for variable-size data with minimal fragmentation",
        solution: "Developed a custom slab allocator that pre-allocates memory pools for different object sizes"
      }
    ]
  }
];
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}
