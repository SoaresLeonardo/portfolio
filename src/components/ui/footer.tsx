import { links } from '@/constants/navigation';

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-4xl">
      <div className="flex w-full items-center justify-center px-20 py-5">
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
