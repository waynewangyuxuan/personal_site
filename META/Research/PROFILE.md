# Research Profile

**Last Updated**: 2026-02-03

---

## Overview

Wayne's research has two phases:

**Phase 1 — Critique**: Exposing fundamental flaws in LLM evaluation, specifically information leakage in retrospective forecasting benchmarks.

**Phase 2 — Construction**: Building forecasting systems that are leakage-controlled by design, with auditable reasoning and decision-relevant outputs.

The throughline: **"Don't just find the problems—build the solutions."**

---

## Publications

### 1. Temporal Leakage in Search-Engine Date-Filtered Web Retrieval (ACL 2026)

**Status**: Published
**Author Position**: 4th Author
**Venue**: ACL 2026
**arXiv**: N/A (published at ACL)

**Authors**: Ali El Lahib, Ying-Jieh Xia, Zehan Li, **Yuxuan Wang**, Xinyu Pi

**Core Contribution**:
- First systematic study proving search-engine date filtering fails for retrospective forecasting
- Audited 393 questions and 38,879 URLs via Google Search
- Found 71% of questions return pages with post-cutoff information leakage
- Demonstrated Brier score inflation from 0.24 → 0.10 due to leakage

**Key Findings**:
| Metric | Result |
|--------|--------|
| Questions with major leakage (score ≥3) | 71% |
| Questions with direct answer leakage (score 4) | 41% |
| Brier score with leak-free docs | 0.242 |
| Brier score with leaky docs | 0.108 |

**Leakage Mechanisms Identified**:
1. Direct Page Updates - Pages updated after publication date
2. Related Content Modules - Sidebars inject current information
3. Absence-based Signals - Missing expected information reveals answer
4. Unreliable Metadata - Self-reported timestamps are stale/incorrect

**Impact**: Challenges the validity of all retrospective forecasting research using date-filtered search

---

### 2. Simulated Ignorance Fails (arXiv 2601.13717)

**Status**: Preprint
**Author Position**: 2nd Author
**arXiv**: https://arxiv.org/abs/2601.13717

**Core Contribution**:
- First systematic test of whether Simulated Ignorance (SI) can approximate True Ignorance (TI)
- Evaluated 477 competition-level questions across 9 models
- Proved that prompting models to "forget" pre-cutoff knowledge doesn't work

**Key Findings**:
| Finding | Result |
|---------|--------|
| SI-TI Performance Gap | 52% |
| CoT Knowledge Suppression | Failed (even without explicit post-cutoff references) |
| Reasoning-optimized models | Worse SI fidelity despite better reasoning traces |

**Significance**: Together with Paper 1, forms a complete critique of retrospective forecasting methodology:
- Paper 1: External data (search results) leaks → unreliable
- Paper 2: Internal knowledge (model memory) cannot be suppressed → unreliable
- Conclusion: Current retrospective forecasting methods are fundamentally flawed

---

### 3. ContextWIN (arXiv 2410.09781)

**Status**: Preprint
**Author Position**: 2nd Author
**arXiv**: https://arxiv.org/abs/2410.09781

**Full Title**: Whittle Index Based Mixture-of-Experts Neural Model For Restless Bandits With Contextual Information Via Deep RL

**Core Contribution**:
- Enhanced Neural Whittle Index Network for Restless Multi-Armed Bandit (RMAB) problems
- Combined Whittle Index with Mixture-of-Experts architecture
- Applied reinforcement learning for dynamic decision-making

**Technical Details**:
- Theoretical guarantees for both NeurWIN and ContextWIN models
- Applications in recommendation systems and resource allocation
- Handles contextual information in RMAB settings

---

## Current Research: Systemic World Models for Forecasting

**Project**: Forecasting via Systemic World Model
**Status**: Active (2026)
**Role**: Collaborator (UCSD team)
**PI**: Xinyu (Frederick) Pi, UCSD
**Advisor**: Prof. Zhiting Hu

### The Vision

Build a forecasting assistant that converts unstructured evidence into explicit **Systemic World Models**—organized as:
- **Threads**: What belongs to the same story?
- **Timelines**: What happened when?
- **Causes**: Why do changes propagate?

Then use those models to produce **auditable, decision-relevant probabilistic forecasts**.

### Why This Matters (The Critique → Construction Arc)

```
Phase 1 Research: "Current evaluation is broken"
├── Search date-filtering leaks (71% contamination)
└── Simulated ignorance fails (52% gap)

Phase 2 Research: "Here's how to do it right"
├── Leakage-controlled evidence pipelines
├── Structured world models (not just RAG)
├── Model-driven retrieval (ask "what's missing?")
└── Auditable forecasts with decision triggers
```

