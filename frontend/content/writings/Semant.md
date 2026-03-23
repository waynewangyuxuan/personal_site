---
title: "The web was built for human eyes. Maybe it's time it spoke two languages."
summary: "GUI is for humans. Text is for LLMs. What if web components could speak both languages natively—without compromise?"
date: "2026-03-22"
tags: ["AI", "web", "semant", "open-source"]
---

A few weeks ago a friend pulled me into a project — he's got factory connections, wanted to build a sales pipeline together. My part was SEO/GEO plus getting AI agents to handle outreach.

Then yesterday I saw an article titled "GUI is Dead." Didn't open it. But the title clicked with something I'd been stuck on.

I kept trying to get agents to navigate supplier websites — product pages, booking forms, that kind of thing. They kept breaking. Not in a "the AI is stupid" way, more in a "this poor thing is trying to make sense of 80KB of nested divs and Tailwind classes" way. Like asking someone to read a book by analyzing the ink molecules.

A typical product page has maybe 500 bytes of actual meaning — what the product is, what it costs, what options are available, how to buy it. But that 500 bytes is buried inside 80-100KB of div soup, utility classes, JavaScript-rendered shadow DOM, aria attributes that don't actually help machines, and CSS class names that describe layout, not meaning. The signal-to-noise ratio is something like 1:150.

