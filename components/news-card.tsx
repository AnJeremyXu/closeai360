import Link from 'next/link'
import { NewsItem } from '@/data/news'

interface NewsCardProps {
  news: NewsItem
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="py-8 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
      <Link href={`/news/${news.slug}`} className="block group">
        {/* 标题 */}
        <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
          {news.title}
        </h2>
        
        {/* 简要内容 */}
        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4 line-clamp-2">
          {news.summary}
        </p>
        
        {/* 标签 */}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {news.tags.map((tag) => (
            <span 
              key={tag}
              className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              #{tag}
            </span>
          ))}
          <span className="text-gray-300 dark:text-gray-700">·</span>
          <span className="text-gray-400 dark:text-gray-600">{news.date}</span>
        </div>
      </Link>
    </article>
  )
}
