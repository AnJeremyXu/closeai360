'use client'

import { useState } from 'react'
import { todayNews, historyNews, formatViews } from '@/data/news'
import { Clock, Eye, ExternalLink, ChevronDown, ChevronUp, Newspaper, Lightbulb } from 'lucide-react'

export default function Home() {
  const [showHistory, setShowHistory] = useState(false)
  
  // 获取当前日期
  const today = new Date()
  const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`
  
  // 历史新闻按阅读量排序，取前100
  const sortedHistoryNews = [...historyNews]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 100)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="text-blue-600">CloseAI</span> 360
              </h1>
              <p className="text-sm text-gray-500 mt-1">每日精选 · AI与科技创新资讯</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{dateStr}</p>
              <p className="text-xs text-gray-500">今日更新</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* 统计信息 */}
        <div className="mb-6 flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Newspaper className="w-4 h-4" />
            共 {todayNews.length} 条新闻
          </span>
          <span className="flex items-center gap-1">
            <Lightbulb className="w-4 h-4" />
            AI相关 {todayNews.filter(n => n.tags.some(t => t.includes('AI') || t.includes('大模型'))).length} 条
          </span>
        </div>

        {/* 今日新闻列表 */}
        <div className="space-y-1">
          {todayNews.map((news, index) => (
            <article key={news.id} className="group border-b border-gray-100 py-5 last:border-0 hover:bg-gray-50/50 transition-colors px-4 -mx-4 rounded-lg">
              <div className="flex items-start gap-4">
                {/* 序号 */}
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 text-sm font-bold rounded">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                <div className="flex-1 min-w-0">
                  {/* 标题 */}
                  <h2 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    <a href={news.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {news.title}
                    </a>
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
                        <span key={tag} className="inline-block px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* 元信息 */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 ml-auto">
                      {news.publishTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {news.publishTime}
                        </span>
                      )}
                      {news.views !== undefined && (
                        <span className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" />
                          {formatViews(news.views)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* 外部链接图标 */}
                <ExternalLink className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors mt-1" />
              </div>
            </article>
          ))}
        </div>

        {/* 查看更多按钮 */}
        {!showHistory && (
          <div className="mt-8 text-center">
            <button 
              onClick={() => setShowHistory(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
            >
              <ChevronDown className="w-5 h-5" />
              查看更多资讯
            </button>
          </div>
        )}

        {/* 历史热门新闻 */}
        {showHistory && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">热门资讯 Top 100</h3>
              <button 
                onClick={() => {
                  setShowHistory(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ChevronUp className="w-4 h-4" />
                收起
              </button>
            </div>
            <div className="text-sm text-gray-500 mb-4">按访问量排序</div>
            
            <div className="space-y-1">
              {sortedHistoryNews.map((news, index) => {
                const rank = index + 1
                const isTop3 = rank <= 3
                
                return (
                  <article key={news.id} className="group border-b border-gray-100 py-4 last:border-0 hover:bg-gray-50/50 transition-colors px-4 -mx-4 rounded-lg">
                    <div className="flex items-start gap-4">
                      {/* 序号 - Top 3 橙色 */}
                      <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center text-sm font-bold rounded ${
                        isTop3 ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {rank}
                      </span>
                      
                      <div className="flex-1 min-w-0">
                        {/* 标题 */}
                        <h2 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          <a href={news.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {news.title}
                          </a>
                        </h2>
                        
                        {/* 简介 */}
                        <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                          {news.summary}
                        </p>
                        
                        {/* 标签和元信息 */}
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          {/* 标签 */}
                          <div className="flex flex-wrap gap-1.5">
                            {news.tags.map((tag) => (
                              <span key={tag} className="inline-block px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          {/* 元信息 */}
                          <div className="flex items-center gap-3 text-xs text-gray-400 ml-auto">
                            {news.publishTime && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {news.publishTime}
                              </span>
                            )}
                            {news.views !== undefined && (
                              <span className="flex items-center gap-1">
                                <Eye className="w-3.5 h-3.5" />
                                {formatViews(news.views)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          <p>每日早8点更新 · 精选全球科技与AI前沿资讯</p>
          <p className="mt-1">仅供学习交流，版权归原作者所有</p>
        </div>
      </footer>
    </div>
  )
}
