// import { ExternalLink } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { links } from '../../constants/navigation';
import Link from 'next/link';

type NavLinksProps = {
  name: string;
  href: string;
};

const NavLinksList = ({ links }: { links: NavLinksProps[] }) => {
  return (
    <ul className="flex items-center gap-8 font-normal text-gray-400">
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
      <Link href="/" className="flex items-center gap-2">
        Blog <ExternalLink size={14} />
      </Link>
      <Link
        href="/contact"
        className="rounded-full bg-white px-5 py-3 text-black"
      >
        Fale comigo.
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
    <header className="fixed top-[6.5vh] z-30 w-full px-[5vw] py-0">
      <div className="mx-auto flex w-full max-w-7xl items-start justify-between text-sm">
        <div className="flex flex-col text-lg font-normal uppercase leading-none">
          <span>Leonardo</span>
          <span>Soares</span>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
