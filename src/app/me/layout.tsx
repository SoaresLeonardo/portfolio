import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre | Leonardo Henrique',
  description:
    'E aí! Sou o Leonardo, um FullStack Developer animado para te mostrar o que eu sei fazer. Navegue pelo meu portfólio para conferir as minhas habilidades.'
};

export default function LayoutAbout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
