import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/elements/navbar'
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
      <html lang='en'>
        <body className={`overflow-hidden overflow-y-auto bg-body`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
  )
}
