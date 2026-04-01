import { NewsCard } from '@/components/news-card'
import { newsData } from '@/data/news'
import Link from 'next/link'

export default function Home() {
  // 分离新闻和AI实践
  const news = newsData.filter(item => item.category !== 'AI实践').slice(0, 5)
  const practices = newsData.filter(item => item.category === 'AI实践').slice(0, 5)

  return (
    <div className="max-w-2xl mx-auto px-4">
      {/* 网站标题 */}
      <header className="py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight">
          CloseAI 360
        </h1>
        <p className="text-gray-500 dark:text-gray-500 text-base">
          AI & 科技新闻 · AI实践场景
        </p>
      </header>

      {/* 新闻板块 */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">最新资讯</h2>
          <span className="text-sm text-gray-400 dark:text-gray-600">{news.length} 篇</span>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </section>

      {/* AI实践板块 */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">AI实践场景</h2>
          <span className="text-sm text-gray-400 dark:text-gray-600">{practices.length} 篇</span>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {practices.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 text-center text-sm text-gray-400 dark:text-gray-600 border-t border-gray-100 dark:border-gray-800">
        <p>© 2026 CloseAI 360</p>
      </footer>
    </div>
  )
}
