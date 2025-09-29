import { Brain, Code, Database, Server, Cloud, Globe } from "lucide-react"

export const skillCategories = [
  {
    title: "AI w/ Agents",
    icon: Brain,
    skills: ["n8n", "Dify", "FAISS", "MCP", "LangChain", "PyTorch"],
  },
  {
    title: "Web3",
    icon: Globe,
    skills: ["Hardhat", "Alchemy", "Uniswap", "Solidity", "LayerZero", "Web3.js", "Ethers.js"],
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C++/C", "Python", "TypeScript", "Swift", "Rust", "Go", "SQL"],
  },
  {
    title: "Software Development",
    icon: Server,
    skills: ["Flask", "FastAPI", "GraphQL", "Next.js", "React", "Node.js", "Express"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["Apache Spark", "Hadoop", "MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Elasticsearch", "Airflow"],
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: ["AWS CloudFormation", "Kubernetes", "Docker", "CircleCI", "GitHub Actions", "Terraform"],
  },
]