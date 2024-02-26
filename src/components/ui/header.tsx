import { ExternalLink } from 'lucide-react';
import { links } from '../../constants/navigation';
import Link from 'next/link';

type NavLinksProps = {
  name: string;
  href: string;
};

const NavLinksList = ({ links }: { links: NavLinksProps[] }) => {
  return (
    <ul className="flex items-center gap-8 font-normal text-gray-300">
      {links.map((link) => (
        <li key={link.name} className="link">
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
      <Link href="/" className="link flex items-center gap-2">
        Blog <ExternalLink size={14} />
      </Link>
      <Link
        href="/contact"
        className="group flex items-center rounded-full border border-transparent bg-white px-5 py-3 text-center text-black"
      >
        <span className="relative w-fit">
          <span className="absolute bottom-2 h-[0.15em] w-0 bg-black opacity-90 duration-300 ease-out group-hover:w-full"></span>
          <span>Fale comigo.</span>
        </span>
      </Link>
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
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between text-sm">
        <Link href="/">
          <span className="flex items-center gap-1 text-lg uppercase">
            <span className="font-bold">Soares</span>
            <span className="font-light">©2024</span>
          </span>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
