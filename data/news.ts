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
    id: '1',
    slug: 'openai-gpt-5-announcement',
    title: 'OpenAI 宣布 GPT-5 将于年底发布，性能提升 10 倍',
    summary: 'OpenAI 首席执行官 Sam Altman 在最新发布会上透露，GPT-5 预计将在 2026 年底正式发布。新模型在推理能力、多模态处理和代码生成方面都有显著提升，参数规模将达到万亿级别。',
    content: `
OpenAI 首席执行官 Sam Altman 在昨日举行的开发者大会上正式宣布，备受期待的 GPT-5 模型预计将在 2026 年底正式发布。

## 主要升级亮点

### 1. 推理能力大幅提升
GPT-5 在复杂推理任务上的表现预计比 GPT-4 提升 10 倍以上。新模型采用了全新的架构设计，能够更好地处理多步骤逻辑推理和抽象思维任务。

### 2. 多模态能力增强
除了文本处理，GPT-5 将原生支持图像、音频、视频的理解和生成。用户可以直接上传视频文件，让 AI 分析内容并生成摘要。

### 3. 代码生成能力
在编程辅助方面，GPT-5 的代码准确率和上下文理解能力都有显著提升。测试显示，在 HumanEval 基准测试中达到了 92% 的通过率。

## 发布时间线

- **2026 Q3**: 开发者预览版
- **2026 Q4**: 正式版发布
- **2027**: 企业级 API 全面开放

Altman 表示，GPT-5 的训练成本虽然高昂，但 OpenAI 致力于让 AI 技术惠及更多人，预计 API 价格将比 GPT-4 降低 50%。
    `,
    category: 'AI',
    date: '2026-04-01',
    readTime: '5 分钟',
    author: 'CloseAI 编辑',
    tags: ['OpenAI', 'GPT-5', '大模型']
  },
  {
    id: '2',
    slug: 'apple-ai-chip-m5',
    title: '苹果 M5 芯片曝光：专为 AI 计算优化的下一代处理器',
    summary: '据供应链消息，苹果正在研发 M5 系列芯片，将首次集成专用的神经网络引擎（NNE），AI 算力预计提升 300%。新芯片将采用 2nm 工艺，能效比大幅提升。',
    content: `
据知名分析师郭明錤最新报告，苹果 M5 系列芯片已经进入最后测试阶段，预计将在 2027 年初随新款 MacBook Pro 一同发布。

## 技术规格

### 制程工艺
M5 将采用台积电最新的 2nm 工艺，晶体管密度比 M4 提升 40%，功耗降低 35%。

### AI 专用核心
- 16 核神经网络引擎
- 算力达 100 TOPS
- 支持 INT8/FP16/FP32 混合精度

### CPU & GPU
- 最高 16 核 CPU（12 性能核 + 4 能效核）
- 40 核 GPU
- 支持光线追踪硬件加速

## 市场影响

M5 芯片的发布将进一步巩固苹果在 AI PC 市场的领先地位。分析师预测，搭载 M5 的 Mac 设备在本地 AI 推理性能上将超越大多数独立显卡。
    `,
    category: '科技',
    date: '2026-03-31',
    readTime: '4 分钟',
    author: '科技观察员',
    tags: ['苹果', 'M5', '芯片', 'AI']
  },
  {
    id: '3',
    slug: 'google-deepmind-alphafold-3',
    title: 'DeepMind 发布 AlphaFold 3：蛋白质结构预测新突破',
    summary: 'Google DeepMind 发布 AlphaFold 3，不仅能够预测蛋白质结构，还可以模拟 DNA、RNA 和小分子的相互作用。这一突破将加速新药研发和基因治疗研究。',
    content: `
Google DeepMind 团队在《自然》杂志发表论文，正式推出 AlphaFold 3，这是人工智能在生命科学领域的又一重大突破。

## 核心能力

### 多分子预测
AlphaFold 3 可以同时预测：
- 蛋白质-蛋白质相互作用
- 蛋白质-DNA 结合
- 蛋白质-RNA 复合物
- 小分子药物结合位点

### 准确率提升
在 CASP15 基准测试中，AlphaFold 3 的 GDT 分数达到 92.4，比前代提升 8 个百分点。

## 应用前景

### 药物研发
制药公司可以利用 AlphaFold 3 快速筛选候选药物，将新药研发周期从 10-15 年缩短至 5-8 年。

### 基因治疗
精准预测基因编辑工具与 DNA 的相互作用，提高 CRISPR 等技术的安全性和有效性。

DeepMind 已将 AlphaFold 3 开源，供全球科研人员免费使用。
    `,
    category: 'AI',
    date: '2026-03-30',
    readTime: '6 分钟',
    author: '生物科技编辑',
    tags: ['DeepMind', 'AlphaFold', '生物科技']
  },
  {
    id: '4',
    slug: 'tesla-robotaxi-launch',
    title: '特斯拉 Robotaxi 正式上路：无人驾驶出租车时代来临',
    summary: '特斯拉宣布 Robotaxi 服务在奥斯汀和旧金山正式运营。首批 100 辆 Model Y 无人驾驶出租车已投入服务，用户可通过 App 一键叫车，价格仅为 Uber 的一半。',
    content: `
特斯拉 CEO 埃隆·马斯克今日宣布，备受期待的 Robotaxi 无人驾驶出租车服务正式在美国奥斯汀和旧金山两地启动运营。

## 运营详情

### 服务范围
- **奥斯汀**: 市中心及周边 50 公里范围
- **旧金山**: 湾区核心区域

### 车辆配置
- 100 辆定制版 Model Y
- 完全移除方向盘和踏板
- 车内配备 15 英寸娱乐屏幕

### 价格策略
- 起步价：$2.99
- 每英里：$0.85
- 比传统网约车便宜约 50%

## 安全保障

特斯拉表示，Robotaxi 配备了多重冗余系统：
- 8 个摄像头 360 度感知
- 双 FSD 芯片热备份
- 远程监控中心实时接管

目前，运营车辆仍配备安全员，预计 6 个月后实现完全无人化运营。
    `,
    category: '科技',
    date: '2026-03-29',
    readTime: '5 分钟',
    author: '汽车科技编辑',
    tags: ['特斯拉', 'Robotaxi', '自动驾驶']
  },
  {
    id: '5',
    slug: 'meta-llama-4-release',
    title: 'Meta 发布 Llama 4：开源大模型新标杆',
    summary: 'Meta 正式发布 Llama 4 系列模型，包含 8B、70B 和 400B 三个版本。其中 400B 版本在多项基准测试中超越 GPT-4，且完全开源可商用。',
    content: `
Meta AI 今日正式发布 Llama 4 系列大语言模型，这是目前最强大的开源大模型。

## 模型规格

### Llama 4 8B
- 适合端侧部署
- 可在手机本地运行
- 性能媲美 GPT-3.5

### Llama 4 70B
- 企业级应用首选
- 支持 128K 上下文
- 多语言能力强悍

### Llama 4 400B
- 旗舰版本
- 在 MMLU 基准上超越 GPT-4
- 支持多模态输入

## 开源策略

Meta 延续了开源传统：
- 权重完全开放下载
- 允许商业使用
- 提供详细技术报告

扎克伯格表示："开源 AI 是推动技术进步的必由之路。"
    `,
    category: 'AI',
    date: '2026-03-28',
    readTime: '4 分钟',
    author: '开源社区编辑',
    tags: ['Meta', 'Llama', '开源']
  },
  {
    id: '6',
    slug: 'spacex-starship-mars',
    title: 'SpaceX 星舰成功完成首次载人火星任务模拟',
    summary: 'SpaceX 宣布星舰成功完成为期 30 天的载人火星任务模拟测试。4 名宇航员在模拟火星环境中完成了全部预定任务，为 2028 年载人火星任务奠定基础。',
    content: `
SpaceX 今日宣布，星舰载人火星任务模拟测试取得圆满成功。这是人类历史上最长时间、最真实的火星任务模拟。

## 测试详情

### 参与人员
- 4 名宇航员（2 男 2 女）
- 来自 NASA、ESA、JAXA
- 平均年龄在 35-42 岁

### 模拟环境
- 完全封闭的星舰生活舱
- 模拟火星重力（0.38g）
- 火星土壤和大气环境

### 测试任务
- 火星表面 EVA 模拟
- 种植实验（土豆、生菜）
- 设备维护与修理
- 心理评估测试

## 里程碑意义

马斯克表示，这次测试验证了星舰的生命支持系统可以支持长期深空任务。下一步将在 2027 年进行无人火星着陆测试。
    `,
    category: '科技',
    date: '2026-03-27',
    readTime: '7 分钟',
    author: '航天编辑',
    tags: ['SpaceX', '星舰', '火星']
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
