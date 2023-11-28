import { Metadata } from 'next';
import Hero from '@/components/sections/home/hero';
import Services from '@/components/sections/home/services';
import About from '@/components/sections/home/about';
import Features from '@/components/sections/home/features';
import CTA from '@/components/sections/home/cta';

export const metadata: Metadata = {
  title: 'Home | Charles-Casey Martin Web Solutions',
  description: 'Charles-Casey Martin Web Solutions. Where your web identity is limited by your imagination!',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Features />
      <CTA />
    </main>
  )
}
