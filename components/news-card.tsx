import Link from 'next/link'
import { NewsItem } from '@/data/news'
import { Calendar, Clock, Tag } from 'lucide-react'

interface NewsCardProps {
  news: NewsItem
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 overflow-hidden">
      <Link href={`/news/${news.slug}`}>
        <div className="p-6">
          {/* Category & Date */}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium">
              <Tag size={14} />
              {news.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar size={14} />
              {news.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock size={14} />
              {news.readTime}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {news.title}
          </h2>

          {/* Summary */}
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
            {news.summary}
          </p>

          {/* Read more */}
          <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:gap-2 transition-all">
            阅读全文
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  )
}
