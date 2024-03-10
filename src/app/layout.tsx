import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import AnimationScroll from '../components/ui/animation-scroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Leonardo Henrique - Web Developer',
  description:
    'E aí! Sou o Leonardo, um FullStack Developer animado para te mostrar o que eu sei fazer. Navegue pelo meu portfólio para conferir as minhas habilidades.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <AnimationScroll />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
