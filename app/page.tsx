import { NewsCard } from '@/components/news-card'
import { newsData, getAllCategories } from '@/data/news'
import Link from 'next/link'

export default function Home() {
  const categories = getAllCategories()

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          探索 AI 与科技的
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            无限可能
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          CloseAI 360 聚焦人工智能与前沿科技，为您带来最新、最深入的科技资讯与洞察。
        </p>
      </section>

      {/* Category Filter */}
      <section className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Link
            key={category}
            href={category === '全部' ? '/' : `/category/${category.toLowerCase()}`}
            className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
          >
            {category}
          </Link>
        ))}
      </section>

      {/* News Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">最新资讯</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            共 {newsData.length} 篇文章
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </section>
    </div>
  )
}
