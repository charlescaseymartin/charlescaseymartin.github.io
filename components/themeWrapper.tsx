'use client';

import { useEffect } from "react";

type ThemeWrapperType = {
  children: JSX.Element;
}

export default function ThemeWrapper({ children }: ThemeWrapperType) {
  
  useEffect(() => {
    const appTheme = localStorage.getItem('appTheme');
    const docElement = document.documentElement;
    if(appTheme === 'dark' || !appTheme && window.matchMedia('(perfers-color-scheme: dark)').matches) {
      docElement.classList.add('dark')
    } else {
      docElement.classList.remove('dark');
    }
  }, [])

  return <>{children}</>
}