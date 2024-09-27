import type { Metadata } from 'next';
import './globals.css';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Брендовые кроссовки',
  description: 'Магазин брендовых кроссовок по низким ценам',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <main className='min-h-screen'>{children}</main>
      </body>
    </html>
  );
}
