# Website Design Sketch v1

**Date**: 2026-02-03
**Direction**: Pseudo-minimalism (Restrained Surface, Rich Depth)

---

## Part 1: Information Architecture

### Proposed Structure

```
/                   → Landing (Hero + minimal intro)
/projects           → Project index
/projects/[slug]    → Individual project deep-dive
/research           → Research & publications
/about              → Extended bio + philosophy
```

### Rationale

| Decision | Why |
|----------|-----|
| **只有 4 个顶级页面** | 克制。大多数 portfolio 有 6-8 个 nav items，我们故意少。每多一个选项都是认知负担。 |
| **没有单独的 /experience 页** | Experience 不是你的主要卖点，是 context。放在 /about 里作为 timeline 即可。ByteDance、NYU、CITIC 在 project 叙事中自然出现。 |
| **没有 /skills 页** | Skills list 是最无聊的 portfolio 元素。你的 skills 通过 projects 和 research 自证。 |
| **没有 /contact 页** | Contact 不需要单独页面。Footer 或 about 页尾放 email 即可。Form 是多余的摩擦。 |
| **Research 单独成页** | 这是你的差异化。大多数 SWE 没有 research，单独页面强调这一点。 |

### 🔴 需要你确认的理念

> **Principle 1**: 网站的 IA 应该反映你希望别人记住的优先级：Projects > Research > Who you are。
>
> 你同意这个优先级吗？还是 Research 应该更突出？或者反过来，About/Story 应该是核心？

---

## Part 2: Landing Page Structure

### Proposed Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [nav: minimal, top-right]            Projects Research About│
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                                                             │
│                                                             │
│                      WAYNE WANG                             │
│                                                             │
│                                                             │
│          Building tools for the post-AI world.              │
│                                                             │
│                                                             │
│                                                             │
│                          ↓                                  │
│                    [scroll indicator]                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SELECTED PROJECTS                                          │
│                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │  Graphex    │ │   Notate    │ │  VibeHub    │           │
│  │             │ │             │ │             │           │
│  │  [hover:    │ │             │ │             │           │
│  │   shows     │ │             │ │             │           │
│  │   one-liner]│ │             │ │             │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
│                                                             │
│                                      → View all projects    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  RESEARCH                                                   │
│                                                             │
│  "I found the problems. Now I'm building the solutions."    │
│                                                             │
│  ACL 2026 · Temporal leakage in web retrieval              │
│  arXiv · Simulated ignorance fails                         │
│  Active · Systemic World Models for forecasting            │
│                                                             │
│                                          → Read more        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  CURRENTLY                                                  │
│                                                             │
│  MS Computer Science @ UCSD                                 │
│  Previously: ByteDance, NYU Research                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  w.wayne.vip@gmail.com                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Rationale

| Element | Decision | Why |
|---------|----------|-----|
| **Hero** | 只有名字 + 一句话 | 第一印象要 bold and clear。不需要解释，让人好奇往下看。 |
| **Tagline** | "Building tools for the post-AI world" | 不是 "Full-stack developer" 这种无聊标签。是一个 statement，暗示你有观点。 |
| **Selected Projects** | 只展示 3 个 | 精选 > 罗列。展示全部会稀释注意力。选最能代表你的 3 个。 |
| **Research teaser** | 用 narrative arc 引入 | "I found the problems, now I'm building solutions" 比 "Publications" 更 compelling。展示你是 critique→construction 型人才。 |
| **Currently** | 极简状态 | 不需要长篇介绍。学校 + 上一份工作，完。细节在 /about。 |
| **Footer** | 只有 email | 不需要 LinkedIn/GitHub icons 一排。如果有兴趣的人会找到。 |

### 🔴 需要你确认的理念

> **Principle 2**: Landing page 是 trailer，不是 full movie。目的是引起兴趣，让人点进去看更多，不是在首页说完所有事。
>
> 你同意吗？还是你希望 landing page 更 comprehensive，一页能看完主要信息？

> **Principle 3**: Tagline 应该是 opinionated statement，不是 job title descriptor。
>
> "Building tools for the post-AI world" vs "Software Engineer & Researcher" — 你倾向哪种？

---

## Part 3: Visual Language

### Typography

```
Primary:     Space Grotesk (or similar geometric sans)
             用于 headings, nav, names

Monospace:   JetBrains Mono (or IBM Plex Mono)
             用于 technical details, code-like elements

Weights:     Regular (400) + Medium (500) only
             不用 Bold，靠 size 和 spacing 建立层级
```

