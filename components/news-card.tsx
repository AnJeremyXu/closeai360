'use client'

import Link from 'next/link'
import { NewsItem, formatViews } from '@/data/news'
import { ExternalLink } from 'lucide-react'

interface NewsCardProps {
  news: NewsItem
  index?: number
  showRank?: boolean
  isHistory?: boolean
}

export function NewsCard({ news, index, showRank = false, isHistory = false }: NewsCardProps) {
  const rank = index !== undefined ? index + 1 : 0
  const isTop3 = isHistory && rank <= 3
  
  return (
    <article className="group border-b border-gray-100 py-5 last:border-0 hover:bg-gray-50/50 transition-colors px-4 -mx-4 rounded-lg">
      <div className="flex items-start gap-4">
        {/* 序号 */}
        {showRank && (
          <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-bold rounded ${
            isTop3 
              ? 'bg-orange-100 text-orange-600' 
              : 'bg-blue-100 text-blue-600'
          }`}>
            {String(rank).padStart(2, '0')}
          </span>
        )}
        
        <div className="flex-1 min-w-0">
          {/* 标题 */}
          <h2 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
            {news.url ? (
              <a 
                href={news.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-2"
              >
                {news.title}
                <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ) : (
              <Link href={`/news/${news.slug}`} className="hover:underline">
                {news.title}
              </Link>
            )}
          </h2>
          
          {/* 简介 */}
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            {news.summary}
          </p>
          
          {/* 标签和元信息 */}
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {/* 标签 */}
            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* 分隔符 */}
            <span className="text-gray-300">·</span>
            
            {/* 发布时间 */}
            {news.publishTime && (
              <span className="text-xs text-gray-400">{news.publishTime}</span>
            )}
            
            {/* 阅读量 */}
            {news.views !== undefined && (
              <>
                <span className="text-gray-300">·</span>
                <span className="text-xs text-gray-400">{formatViews(news.views)} 阅读</span>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
