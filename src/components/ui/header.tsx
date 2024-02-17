import { ExternalLink } from 'lucide-react';
import { links } from '../constants/navigation';
import Link from 'next/link';

type NavLinksProps = {
  name: string;
  href: string;
};

const NavLinksList = ({ links }: { links: NavLinksProps[] }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href}>{link.name}</Link>
        </li>
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
    <header className="fixed top-[6.5vh] w-full px-[5vw] py-0">
      <div className="flex w-full items-start justify-between text-sm">
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
