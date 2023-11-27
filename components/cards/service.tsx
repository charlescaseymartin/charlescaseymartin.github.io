'use client';

import { useContext } from 'react';
import Paragraph from '../shared/paragraph';
import { AppThemeContext } from '@/app/context/themeContext';

export type ServiceItemType = {
  title: string;
  description: string;
  icon: JSX.Element;
}

export default function Service({ title, description, icon }: ServiceItemType) {
  const themeContext = useContext(AppThemeContext);
  const isDarkMode = themeContext && themeContext.isDarkMode;

  return (
    <div className='p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden'>
      <div data-service-icon-bg className={`rounded-xl p-3 text-heading-1 w-max relative ${isDarkMode ? 'bg-gray-950' : 'bg-gray-300'}`}>
        {icon}
      </div>
      <div className='mt-6 space-y-4 relative'>
        <h2 className='text-lg md:text-xl font-semibold text-heading-2'>
          {title}
        </h2>
        <Paragraph>
          {description}
        </Paragraph>
      </div>
      <span className='absolute w-32 aspect-square -bottom-16 -right-16 bg-primary/10 rounded-full'></span>
    </div>
  )
}