import { links } from '@/constants/navigation';

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-7xl">
      <div className="flex w-full items-center justify-between px-20 py-5">
        <span className="text-sm font-medium uppercase text-gray-400">
          Soares©2024
        </span>
        <ul className="flex items-center gap-8 text-sm">
          {links.social.map((link) => (
            <li key={link.name}>
              <a href={link.href} target="_blank">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
