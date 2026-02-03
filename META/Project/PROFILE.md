# Project Profile

**Last Updated**: 2026-02-03

---

## Overview

Wayne's projects span **AI-native productivity tools**, **developer infrastructure**, and **team collaboration systems**. A common theme emerges: solving human-AI collaboration problems at the intersection of product thinking and engineering execution.

---

## Product Projects (Full Product Designs)

### 1. Graphex - AI Learning Canvas

**URL**: https://graphex.app
**Status**: Product Design Complete
**Category**: EdTech / Knowledge Management

**One-Line Pitch**: Transform documents into interactive knowledge graphs that enhance learning through active engagement.

**Problem Statement**:
1. Passive reading creates illusion of understanding without comprehension
2. Relationships between concepts remain hidden in prose
3. No metacognitive feedback on what you truly understand
4. Knowledge decays without spaced retrieval practice

**Solution**: AI-assisted learning canvas that externalizes knowledge as interactive graphs.

**Core Learning Cycle**:
```
Upload Document → AI generates graph → User reads with graph navigation
       ↓
User adds notes → System tests understanding → Spaced repetition
       ↓
Cross-document synthesis → Long-term retention
```

**Key Features**:
| Feature | Description | Cognitive Rationale |
|---------|-------------|---------------------|
| Adaptive Graph Generation | Full or skeleton graphs from documents | Generation effect (2-3x better retention) |
| Integrated Reading Interface | Click node → see source passage | Prevents split-attention effect |
| Pre-Explanation Retrieval | User hypothesizes before seeing AI explanation | Pretesting effect (30% better retention) |
| Multi-Document Synthesis | Color-coded nodes, conflict identification | Schema induction (80% vs 20% transfer) |
| Spaced Repetition | Scheduled re-testing at intervals | Spacing effect optimization |

**Technical Approach**:
- Graph representation: Mermaid
- Relationship types: Directed (causation, sequence) + Bidirectional (similarity, mutual influence)
- Note system: Anti-verbatim safeguards, character limits, forced summarization

**Design Philosophy**: User must read, effort is required, generation before reception.

---

### 2. Notate - Personal Knowledge Layer

**URL**: https://vw-ai.github.io/Notate.ai/
**Status**: Product Design Complete / Partial Implementation
**Category**: Productivity / Knowledge Management

**One-Line Pitch**: Your thoughts finally have a place to go, and they can be reused.

**Core Value Proposition**:
> "We don't help you complete tasks. We help you organize and use your information."

**Key Differentiation**:
| Dimension | Task-completion Tools | Notate |
|-----------|----------------------|--------|
| Value Proposition | "Help you complete tasks" | "Help you organize your information" |
| Context Role | Means (material for tasks) | **Purpose** (context IS the value) |
| End Goal | Task completed | Knowledge base gets better |
| Strategy | Wide but shallow | **Narrow but deep** |

**Product Architecture**:
```
┌─────────────────────────────────────────────────────────────────┐
│                        Notate Architecture                       │
├─────────────────────────────────────────────────────────────────┤
│   User 80% of time                    User 20% of time          │
│   ───────────────                    ───────────────            │
│   ┌─────────────────┐               ┌─────────────────┐         │
│   │    Overlay      │               │      App        │         │
│   │  (Hotkey invoke)│               │   (Main UI)     │         │
│   │  • Quick Capture│               │  • Library      │         │
│   │  • Msg Refine   │               │  • Ask/Compose  │         │
│   └─────────────────┘               └─────────────────┘         │
│                         ↓  ↑                                     │
│              ┌──────────────────────────┐                       │
│              │      Knowledge Base       │                       │
│              │  (Progressive Knowledge)  │                       │
│              └──────────────────────────┘                       │
└─────────────────────────────────────────────────────────────────┘
```

**Core Features**:
1. **Quick Capture**: Global hotkey → input → Enter → disappear (<3 seconds)
2. **Knowledge Base**: Timeline / Graph / Types views
3. **Habits**: Natural language automation rules (like Claude Commands)
4. **Ask**: Query your knowledge base conversationally
5. **Compose**: Write with knowledge base context
6. **Surface**: Related content auto-appears (the "I didn't know I knew that" moment)

**Graph View Demo Value**: Visual "knowledge galaxy" showing connections users didn't realize existed.

---

### 3. Where2Meet - Location Coordination Platform

**URL**: https://www.where2meet.org/
**Status**: Product Design Complete
**Category**: Utility / Social

**One-Line Pitch**: When2Meet, but for locations.

**Problem**: Group meetups rely on manual discussion, leading to inefficiency and bias.

**Solution**: Lightweight location-based group decision platform.

**Core Workflow**:
```
Host creates event → Guests submit locations (anonymous) →
System computes optimal point → Circle-based POI search →
Voting (optional) → Decision
```

**Key Features**:
- Anonymous location submission
- Centroid algorithm for optimal meeting point
- Circle-based POI search (restaurants, cafés, etc.)
- Route visualization for organizers
- Privacy-first design

---

### 4. Inxtone (砚台) - AI Fiction Writing Tool

**URL**: https://inxtone.com
**Status**: PRD Complete, Open Source CLI + Web UI
**Category**: Creator Tools / Writing

