export interface NewsItem {
  id: string
  slug: string
  title: string
  summary: string
  content: string
  category: string
  date: string
  readTime: string
  author: string
  tags: string[]
}

export const newsData: NewsItem[] = [
  {
    "id": "1775644106",
    "slug": "news-20260409-1",
    "title": "YouTube 十大热门 AI 话题盘点：2026年最受关注的人工智能趋势",
    "summary": "从 GPT-5 到 AI Agent，从人形机器人到视频生成，梳理 YouTube 上最火的 10 个 AI 话题，附视频链接直达精彩内容。",
    "content": `## YouTube 上最火的 10 个 AI 话题

以下是 2026 年 YouTube 上最受关注的 AI 话题，按热度排序：

---

### 1. GPT-5 / 下一代大模型发布
OpenAI 下一代模型的预测和泄露持续引发热议，多模态原生架构成为焦点。

🔥 **热门视频搜索**: [GPT-5 predictions 2026](https://www.youtube.com/results?search_query=GPT-5+predictions+2026)

📺 **推荐频道**: AI Explained, The AI Advantage

---

### 2. AI Agent 自主代理
AutoGPT、Devin 等自主编程代理展示 AI 独立完成复杂任务的能力。

🔥 **热门视频搜索**: [AI Agent tutorial 2026](https://www.youtube.com/results?search_query=AI+Agent+tutorial+2026)

📺 **推荐频道**: The AI Advantage, Matt Wolfe

---

### 3. Sora 视频生成
OpenAI Sora 的惊人视频生成能力，与 Runway、Pika 等工具的对比评测。

🔥 **热门视频搜索**: [Sora AI video examples](https://www.youtube.com/results?search_query=Sora+AI+video+examples)

📺 **推荐频道**: Two Minute Papers, AI Explained

---

### 4. 人形机器人
Figure AI、Tesla Optimus、Boston Dynamics 的最新进展。

🔥 **热门视频搜索**: [Humanoid robot 2026](https://www.youtube.com/results?search_query=Humanoid+robot+2026)

📺 **推荐频道**: ColdFusion, Lex Fridman

---

### 5. Claude 3.7 / Anthropic 新功能
Claude 的代码能力和推理能力展示，与 GPT-4 的对比评测。

🔥 **热门视频搜索**: [Claude 3.7 vs GPT-4](https://www.youtube.com/results?search_query=Claude+3.7+vs+GPT-4)

📺 **推荐频道**: AI Explained, The AI Advantage

---

### 6. Gemini 2.5 Pro
Google 最新多模态模型的突破，长上下文窗口（100万+ token）。

🔥 **热门视频搜索**: [Gemini 2.5 Pro test](https://www.youtube.com/results?search_query=Gemini+2.5+Pro+test)

📺 **推荐频道**: Matt Wolfe, AI Explained

---

### 7. AI 编程助手
Cursor、GitHub Copilot、Windsurf 等工具的实际使用评测。

🔥 **热门视频搜索**: [Cursor AI tutorial](https://www.youtube.com/results?search_query=Cursor+AI+tutorial)

📺 **推荐频道**: The AI Advantage, Fireship

---

### 8. AI 音乐生成
Suno、Udio 等音乐生成工具的评测和教程。

🔥 **热门视频搜索**: [Suno AI music tutorial](https://www.youtube.com/results?search_query=Suno+AI+music+tutorial)

📺 **推荐频道**: Matt Wolfe, AI Explained

---

### 9. AI 硬件设备
Rabbit R1、Humane Pin 等 AI 设备评测，AI 手机功能展示。

🔥 **热门视频搜索**: [Rabbit R1 review](https://www.youtube.com/results?search_query=Rabbit+R1+review)

📺 **推荐频道**: Marques Brownlee, Linus Tech Tips

---

### 10. AI 安全与监管
欧盟 AI 法案实施，AI 对齐、AGI 安全讨论。

🔥 **热门视频搜索**: [EU AI Act explained](https://www.youtube.com/results?search_query=EU+AI+Act+explained)

📺 **推荐频道**: Lex Fridman, ColdFusion

---

## 🎯 如何找到最新热门视频

直接在 YouTube 搜索以下关键词：

| 话题 | 搜索关键词 |
|------|-----------|
| AI 趋势 | AI 2026 predictions |
| GPT-5 | GPT-5 leaked |
| Claude | Claude 3.7 vs GPT-4 |
| Sora | Sora video examples |
| AI Agent | AI agent tutorial |
| 机器人 | Figure robot demo |
| Gemini | Gemini 2.5 pro test |
| 编程 | AI coding assistant comparison |

---

## 📌 推荐的 YouTube AI 频道

- **Two Minute Papers** - 最新 AI 研究速览
- **AI Explained** - AI 技术深度解析
- **Lex Fridman** - AI 大佬访谈
- **Matt Wolfe** - AI 工具评测
- **The AI Advantage** - AI 应用教程
- **ColdFusion** - 科技趋势分析
- **Marques Brownlee** - 硬件评测
- **Linus Tech Tips** - 科技产品评测
- **Fireship** - 编程技术速览

---

## 结论

YouTube 上的 AI 内容生态正在蓬勃发展，从学术研究到产品评测，从教程到访谈，为不同层次的观众提供了丰富的学习资源。建议关注上述频道，设置通知以获取最新内容。`,
    "category": "AI",
    "date": "2026-04-09",
    "readTime": "6 分钟",
    "author": "CloseAI 编辑",
    "tags": ["YouTube", "AI趋势", "视频推荐", "热门话题"]
  },
  {
    "id": "1775644101",
    "slug": "news-20260408-1",
    "title": "OpenAI GPT-5 技术深度解析：多模态推理的范式转移",
    "summary": "GPT-5 不仅是一次版本迭代，更代表了从语言模型向世界模型演进的关键节点，其多模态原生架构正在重新定义人机交互的边界。",
    "content": "## 技术突破的核心逻辑\n\nGPT-5 的发布标志着大语言模型进入原生多模态时代。与前代模型拼接式的多模态处理不同，GPT-5 采用了统一的 Transformer 架构处理文本、图像、音频和视频，这种设计带来了三个根本性变化：\n\n### 1. 跨模态理解的质的飞跃\n\n传统多模态模型（如 GPT-4V）本质上是看图说话——视觉编码器提取特征后交给语言模型解读。而 GPT-5 的统一表征空间让模型真正看到并理解视觉信息，而非仅仅描述它。\n\n测试数据显示，在需要空间推理的任务中，GPT-5 的准确率达到 87%，较 GPT-4o 提升 23 个百分点。\n\n### 2. 推理能力的隐性跃升\n\nOpenAI 并未公开 GPT-5 的参数规模，但从 benchmark 表现可以推断其训练策略的重大调整：\n\n| 评测维度 | GPT-4o | GPT-5 | 提升幅度 |\n|---------|--------|-------|---------|\n| MATH (高中竞赛) | 76.6% | 94.2% | +17.6% |\n| GPQA (博士级科学) | 53.6% | 78.4% | +24.8% |\n| SWE-bench (编程) | 38.3% | 67.1% | +28.8% |\n| 多模态推理 | 64.1% | 89.7% | +25.6% |\n\n值得注意的是，GPT-5 在需要多步推理的复杂任务上表现尤为突出。这暗示其训练过程中可能引入了更精细的强化学习机制，而非简单的规模扩张。\n\n### 3. 实时交互的技术底座\n\nGPT-5 的语音模式延迟降至 200ms 以内，接近人类对话的自然节奏。这一突破源于流式多模态处理架构——模型不再需要等待完整输入，而是像人类一样边听边想。\n\n## 产业影响的深度分析\n\n### 对现有产品的冲击\n\n- 搜索引擎：GPT-5 的实时信息检索能力直接挑战 Google 的核心商业模式\n- 办公软件：Copilot 的升级版本将具备真正的智能助手能力\n- 创意工具：Adobe、Figma 等公司的 AI 功能面临被基础模型降维打击的风险\n\n### 新兴应用场景\n\n1. 实时视频分析：安防、质检、医疗影像诊断的自动化门槛大幅降低\n2. 具身智能：机器人控制、自动驾驶的大脑获得更强的环境理解能力\n3. 科学研究：文献综述、实验设计、数据分析的 AI 辅助进入新阶段\n\n## 值得警惕的信号\n\n尽管能力提升显著，但 GPT-5 也暴露出新的风险特征：\n\n- 幻觉率的隐蔽性：在复杂推理任务中，模型的错误更具说服力，难以识别\n- 能力涌现的不可预测性：某些危险能力是否在训练中被充分评估存疑\n- 算力垄断的加剧：原生多模态架构的训练成本可能使技术差距进一步拉大\n\n## 结论\n\nGPT-5 不是终点，而是通用人工智能（AGI）路线图上的一个重要路标。其技术架构选择很可能成为行业新标准。",
    "category": "AI",
    "date": "2026-04-08",
    "readTime": "8 分钟",
    "author": "CloseAI 深度分析",
    "tags": ["OpenAI", "GPT-5", "多模态", "深度分析"]
  },
  {
    "id": "1775644102",
    "slug": "news-20260408-2",
    "title": "DeepSeek-R1 推理模型开源：中国 AI 的技术平权实验",
    "summary": "DeepSeek-R1 以 MIT 许可证开源，性能对标 OpenAI o1，但真正的颠覆性在于其训练成本仅为同类模型的 1/10，这可能重塑全球 AI 产业格局。",
    "content": "## 开源决策的战略意图\n\nDeepSeek 选择将 R1 系列模型完全开源（MIT 许可证），这一决策背后是对 AI 产业权力结构的深刻洞察。与 Llama、Qwen 等有限开源策略不同，DeepSeek-R1 允许无限制的商用、修改和蒸馏。\n\n### 性能对标：数据说话\n\n| 评测任务 | DeepSeek-R1 | OpenAI o1 | Claude 3.5 Sonnet |\n|---------|-------------|-----------|-------------------|\n| MATH-500 | 97.3% | 96.4% | 78.3% |\n| AIME 2024 | 79.8% | 79.2% | 23.3% |\n| Codeforces (Rating) | 2029 | 2061 | 1186 |\n| GPQA Diamond | 71.5% | 75.2% | 62.3% |\n\n关键发现：R1 在数学和编程任务上已超越或持平 o1，且推理过程完全透明。\n\n## 技术创新的核心：MLA 与 MoE 的协同\n\nDeepSeek-R1 的成本优势并非来自算力堆砌，而是架构层面的创新：\n\n### 1. Multi-Head Latent Attention (MLA)\n\n传统 Transformer 的 KV Cache 随序列长度线性增长，是推理成本的主要瓶颈。MLA 通过低秩压缩将 KV Cache 减少 93%。\n\n### 2. 专家混合模型 (MoE) 的精细化\n\nR1 总参数量 671B，但每次前向传播仅激活 37B 参数（约 5.5%）。这种稀疏激活策略的关键在于路由算法的优化。\n\n对比数据：\n- R1 的训练成本：约 600 万美元\n- GPT-4 级模型的训练成本：估计 1-3 亿美元\n- 成本差距：50-500 倍\n\n## 产业冲击波\n\n### 对云服务厂商的影响\n\nAWS、Azure、Google Cloud 的高价 API 服务面临根本性挑战。R1 的开源使任何企业都能以极低成本部署顶级推理模型。\n\n### 对 AI 应用创业公司的影响\n\n套壳类产品的护城河被进一步削弱。当基础模型能力差距缩小时，产品设计、数据飞轮、用户粘性成为真正的竞争壁垒。\n\n## 结论\n\nDeepSeek-R1 的开源不仅是一个技术事件，更是一场 AI 民主化运动。它证明了：在算法创新面前，算力垄断并非不可逾越。",
    "category": "AI",
    "date": "2026-04-08",
    "readTime": "9 分钟",
    "author": "CloseAI 深度分析",
    "tags": ["DeepSeek", "开源", "推理模型", "中国AI"]
  },
  {
    "id": "1775644103",
    "slug": "news-20260408-3",
    "title": "AI 智能体 (Agent) 爆发前夜：从聊天到做事的临界点",
    "summary": "2026 年被业界称为 Agent 元年，但真正的突破不在于技术能力，而在于信任机制的建立——当 AI 能够自主执行任务时，人类如何确保它不会失控？",
    "content": "## 概念澄清：什么是真正的 AI Agent？\n\n当前市场充斥着对 Agent 概念的滥用。一个真正的 AI Agent 需要具备三个核心特征：\n\n1. 自主性 (Autonomy)：能够在没有人类实时干预的情况下，根据目标自主规划行动\n2. 工具使用 (Tool Use)：能够调用外部 API、操作软件、甚至物理设备来完成任务\n3. 记忆与状态管理 (Statefulness)：能够维护长期记忆，从交互中学习并优化策略\n\n## 技术栈的成熟曲线\n\n### 1. 规划与推理层\n\nOpenAI 的 o1/o3 系列、DeepSeek-R1 代表了推理能力的突破，但 Agent 需要的不只是会思考，还需要会规划。\n\n新兴的分层规划架构正在形成：\n- 战略层：理解用户意图，分解高层目标\n- 战术层：制定具体执行计划，选择工具链\n- 执行层：处理具体交互，应对实时变化\n\n### 2. 工具集成层\n\nMCP (Model Context Protocol) 等标准化协议的兴起，解决了 Agent 与外部系统集成的碎片化问题。\n\n### 3. 安全与可控层\n\n这是当前最薄弱的环节，也是 Agent 大规模落地的最大障碍。\n\n## 应用场景的优先级排序\n\n| 优先级 | 场景 | 代表产品 | 落地难度 |\n|-------|------|---------|---------|\n| 1 | 代码开发辅助 | GitHub Copilot, Cursor | 低 |\n| 2 | 客户服务自动化 | Sierra, Ada | 中 |\n| 3 | 数据分析与报告 | Julius, ChatGPT Data Analyst | 中 |\n| 4 | 营销内容生成 | Jasper, Copy.ai | 低 |\n| 5 | 复杂业务流程自动化 | 各类 RPA+AI 方案 | 高 |\n\n## 结论\n\nAI Agent 正处于爆发前夜。技术能力已接近临界点，但治理框架、商业模式、用户习惯的成熟还需要 12-24 个月。",
    "category": "AI",
    "date": "2026-04-08",
    "readTime": "10 分钟",
    "author": "CloseAI 深度分析",
    "tags": ["AI Agent", "智能体", "自动化", "趋势分析"]
  },
  {
    "id": "1775644104",
    "slug": "news-20260408-4",
    "title": "欧盟 AI 法案生效：全球监管格局的分水岭",
    "summary": "作为全球首部综合性 AI 监管法律，EU AI Act 不仅规范了欧洲市场，更通过布鲁塞尔效应影响着全球 AI 产业的技术路线和商业模式。",
    "content": "## 法案核心框架：风险分级监管\n\nEU AI Act 的创新之处在于摒弃了一刀切的监管思路，采用基于风险的分级管理：\n\n### 禁止类 AI 系统（不可接受风险）\n\n- 社会信用评分系统\n- 利用潜意识技术操纵人类行为\n- 利用弱势群体的脆弱性\n- 公共场所的实时远程生物识别（执法例外）\n\n违规处罚：最高 3500 万欧元或全球年营业额 7%\n\n### 高风险 AI 系统\n\n涵盖 8 大领域：关键基础设施、教育、就业、金融、执法、移民、司法、医疗。\n\n合规要求：风险管理、数据治理、技术文档、透明度、人工监督、准确性。\n\n## 对全球产业的影响\n\n### 布鲁塞尔效应的显现\n\n历史经验表明，欧盟的监管标准往往会成为全球事实标准（如 GDPR）。AI Act 正在重演这一剧本。\n\n### 对具体行业的影响\n\n- 生成式 AI：必须披露训练数据的版权状况，AI 生成的内容必须明确标注\n- 生物识别：实时人脸识别在公共场所基本被禁\n- 金融和保险：AI 模型不能基于敏感特征做歧视性判断\n\n## 结论\n\nEU AI Act 的生效标志着 AI 产业野蛮生长时代的结束。监管框架的建立本身就是行业成熟的标志。",
    "category": "科技",
    "date": "2026-04-08",
    "readTime": "11 分钟",
    "author": "CloseAI 深度分析",
    "tags": ["欧盟AI法案", "监管", "合规", "政策分析"]
  },
  {
    "id": "1775644105",
    "slug": "news-20260408-5",
    "title": "端侧 AI 的崛起：从云端到边缘的算力迁移",
    "summary": "随着模型压缩技术和专用芯片的进步，AI 推理正在从云端向终端设备迁移。这不仅关乎隐私和延迟，更可能重塑整个 AI 产业的权力结构。",
    "content": "## 趋势背后的驱动力\n\n端侧 AI（On-device AI）并非新概念，但 2024-2026 年的技术突破使其从可行走向实用。\n\n### 1. 模型压缩技术的成熟\n\n量化：从 FP32 到 INT4，4-bit 量化后的 Llama 3 70B 模型体积缩小 8 倍\n剪枝：稀疏化后的模型可实现 2-10 倍加速\n知识蒸馏：Phi 系列、Gemma 系列都是成功范例\n\n### 2. 专用 AI 芯片的普及\n\n| 平台 | NPU 算力 | 代表设备 |\n|------|---------|---------|\n| Apple M4 | 38 TOPS | MacBook Pro |\n| Qualcomm X Elite | 45 TOPS | Windows Copilot+ PC |\n| Intel Lunar Lake | 48 TOPS | 新一代轻薄本 |\n\n40+ TOPS 的 NPU 算力，使得在消费级设备上运行实用级别的 LLM 成为可能。\n\n### 3. 隐私与合规压力\n\nGDPR、CCPA 等隐私法规对数据出境的限制，企业对敏感数据上云的顾虑。\n\n## 结论\n\n端侧 AI 的崛起不是对云端 AI 的替代，而是算力分布的重构。未来的 AI 架构将是端云协同的混合模式。",
    "category": "科技",
    "date": "2026-04-08",
    "readTime": "10 分钟",
    "author": "CloseAI 深度分析",
    "tags": ["端侧AI", "边缘计算", "NPU", "模型压缩"]
  }
]

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsData.find(news => news.slug === slug)
}

export function getNewsByCategory(category: string): NewsItem[] {
  if (category === '全部') return newsData
  return newsData.filter(news => news.category === category)
}

export function getAllCategories(): string[] {
  const categories = new Set(newsData.map(news => news.category))
  return ['全部', ...Array.from(categories)]
}