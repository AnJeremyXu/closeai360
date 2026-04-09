'use client'

import { useState } from 'react'
import { NewsCard } from '@/components/news-card'
import { todayNews, historyNews } from '@/data/news'
import { ChevronDown, ChevronUp } from 'lucide-react'

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
    <div className="max-w-3xl mx-auto px-4">
      {/* 顶部导航 */}
      <header className="py-8 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">
            CloseAI 360
          </h1>
          <span className="text-sm text-gray-500">{dateStr}</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          每日精选 AI & 科技资讯
        </p>
      </header>

      {/* 今日新闻 */}
      <section className="py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">今日热点</h2>
          <span className="text-sm text-gray-400">{todayNews.length} 篇</span>
        </div>
        <div className="divide-y divide-gray-100">
          {todayNews.map((news, index) => (
            <NewsCard 
              key={news.id} 
              news={news} 
              index={index}
              showRank={true}
            />
          ))}
        </div>
      </section>

      {/* 查看更多 */}
      <section className="py-4 border-t border-gray-100">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="w-full py-3 flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
        >
          {showHistory ? (
            <>
              <ChevronUp className="w-4 h-4" />
              收起历史新闻
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              查看更多历史热门（Top 100）
            </>
          )}
        </button>
        
        {/* 历史新闻列表 */}
        {showHistory && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">历史热门</h2>
              <span className="text-sm text-gray-400">Top 100</span>
            </div>
            <div className="divide-y divide-gray-100">
              {sortedHistoryNews.map((news, index) => (
                <NewsCard 
                  key={news.id} 
                  news={news} 
                  index={index}
                  showRank={true}
                  isHistory={true}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 页脚 */}
      <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100">
        <p>© 2026 CloseAI 360 · 每日更新 AI & 科技资讯</p>
      </footer>
    </div>
  )
}
