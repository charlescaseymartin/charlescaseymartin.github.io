'use client';

import { useContext, useEffect, useState } from 'react';
import NavItem from '../shared/navItem';
import Container from '../shared/container';
import BtnLink, { BtnLinkVariant } from '../shared/btnLink';
import Logo from '../shared/logo';
import { AppThemeContext } from '@/app/context/themeContext';

type NavbarLinkBaseType = {
  text: string;
  href: string;
}

enum AppThemeModes {
  light = 'light',
  dark = 'dark',
}

export default function Navbar() {
  const routes: NavbarLinkBaseType[] = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Projects', href: '/projects' },
    { text: 'Blog', href: '/blog' },
  ]
  const [windowDoc, setWindowDoc] = useState<Document>();
  const themeContext = useContext(AppThemeContext);
  const appThemeStorgeItem = 'appTheme';


  useEffect(() => { if (document) setWindowDoc(document) }, []);

  const onToggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const appTheme = localStorage.getItem(appThemeStorgeItem);
    if (windowDoc && themeContext) {
      const { toggleDarkMode } = themeContext;
      const docElement = windowDoc.documentElement;
      const themeSwitch = document.querySelector('[data-switch-theme]') as HTMLButtonElement;
      themeSwitch.children[0].classList.toggle('hidden');
      themeSwitch.children[1].classList.toggle('hidden');

      if (appTheme && appTheme === AppThemeModes.light) {
        docElement.classList.toggle(AppThemeModes.dark);
        localStorage.setItem(appThemeStorgeItem, AppThemeModes.dark);
        toggleDarkMode(true);
      }
      if (appTheme && appTheme === AppThemeModes.dark) {
        docElement.classList.toggle(AppThemeModes.dark);
        localStorage.setItem(appThemeStorgeItem, AppThemeModes.light);
        toggleDarkMode(false);
      }
      if (!appTheme && docElement.classList.contains(AppThemeModes.dark)) {
        docElement.classList.toggle(AppThemeModes.dark);
        localStorage.setItem(appThemeStorgeItem, AppThemeModes.light);
        toggleDarkMode(false);
      }
      if (!appTheme && !docElement.classList.contains(AppThemeModes.light)) {
        docElement.classList.toggle(AppThemeModes.light);
        localStorage.setItem(appThemeStorgeItem, AppThemeModes.dark);
        toggleDarkMode(true);
      }
    }
  }

  const onToggleMobileNavbar = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const mobileMenuBtn = event.currentTarget;
    const mobileNavIsOpen = mobileMenuBtn.getAttribute('data-open-nav') === 'false' ? false : true;
    const navbar = document.querySelector('[data-navbar]') as HTMLDivElement;
    const navOverlay = document.querySelector('[data-nav-overlay]') as HTMLDivElement;
    navbar.classList.toggle('mt-5');

    if (!mobileNavIsOpen) {
      mobileMenuBtn.setAttribute('data-open-nav', 'true');
      navOverlay.setAttribute('data-is-visible', 'true');
      navbar.style.height = `${navbar.scrollHeight}px`;
    }

    if (mobileNavIsOpen) {
      mobileMenuBtn.setAttribute('data-open-nav', 'false');
      navOverlay.setAttribute('data-is-visible', 'false');
      navbar.style.height = '0px';
    }
  }

  const closeMobileNavbar = () => {
    const mobileNavBtn = document.querySelector('[data-toggle-nav]') as HTMLButtonElement;
    const mobileNavOverlay = document.querySelector('[data-nav-overlay]') as HTMLDivElement;
    const mobileNav = document.querySelector('[data-navbar]') as HTMLDivElement;
    if (mobileNav && mobileNav.style.height === '0px') return;
    if (mobileNav) mobileNav.style.height = '0px';
    if (mobileNavBtn) mobileNavBtn.setAttribute('data-open-nav', 'false');
    if (mobileNavOverlay) mobileNavOverlay.setAttribute('data-is-visible', 'false');
  }

  return (
    <header className='absolute inset-x-0 top-0 z-50 py-6'>
      <Container>
        <nav className='w-full flex justify-between gap-6 relative'>
          <div className='min-w-max inline-flex relative'>
            <Logo />
          </div>

          <div data-nav-overlay onClick={closeMobileNavbar} aria-hidden='true' className='fixed hidden inset-0 lg:!hidden bg-box-bg bg-opacity-50 backdrop-filter backdrop-blur-xl' />
          <div data-navbar onClick={closeMobileNavbar} className='flex h-0 overflow-hidden lg:!h-auto lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0'>
            <ul className='border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-8 text-lg text-heading-2 w-full lg:justify-center lg:items-center'>
              {routes.map((route, idx) => <NavItem key={`${idx}-${route.text}`} {...route} />)}
            </ul>
            <BtnLink text='Contact Me' href='/contact' className='flex justify-center w-full sm:w-max' />
          </div>


          <div className='min-w-max flex items-center gap-x-3'>
            <button data-switch-theme onClick={onToggleTheme} className='outline-none flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z' />
              </svg>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 hidden'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' />
              </svg>
              <span className='sr-only'>switch theme</span>
            </button>

            <button data-toggle-nav data-open-nav='false' onClick={onToggleMobileNavbar} className='lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative'>
              <span id='line1' className='w-6 h-0.5 rounded-full bg-heading-2 transition-all duration-300 ease-linear' />
              <span id='line2' className='w-6 origin-center  mt-1 h-0.5 rounded-ful bg-heading-2 transition-all duration-300 ease-linear' />
              <span id='line3' className='w-6 mt-1 h-0.5 rounded-ful bg-heading-2 transition-all duration-300 ease-linear' />
              <span className='sr-only'>togglenav</span>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  )
}