import { NewsCard } from '@/components/news-card'
import { newsData } from '@/data/news'

export default function Home() {
  // 只取前5条新闻
  const recentNews = newsData.slice(0, 5)

  return (
    <div className="max-w-2xl mx-auto">
      {/* 网站标题 */}
      <header className="py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight">
          CloseAI 360
        </h1>
        <p className="text-gray-500 dark:text-gray-500 text-base">
          AI & 科技新闻
        </p>
      </header>

      {/* 新闻列表 */}
      <main>
        {recentNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </main>

      {/* 页脚 */}
      <footer className="py-12 text-center text-sm text-gray-400 dark:text-gray-600">
        <p>© 2026 CloseAI 360</p>
      </footer>
    </div>
  )
}
