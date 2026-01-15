import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import Providers from './providers';

import '@/styles/globals.scss';
import 'antd/dist/reset.css';

export const metadata: Metadata = {
  title: 'Информационный портал',
  description:
    'frontend, development, web-development, frontend-developer, web',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body className="body">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
