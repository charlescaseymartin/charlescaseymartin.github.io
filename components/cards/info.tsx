'use client';

import { useContext } from 'react';
import { AppThemeContext } from '@/app/context/themeContext';
import Paragraph from '../shared/paragraph';


type InfoCardType = {
  title: string;
  description: string;
  children: JSX.Element | JSX.Element[] | string;
}

export default function Info({ title, description, children }: InfoCardType) {
  const themeContext = useContext(AppThemeContext);
  const isDarkMode = themeContext && themeContext.isDarkMode;
  return (
    <div className='p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden'>
      <div className={`rounded-xl ${isDarkMode ? 'bg-gray-950' : 'bg-gray-300'} p-3 text-heading-1 w-max relative`}>
        {children}
      </div>
      <h2 className='md:text-xl font-semibold text-heading-2 mt-6 mb-4'>
        {title}
      </h2>
      <Paragraph>
        {description}
      </Paragraph>
    </div>
  )
}