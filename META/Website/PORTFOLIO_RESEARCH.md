# 个人网站调研报告
> 调研 20+ 优秀个人网站，提炼最佳实践

---

## 一、调研对象清单 (25个)

### A. 设计工程师 / Design Engineers
| # | 名字 | 网站 | 身份 | 特点 |
|---|------|------|------|------|
| 1 | Rauno Freiberg | rauno.me | Vercel Design Engineer | OS-like界面、深色主题、dock动画 |
| 2 | Paco Coursey | paco.me | Linear Design Engineer | 极简主义典范、干净排版 |
| 3 | Shu Ding | shud.in | Vercel, Next.js核心 | 简洁文字、项目深度、技术美学 |
| 4 | Lee Robinson | leerob.com | Vercel VP of DX | View Transitions API、简洁设计 |

### B. 独立开发者 / Indie Hackers
| # | 名字 | 网站 | 身份 | 特点 |
|---|------|------|------|------|
| 5 | Pieter Levels | levels.io | Nomad List, Remote OK | 透明收入、极简、文字为主 |
| 6 | Marc Lou | marclou.com | ShipFast创始人 | 快速发布哲学、产品showcase |
| 7 | Josh Comeau | joshwcomeau.com | 独立教育者 | 互动性强、教学导向、有趣动画 |

### C. 前端开发者 / Frontend Developers
| # | 名字 | 网站 | 身份 | 特点 |
|---|------|------|------|------|
| 8 | Brittany Chiang | brittanychiang.com | Klaviyo Senior FE | 暗色极简、单页布局、侧边栏社交 |
| 9 | Luis Cabantac | - | Frontend Dev | Next.js + TypeScript、暗/亮模式切换 |
| 10 | Ryan Furrer | - | Frontend Dev | 强烈配色、充足留白、层次清晰 |
| 11 | Tim | - | Frontend Dev | 简洁UI、项目突出、开源代码 |
| 12 | Yagnik | - | Frontend Dev | 用户导向设计、清晰导航 |

### D. 全栈开发者 / Full Stack Developers
| # | 名字 | 网站 | 身份 | 特点 |
|---|------|------|------|------|
| 13 | Maxime Bonhomme | - | Full Stack Dev | 文字内容+留白、极简界面 |
| 14 | Devon Stank | - | Developer | Hero视频背景、暗色设计 |
| 15 | Ian Dunkerley | - | UX/UI + FE | 单页信息展示、必要信息一览 |
| 16 | Albino Tonnina | albinotonnina.com | Self-taught Engineer | 滚动构建动画、讲故事方式 |
| 17 | Tomasz Gil | tomaszgil.me | Engineer | 单色调、简洁字体、留白层次 |

### E. 创意技术 / Creative Technologists
| # | 名字 | 网站 | 身份 | 特点 |
|---|------|------|------|------|
| 18 | Bruno Simon | bruno-simon.com | Creative Dev | 3D WebGL互动、游戏化体验 |
| 19 | Samsy (SMSY) | - | Creative Tech | 3D交互、计算设计、50+国际奖项 |

### F. 设计师 / Designers
| # | 名字 | 网站 | 身份 | 特点 |
|---|------|------|------|------|
| 20 | Maggie Appleton | maggieappleton.com | Digital Garden | 视觉随笔、插画丰富、数字花园 |
| 21 | Gabriel Valdivia | - | Design Partner | 清晰价值主张、专业+亲和力平衡 |

### G. 创业者 / Tech Founders
| # | 名字 | 网站 | 身份 | 特点 |
|---|------|------|------|------|
| 22 | Michael Girdley | - | Investor/Entrepreneur | Newsletter CTA、推文整合 |
| 23 | Tim Ferriss | tim.blog | Author/Investor | 播客展示、大标题CTA |
| 24 | Gary Vaynerchuk | garyvaynerchuk.com | Entrepreneur | 视频Hero、"First Time Here"引导 |
| 25 | Daniel Sun | - | Digital Founder | 使命导向headline、VC合作背书 |

### H. Awwwards 获奖作品 2025
| # | 名字 | 荣誉 | 特点 |
|---|------|------|------|
| - | Elliott Mangham | SOTD Dec 2025 | Portfolio Honors |
| - | Olha Lazarieva | SOTD Oct 2025 | Developer Award |
| - | Gianluca Gradogna | SOTD Jan 2025 | Portfolio Honors |
| - | Luca Volino | Nominee 2025 | Animation + Scroll |

---

## 二、关键设计模式提炼

### 1. Hero 区域模式

#### 模式 A: 极简文字型 (Paco, Shu Ding)
```
[名字]
[一句话定位]
[社交链接]
```
**特点**: 无图片、纯文字、极致克制
**适用**: 作品说话的人、技术深度型

#### 模式 B: 视频/动态背景型 (Devon Stank, Gary V)
```
[全屏视频/动画]
[叠加文字]
[CTA按钮]
```
**特点**: 视觉冲击、情绪渲染
**适用**: 创意类、个人品牌强

#### 模式 C: 价值主张型 (Gabriel Valdivia, Daniel Sun)
```
[Design partner for early-stage teams]
[简短描述]
[精选项目缩略图]
```
**特点**: 明确你能提供什么价值
**适用**: 咨询/服务导向

#### 模式 D: 交互/3D型 (Bruno Simon, Rauno)
```
[交互式画布/3D场景]
[探索式导航]
```
**特点**: 技术展示、沉浸体验
**适用**: 创意开发、高技术力证明

