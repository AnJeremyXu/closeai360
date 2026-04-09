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
  views?: number
  publishTime?: string
  url?: string
}

// 今日新闻（10条）
export const todayNews: NewsItem[] = [
  {
    "id": "1775644101",
    "slug": "news-20260409-1",
    "title": "OpenAI GPT-5 技术深度解析：多模态推理的范式转移",
    "summary": "GPT-5 不仅是一次版本迭代，更代表了从语言模型向世界模型演进的关键节点，其多模态原生架构正在重新定义人机交互的边界。",
    "content": "",
    "category": "AI",
    "date": "2026-04-09",
    "readTime": "8 分钟",
    "author": "CloseAI 深度分析",
    "tags": ["OpenAI", "GPT-5", "多模态"],
    "views": 12580,
    "publishTime": "08:00",
    "url": "https://openai.com/blog"
  },
  {
    "id": "1775644102",
    "slug": "news-20260409-2",
    "title": "DeepSeek-R1 推理模型开源：中国 AI 的技术平权实验",
    "summary": "DeepSeek-R1 以 MIT 许可证开源，性能对标 OpenAI o1，但真正的颠覆性在于其训练成本仅为同类模型的 1/10。",
    "content": "",
    "category": "AI",
    "date": "2026-04-09",
    "readTime": "9 分钟",
    "author": "CloseAI 深度分析",
    "tags": ["DeepSeek", "开源", "推理模型"],
    "views": 8965,
    "publishTime": "08:30",
    "url": "https://deepseek.com"
  },
  {
    "id": "1775644103",
    "slug": "news-20260409-3",
    "title": "AI 智能体 (Agent) 爆发前夜：从聊天到做事的临界点",
    "summary": "2026 年被业界称为 Agent 元年，但真正的突破不在于技术能力，而在于信任机制的建立。",
    "content": "",
    "category": "AI",
    "date": "2026-04-09",
    "readTime": "10 分钟",
    "author": "CloseAI 深度分析",
    "tags": ["AI Agent", "智能体", "自动化"],
    "views": 15234,
    "publishTime": "09:00",
    "url": "https://www.anthropic.com"
  },
  {
    "id": "1775644104",
    "slug": "news-20260409-4",
    "title": "欧盟 AI 法案生效：全球监管格局的分水岭",
    "summary": "作为全球首部综合性 AI 监管法律，EU AI Act 不仅规范了欧洲市场，更通过布鲁塞尔效应影响着全球 AI 产业。",
    "content": "",
    "category": "科技",
    "date": "2026-04-09",
    "readTime": "11 分钟",
    "author": "CloseAI 深度分析",
    "tags": ["欧盟AI法案", "监管", "合规"],
    "views": 7823,
    "publishTime": "09:30",
    "url": "https://digital-strategy.ec.europa.eu"
  },
  {
    "id": "1775644105",
    "slug": "news-20260409-5",
    "title": "端侧 AI 的崛起：从云端到边缘的算力迁移",
    "summary": "随着模型压缩技术和专用芯片的进步，AI 推理正在从云端向终端设备迁移。",
    "content": "",
    "category": "科技",
    "date": "2026-04-09",
    "readTime": "10 分钟",
    "author": "CloseAI 深度分析",
    "tags": ["端侧AI", "边缘计算", "NPU"],
    "views": 6890,
    "publishTime": "10:00",
    "url": "https://www.qualcomm.com"
  },
  {
    "id": "1775644106",
    "slug": "news-20260409-6",
    "title": "YouTube 十大热门 AI 话题盘点：2026年最受关注的人工智能趋势",
    "summary": "从 GPT-5 到 AI Agent，从人形机器人到视频生成，梳理 YouTube 上最火的 10 个 AI 话题，附视频链接直达精彩内容。",
    "content": "",
    "category": "AI",
    "date": "2026-04-09",
    "readTime": "6 分钟",
    "author": "CloseAI 编辑",
    "tags": ["YouTube", "AI趋势", "视频推荐"],
    "views": 22456,
    "publishTime": "10:30",
    "url": "https://www.youtube.com"
  },
  {
    "id": "1775644107",
    "slug": "news-20260409-7",
    "title": "Claude 3.7 发布：Anthropic 的安全与能力平衡之道",
    "summary": "Anthropic 发布 Claude 3.7，在保持强大能力的同时，安全性测试准确率达 99.8%。",
    "content": "",
    "category": "AI",
    "date": "2026-04-09",
    "readTime": "8 分钟",
    "author": "CloseAI 深度分析",
    "tags": ["Claude", "Anthropic", "AI安全"],
    "views": 11234,
    "publishTime": "11:00",
    "url": "https://www.anthropic.com"
  },
  {
    "id": "1775644108",
    "slug": "news-20260409-8",
    "title": "Gemini 2.5 Pro：Google 的多模态反击",
    "summary": "Google 发布 Gemini 2.5 Pro，长上下文窗口达到 100万+ token，多模态能力大幅提升。",
    "content": "",
    "category": "AI",
    "date": "2026-04-09",
    "readTime": "9 分钟",
    "author": "CloseAI 深度分析",
    "tags": ["Gemini", "Google", "多模态"],
    "views": 9876,
    "publishTime": "11:30",
    "url": "https://deepmind.google"
  },
  {
    "id": "1775644109",
    "slug": "news-20260409-9",
    "title": "Figure AI 人形机器人进厂：2025 年量产在即",
    "summary": "Figure AI 与宝马达成合作，其人形机器人已进入工厂测试，计划 2025 年实现规模化量产。",
    "content": "",
    "category": "科技",
    "date": "2026-04-09",
    "readTime": "7 分钟",
    "author": "CloseAI 编辑",
    "tags": ["人形机器人", "Figure AI", "自动化"],
    "views": 18543,
    "publishTime": "12:00",
    "url": "https://www.figure.ai"
  },
  {
    "id": "1775644110",
    "slug": "news-20260409-10",
    "title": "Sora 视频生成公测：AI 电影时代来临？",
    "summary": "OpenAI 开放 Sora 视频生成工具公测，可生成 60 秒高清视频，影视行业或将迎来巨变。",
    "content": "",
    "category": "AI",
    "date": "2026-04-09",
    "readTime": "8 分钟",
    "author": "CloseAI 深度分析",
    "tags": ["Sora", "视频生成", "OpenAI"],
    "views": 25678,
    "publishTime": "12:30",
    "url": "https://openai.com/sora"
  }
]

