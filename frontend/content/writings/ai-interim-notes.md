---
title: "阶段性，关于 AI 的随笔"
summary: "Knowledge as a service, LLM as the runtime。关于自然语言编程、从代码中蒸馏知识、以及人脑在 AI 时代的 context 管理。"
date: "2026-04-19"
tags: ["AI", "自然语言编程", "开源", "随笔"]
---

题记：阿伦特won’t appreciate me talking so much, caring so much about WORK. 推荐阅读，《人的境况》。

这个月，我一直在持续性的探索一个课题“自然语言编程”(Natural Language Programming)，简单来说也就是，我像写代码一样，写我的markdown，我的markdown里有stblib，有明确的调用和依赖关系，有严格的type, 有预先指定的通讯协议，甚至还有fork()/wait()这种逻辑（当然这里的fork() 主要是spawn agent而不是物理上的thread)，只不过所有东西，都是在自然语言里。

这些逻辑，是本来我们需要用代码实现的部分；而让这些逻辑运行，本来是compiler/intepreter/OS/硬件[GPU]的工作，现在我们的runtime变成了LLM/硬件[GPU]。这里我要promote一下我个人的理念，未来就是“Knowledge as a service, LLM as the runtime”，在这个理念下，互联网上最应该被重视的开源内容，其实是像gstack (https://github.com/garrytan/gstack) 这样可以运行的高价值知识。

优秀的传统开源项目，依然很有价值，但是它的价值点， 在不知不觉中，也发生了改变。以前，一个优秀的开源项目，比如说，开源的用户系统，它的核心价值在于，它极大程度的节约了我作为开发者的工作量，无论是开箱即用还是我在上面小改，比我从头开始写要轻松很多。那现在的话，这种不需要重复造轮子的价值依然存在，但是因为代码被生产的时间和人力程度实在是太低，所以这部分价值被压缩了很多；而与之相对的，被编码成代码的知识，比如说有趣的decorator使用，高并发在某个垂直场景下的特殊解决方案，或者就general一点，claude code里的重要工程实践，这种东西的价值点就提升了很多。

这里可能有人就会疑惑，诶，小王，哪怕没有AI，这些被“编码成代码的”知识不也在那里，我们想去学习，依然能学到吗？

没错，之前这些代码也在那里，但是我们获取这些知识实在是有太多的阻碍了。首先就是，我们阅读的是代码，可能50行代码实现的逻辑，用4行字就能读完，这个数字是我瞎扯的，但是就理解内容这方面的高杠杆率，是必须有AI才能实现的。然后就是，你不一定熟悉这种语言，比如说我现在有一个需求，有一个开源的库是用go写的，但我不太会go，编程语言当然触类旁通，但是你把习惯简体的我投放到香港，我都会有点水土不服，何况是编程语言。还有一个问题，你如何快速的locate 到关键的逻辑？是一个一个文件去翻，通过注释，文件和symbol的名字在几万行代码里扮演小福尔摩斯？这里有很多很多的因素，真的太多了，我就不一一例举，会层层降低，而且是以几何倍数降低，我们从代码中提取知识的效率。

我想在这里说一个事情，就是，我说的用AI从代码中提取知识，真的只是说AI能够很高效的从代码库中提取知识，而你作为人类，如何处理这个知识，是你去真正学习它，还是把这个知识当作一个package一样，直接再让AI去load这个知识，这就是你的选择了。我一般不会去用AI 代替我进行任何我有可能学到东西的环节——这是一句，我几个月一直思考人和AI之间应该如何进行可持续性合作后实践出的经验的高度总结，我一定会在未来写个文章抛砖引玉，和大家讨论一下这个事情的。

哦，说到这里，其实我个人用来实践这一套“Knowledge as a service, LLM as the runtime”开发的第一个产出，就是一个用来从代码库中蒸馏知识的claude skill。这个skill 的链接在此【https://github.com/VW-ai/ShadowRepo-Skill.git】，请大家多多使用，多多捧场。

在这个skil的组织上，我贯彻了和代码开发一样的标准，逻辑要解耦，边界条件要清晰。我在开发这个skill的时候，感觉vibe markdown和我去vibe code，是有一模一样的脑力活动的，都是在进行，缜密的系统设计。

我这里说，在这个地方vibe markdown 和vibe code脑力活动的体感一致，是有严格对照组的：我在做这个skill之前，是搓了一个15k行typescript的多agent协作流程的。

当时我是越写越感觉不对，一步一步从指挥AI写Typescript走上了写markdown的道路。一开始我是用的api 调用claude，发现很贵，而且这个东西大家都是本地用，我的goal也是做一个本地能用的东西，就改。改成了claude code的本地headless调用，跑了几个benchmark。这里我调用claude code时，为了能够把它嵌入我的流程代码中，要做的是让它只能跑一个iteration，同时ban所有的tool usage，因为tool usage会让它跑不止一个iteration。那它没有tool usage，我就要写tool，用来传context，传代码文件进去——大事不好，我在写claude code自己就有的read!

我发现我在做很多，claude code本来就有，并且做的很好的事情。而这些事情，我一件都不需要做，如果我把claude code当作runtime。

在我意识到我重新发明了很多（破）轮子的同时，我也意识到，我整个workflow的代码并不是白费的，我的benchmark 设计，多轮workflow后稳定下来的业务逻辑，描述性的字段，agent的设计和调用，对于batch processing 的实践，这些都是100%可以被复用，而且可以无损，直接用自然语言复用的东西。这些构成我这个项目核心资产的内容，是始终存在的。

说回这个shadowrepo。这个skill我是让他通过语意去生成两种内容，第一种是feature，比如说“5-stage Filtering Pipeline”，然后有一些描述；feature 会有sub-feature。第二种是spec，也就是一段一句话可以总结的知识，像 “Collector tracks cursor_us from Jetstream messages. On reconnection, passes last cursor to avoid re-processing. Posts batch-flushed every 5s or 100 posts.” ，每一个spec归属于一个spec，然后spec之间有联系。然后所有的内容随着代码的调整动态调整。

长这样，举两个 shadowrepo 跑claude code的那个泄露repo的内容：

**Feature** — 给一组相关文件一个语义名字，可以嵌套。

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

**Spec** — 一句话知识，带 anchor（锚到具体代码位置）、relations（和别的 spec 的联系）、confidence，还有 state 随代码动态维护。

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

换句话说，feature 是目录，spec 是条目，两者一起构成一张可被 LLM 直接读写的代码语义图。

目前这个东西的UX比较糟糕，但是作为一个给AI和人提供的双向（看/改）代码语义层，我还是很满意我的设计的。起码比我之前在linkedin上刷到的，僵硬的给ast tree做语意填充的项目要强。

这个ShadowRepo的业务逻辑背后的底层逻辑——语言好匮乏的人写出的句子啊，哈哈。其实就是，有一个让AI去根据规则组织，维护，和update的这么一个知识库，只不过这里我们的业务scope 是专门面向代码的。

而Karpathy 同学，在差不多我在肝shadowrepo的时候，写了一个叫做llm-wiki的文章（[gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) / [原推](https://x.com/karpathy/status/2039805659525644595)），呼吁大家用LLM去组织，维护，和update 个人知识库，而不是用什么RAG-based framework让LLM隔靴搔痒。他还说，他不写代码了，更多时候是”manipulate knowledge”，我理解就是很多自然语言编程。

> A pattern for building personal knowledge bases using LLMs … the LLM incrementally builds and maintains a persistent wiki—a structured, interlinked collection of markdown files that sits between you and the raw sources.
>
> — Andrej Karpathy, [*LLM Wiki*](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)

首先我觉得他的品味很对，RAG的power是在scale的时候体现的，个人知识库这种场景，有一些基本的folder组织能力的话，是不可能填满大模型的context window的，你用RAG干啥（除非就是你真的非常在意LLM干活的速度，那你用小模型搭配embedding，我无话可说）。

他说，我们用一个文件去规范LLM应该如何遵循我们的个人的convention来维护知识库就行了。他觉得这个文件（或者几个文件），就叫它INSTRUCTION文件吧，其实就是自然语言编程可以大放异彩的地方（当我们用claude code/ codex作为runtime的时候）。比如说让LLM学会自己给自己的行为写log，比如写几个文件就能加一些别人单卖出来很贵的服务，比如说notion agent服务。

如果你沿这条路走下去，发现可以接上微信，还可以想办法让它直接做一些任务，那我恭喜你，你重新发明了openClaw，一个属于你的openClaw。

这里的恭喜不是讽刺啊，我觉得AI时代，在个人工具上，自己发明，自己探索，自己建造，自己使用，是好的。哪怕到最后做出来的东西和别人的大同小异，但是就是那一点小异，是真正可以让你把工具用的顺心和省力同时最大化生产力的。

我觉得我可以safely assume，现在大家说的个人工具，要么是用AI做的，要么是用AI的，甚至majority是both。而这种工具，是很显然的，”knowledge as a service”的东西。你让AI做出来的东西，一定是深度围绕你的当下，你的专业背景，你的价值观，你的工作习惯——往一个很搞笑的方向说，甚至是和你童年创伤——有直接联系的，知识这个东西，是你的mental model的产物，而这个出来的工具，能natively严丝合缝被用上的人，理论上也只有你。比如说openClaw吧，peter是个美国人，我是个中国人，他有telegram的connector，而我不那么需要打通telegram，我需要wechat，所以我没法natively用他的东西。

而你做的这个系统越复杂，其他人可能的，和这个工具的契合度上限，也就越低。一个笔记可视化的工具给到我，可能我只有5个地方不太契合，openClaw里可能就有17个。

像openClaw这种东西，我觉得是非常典型的，工程上可以借鉴，产品上有点意思，拿过来我不想用。我感觉这东西高度个人化，这个个人化很忠实的反应到了它的每一行代码里。让我用它去做任务，就像让我穿足球鞋去运动，而我又不想踢足球，我只会打篮球，别扭。

人的适应能力是很强的，大多数时候，我们可以去适应一下工具里和我们不协调的地方，然后找到我们自己的使用之道。那这个适应，多多少少会变成大脑本身的，administrative overhead。

在AI时代，如果追求自己的生产力，或者说生产力杠杆最大化，我觉得管理人脑的context，是关键。而这些administrative overhead，在我们需要做的事情多了起来，相应的需要用的工具多少了起来之后，如何efficiently降低自己的administrative overhead，是非常重要的事情。这里我就不do the math了。

说到管理人脑的context……啊，好长的一篇文章，我这里快速说一下我最近的一个想法：和AI协作的时候，我们一定要注意保护大脑，要保护和培养我们自己的创造力；要做到这个，就要能够分辨，什么工作我们应该让AI去做，我们应该如何让AI去做，而什么东西，必须由我们充分调动大脑后来产出。

这里有一个quick N vs NP 的analogy，你去找一个好的解，可能是很难的，但是你去验证一个解是不是好的，往往是容易的。也就是，有时候，验证一个解需要的能力是远低于去找一个好的解的，但是验证这个事情会给你一个illusion，让你以为自己有能力去找一个好的解，但你其实没有培养到在这个任务里找一个好的解的能力。往往遇到这种任务，这时候就需要认真想，这个事情，从可持续培养大脑的角度来说，我们应该如何和AI合作。

最后，我想说，过去一个周我一直在做一个coding agents的系统(https://github.com/waynewangyuxuan/Robin)，我的理念是，我们和AI的协作终极模式应该是人类深度思考和AI深度干活的无限循环，你来我往的AI对话可以是人类深度思考的一个环，或者一种辅助工具，但是在真正去执行的时候，不应该是这种你来我往的模式。这个世界上没有leader是通过一步一步指导属下来完成工作的。目前这个系统还挺成功，它已经干了3个小时活了，还在继续，很期待它的deliverable。

![robin执行的一个log，大概感受一下](/writings/robin-processed.png)