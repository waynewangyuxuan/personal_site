# Experience Profile

**Last Updated**: 2026-02-03

---

## Overview

Wayne's professional experience spans **AI infrastructure at scale** (ByteDance), **academic research in information retrieval** (NYU), and **quantitative finance** (CITIC Poly Fund). A consistent thread: building systems that bridge data complexity with user-facing value.

---

## Work Experience

### 1. ByteDance - Software Engineer Intern

**Period**: June 2025 - September 2025
**Location**: San Jose, CA
**Team**: TikTok Monetization / Ads Platform
**Manager**: [Not specified]

#### Project Portfolio

| Project | Description | Impact |
|---------|-------------|--------|
| TikTok Ads Diagnosis System | Intelligent diagnostic tool for advertisers | Reduced support tickets, improved self-service |
| Copilot Knowledge Layer | RAG infrastructure for AI assistants | Foundation for team's AI capabilities |
| Chart AI | Data visualization from natural language | Democratized analytics access |
| Pipeline Migrations | Legacy system modernization | Improved reliability and maintainability |

#### Technical Details

**TikTok Ads Diagnosis System**:
- Built intelligent diagnostic tool helping advertisers troubleshoot campaign issues
- Integrated with ads platform APIs for real-time performance analysis
- Designed decision trees for common failure patterns

**Copilot Knowledge Layer**:
- Designed and implemented RAG (Retrieval-Augmented Generation) infrastructure
- Built knowledge indexing pipeline for internal documentation
- Integrated with internal AI assistant tools

**Chart AI**:
- Natural language to data visualization system
- Converted user queries into SQL → aggregation → chart rendering
- Handled ambiguous queries with clarification flows

**Pipeline Migrations**:
- Migrated legacy data pipelines to modern infrastructure
- Ensured zero-downtime transitions
- Documented migration patterns for team reuse

#### Technologies Used
- Languages: Go, Python, Java
- Infrastructure: Internal ByteDance stack
- AI/ML: RAG systems, LLM integration
- Data: Large-scale ads data pipelines

#### Key Learnings
- Operating at ByteDance scale (billions of requests)
- AI product development in production environments
- Cross-functional collaboration in large tech organizations

---

### 2. NYU Tandon - Research Assistant

**Period**: June 2024 - May 2025
**Location**: Brooklyn, NY
**Supervisor**: Professor Torsten Suel
**Lab**: Web Search and Data Mining Group

#### Research Focus
Information Retrieval systems, specifically graph-based solutions for vocabulary mismatch problems in search.

#### Technical Work

**Retrieval Pipeline Development**:
```
Query → Sparse Retrieval → Graph Expansion → Dense Reranking → Results
         (Multiple models)   (KNN/HNSW)      (Cross-encoder)
```

**Sparse Retrieval Models Evaluated**:
| Model | Type | Key Characteristic |
|-------|------|-------------------|
| BM25 | Lexical | Baseline, term frequency |
| DeepImpact | Learned Sparse | Neural term weighting |
| SPLADEv2 | Learned Sparse | Query/document expansion |
| TILDE | Learned Sparse | Term-level importance |
| docT5query | Doc Expansion | T5-based query generation |

**Graph Expansion Research**:
- Implemented KNN and HNSW graph construction for document similarity
- Applied PRFDIME (vector dimension masking) for semantic query enhancement
- **Key Finding**: Top-3000 graph-expanded passages achieve comparable performance to full-corpus reranking

#### Publications from This Work
- ACL 2026 paper on temporal leakage in search (4th author)
- Contributed to evaluation methodology research

#### Technologies Used
- Languages: Python
- HPC: Linux clusters, batch job scheduling
- IR Tools: Elasticsearch, Pyserini, FAISS
- ML: PyTorch, Transformers

---

### 3. CITIC Poly Fund - Data Intern

**Period**: June 2023 - August 2023
**Location**: Beijing, China
**Team**: Investment Intelligence

#### Project: Macro Research Intelligence Platform

**Problem**: Investment analysts spent excessive time manually aggregating macro-economic research reports from multiple sources.

**Solution**: Automated intelligence aggregation and analysis platform.

#### System Architecture
```
Data Sources → Ingestion → Processing → Analysis → Dashboard
(Research PDFs)  (Scrapers)  (NLP/Extraction)  (Summarization)  (Web UI)
```

#### Technical Contributions

| Component | Implementation |
|-----------|---------------|
| Data Ingestion | Web scrapers for research report sources |
| Text Extraction | PDF parsing, table extraction |
| NLP Processing | Named entity recognition, topic modeling |
| Summarization | Extractive summarization of key findings |
| Dashboard | Web interface for analyst consumption |

#### Impact
- Reduced research aggregation time from hours to minutes
- Improved coverage of macro research sources
- Prototype adopted by research team for daily use

#### Technologies Used
- Languages: Python
- NLP: spaCy, transformers
- Data: pandas, SQL
- Web: Flask/FastAPI

---

## Experience Narrative

Wayne's experience progression shows intentional skill building:

```
2023: Data Engineering Foundation (CITIC)
      ↓ Built end-to-end data pipelines
      ↓ Learned production data systems

2024-2025: Research Depth (NYU)
      ↓ Deep dive into IR systems
      ↓ Published academic research
      ↓ Learned rigorous evaluation methodology

2025: Industry Scale (ByteDance)
      ↓ Applied skills at massive scale
      ↓ Built AI-powered products
      ↓ Operated in high-velocity environment
```

**Connecting Thread**: Each role involved building systems that make complex information accessible and actionable—whether for advertisers (ByteDance), researchers (NYU), or investment analysts (CITIC).

---

## Skills Developed by Experience

| Skill Area | CITIC | NYU | ByteDance |
|------------|-------|-----|-----------|
| Data Engineering | ★★★ | ★★ | ★★★ |
| ML/AI Systems | ★★ | ★★★ | ★★★ |
| Research Methodology | ★ | ★★★ | ★★ |
| Production Systems | ★★ | ★ | ★★★ |
| Scale & Performance | ★ | ★★ | ★★★ |
| Cross-functional Collaboration | ★★ | ★★ | ★★★ |

---

## References Available

- Professor Torsten Suel (NYU Research Supervisor)
- ByteDance Manager (upon request)
- CITIC Poly Fund Supervisor (upon request)
