---
title: "From Human-Verifiable Demos to Capability Reduction"
summary: "Turning model-testing experience into reusable judgment. Why the intuitive way people test new coding models — build a frontend, a compiler, a driver — is a high-bandwidth probe, and how to make the judgment it produces structured and transferable."
date: "2026-07-02"
tags: ["AI", "Model Evaluation", "Benchmarks", "Essays"]
cover: "/writings/covers/capability-reduction.png"
---

Every time a new coding model comes out, I see people testing it in ways that are surprisingly intuitive: build a frontend, clone a webpage, implement a small game, create a driver, write a DSL compiler, build a dashboard, or compare five models on the same visible artifact.

I used to find some of these tests a bit informal. But the more I think about them, the more I believe they are not just casual demos. They are one of the most natural ways humans evaluate model capability.

A frontend page, for example, is highly human-verifiable. You can see whether the layout is right, whether the interaction works, whether the state updates make sense, whether the polish is there, and whether the model misunderstood the task. A small compiler or interpreter is human-verifiable in a different way: you can inspect the grammar, run examples, test edge cases, and see whether the abstraction holds together. These tasks produce artifacts that compress a lot of model behavior into something we can judge quickly.

So the point is not that this kind of testing is bad, naive, or insufficient. Quite the opposite. I think these tests are extremely valuable because they turn model ability into experience that humans can directly perceive.

The problem is that the experience usually stays as experience.

We watch a model build an impressive frontend and come away thinking: this model feels good at coding. We watch another model struggle with a small compiler and think: this model may be weak at abstraction. These impressions are often meaningful. They are not random. But they are also hard to reuse, hard to compare, and hard to transfer across domains.

What I want is a way to increase the cognitive leverage of these experiences.

When a model succeeds on a human-verifiable task, can we say more precisely what that success tells us? Can we describe which computational primitives were exercised? Can we explain which other task families this result is evidence for? Can we also mark the boundary of the inference and say what this result does not prove?

In other words, can we turn a piece of model-testing experience into a structured capability judgment?

## Where this sits relative to benchmarks

This is not an argument against benchmarks. Benchmarks are one of the main ways we get standardized verification. A frontend benchmark, a SWE benchmark, a tool-use benchmark, or a reasoning benchmark gives us controlled tasks, repeatable evaluation, comparable scores, and some protection against pure anecdote. Without benchmarks, model evaluation would become mostly vibes.

But benchmarks and human-verifiable probes serve slightly different roles.

A benchmark is good at answering:

```
Which model performs better on this task distribution,
under this evaluation protocol?
```

A human-verifiable probe is often better at helping us feel and inspect:

```
How does this model behave when solving this kind of task?
Where does it struggle?
What kind of mistakes does it make?
Does it preserve structure?
Does it recover from errors?
Does it turn ambiguity into coherent implementation,
or does it produce polished-looking slop?
```

This second layer is hard to fully capture in a single score. Two models can be close on a benchmark but feel very different in practice. One may be faster and more direct but brittle under changing requirements. Another may be slower but better at preserving global structure. One may generate impressive UI quickly but fail when state becomes tangled. Another may produce less polished visuals but keep the architecture cleaner.

These differences matter to developers.

So I see benchmarks as providing verification, and human-verifiable demos as providing perception. The interesting question is how to connect the two. Can we use controlled benchmark-like discipline while still preserving the high-bandwidth human intuition we get from watching a model build something concrete?

A rough way to place the layers is:

```
Benchmark score:
  standardized verification
Human-verifiable demo:
  high-bandwidth perception
Capability-reduction analysis:
  structured interpretation of what the demo verifies
Model selection:
  practical decision about which model to use for which task shape
```

The gap I care about is not that benchmarks fail. The gap is that benchmark verification does not always translate into a concrete, intuitive understanding of model behavior for a specific developer workflow. Capability-reduction analysis is a way to bridge that gap.

Benchmark is verification infrastructure. Demo is perception interface. Capability reduction is interpretation layer.

## The hidden reduction inside intuitive model tests

When we use a frontend task to judge a coding model, we are usually making an implicit reduction. We are assuming that success on this visible artifact tells us something about less visible capabilities: decomposition, state modeling, constraint handling, abstraction design, tool use, maintainability, or architecture.

This assumption is not wrong. It is exactly why these tests feel useful.

But the reduction is rarely defined.

A beautiful glassmorphism card may tell us something about visual taste, CSS fluency, and layout synthesis. It tells us much less about state management, long-horizon planning, backend correctness, or architectural judgment.

A complex dashboard with filters, derived metrics, loading states, pagination, user interactions, and error handling tests a different set of capabilities. It starts to probe state representation, event transitions, data dependency tracking, interface boundaries, and component decomposition.

