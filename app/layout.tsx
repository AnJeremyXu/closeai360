import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CloseAI 360 - AI & 科技新闻',
  description: '聚焦人工智能与科技领域的最新资讯',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
