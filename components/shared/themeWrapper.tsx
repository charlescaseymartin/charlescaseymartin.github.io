'use client';

import { useEffect } from 'react';

type ThemeWrapperType = {
  children: JSX.Element;
}

export default function ThemeWrapper({ children }: ThemeWrapperType) {
  
  useEffect(() => {
    const appTheme = localStorage.getItem('appTheme');
    const docElement = document.documentElement;
    const themeSwitchBtn = document.querySelector('[data-switch-theme]') as HTMLButtonElement;
    if(appTheme === 'dark' || !appTheme && window.matchMedia('(perfers-color-scheme: dark)').matches) {
      docElement.classList.add('dark');
      themeSwitchBtn.children[0].classList.toggle('hidden');
      themeSwitchBtn.children[1].classList.toggle('hidden');
    } else {
      docElement.classList.remove('dark');
      themeSwitchBtn.children[0].classList.toggle('hidden');
      themeSwitchBtn.children[1].classList.toggle('hidden');
    }
  }, [])

  return <>{children}</>
}