import { ExternalLink } from 'lucide-react';

const Header = () => {
  const links = {
    navigation: [
      {
        name: 'Sobre',
        href: '/me'
      },
      {
        name: 'Projetos',
        href: '/projects'
      },
      {
        name: 'Contato',
        href: '/contact'
      }
    ],
    social: [
      { name: 'Instagram', href: '/' },
      { name: 'Linkedin', href: '/' },
      { name: 'Twitter', href: '/' },
      { name: 'GitHub', href: '/' }
    ]
  };

  return (
    <header className="h-[14vh] w-full">
      <div className="flex w-full items-start justify-between p-12 text-sm">
        <div className="flex w-full max-w-[20%] items-start justify-between">
          <div className="flex flex-col font-medium">
            <span>Soares Leonardo</span>
            <span>FullStack Developer</span>
          </div>
          <a href="/" className="flex items-center gap-2">
            Blog <ExternalLink size={14} />
          </a>
        </div>
        <nav className="flex items-start gap-40">
          <div>
            <ul className="text-sm">
              {links.navigation.map((link) => (
                <li key={`Navegue em ${link.name}`}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="text-sm">
              {links.social.map((link) => (
                <li key={`Veja meu perfil em ${link.name}`}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
