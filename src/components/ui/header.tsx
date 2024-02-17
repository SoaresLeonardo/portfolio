import { ExternalLink } from 'lucide-react';
import { links } from '../constants/navigation';

type NavLinksProps = {
  name: string;
  href: string;
};

const NavLinksList = ({ links }: { links: NavLinksProps[] }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.name}>{link.name}</li>
      ))}
    </ul>
  );
};

const Nav = () => {
  return (
    <nav className="flex items-start gap-40">
      <NavLinksList links={links.navigation} />
      <NavLinksList links={links.social} />
    </nav>
  );
};

const Header = () => {
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
        <Nav />
      </div>
    </header>
  );
};

export default Header;
