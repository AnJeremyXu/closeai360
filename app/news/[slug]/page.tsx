import { notFound } from 'next/navigation'
import { getNewsBySlug, newsData } from '@/data/news'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react'

interface NewsPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }))
}

export function generateMetadata({ params }: NewsPageProps) {
  const news = getNewsBySlug(params.slug)
  if (!news) {
    return {
      title: '文章未找到',
    }
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
    <article className="max-w-3xl mx-auto">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        返回首页
      </Link>

      {/* Header */}
      <header className="mb-8">
        {/* Category & Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
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
          <span className="inline-flex items-center gap-1">
            <User size={14} />
            {news.author}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {news.title}
        </h1>

        {/* Summary */}
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {news.summary}
        </p>
      </header>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {news.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {news.content.split('\n').map((paragraph, index) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2
                key={index}
                className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4"
              >
                {paragraph.replace('## ', '')}
              </h2>
            )
          }
          if (paragraph.startsWith('### ')) {
            return (
              <h3
                key={index}
                className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3"
              >
                {paragraph.replace('### ', '')}
              </h3>
            )
          }
          if (paragraph.startsWith('- ')) {
            return (
              <li key={index} className="text-gray-700 dark:text-gray-300 ml-4">
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
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft size={20} />
          返回首页
        </Link>
      </footer>
    </article>
  )
}
