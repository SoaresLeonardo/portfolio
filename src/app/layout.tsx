import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Leonardo - FullStack Developer Portfólio',
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
        <Header />
        {children}
      </body>
    </html>
  );
}