### 2. 项目展示模式

#### 模式 A: 卡片网格 (常见)
```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ 项目1   │ │ 项目2   │ │ 项目3   │
│ [截图]  │ │ [截图]  │ │ [截图]  │
│ 描述    │ │ 描述    │ │ 描述    │
└─────────┘ └─────────┘ └─────────┘
```
**优点**: 信息密度高、一目了然
**关键**: 截图质量决定一切

#### 模式 B: 全宽堆叠 (Brittany Chiang)
```
────────────────────────────────────
项目1                          [截图]
描述文字
技术栈
────────────────────────────────────
项目2                          [截图]
...
```
**优点**: 叙事空间大、可深入介绍
**关键**: 需要好的视觉节奏

#### 模式 C: 列表极简 (Shu Ding)
```
Projects
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SWR         React Hooks for data fetching
Satori      CSS-to-SVG engine
Nextra      Documentation framework
...
```
**优点**: 干净、专业、不抢眼
**关键**: 项目本身要有知名度

#### 模式 D: 交互时间线 (少见但有效)
```
2024 ──●── Project A
       │
2023 ──●── Project B
       │
2022 ──●── Project C
```
**优点**: 展示成长轨迹
**关键**: 需要有时间跨度的项目

### 3. 研究/写作展示模式

#### 模式 A: 数字花园 (Maggie Appleton)
- 非线性链接
- 生长中的想法
- 视觉化笔记
**适用**: 思想者、研究者

#### 模式 B: 传统博客 (Lee Robinson, Josh Comeau)
- 时间线排序
- 分类标签
- 阅读时间
**适用**: 教育者、内容创作者

#### 模式 C: 精选highlights (Pieter Levels)
- 只展示最重要的
- 链接到外部
- 简短描述
**适用**: 忙碌的builder

### 4. 关于/自我介绍模式

#### 模式 A: 故事型 (Albino Tonnina)
从童年/起点讲起，有情感连接

#### 模式 B: 事实型 (Shu Ding)
```
[公司经历]
[教育背景]
[技能列表]
```

#### 模式 C: 混合型 (Gabriel Valdivia)
专业背景 + 个人生活 = 可信 + 亲切

---

## 三、最佳实践总结

### ✅ 必须做的

1. **一句话定位** - 立即告诉访客你是谁、做什么
2. **真实项目** - 有截图、有链接、有描述
3. **移动端优化** - 响应式不是可选项
4. **快速加载** - 性能是体验的一部分
5. **联系方式明显** - email、社交、日历链接

### ❌ 避免的

1. **空洞自夸** - "Passionate full-stack developer"
2. **无用动画** - 为动画而动画
3. **过度设计** - 让内容消失在设计中
4. **过时项目** - 3年前的课程作业
5. **断开的链接** - 死链比没有链接更糟

### 🎯 针对 Wayne 的具体建议

基于你的定位 (产品思维 + 工程实践 + 审美品味 + Builder身份):

#### Hero
- 推荐模式 A (极简文字) 或 C (价值主张)
- 一句话: "Building at the intersection of AI and product"
- 不需要复杂动画，文字本身就是设计

#### Projects
- 推荐模式 B (全宽堆叠)
- 每个项目需要: 截图/GIF + 问题+方案 + 技术栈
- 考虑用 Loom 录屏代替静态截图

#### Research
- 推荐模式 B (博客) + 叙事弧线
- 标题: "从 Critique 到 Construction"
- 视觉: 2025 → 2026 时间线
- 用图表展示研究逻辑

#### 签名元素
看到的好例子:
- Rauno: macOS dock 动画
- Bruno Simon: 3D 汽车
- Josh Comeau: 代码高亮动画
- Brittany Chiang: 鼠标跟随效果

**你的选项**:
1. 微交互: 光标跟随、平滑滚动指示器
2. 代码元素: 类似终端的介绍动画
3. 几何签名: 一个代表你的简单形状/符号

---

## 四、技术实现参考

### 常见技术栈
- **框架**: Next.js (绝对主流)
- **动画**: Framer Motion
- **样式**: Tailwind CSS
- **字体**: Inter, Syne, Geist, SF Pro
- **部署**: Vercel

### 值得研究的效果
1. **View Transitions API** - 页面切换动画 (Lee Robinson)
2. **Scroll-triggered animations** - 滚动动画 (已实现)
3. **Dock animation** - macOS风格dock (Rauno)
4. **Cursor following** - 光标跟随效果
5. **Text balancing** - CSS text-wrap: balance

---

## 五、下一步行动

### 优先级1: Projects 画面感
- [ ] 为每个项目制作高质量截图/GIF
- [ ] 考虑用 Loom 录屏
- [ ] 设计全宽堆叠布局

### 优先级2: Research 讲故事
- [ ] 用时间线展示 Critique → Construction
- [ ] 添加简单的图表/可视化
- [ ] 强调"发现问题→解决问题"的叙事

### 优先级3: Hero 视觉主张
- [ ] 精炼一句话定位
- [ ] 考虑微交互而非大动画
- [ ] 保持极简

### 优先级4: 签名元素
- [ ] 选择一个: 光标效果 / 代码动画 / 几何符号
- [ ] 贯穿整站
- [ ] 保持克制

---

*调研完成于 2026-02-03*
