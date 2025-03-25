import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'
import { name, headline, introduction } from '@/config/infoConfig'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: `%s - ${name}`,
    default: `${name} - ${headline}`,
  },
  description: `${introduction}`,
  alternates: {
    canonical: '/',
  },
  // 设置 favicon
  icons: {
    icon: '/favicon-32x32.png', // 这里假设 favicon.ico 在 public 目录下
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
