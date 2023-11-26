import { createContext, useEffect, useState } from 'react'

enum ThemeOption {
  light = 'light',
  dark = 'dark',
}

type ThemeContextProviderType = {
  children: JSX.Element | JSX.Element[];
}

type AppThemeContextType = {
  theme: ThemeOption;
  toggleTheme: (value: ThemeOption) => void;
} | undefined;

const AppThemeContext = createContext<AppThemeContextType>(undefined);

export function ThemeContextProvider({ children }: ThemeContextProviderType) {
  const [theme, setTheme] = useState(ThemeOption.light);

  const toggleTheme = (newTheme: ThemeOption) => {
    setTheme(newTheme);
  }

  useEffect(() => {
    const appTheme = localStorage.getItem('appTheme');
    const docElement = document.documentElement;
    const themeSwitchBtn = document.querySelector('[data-switch-theme]') as HTMLButtonElement;

    if (appTheme === 'dark' || !appTheme && window.matchMedia('(perfers-color-scheme: dark)').matches) {
      docElement.classList.add('dark');
      themeSwitchBtn.children[0].classList.add('hidden');
      themeSwitchBtn.children[1].classList.remove('hidden');
    } else {
      docElement.classList.remove('dark');
      themeSwitchBtn.children[0].classList.remove('hidden');
      themeSwitchBtn.children[1].classList.add('hidden');
    }
  }, [])

  useEffect(() => console.log({ theme }), [theme])

  useEffect(() => {
    // const footer = document.querySelector('[data-footer]');
    console.log({ footer: theme })
    // if (footer) {
    //   console.log({ footer })
    //   if (theme) {
    //     footer.classList.add('from-gray-900');
    //     footer.classList.remove('from-gray-100');
    //     footer.classList.remove('to-gray-200');
    //   } else {
    //     footer.classList.remove('from-gray-900');
    //     footer.classList.add('from-gray-100');
    //     footer.classList.add('to-gray-200');
    //   }
    // }
  }, [theme])

  return (
    <AppThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppThemeContext.Provider>
  )
}