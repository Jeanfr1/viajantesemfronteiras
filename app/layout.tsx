import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBarDemo } from '@/components/navbar-demo';
import { Footer } from '@/components/ui/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Viajantes Sem Fronteiras',
  description: 'Sua jornada para uma vida internacional começa aqui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <NavBarDemo />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}