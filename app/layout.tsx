import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

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
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                © 2026 CloseAI 360. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
