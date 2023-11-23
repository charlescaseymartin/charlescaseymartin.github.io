import type { Metadata } from 'next'
import Navbar from '@/components/elements/navbar'
import ThemeWrapper from '@/components/themeWrapper'
import './globals.css'

export const metadata: Metadata = {
  title: 'Home | Charles-Casey Martin',
  description: 'Charles-Casey Martin portfolio home page.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ThemeWrapper>
      <html lang='en'>
        <body className={`h-[100vh] overflow-hidden overflow-y-auto bg-body`}>
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeWrapper>
  )
}