A DSL compiler tests something else again: grammar design, parsing, intermediate representation, semantic validation, error messages, and execution semantics.

A database migration task tests another family of capabilities: schema evolution, backward compatibility, data integrity, rollout safety, and failure recovery.

These are all useful probes, but they are useful for different reasons.

The issue is not that human-verifiable demos are shallow. The issue is that we often do not explicitly describe what they are probes for.

## From artifact judgment to capability judgment

One way to think about this is to distinguish between artifact judgment and capability judgment.

Artifact judgment asks:

```
Did the model build the thing?
Does it work?
Does it look right?
Is the code acceptable?
```

Capability judgment asks:

```
What did the model have to understand in order to build this?
Which computational primitives were required?
Which of those primitives were actually verified?
Which other tasks share the same primitives?
Where does the inference stop?
```

The first kind of judgment is immediate and human-friendly. The second kind is what gives us leverage.

For example, suppose a model builds a visual workflow editor. It supports nodes, edges, node configuration, execution status, failure states, save/load behavior, and intermediate outputs. On the surface, this is a frontend task. But the computational structure underneath is much richer.

```
Visible artifact:
  visual workflow editor
Observed features:
  nodes
  edges
  configuration panel
  execution status
  failure state
  persistence
  intermediate outputs
Likely computational primitives:
  graph representation
  state transition modeling
  event propagation
  local/global consistency
  serialization boundary
  error recovery
  user mental model alignment
```

Now compare this with a backend agent runtime:

```
Backend runtime task:
  represent workflow as a DAG
  schedule node execution
  store intermediate outputs
  retry failed nodes
  expose execution status
  resume from checkpoints
```

These two tasks have different surfaces, but they share part of the same computational skeleton. This does not mean the model can automatically build production-grade backend infrastructure. But it does mean the frontend task is evidence for some of the primitives needed in the backend task.

That is the reduction.

Not a perfect proof. Not a leaderboard score. But a structured explanation of why one experience should update our belief about another capability.

## Capability-preserving task reduction

The phrase I would use is capability-preserving task reduction.

A task is not just a prompt. It is a probe with a structure:

```
Task T =
  <Input, Goal, Constraints, Verifier, Horizon, Tools, Environment>
```

And each task has a capability demand profile.

At first, it is tempting to write:

```
D(T) = the set of primitive capabilities required by task T
```

But this is too clean. It risks creating false precision. A task does not simply require or not require a primitive. It requires a primitive at some level, with some fidelity, under some verifier.

So a better representation is:

```
D(T) = {
  primitive_i: <level, fidelity, evidence>
}
```

For example, a task may exercise "graph representation," but graph representation in a toy visual editor is not the same as graph representation in a production DAG scheduler. The primitive may be shared, but the required level is different.

```
graph_representation:
  level 1: static nodes and edges
  level 2: editable graph with validation
  level 3: executable graph with state transitions
  level 4: resumable graph with failure recovery
  level 5: distributed graph execution with scheduling, retries, and consistency constraints
```

This makes the reduction claim more precise. The question is not only whether task A and task B share a primitive. The question is whether A exercises that primitive at a level and fidelity relevant to B.

A rough version of the reduction idea is:

```
Task A is a strong probe for task family B
if the capabilities required by B are mostly covered
by the capabilities exercised and verified in A,
at a comparable level of difficulty and fidelity.

Task A is a weak probe for B
if it overlaps with B but misses important primitives,
or exercises shared primitives only at a lower level.

Task A is not a valid probe for B
if B depends on critical primitives that A never exercises.
```

For example:

```
Complex interactive frontend
strongly probes:
  state representation
  event transition modeling
  constraint propagation
  component decomposition
  interface boundary reasoning
weakly probes:
  backend API design
  schema design
  product decomposition
  testability
does not probe:
  database migration correctness
  distributed consistency
  security boundary reasoning
  production observability
```

This kind of description lets us preserve what is valuable about intuitive human testing while making the inference more explicit.

## This does not eliminate judgment

There is an important caveat here. Moving from demos to primitives does not magically remove subjectivity. If I say "this task requires state representation" or "this task tests abstraction design," that is still a judgment. The framework does not eliminate judgment; it relocates it into a place where the judgment can be inspected, challenged, and refined.

This is still useful because the primitive-level claim is usually more tractable than the global claim. "This model is good at coding" is hard to audit. "This task required maintaining three interacting states, preserving invariants across user events, and recovering from invalid intermediate states" is easier to inspect. We can disagree about the primitive list, but at least the disagreement becomes local.

So the goal is not false precision. The goal is to turn a vague impression into a structured object that can be debated.

