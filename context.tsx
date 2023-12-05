'use client';

import { createContext, useEffect, useState } from 'react'

enum ThemeOptions {
  light = 'light',
  dark = 'dark',
}

type AppContextProviderType = {
  children: JSX.Element | JSX.Element[];
}

type AppContextType = {
  theme: ThemeOptions;
  toggleTheme: () => void;
} | null;

export const StoredThemeName = 'theme';
export const AppContext = createContext<AppContextType>(null);

export function AppContextProvider({ children }: AppContextProviderType) {
  const [theme, setTheme] = useState<ThemeOptions>(ThemeOptions.light);

  const toggleTheme = () => {
    if (theme === ThemeOptions.light) return setTheme(ThemeOptions.dark);
    return setTheme(ThemeOptions.light);
  }

  useEffect(() => {
    const appTheme = localStorage.getItem(StoredThemeName);
    const docElement = document.documentElement;
    const darkThemedMediaQuery = window.matchMedia('(perfers-color-scheme: dark)').matches;
    const themeSwitchBtn = document.querySelector('[data-switch-theme]') as HTMLButtonElement;

    if (appTheme === ThemeOptions.dark || !appTheme && darkThemedMediaQuery) {
      docElement.classList.add(ThemeOptions.dark);
      docElement.classList.remove(ThemeOptions.light);
      themeSwitchBtn.children[0].classList.add('hidden');
      themeSwitchBtn.children[1].classList.remove('hidden');
      setTheme(ThemeOptions.dark);
    } else {
      docElement.classList.add(ThemeOptions.light);
      docElement.classList.remove(ThemeOptions.dark);
      themeSwitchBtn.children[0].classList.remove('hidden');
      themeSwitchBtn.children[1].classList.add('hidden');
      setTheme(ThemeOptions.light);
    }
  }, [])

  useEffect(() => console.log({ isDarkMode: theme }), [theme])

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}