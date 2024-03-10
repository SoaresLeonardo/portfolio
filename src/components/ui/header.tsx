import { AlignRight } from 'lucide-react';
import { links } from '../../constants/navigation';
import Link from 'next/link';

type NavLinksProps = {
  name: string;
  href: string;
};

const NavLinksList = ({ links }: { links: NavLinksProps[] }) => {
  return (
    <ul className="flex items-center gap-8 font-normal text-gray-600">
      {links.map((link) => (
        <li key={link.name} className="link">
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
    </nav>
  );
};

const Header = () => {
  return (
    <header className="fixed z-50 w-full px-8 py-6">
      <div className="mx-auto flex w-full items-center justify-between text-sm">
        <Link href="/">
          <span className="text-lg font-medium">Soares</span>
        </Link>
        <Nav />
        <button>
          <AlignRight />
        </button>
      </div>
    </header>
  );
};

export default Header;