This is also why reduction claims should not be based on surface similarity alone. Two tasks looking similar does not mean they test the same capability. A useful probe should satisfy at least a few conditions:

```
1. Shared primitive:
   A and B require the same underlying operation,
   not just similar UI or vocabulary.

2. Comparable level:
   A exercises the primitive at a difficulty level
   close to the one required by B.

3. Verifier alignment:
   The success condition in A actually checks
   the primitive we care about.

4. Failure relevance:
   If the model fails on the primitive in A,
   that failure would plausibly predict failure in B.

5. Missing primitive accounting:
   We explicitly list what B requires that A does not test.
```

Under this view, a frontend workflow editor is not evidence for a backend runtime simply because both contain boxes and arrows. It becomes evidence only if the frontend task actually verifies graph validity, state transitions, execution status, failure handling, and persistence boundaries. If it only draws nodes on a canvas, the reduction is weak.

## Controlled probes, not viral demos

There is also a sampling problem, and it cuts against my own starting point. The intuitive tests I praised at the outset are precisely the uncontrolled ones. Most public demos are not controlled probes. They are often cherry-picked, edited, retried, or selected because they look impressive. A viral demo is evidence that something happened once under unknown conditions; it is not automatically a reliable measurement.

So the framework should not be read as "watch random demos and infer model capability." The better version is controlled human-verifiable probing: same prompt family, same constraints, same tool access, same time budget, same retry policy, and explicit reporting of failures.

Human-verifiable artifacts are valuable because they give us a high-bandwidth judgment surface. But the probe still needs experimental discipline. Otherwise we are only formalizing selection bias.

This is another place where benchmarks and demos can complement each other. Benchmarks provide standardization. Human-verifiable probes provide perception. A good evaluation practice should borrow from both: controlled conditions from benchmarks, and concrete artifact inspection from demos.

## Existing work and where this fits

This is not meant to claim that existing evaluation work is useless or that benchmarks are missing the point. In fact, many existing benchmarks are already moving toward more realistic and structured evaluations.

FrontendBench evaluates LLMs on frontend development tasks with automated execution and validation. DesignBench focuses on multi-framework frontend engineering across generation, editing, and repair workflows. SWE-bench and its variants test models on real software engineering issues. METR's time horizon work measures AI capability by the length of human tasks that models can complete at a given success rate. BenTo studies benchmark task reduction by selecting representative subsets of tasks. General Scales proposes demand and ability profiles to explain what benchmarks measure and predict performance on new tasks.

These directions are all valuable.

The angle here is slightly different. I am interested in the practitioner-facing interpretation layer: after we observe a model completing a human-verifiable task, how do we convert that observation into reusable understanding?

The contribution is not "frontend demos are better than benchmarks." The contribution is a way to explain why certain demos are informative, what they are informative about, and where their inference boundaries are.

## Why this matters for individual developers

For individual developers, this may be more useful than another global leaderboard.

A leaderboard tells us which model performs better on average. But in practice, we often need a different answer. We need to know which model is reliable for the shape of the task in front of us.

Some tasks are narrow, local, and easy to verify. A smaller or cheaper model may be enough. Some tasks require long-horizon planning, multiple files, architecture judgment, ambiguity resolution, or recovery from mistakes. In those cases, using a stronger frontier model may be worth it.

The point is not always using the largest model, and it is not always saving tokens. It is about matching the model to the computational shape of the task.

Instead of asking only:

```
Which model is best?
```

We can ask:

```
What is the computational shape of this task?
Which primitives does it require?
Which model has shown reliable behavior on similar primitives?
What kind of probe would give me fast evidence?
Where should I spend frontier-model reasoning?
Where is a cheaper model enough?
```

That is a much more actionable way to use models.

## The goal

The goal is to move from isolated experience to structured judgment.

A model building a frontend, a compiler, a driver, or a workflow editor gives us a piece of experience. Sometimes that experience is very strong. But by itself, it is still local.

Capability-preserving task reduction asks whether we can use that local experience to build a more general understanding of the model.

What did the task force the model to do? What primitives were tested? What other tasks share those primitives? What was not tested? What hidden assumption did we make when we transferred our judgment from one task to another?

If we can answer these questions, then human-verifiable demos become much more than demos. They become probes. And the experience we get from watching a model work becomes a higher-leverage way to understand its real limits.

A webpage is not just a webpage. A compiler is not just a compiler. A driver is not just a driver.

Sometimes an artifact is merely a nice artifact. Sometimes it is a compressed perception interface for model capability. And sometimes, if we analyze it carefully, it becomes a compressed signal — partial but real evidence — for a broader class of computational skills.

The hard part is learning to tell the difference.
