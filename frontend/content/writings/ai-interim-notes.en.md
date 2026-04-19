---
title: "Interim notes, on AI"
summary: "Knowledge as a service, LLM as the runtime. On natural-language programming, distilling knowledge out of code, and managing the human brain's context in the AI era."
date: "2026-04-19"
tags: ["AI", "Natural Language Programming", "Open Source", "Essays"]
---

Epigraph: Arendt won't appreciate me talking so much, caring so much about WORK. Go read *The Human Condition*.

This month I've been working through one theme: "natural-language programming." The short version — I write markdown the way I write code. My markdown has a stdlib, explicit call graphs, strict types, pre-agreed communication protocols, even fork()/wait() semantics (where fork() here means spawning an agent, not a physical thread). It's just that all of it lives in natural language.

These are the pieces we used to have to write in code. And the work of *making* those pieces run used to belong to the compiler / interpreter / OS / hardware [GPU] — now the runtime is LLM + hardware [GPU]. Which lets me plug my personal thesis: the future is *knowledge as a service, LLM as the runtime*. Under that frame, the open-source content the internet should care most about is executable, high-value knowledge — things like [gstack](https://github.com/garrytan/gstack).

Traditional great open-source projects are still valuable, but the *kind* of value has quietly shifted. Before, a solid open-source project — say, an open-source user-auth system — earned its keep mostly by saving me, the developer, a lot of work. Dropping it in, or lightly forking it, beat building from scratch. That value still exists, but because code is now so cheap to produce, it's been heavily compressed. What has *gone up* in value is the knowledge encoded *inside* the code: an interesting use of a decorator, a niche solution for high-concurrency in some vertical, or more generally, the engineering practices baked into something like Claude Code.

Someone might push back here: come on, Wayne, even without AI, that "knowledge encoded as code" has always been there. If we wanted to learn it, we could.

True — the code was always there. But there was a mountain of friction between us and the knowledge inside it. First: we were reading code. 50 lines of logic might compress to 4 lines of prose (numbers are made up, but the leverage is real) — and that kind of leverage only unlocks with AI. Second: you may not know the language. Right now I have a need served by a Go library; I don't really know Go. Sure, programming languages transfer, but drop me (a simplified-Chinese speaker) into Hong Kong and even I get a little culture shock — same deal with languages. Third: how do you locate the critical logic fast? File by file, comment by comment, playing Sherlock inside 40k lines using filenames and symbol names as clues? There are a lot of factors — really a lot — and every one of them compounds. The efficiency of extracting knowledge from code drops geometrically.

One thing I want to be precise about: when I say "use AI to extract knowledge from code," I literally just mean AI is very efficient at pulling knowledge out of a codebase. What *you*, the human, do with that knowledge — actually learn it, or treat it as a package and just feed it back into the AI — that's your choice. My personal rule: I don't use AI to replace any step where I might have learned something. That sentence is the high-compression summary of several months of thinking about sustainable human/AI collaboration, and I'll write a proper essay on it later.

Oh — the first thing I built to practice "knowledge as a service, LLM as the runtime" is exactly a Claude skill for distilling knowledge out of a codebase. Link: [ShadowRepo-Skill](https://github.com/VW-ai/ShadowRepo-Skill). Please use it, please give it love.

In organizing that skill I held myself to the same bar as code: decouple the logic, make the boundary conditions crisp. While building it, vibe-markdown and vibe-code felt like identical mental activity to me — both were careful systems design.

When I say those two feel the same, I have a strict control group: right before this skill, I'd hand-rolled a 15k-line TypeScript multi-agent orchestration.

And the more I wrote, the more something felt off. Step by step I went from "telling the AI to write TypeScript" to "writing markdown myself." Originally I was hitting Claude via the API, found it expensive, and — since this thing was meant to run locally anyway — switched. Switched to headless Claude Code, ran some benchmarks. To embed Claude Code inside my workflow code, I had to: cap it to one iteration, and ban all tool use (because tool use will let it run more than one iteration). With no tool use, I had to write tools to pass context and source files in myself — uh oh, I'm writing Claude Code's own `read`!

I was doing a lot of things Claude Code already does, and does well. None of them I needed to do, if I treated Claude Code as the runtime.

At the same time as realizing I'd reinvented a lot of (busted) wheels, I also realized the workflow code wasn't wasted. My benchmark design, the business logic that had stabilized over many workflow iterations, the descriptive fields, the agent design and dispatch, the batch-processing practices — 100% reusable, and losslessly reusable, straight as natural language. These were the real core assets of the project, and they didn't go anywhere.

Back to ShadowRepo. The skill generates two kinds of content from semantics. First, *feature* — e.g. "5-stage Filtering Pipeline" with a description; features can nest into sub-features. Second, *spec* — a one-sentence unit of knowledge, like "Collector tracks cursor_us from Jetstream messages. On reconnection, passes last cursor to avoid re-processing. Posts batch-flushed every 5s or 100 posts." Each spec belongs to a feature, specs have relations to each other. All of it stays in sync as the code changes.

It looks like this — two examples from running ShadowRepo against the leaked Claude Code repo:

**Feature** — a semantic name over a group of related files; can nest.

```json
{
  "feature_id": "tool-system/agent-orchestration",
  "name": "Tool System / Agent Orchestration",
  "type": "platform",
  "description": "13 specs covering 19 files",
  "parent": "tool-system",
  "key_files": [
    "tools/AgentTool/AgentTool.tsx",
    "tools/AgentTool/runAgent.ts",
    "tools/AgentTool/built-in/exploreAgent.ts",
    "tools/SendMessageTool/SendMessageTool.ts",
    "… (19 files total)"
  ]
}
```

**Spec** — a one-sentence unit of knowledge, with anchors (pointers into specific code), relations (links to other specs), confidence, and a state that's maintained dynamically as the code evolves.

```json
{
  "spec_id": "ui-components/permissions/convention/permission-analytics-logging",
  "feature_name": "ui-components/permissions",
  "type": "convention",
  "summary": "Every permission request component calls usePermissionRequestLogging on mount to log the permission prompt event — tool name, result, completion type. Accept/reject actions log unary events via logUnaryPermissionEvent with sanitized tool names.",
  "anchors": [
    { "file": "components/permissions/hooks.ts" },
    { "file": "components/permissions/utils.ts" },
    { "file": "components/permissions/BashPermissionRequest/BashPermissionRequest.tsx" }
  ],
  "relations": [],
  "confidence": 0.9,
  "state": "active",
  "provenance": "code_scan"
}
```

In other words: feature is a directory, spec is an entry, and together they form a semantic graph over the code that an LLM can read and write directly.

The UX right now is pretty rough, but as a two-way (read / write) semantic layer over code serving both AI and humans, I'm happy with the design. At the very least it beats the stiff "semantically annotate an AST tree" projects I keep seeing on LinkedIn.

The deeper logic beneath ShadowRepo's business logic — man, my vocabulary is really failing me here, ha — is just: have an AI organize, maintain, and update a knowledge base under some rules. We've simply scoped the business to code specifically.

Around the same time I was grinding on ShadowRepo, Karpathy put out a piece called *LLM Wiki* ([gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) / [original tweet](https://x.com/karpathy/status/2039805659525644595)), arguing for using LLMs to organize, maintain, and update your personal knowledge base, rather than having a RAG-based framework let the LLM scratch at it through mittens. He also said he's not writing code so much anymore, he's "manipulating knowledge" — which I read as: a lot of natural-language programming.

> A pattern for building personal knowledge bases using LLMs … the LLM incrementally builds and maintains a persistent wiki—a structured, interlinked collection of markdown files that sits between you and the raw sources.
>
> — Andrej Karpathy, [*LLM Wiki*](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)

His taste is right. RAG shines at scale; a personal knowledge base, with even basic folder hygiene, is never going to fill a modern model's context window. Why would you want RAG there? (Unless you really, really care about LLM latency, in which case, sure, small model + embeddings — I have nothing to say.)

His point is: one file (or a few) is enough to tell the LLM how to maintain the knowledge base under your personal conventions. Call it an INSTRUCTION file. And that — in my framing — is exactly the surface where natural-language programming gets to shine, when Claude Code / Codex is the runtime. Teach the LLM to log its own actions. Or add, in a few files, things other people charge real money for — like a Notion-agent service.

Keep walking that path, realize you can hook it to WeChat, then realize you can have it actually *do* tasks for you, and — congratulations, you just reinvented openClaw. Your own openClaw.

"Congratulations" isn't a jab. In the AI era, for personal tools, inventing for yourself, exploring for yourself, building for yourself, using what you built — that's good. Even if what you end up with looks a lot like someone else's thing, the small delta is precisely what lets you use the tool smoothly and max out leverage at the same time.

I think it's safe to assume that, today, a "personal tool" is either built with AI, built to use AI, or — very often — both. And a tool like that is, almost tautologically, a "knowledge as a service" artifact. Whatever you have AI build for you is going to be deeply tied to your current situation, your professional background, your values, your work habits — and, pushing it for laughs, even your childhood baggage. Knowledge is an output of your mental model, and the tool the AI turns that mental model into is, by construction, natively usable by essentially one person: you. openClaw is a clean example — Peter is American, I'm Chinese; he has a Telegram connector, but I don't especially need Telegram. I need WeChat. So I can't natively use his thing.

And the more complex the system you build, the lower the ceiling on how well someone else's tool can fit you. A notebook-visualization tool might have five spots that don't quite click for me. openClaw probably has seventeen.

Things like openClaw feel, to me, like a very clean example: engineering-wise, worth learning from; product-wise, kind of cool; in terms of actually using it, I don't want to. It's deeply personal, and that personality is faithfully reflected in every line of its code. Asking me to use it to get work done is like asking me to play a sport in football cleats — I don't play football, I play basketball. Awkward.

Humans are adaptive; most of the time we can adapt to the parts of a tool that don't match us, and find our own way of using it. But that adaptation always shows up as administrative overhead inside the brain.

In the AI era, if you're chasing your own productivity — more precisely, maxing the leverage on your productivity — managing the context inside your brain is the key thing. And as the volume of what we need to do grows, along with the number of tools we need to use, efficiently cutting that administrative overhead becomes very important. I won't do the math here.

Speaking of managing the brain's context — okay, long post. Let me just drop one recent idea: when collaborating with AI, you have to be very deliberate about protecting the brain — about preserving and growing your own creativity. To do that, you have to be able to tell which work you should delegate to AI, *how* to delegate it, and which work has to come out of your own head at full throttle.

There's a quick N vs NP analogy here: finding a good solution can be very hard, but verifying a solution tends to be easier. Sometimes verification needs far less capability than discovery — but the act of verifying gives you the illusion that you *could* have found it, when in fact you haven't built the muscle for that task. When you hit that kind of task, you have to stop and think carefully about how, from the angle of sustainable brain-development, you should actually collaborate with AI.

Last thing: over the past week I've been building a coding-agents system ([Robin](https://github.com/waynewangyuxuan/Robin)). My thesis: the endgame of human/AI collaboration should be an infinite loop of human deep thinking and AI deep execution. Back-and-forth conversational AI can serve as part of the human deep-thinking loop, or as a support tool — but the actual *execution* shouldn't be back-and-forth. There's no leader in the world who gets work done by instructing their subordinates step by step. The system is going well so far — it's been cranking for 3 hours, still going, very curious to see the deliverable.

![a log from a Robin run — get a rough feel](/writings/robin-processed.png)
