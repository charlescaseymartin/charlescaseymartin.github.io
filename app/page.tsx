import { Metadata } from 'next';
import Hero from '@/components/sections/home/hero';
import Services from '@/components/sections/home/services';

export const metadata: Metadata = {
  title: 'Home | Charles-Casey Martin Web Solutions',
  description: 'Charles-Casey Martin Web Solutions. Where your web identity is limited by your imagination!',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
    </main>
  )
}
