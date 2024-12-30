import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AlterMindAI',
  description: 'Empowering businesses with AI solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen pt-24 md:pt-28">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
} 