### Rationale

| Decision | Why |
|----------|-----|
| **Geometric sans** | 现代、tech-forward，但不是 generic。Space Grotesk 有微妙的 personality。 |
| **只用两个字重** | 克制。大多数网站用 4-5 个字重，我们只用两个，靠 size/spacing 做层级。 |
| **Monospace for details** | 暗示 technical depth，也增加视觉对比。 |

### Color

```
Background:  #FAFAFA (not pure white, slightly warm)
Text:        #1A1A1A (not pure black, softer)
Accent:      None (or one single hue, very sparing use)
```

### Rationale

| Decision | Why |
|----------|-----|
| **几乎黑白** | Color 是设计中最容易 overdo 的元素。没有 color = 不会出错，且更 timeless。 |
| **不是纯黑纯白** | 纯黑纯白对比太刺眼，微调后更舒适。 |
| **可能不要 accent color** | 如果有，也极少用（比如只在 hover state）。颜色一多就破坏克制感。 |

### Spacing

```
Base unit:   8px
Page margin: 很大 (15-20% of viewport width)
Section gap: 很大 (120px+)
Line height: 1.6-1.8 for body text
```

### Rationale

| Decision | Why |
|----------|-----|
| **大量留白** | 留白是奢侈品。大多数网站怕浪费空间，塞满内容。我们反其道。 |
| **宽 margin** | 让内容「漂浮」在页面中间，更 editorial feel。 |

### 🔴 需要你确认的理念

> **Principle 4**: Visual language 应该是 typography-driven，不是 color-driven 或 illustration-driven。
>
> 你同意吗？还是你想要一些 visual elements（illustrations, icons, photos）？

> **Principle 5**: 留白是 feature，不是浪费。
>
> 你能接受页面 40% 是「空的」吗？

---

## Part 4: Interaction Philosophy

### Core Principle

> 交互是 reward for curiosity，不是 decoration。

每个交互都应该：
1. 提供额外信息，或
2. 引导用户下一步，或
3. 给一个小惊喜（但不干扰）

不应该有「纯装饰」的动画。

### Interaction Inventory

| Trigger | Interaction | Purpose |
|---------|-------------|---------|
| **Page load** | Content fades in (staggered, 50ms delay between elements) | Smooth entry，不是硬切 |
| **Scroll** | Subtle parallax on hero text (very subtle, 5-10% speed diff) | Depth感，但不 distracting |
| **Hover on project card** | Scale 1.02 + show one-line description | 预览内容，引导点击 |
| **Hover on link** | Underline 从左到右 animate in | 微妙反馈 |
| **Click project** | Shared element transition (card → page header) | Spatial continuity |
| **Scroll on project page** | Progress indicator (top bar or side) | 知道自己在哪 |
| **Idle on landing** | Cursor 旁边可能出现 subtle prompt ("scroll" or arrow) | 引导探索 |

### 不做的交互

| 不做 | Why |
|------|-----|
| **Parallax 背景图** | 太 2015 了，且通常 distracting |
| **Scroll-jacking** | 用户最讨厌的交互之一 |
| **Auto-playing 视频** | 尊重用户带宽和注意力 |
| **过多的 bounce/spring 动画** | 一两个可以，多了感觉 childish |
| **Loading 动画** | 网站应该快到不需要 loading state |

### 🔴 需要你确认的理念

> **Principle 6**: 交互应该是 discovered, not announced。用户应该在探索中发现细节，而不是被 "look at this animation!" 打断。
>
> 你同意吗？还是你想要一些更 prominent 的动效？

> **Principle 7**: 性能是 feature。网站必须快（< 1s LCP）。这意味着可能要放弃一些重的动画库。
>
> 你同意吗？

---

## Part 5: Content Strategy

### What to show prominently

| Content | Placement | Why |
|---------|-----------|-----|
| **3 selected projects** | Landing page | 质量 > 数量 |
| **Research provocative claim** | Landing page | 差异化 |
| **Current status** | Landing page | 招聘者需要知道你现在在哪 |
| **Email** | Footer everywhere | 低摩擦联系方式 |

### What to show on demand (click to see)

| Content | Placement | Why |
|---------|-----------|-----|
| **All projects** | /projects | 有兴趣的人会点 |
| **Project deep-dives** | /projects/[slug] | PRD-level detail for those who want it |
| **Research papers** | /research | 学术细节 |
| **Full experience timeline** | /about | Context，不是 selling point |
| **Skills list** | Nowhere explicit | 通过 projects 自证 |

