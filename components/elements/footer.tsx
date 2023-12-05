'use client';

import { useContext, useEffect } from 'react';
import Link from 'next/link';
import GroupFooterNav from '../blocks/groupFooterNav';
import Container from '../shared/container';
import FooterNav, { FooterNavItem } from '../shared/footerNav';
import Paragraph from '../shared/paragraph';
import Logo from '../shared/logo';
import { AppContext } from '@/context';


const footerNav1: FooterNavItem[] = [
  { text: 'Marketing', href: '#' },
  { text: 'Analylitics', href: '#' },
  { text: 'Commerce', href: '#' },
  { text: 'Insights', href: '#' }
]

const footerSupport: FooterNavItem[] = [
  { text: 'Pricing', href: '#' },
  { text: 'Guides', href: '#' },
  { text: 'FAQ', href: '#' },
  { text: 'Contact', href: '#' }
]

const footerCompany: FooterNavItem[] = [
  { text: 'About', href: '/about' },
  { text: 'Blog', href: '#' },
  { text: 'Jobs', href: '#' },
  { text: 'Parteners', href: '#' },
  { text: 'Jobs', href: '#' }
]
const footerLegal: FooterNavItem[] = [
  { text: 'Claim', href: '/#' },
  { text: 'Privacy', href: '#' },
  { text: 'Terms', href: '#' }
]


export default function Footer() {
  const appContext = useContext(AppContext);
  const isDarkTheme = appContext && appContext.isDarkTheme;

  useEffect(() => {
    const footer = document.querySelector('[data-footer]');
    if (footer) {
      if (isDarkTheme) {
        footer.classList.add('from-gray-900');
        footer.classList.remove('from-gray-100');
        footer.classList.remove('to-gray-200');
      } else {
        footer.classList.remove('from-gray-900');
        footer.classList.add('from-gray-100');
        footer.classList.add('to-gray-200');
      }
    }
  }, [isDarkTheme])

  return (
    <footer data-footer className='relative mt-16 bg-gradient-to-tr from-gray-100 to-gray-200 pt-28 rounded-t-3xl md:mt-20'>
      <div className='absolute right-0 top-0 h-full w-full flex justify-end'>
        <div className='w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl'>
          <span className='absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45'/>
          <span className='absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45'/>
        </div>
      </div>

      <div className='absolute left-0 bottom-0 h-full w-full flex items-end'>
        <div className='w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl'>
          <span className='absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45'/>
          <span className='absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45'/>
        </div>
      </div>
      <Container className='pb-8 relative overflow-hidden'>

        <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-2xl opacity-20 w-24 h-16 sm:w-48 sm:h-36 rounded-full rotate-12 skew-x-6 bg-primary'/>
        <div className='grid grid-cols-2 lg:grid-cols-3 lg:items-stretch gap-8 relative'>
          <div className='col-span-2 lg:col-span-1 h-auto flex flex-col'>
            <div className='h-full'>
              <Logo />
              <Paragraph className={'mt-8'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, maiores nam doloribus id magni
              </Paragraph>
            </div>

            <div className='min-h-max flex items-center gap-4 text-heading-3 mt-8'>
              <Link href='#' className='transition hover:text-heading-1 hover:scale-105'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='w-5 h-5' viewBox='0 0 16 16'>
                  <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                </svg>
                <span className='sr-only'>social link</span>
              </Link>

              <Link href='#' className='transition hover:text-heading-1 hover:scale-105'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='w-5 h-5' viewBox='0 0 16 16'>
                  <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
                </svg>
                <span className='sr-only'>social link</span>
              </Link>

              <Link href='#' className='transition hover:text-heading-1 hover:scale-105'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='w-5 h-5' viewBox='0 0 16 16'>
                  <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                </svg>
                <span className='sr-only'>social link</span>
              </Link>

              <Link href='#' className='transition hover:text-heading-1 hover:scale-105'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='w-5 h-5' viewBox='0 0 16 16'>
                  <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                </svg>
                <span className='sr-only'>social link</span>
              </Link>
            </div>
          </div>

          <GroupFooterNav>
            <FooterNav title={'Company'} navItems={footerCompany} />
            <FooterNav title={'Solutions'} navItems={footerNav1} />
          </GroupFooterNav>

          <GroupFooterNav>
            <FooterNav title={'Support'} navItems={footerSupport} />
            <FooterNav title={'Reasources'} navItems={footerLegal} />
          </GroupFooterNav>

        </div>
      </Container>
      <div className=' bg-gradient-to-tl from-box-bg py-2 relative'>
        <Container>
          <div className='flex justify-center items-center md:text-lg text-heading-3'>
            <div>
              &copy; <span id='year'/> charlescaseymartin. All right reserved
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}