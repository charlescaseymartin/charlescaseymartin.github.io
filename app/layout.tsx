import type { Metadata } from 'next'
import Navbar from '@/components/elements/navbar'
import ThemeWrapper from '@/components/shared/themeWrapper'
import './globals.css'
import Footer from '@/components/elements/footer'

export const metadata: Metadata = {
  title: 'Charles-Casey Martin Web Solutions',
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
        <body className={`overflow-hidden overflow-y-auto bg-body`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeWrapper>
  )
}
