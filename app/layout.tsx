'use client';

import './globals.css'
import Navbar from '@/components/elements/navbar'
import Footer from '@/components/elements/footer'
import { AppContext, AppContextProvider } from '../context'
import { useContext } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const appContext = useContext(AppContext);
  const theme = appContext ? appContext.theme : '';
  return (
    <AppContextProvider>
      <html lang='en' className='h-full antialiased light' style={{ colorScheme: theme }}>
        <body className='overflow-hidden overflow-y-auto bg-body'>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </AppContextProvider>
  )
}