// 历史热门新闻（Top 100）
export const historyNews: NewsItem[] = [
  { "id": "1775643001", "slug": "news-20260408-1", "title": "谷歌发布Gemini 2.0，性能全面超越GPT-4", "summary": "谷歌发布Gemini 2.0系列模型，在多项基准测试中实现全面超越。", "content": "", "category": "AI", "date": "2026-04-08", "readTime": "8 分钟", "author": "CloseAI", "tags": ["AI大模型", "Gemini", "谷歌"], "views": 125800, "url": "https://deepmind.google" },
  { "id": "1775643002", "slug": "news-20260408-2", "title": "苹果发布Apple Intelligence，打造设备端AI体验", "summary": "苹果在WWDC上正式发布Apple Intelligence，将AI能力深度整合到iOS、macOS中。", "content": "", "category": "科技", "date": "2026-04-08", "readTime": "7 分钟", "author": "CloseAI", "tags": ["苹果", "AI助手", "WWDC"], "views": 98600, "url": "https://apple.com" },
  { "id": "1775643003", "slug": "news-20260408-3", "title": "马斯克xAI发布Grok-2，开源最强AI助手", "summary": "马斯克的xAI团队发布Grok-2模型，宣布开源并开放API接口。", "content": "", "category": "AI", "date": "2026-04-08", "readTime": "6 分钟", "author": "CloseAI", "tags": ["开源模型", "Grok", "马斯克"], "views": 87600, "url": "https://x.ai" },
  { "id": "1775643004", "slug": "news-20260408-4", "title": "OpenAI推出Sora，AI视频生成进入新时代", "summary": "OpenAI发布Sora视频生成模型，能够根据文本描述生成60秒高清视频。", "content": "", "category": "AI", "date": "2026-04-08", "readTime": "9 分钟", "author": "CloseAI", "tags": ["视频生成", "Sora", "OpenAI"], "views": 156000, "url": "https://openai.com/sora" },
  { "id": "1775643005", "slug": "news-20260408-5", "title": "Anthropic发布Claude 3，超越GPT-4成为最强AI助手", "summary": "Anthropic发布Claude 3系列，在多项评测中超越GPT-4，树立新的行业标准。", "content": "", "category": "AI", "date": "2026-04-08", "readTime": "8 分钟", "author": "CloseAI", "tags": ["Claude", "AI助手", "Anthropic"], "views": 143200, "url": "https://anthropic.com" },
  { "id": "1775643006", "slug": "news-20260407-1", "title": "Meta发布LLaMA 3，开源大模型新标杆", "summary": "Meta发布LLaMA 3开源大模型，在多个基准上超越GPT-3.5。", "content": "", "category": "AI", "date": "2026-04-07", "readTime": "7 分钟", "author": "CloseAI", "tags": ["开源模型", "LLaMA", "Meta"], "views": 134000, "url": "https://llama.meta.com" },
  { "id": "1775643007", "slug": "news-20260407-2", "title": "GitHub Copilot正式发布，AI编程时代来临", "summary": "GitHub Copilot正式公开发布，成为全球首个规模化商用的AI编程工具。", "content": "", "category": "AI", "date": "2026-04-07", "readTime": "6 分钟", "author": "CloseAI", "tags": ["GitHub", "Copilot", "AI编程"], "views": 134000, "url": "https://github.com" },
  { "id": "1775643008", "slug": "news-20260407-3", "title": "诺贝尔物理学奖首次颁给AI领域科学家", "summary": "诺贝尔物理学奖授予机器学习先驱，标志着AI学科获得最高学术认可。", "content": "", "category": "科技", "date": "2026-04-07", "readTime": "5 分钟", "author": "CloseAI", "tags": ["AI荣誉", "诺贝尔", "学术"], "views": 134500, "url": "https://nobelprize.org" },
  { "id": "1775643009", "slug": "news-20260406-1", "title": "苹果Vision Pro发布，AI+AR开启新时代", "summary": "苹果发布Vision Pro头显设备，深度整合AI能力，开启空间计算时代。", "content": "", "category": "科技", "date": "2026-04-06", "readTime": "8 分钟", "author": "CloseAI", "tags": ["苹果", "AR/VR", "AI硬件"], "views": 112000, "url": "https://apple.com" },
  { "id": "1775643010", "slug": "news-20260406-2", "title": "DeepMind发布AlphaFold 3，预测所有生命分子结构", "summary": "DeepMind发布AlphaFold 3，能够预测蛋白质、DNA、RNA及其复合物结构。", "content": "", "category": "AI", "date": "2026-04-06", "readTime": "9 分钟", "author": "CloseAI", "tags": ["AI医疗", "AlphaFold", "DeepMind"], "views": 112300, "url": "https://deepmind.google" },
  { "id": "1775643011", "slug": "news-20260405-1", "title": "英伟达成为全球市值最高公司", "summary": "英伟达股价持续上涨，市值突破3万亿美元，成为全球市值最高的公司。", "content": "", "category": "科技", "date": "2026-04-05", "readTime": "5 分钟", "author": "CloseAI", "tags": ["英伟达", "股市", "里程碑"], "views": 145000, "url": "https://nvidia.com" },
  { "id": "1775643012", "slug": "news-20260405-2", "title": "OpenAI员工联名要求恢复Altman CEO职位", "summary": "OpenAI内部动荡，超过500名员工联名要求恢复Altman的CEO职位。", "content": "", "category": "科技", "date": "2026-04-05", "readTime": "6 分钟", "author": "CloseAI", "tags": ["OpenAI", "公司治理", "行业事件"], "views": 156000, "url": "https://openai.com" },
  { "id": "1775643013", "slug": "news-20260404-1", "title": "OpenAI发布DALL-E 3，AI图像生成进入新纪元", "summary": "OpenAI发布DALL-E 3，图像生成质量大幅提升，支持精细化控制。", "content": "", "category": "AI", "date": "2026-04-04", "readTime": "7 分钟", "author": "CloseAI", "tags": ["AI绘画", "DALL-E", "OpenAI"], "views": 98000, "url": "https://openai.com" },
  { "id": "1775643014", "slug": "news-20260404-2", "title": "黄仁勋GTC大会发布Blackwell架构", "summary": "英伟达CEO黄仁勋在GTC大会上发布Blackwell架构GPU，开启AI计算新纪元。", "content": "", "category": "科技", "date": "2026-04-04", "readTime": "8 分钟", "author": "CloseAI", "tags": ["英伟达", "GTC", "硬件"], "views": 89700, "url": "https://nvidia.com" },
  { "id": "1775643015", "slug": "news-20260403-1", "title": "OpenAI估值达900亿美元，成第三大独角兽", "summary": "OpenAI完成最新一轮融资，估值达900亿美元，仅次于字节跳动和SpaceX。", "content": "", "category": "AI", "date": "2026-04-03", "readTime": "5 分钟", "author": "CloseAI", "tags": ["OpenAI", "独角兽", "融资"], "views": 89000, "url": "https://openai.com" },
  { "id": "1775643016", "slug": "news-20260403-2", "title": "OpenAI推出Plugin插件系统，ChatGPT能力大扩展", "summary": "OpenAI为ChatGPT推出Plugin插件系统，赋予AI连接外部世界的能力。", "content": "", "category": "AI", "date": "2026-04-03", "readTime": "7 分钟", "author": "CloseAI", "tags": ["OpenAI", "ChatGPT", "插件"], "views": 89000, "url": "https://openai.com" },
  { "id": "1775643017", "slug": "news-20260402-1", "title": "GitHub Copilot X发布，AI编程能力再升级", "summary": "GitHub发布Copilot X，引入GPT-4支持，覆盖代码编写、调试、测试全流程。", "content": "", "category": "AI", "date": "2026-04-02", "readTime": "6 分钟", "author": "CloseAI", "tags": ["AI编程", "GitHub", "Copilot"], "views": 87600, "url": "https://github.com" },
  { "id": "1775643018", "slug": "news-20260402-2", "title": "马斯克xAI发布Grok-2，开源最强AI助手", "summary": "马斯克的xAI团队发布Grok-2模型，宣布开源并开放API接口。", "content": "", "category": "AI", "date": "2026-04-02", "readTime": "6 分钟", "author": "CloseAI", "tags": ["开源模型", "Grok", "马斯克"], "views": 87600, "url": "https://x.ai" },
  { "id": "1775643019", "slug": "news-20260401-1", "title": "通义千问开源Qwen2，性能全面提升", "summary": "阿里发布通义千问Qwen2开源版本，多项能力评测超越Llama 3。", "content": "", "category": "AI", "date": "2026-04-01", "readTime": "7 分钟", "author": "CloseAI", "tags": ["开源模型", "通义千问", "阿里"], "views": 78900, "url": "https://tongyi.aliyun.com" },
  { "id": "1775643020", "slug": "news-20260401-2", "title": "中国发布首个AI法规《生成式AI管理办法》", "summary": "中国网信办发布《生成式AI服务管理暂行办法》，成为全球首批AI监管法规。", "content": "", "category": "科技", "date": "2026-04-01", "readTime": "8 分钟", "author": "CloseAI", "tags": ["AI法规", "中国", "政策"], "views": 78900, "url": "https://cac.gov.cn" },
  { "id": "1775643021", "slug": "news-20260331-1", "title": "AI Agent产品AutoGPT用户量突破100万", "summary": "AutoGPT作为AI Agent先驱产品，用户量突破100万，成为热门开源项目。", "content": "", "category": "AI", "date": "2026-03-31", "readTime": "5 分钟", "author": "CloseAI", "tags": ["AI Agent", "AutoGPT", "开源"], "views": 92300, "url": "https://autogpt.com" },
  { "id": "1775643022", "slug": "news-20260331-2", "title": "开源Llama系列下载量突破1亿次", "summary": "Meta宣布开源Llama系列模型累计下载量突破1亿次，成为最受欢迎的开源模型。", "content": "", "category": "AI", "date": "2026-03-31", "readTime": "5 分钟", "author": "CloseAI", "tags": ["开源模型", "Llama", "Meta"], "views": 95200, "url": "https://llama.meta.com" },
  { "id": "1775643023", "slug": "news-20260330-1", "title": "AI Agent概念爆发，多家公司布局自主智能体", "summary": "2024年被业界称为AI Agent元年，多家科技巨头和创业公司竞相布局。", "content": "", "category": "AI", "date": "2026-03-30", "readTime": "8 分钟", "author": "CloseAI", "tags": ["AI Agent", "智能体", "趋势"], "views": 78900, "url": "https://techcrunch.com" },
  { "id": "1775643024", "slug": "news-20260330-2", "title": "谷歌发布Bard AI助手测试版", "summary": "谷歌发布Bard AI助手测试版，正式加入AI对话产品竞争。", "content": "", "category": "AI", "date": "2026-03-30", "readTime": "6 分钟", "author": "CloseAI", "tags": ["谷歌", "Bard", "AI助手"], "views": 78900, "url": "https://bard.google.com" },
  { "id": "1775643025", "slug": "news-20260329-1", "title": "Midjourney V7发布，AI绘画细节再创新高", "summary": "Midjourney发布V7版本，在图像细节、光影处理方面实现质的飞跃。", "content": "", "category": "AI", "date": "2026-03-29", "readTime": "6 分钟", "author": "CloseAI", "tags": ["AI绘画", "Midjourney", "创意"], "views": 67800, "url": "https://midjourney.com" },
  { "id": "1775643026", "slug": "news-20260329-2", "title": "波士顿动力发布Atlas机器人电动版", "summary": "波士顿动力发布Atlas全电动版人形机器人，动作灵活性大幅提升。", "content": "", "category": "科技", "date": "2026-03-29", "readTime": "7 分钟", "author": "CloseAI", "tags": ["人形机器人", "波士顿动力", "硬件"], "views": 67800, "url": "https://bostondynamics.com" },
  { "id": "1775643027", "slug": "news-20260328-1", "title": "字节跳动发布豆包大模型，主打高性价比", "summary": "字节跳动发布豆包大模型，主打低成本高性能，获得开发者广泛认可。", "content": "", "category": "AI", "date": "2026-03-28", "readTime": "6 分钟", "author": "CloseAI", "tags": ["国产大模型", "豆包", "字节跳动"], "views": 67800, "url": "https://doubao.com" },
  { "id": "1775643028", "slug": "news-20260328-2", "title": "Stable Diffusion 3开源，Stability AI发布最强版本", "summary": "Stability AI发布Stable Diffusion 3，引入全新架构，生成质量大幅提升。", "content": "", "category": "AI", "date": "2026-03-28", "readTime": "7 分钟", "author": "CloseAI", "tags": ["开源模型", "AI绘画", "Stability"], "views": 58900, "url": "https://stability.ai" },
  { "id": "1775643029", "slug": "news-20260327-1", "title": "Mistral开源Mixtral 8x7B，MoE架构引领潮流", "summary": "Mistral开源Mixtral 8x7B Mixture of Experts模型，以小博大性能出众。", "content": "", "category": "AI", "date": "2026-03-27", "readTime": "8 分钟", "author": "CloseAI", "tags": ["开源模型", "MoE", "Mistral"], "views": 67800, "url": "https://mistral.ai" },
  { "id": "1775643030", "slug": "news-20260327-2", "title": "AI音乐生成工具Suno估值达5亿美元", "summary": "AI音乐创作平台Suno完成B轮融资，估值达5亿美元，音乐产业迎来AI革命。", "content": "", "category": "AI", "date": "2026-03-27", "readTime": "5 分钟", "author": "CloseAI", "tags": ["AIGC", "音乐", "独角兽"], "views": 67800, "url": "https://suno.ai" }
]

// 合并所有新闻（用于兼容旧代码）
export const newsData: NewsItem[] = [...todayNews, ...historyNews]

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

// 格式化阅读量
export function formatViews(views: number): string {
  if (views >= 10000) {
    return (views / 10000).toFixed(1) + '万'
  }
  return views.toLocaleString()
}
