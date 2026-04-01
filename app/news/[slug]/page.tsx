import { notFound } from 'next/navigation'
import { getNewsBySlug, newsData } from '@/data/news'
import Link from 'next/link'

interface NewsPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return newsData.slice(0, 5).map((news) => ({
    slug: news.slug,
  }))
}

export function generateMetadata({ params }: NewsPageProps) {
  const news = getNewsBySlug(params.slug)
  if (!news) {
    return { title: '文章未找到' }
  }
  return {
    title: `${news.title} - CloseAI 360`,
    description: news.summary,
  }
}

export default function NewsPage({ params }: NewsPageProps) {
  const news = getNewsBySlug(params.slug)

  if (!news) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      {/* 返回链接 */}
      <div className="py-8">
        <Link 
          href="/" 
          className="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          ← 返回
        </Link>
      </div>

      {/* 文章标题 */}
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-snug mb-4">
          {news.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-500">
          <span>{news.date}</span>
          <span>·</span>
          <span>{news.readTime}</span>
        </div>
      </header>

      {/* 文章内容 */}
      <article className="prose prose-gray dark:prose-invert max-w-none">
        {news.content.split('\n').map((paragraph, index) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2
                key={index}
                className="text-xl font-semibold text-gray-900 dark:text-white mt-10 mb-4"
              >
                {paragraph.replace('## ', '')}
              </h2>
            )
          }
          if (paragraph.startsWith('### ')) {
            return (
              <h3
                key={index}
                className="text-lg font-medium text-gray-900 dark:text-white mt-6 mb-3"
              >
                {paragraph.replace('### ', '')}
              </h3>
            )
          }
          if (paragraph.startsWith('- ')) {
            return (
              <li key={index} className="text-gray-700 dark:text-gray-300 ml-4 mb-2">
                {paragraph.replace('- ', '')}
              </li>
            )
          }
          if (paragraph.trim() === '') {
            return null
          }
          return (
            <p
              key={index}
              className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          )
        })}
      </article>

      {/* 标签 */}
      <div className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-gray-200 dark:border-gray-800">
        {news.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm text-gray-500 dark:text-gray-500"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 页脚 */}
      <footer className="py-12 text-center text-sm text-gray-400 dark:text-gray-600">
        <p>© 2026 CloseAI 360</p>
      </footer>
    </div>
  )
}