**One-Line Pitch**: 让AI学会讲故事 / Turn AI from a text generator into a story architect.

**Problem**:
- AI can generate text but can't tell stories that hold up at scale
- Plot holes accumulate over 500K+ words
- Character consistency breaks down
- Context window limits make AI "forget" earlier story

**Target Users**:
1. Serial writers (网文作者) publishing 500K-2M+ word novels
2. AI-first creators who want AI to do heavy lifting
3. Learning writers seeking structured guidance

**Solution**: Open-source, local-first CLI + Web UI with Story Bible system.

**Architecture**:
```
$ inxtone init my-novel
$ inxtone serve        → opens localhost:3456

my-novel/
├── inxtone.toml       # Project config
├── chapters/          # Markdown chapters
├── bible/
│   ├── characters/    # Character profiles
│   ├── world/         # World rules, factions
│   └── plot/          # Outline, foreshadowing
└── .inxtone/db.sqlite # Index, search
```

**Story Bible System**:
| System | Features |
|--------|----------|
| Character | Cards, Relationship Map, Arc Tracker, Voice Samples |
| World | Rules codification, Locations, Factions, Power Scaling |
| Plot | Arc Outliner, Foreshadowing Ledger, Pacing Visualizer |

**Key Technical Decisions**:
- Runtime: Rust (fast, single binary)
- Frontend: React + Vite (embedded)
- Storage: Markdown files + SQLite FTS5
- AI: Gemini API (BYOK)

**Competitive Differentiation**:
- vs. Sudowrite/NovelAI: Structured methodology + open source
- vs. ChatGPT direct: Persistent story memory, quality guardrails
- vs. Web-based tools: Local-first, own your data

---

### 5. VibeHub - Team Collaboration OS for AI Era

**URL**: https://vibehub.icu/
**Status**: PRD Complete
**Category**: Developer Tools / Collaboration

**One-Line Pitch**: Make team coordination run at machine speed.

**The AI Productivity Paradox**:
| Metric | Finding |
|--------|---------|
| Individual speedup | 21-26% (MIT/Harvard/Microsoft) |
| Team delivery | 7.2% decrease per 25% AI adoption (DORA) |
| PR review wait | AI code waits 4.6x longer (LinearB) |

**Root Cause**: Code generation at machine speed, coordination at human speed.

**Core Thesis: Reverse Context Engineering**
```
Traditional:     Human → AI Context Engineering
                 (Help AI consume more information)

VibeHub:         AI → Human Context Engineering
                 (Help humans keep up with AI output)
```

**Core Features**:
1. **Living Spec**: Documentation that evolves with code (Branching Docs)
2. **Feature Rooms**: Discussions → Structured specs → Executable prompts
3. **Dynamic Rule Engine**: Team conventions auto-distributed to AI tools
4. **Context Bus**: Event-driven context routing + pre-merge conflict detection

**Pre-Merge Sync Capability**:
```
Branch A (Wayne): Changes payment callback
Branch B (Mike): Changes payment state machine

Neither merged, but Context Bus detects semantic relationship
→ Notifies both: "You might want to sync up"
→ Conflict prevented BEFORE merge
```

**Positioning**: Not another feature tool. The **team collaboration operating system** for AI-enabled development.

---

## Engineering Projects (From Resumes)

### SmartHistory / LifeTrace
- **What**: Automated personal time analytics
- **Features**: Calendar + notes consolidation, AI-driven categorization, multi-week trends
- **Tech**: Notion integration, daily refresh, visualization

### ShadowDash
- **What**: C++ DSL for Ninja build DAGs
- **Achievement**: 40%-2× faster than .ninja parsing
- **Validated**: zlib, LLVM builds

### TripPlanner
- **What**: AWS serverless travel planning platform
- **Tech**: Lambda, Step Functions, DynamoDB, Amazon Location Service, OSRM
- **Features**: Route optimization, Redis caching, real-time notifications

### myRedis
- **What**: Redis clone in C++/C
- **Purpose**: Interview prep, CS fundamentals refresh
- **Features**: Event-driven (epoll), RESP protocol, Pub/Sub, RDB/AOF persistence

### StockRadar
- **What**: Low-frequency quantitative trading analytics
- **Tech**: Python, yfinance, pandas/numpy backtesting

---

## Project Narrative

Wayne's projects form a coherent thesis about **human-AI collaboration**:

```
Individual Learning:     Graphex (help individuals learn with AI)
         ↓
Personal Productivity:   Notate (help individuals organize with AI)
         ↓
Creative Work:          Inxtone (help creators produce with AI)
         ↓
Team Collaboration:     VibeHub (help teams coordinate with AI)
```

Each project addresses a different scale of the same fundamental problem: **AI produces output faster than humans can process it. How do we bridge this gap?**

---

## Technical Themes Across Projects

| Theme | Projects |
|-------|----------|
| Graph-based knowledge | Graphex, Notate (knowledge graph view) |
| Local-first architecture | Inxtone (Markdown + SQLite), Notate |
| AI-native design | All five product projects |
| Cognitive science foundations | Graphex (learning science), VibeHub (cognitive load) |
| Developer experience | Inxtone (CLI + Web), VibeHub (MCP integration) |