### Core Insight: Retrieval ≠ Representation

Standard RAG workflow:
```
retrieve documents → summarize → guess probability
```

Problems:
- You can't "run" a summary—can't stress test it, track assumptions, see what evidence supports what
- Models hallucinate "connective tissue" between facts
- No leakage control

Our workflow:
```
retrieve → induce world model → identify gaps → retrieve orthogonal evidence → iterate → produce auditable forecast
```

### Key Artifacts Produced

| Artifact | Description |
|----------|-------------|
| **Evidence Ledger** | Leakage-controlled corpus with provenance |
| **Thread Map** | Storylines + actors + claims + contradictions |
| **Timeline/Stage Model** | Events ordered in time; leading indicators |
| **Causal/Influence Map** | Mechanisms and propagation pathways |
| **Forecast Pack** | Decomposition, scenarios, assumptions, probability |

### Technical Innovation: Model-Driven Deep Research

Instead of retrieving "more similar documents," the system generates structured information needs:

| Gap Type | Example Query |
|----------|---------------|
| Missing actors | "We see actions, but who has authority?" |
| Missing timeline anchors | "We have two events but not the ordering" |
| Contested claims | "Sources disagree—what primary evidence can arbitrate?" |
| Unsupported causal edges | "We assume A→B; do we have evidence?" |
| Missing cross-domain signals | "Only economic commentary; need technical/geopolitical?" |

This systematically reduces "narrow evidence" and echo chambers.

### Connection to Previous Work

This project is the **constructive answer** to the critique:
- Previous papers showed evaluation is broken
- This project builds systems that are leakage-controlled by design
- Same problem space, opposite approach: critique → construction

---

## Research Experience

### NYU Research Assistant (June 2024 - May 2025)

**Supervisor**: Professor Torsten Suel
**Institution**: NYU Tandon School of Engineering
**Focus**: Information Retrieval, Search Engine Optimization

**Research Topics**:
- Graph-based vocabulary mismatch solutions in information retrieval
- LADR (Lexically-Accelerated Dense Retrieval) evaluation
- Sparse/dense retrieval model combinations

**Technical Work**:
- Designed retrieval pipeline supporting multiple sparse retrieval models (BM25, DeepImpact, SPLADEv2, TILDE, docT5query)
- Implemented graph expansion using KNN/HNSW
- Applied vector dimension masking (PRFDIME) for semantic query enhancement
- Demonstrated top-3000 graph-expanded passages achieve comparable performance to full-corpus reranking

---

## Research Narrative

Wayne's research follows a **critique → construction** arc:

```
2025: THE CRITIQUE
"How do we evaluate LLM forecasting ability?"

Traditional Approach: Retrospective Forecasting
├── Use date-filtered search to get "historical" documents
└── Prompt model to "ignore" knowledge after cutoff

Wayne's Research Shows Both Paths Are Broken:
├── Paper 1 (ACL): Date filtering fails (71% leakage rate)
└── Paper 2 (arXiv): Simulated ignorance fails (52% gap)

Implication: Current methods are fundamentally flawed
────────────────────────────────────────────────────

2026: THE CONSTRUCTION
"If evaluation is broken, how do we build it right?"

Systemic World Model Project:
├── Leakage-controlled evidence pipelines
├── Structured representations (Threads, Timelines, Causes)
├── Model-driven retrieval (not just "similar docs")
└── Auditable, decision-relevant forecasts

Implication: From critique to infrastructure
```

**Why this arc matters**: Most researchers either critique OR build. Wayne's work shows the full cycle—identifying the problem rigorously, then engineering the solution. This is rare and valuable.

---

## Technical Skills from Research

- **Languages**: Python
- **HPC**: Linux clusters, batch processing
- **IR Tools**: Elasticsearch, Dense/Sparse retrievers, HNSW, KNN graphs
- **ML**: PyTorch, Deep Learning, Reinforcement Learning
- **Evaluation**: Brier scores, LLM-as-Judge methodology
- **Data Analysis**: Large-scale URL/document analysis

---

## Active Research Interests

Based on published work and current projects:

1. **Leakage-controlled AI evaluation** — Building infrastructure that makes temporal contamination impossible by design
2. **Structured reasoning for forecasting** — Moving beyond RAG to explicit world models (threads, timelines, causality)
3. **Model-driven retrieval** — Systems that ask "what's missing?" not just "what's similar?"
4. **Auditable AI outputs** — Forecasts with traceable assumptions, scenarios, and decision triggers
5. **Graph-based knowledge representation** — From IR research: structured retrieval beats brute-force reranking