And we've built increasingly elaborate workarounds for this. Screenshot the page and feed it to a vision model — that's slow, costs about a cent per screenshot, and breaks on anything with dense interactive elements (ChatGPT Atlas famously struggles with date pickers because vision models can't reliably click on 24px calendar cells). Parse the DOM and extract an accessibility tree — that's noisy, brittle, still tens of thousands of tokens, and changes every time someone updates the CSS. Build a separate API — that's two codebases, two maintenance burdens, and inevitable drift between what the API says and what the UI actually does.

All of this is reverse engineering. We built a web for human eyes, and now we're spending enormous effort teaching machines to decode it.

![What AI sees today vs. with Semant](/writings/hero-before-after.svg)

## The "High-Res TUI" Idea (and Why It's Wrong)

And "GUI is Dead" just made something click. GUI is for humans. It's inherently visual, inherently complex. But text — text is the native language of LLMs. What if I didn't build GUIs at all? What if I built websites using TUI logic — text-based interaction, ASCII-like structure — but rendered in a browser at high resolution? The content would still be there for humans to read, but because the underlying logic is text-driven, AI agents could consume it natively. No vision models, no DOM parsing. Text in, text out. The web page IS the text interface.

I was pretty excited about this idea. Went to Victor, another founder in our lab, and pitched it.

His first reaction was interesting — "So basically a high-res TUI?" And yeah, that's exactly what I was describing. The interaction model of a terminal, but rendered with web-level visual fidelity.

Then he said: "But there are problems."

And he started poking holes. Real websites need images, animations, complex layouts, hover states, transitions — things that text simply can't do. You can make text look pretty, but you can't make it look like an Apple product page or a Google Maps interface. Users expect visual richness, and a TUI, no matter how high-res, is going to feel like a step backwards.

Then there's state management. Modern web frameworks — React, Vue, Svelte — have spent a decade solving the problem of managing complex interactive state: forms with validation, conditional rendering based on user choices, cascading updates where selecting one option changes what's available in another field. If you rebuild all of that in a text paradigm, you're basically reimplementing React from scratch, but worse.

And honestly, the token savings aren't even that dramatic with a TUI approach, because the text output still carries a lot of structural noise — formatting characters, box-drawing characters, whitespace padding, labels that are redundant with the visual layout.

So the first idea was wrong.

## The Real Insight: Dual Output

But the instinct underneath it was right: AI should be able to consume web content as text, natively. The question was how to get there without sacrificing the visual web.

The fix was separating the two concerns completely.

Don't make one interface that's a compromise between human and machine. Make two outputs from the same source. The component renders a beautiful visual UI for humans — use React, use Tailwind, use whatever you want, go wild. But the same component also declares a structured text description of itself that AI can read and operate.

A date picker renders a nice calendar grid with hover effects and smooth transitions. But it also says:

```
[Date: check_in] range: today → +365d, current: 2026-04-15
Command: set check_in <YYYY-MM-DD>
```

Humans see one thing. AI sees another. Both are generated from the same component, the same state, the same source of truth. Neither is a compromise — the visual UI is as rich as it needs to be, and the text description is as clean as it needs to be.

## Why This Isn't Just llms.txt or JSON-LD

Now, this might sound similar to things like `llms.txt` or JSON-LD, but there's a fundamental difference. Those are separate layers you build and maintain after the fact. You design your page, then you write a JSON-LD schema for it, then you create an `llms.txt` file summarizing it. Over time, these layers drift — someone changes the UI, forgets to update the schema, and now the structured data says the product comes in 3 colors when it actually comes in 5.

More importantly, those approaches are read-only. AI can understand the page, but it can't operate it. It can read that there's a date picker, but it can't set the date.

Here, the text description is generated live from the same state that renders the UI. If the UI says there are 5 colors, the text description says there are 5 colors, because they're reading from the same variable. And the text description includes a command interface — AI can write back to it. It's not just readable, it's *operable*.

![Comparison of approaches](/writings/comparison-table.svg)

## State as a Mirror

The next question was obvious: how does state actually work?

Because reading a page is one thing. Operating it means state transitions. When you pick a date, the available time slots change. When you select a size, the price might update. When you add something to a cart, the cart count goes up. State flows through the whole UI, and if AI can't participate in that flow, it's still just looking at a snapshot.

The answer we landed on: the framework doesn't own state at all. It's a mirror, not an engine.

Your React components manage their own state like they always do — `useState`, `useReducer`, Redux, Zustand, whatever. The framework just sits there watching. Every time a component renders, it reads what the component declares about itself — "I'm a date picker, my current value is April 15, here are my constraints" — collects all these declarations, and makes them available as structured text.

When an AI agent wants to change something, it sends a text command like `set check_in 2026-04-20`. The framework finds the corresponding component, calls the setter function that the developer provided, and React takes over from there. The component updates, re-renders, and the framework's text output automatically reflects the new state.

No new state management to learn. No two-way sync to debug. No conflict between the framework's state and your state, because the framework doesn't have state. It just reflects yours.

This means the framework works with any React component, any state management library, any level of complexity. A component with cascading dependencies — where selecting a date changes available times which changes available tables which changes the price — just works. The developer handles the cascade logic like they always do. The framework sees the result after each render and reports it.

## Semant: The MVP

This is less of a thing you ship and more of a way of thinking about the web. But it wouldn't land as just an idea sitting in my head, so I spent last night and this morning hacking together an MVP — a React hook called `useSemantic()` that lets any component declare its semantic identity, plus output renderers that auto-generate plain text, `llms.txt`, and JSON-LD from those declarations.

The hook is three lines of code to add to any existing component. You don't replace your components, you annotate them. Your beautiful custom date picker stays exactly the same visually — you just tell the framework "this is a date field, its key is `check_in`, its current value is X, and here's how to set it." That's it.

![Three lines to add AI operability](/writings/code-diff-3-lines.svg)

**Check it out:**
- [GitHub](https://github.com/waynewangyuxuan/Semant.git)
- [Live Demo](https://waynewangyuxuan.github.io/Semant/)

```bash
npm install semant
```

## What Falls Out for Free

What surprised me is how much falls out of this for free:

**AI agents can navigate any page through text commands.** That date picker that browser agents struggle with — where they have to screenshot, identify the 24px cell, click, hope they hit the right day — becomes `set check_in 2026-04-20`. One text command, 100% success rate.

**SEO and GEO metadata generates itself.** The same component declarations that power the AI text view can auto-generate `llms.txt` (the emerging standard for AI-readable site summaries), JSON-LD (Schema.org structured data for Google/Bing), and plain text representations. You don't maintain these separately — they're always in sync with the actual UI because they come from the same source.

**Token usage drops by 50-100x.** An 80KB DOM becomes roughly 800 bytes of structured text that contains all the same actionable information. For AI agents, this means faster responses, lower costs, and higher accuracy because there's less noise in the context window.

**Four output channels from one source.** The framework outputs through four channels simultaneously: a global JavaScript API (`window.__semant` — the strongest path, full read-write), a hidden DOM node (fallback for sandboxed agents), a JSON-LD script tag (for search engines), and a server-side `llms.txt` endpoint (for AI crawlers). One source of truth, four delivery mechanisms, covering basically every way AI currently consumes the web.

![Four delivery channels from one source](/writings/architecture-4-channels.svg)

## Who This Isn't For

Now, I should be honest about who this isn't for.

If you're a site that wants to protect your content from being scraped by AI, or a service that doesn't want bots automating interactions — this is the opposite of what you want. You'd be rolling out the red carpet for exactly the thing you're trying to prevent.

Though... there's maybe an interesting flip side to that. If you control what AI sees, you also control what AI *doesn't* see. You can expose exactly the information you want AI to have, described exactly the way you want it described, while keeping everything else invisible. If you can feed bots a structured narrative of your choosing, that's arguably a more sophisticated defense than trying to block them entirely — which increasingly doesn't work anyway. Security has always been a mind game.

## The Bigger Picture

But the bigger thought I keep coming back to isn't the framework itself. It's the underlying shift in how we think about the web.

The web was built for human eyes. For thirty years, that was the only consumer that mattered. Then AI came along and we spent years building increasingly elaborate hacks to make it understand a format that was never designed for it — screenshots, DOM parsers, accessibility tree extractors, computer vision pipelines.

Maybe the answer was always simpler: let pages speak both languages from the start. Not as an afterthought. Not as a separate layer. As a first-class capability of the component itself.

**The page is its own API.**

I don't know if this specific implementation is the right one. But I'm increasingly convinced that the direction is right — that the web needs a native way to describe itself to machines, and that this description should come from the same code that renders the UI, not from a separate metadata system that someone has to maintain.

Would genuinely love to hear from people working on AI agents, browser automation, or GEO. How do you see the web evolving for AI consumption? Is there something obvious I'm missing? What would you want from something like this?