### What NOT to show

| Content | Why not |
|---------|---------|
| **Skills percentage bars** | 最俗的 portfolio 元素 |
| **GitHub contribution graph** | 绿色方块不代表能力 |
| **Testimonials** | 除非是很有分量的人，否则显得 desperate |
| **Blog (unless you'll actually write)** | 空的 blog 比没有更糟 |
| **"Download Resume" button on hero** | 太 transactional，你不是在求职网站 |

### 🔴 需要你确认的理念

> **Principle 8**: 网站是 curated gallery，不是 comprehensive archive。只展示最好的，其他通过链接可达但不突出。
>
> 你同意吗？还是你担心「藏太多」会让人错过重要信息？

> **Principle 9**: Resume 不应该是网站的 primary CTA。网站本身就是更好的 resume。
>
> 你同意吗？还是你想要一个明显的 "Download Resume" 入口？

---

## Part 6: Research Page Structure

### The Narrative Arc

你的 research 不是散点，是一条完整的叙事线：

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  RESEARCH                                                   │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  THE QUESTION                                               │
│  How do we evaluate if AI can actually predict the future? │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  THE CRITIQUE (2025)                                        │
│                                                             │
│  I found two fatal flaws in how the field approaches this: │
│                                                             │
│  01  Search engines leak future information                 │
│      71% of date-filtered queries return post-cutoff data   │
│      ACL 2026 · 4th author                                  │
│                                                             │
│  02  Models can't "forget" what they know                   │
│      52% performance gap when simulating ignorance          │
│      arXiv · 2nd author                                     │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  THE CONSTRUCTION (2026)                                    │
│                                                             │
│  Now I'm building systems that make leakage impossible:     │
│                                                             │
│  03  Systemic World Models                                  │
│      Structured forecasting with Threads, Timelines, Causes │
│      Leakage-controlled by design, not by prompting         │
│      UCSD · Collaborator · Active                           │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  THE INSIGHT                                                │
│                                                             │
│  "Don't just find the problems—build the solutions."        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Rationale

| Decision | Why |
|----------|-----|
| **Narrative structure > paper list** | Paper lists are boring. A story is memorable. Your research actually has a clear arc—use it. |
| **问题先行** | Establish stakes: "Can AI predict the future?" is interesting. "Here are my papers" is not. |
| **Critique → Construction 分段** | This is your unique angle. Most researchers either critique or build. You do both. |
| **数字编号** | 01, 02, 03 暗示 progression，不是 random list |
| **Active 标签** | 表明你还在做，不是过去式 |

### 🔴 需要你确认

> **Principle 10**: Research 页应该是 narrative，不是 publication list。
>
> 你同意吗？还是你更希望用传统的 publication list 格式？

---

## Part 7: Selected Projects — Which 3?

需要选择 Landing page 展示的 3 个 projects。

### Candidates

| Project | Strength | Weakness |
|---------|----------|----------|
| **Graphex** | AI learning, has live demo | Concept较常见 |
| **Notate** | Novel concept (AI capture → human retrieval) | 可能难快速理解 |
| **Where2Meet** | Practical, everyone understands problem | 不够「AI」|
| **Inxtone** | Unique (AI fiction), Rust CLI | Niche audience |
| **VibeHub** | Ambitious (team collaboration) | 太大，难 demo |

### My recommendation

```
1. Graphex    — 最能 demo 的 AI project
2. Notate     — 最 novel 的概念，展示 product thinking
3. VibeHub    — 最 ambitious，展示你想得够大
```

Where2Meet 和 Inxtone 放在 /projects 页但不在 landing 突出。

### 🔴 需要你确认

> 你想在 landing page 突出哪 3 个？

---

## Summary of Principles for Your Review

| # | Principle | Status |
|---|-----------|--------|
| 1 | IA 优先级: Projects > Research > About | ❓ |
| 2 | Landing page 是 trailer 不是 full movie | ❓ |
| 3 | Tagline 是 opinionated statement | ❓ |
| 4 | Visual language 是 typography-driven | ❓ |
| 5 | 留白是 feature | ❓ |
| 6 | 交互是 discovered, not announced | ❓ |
| 7 | 性能是 feature (< 1s LCP) | ❓ |
| 8 | 网站是 curated gallery 不是 archive | ❓ |
| 9 | Resume 不是 primary CTA | ❓ |
| 10 | Research 页是 narrative 不是 publication list | ❓ |

---

请逐条告诉我你的想法，我会根据你的理念调整 sketch。
