import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-7xl border-t border-zinc-800">
      <div className="flex w-full items-center justify-between py-11">
        <span className="text-sm font-medium uppercase text-gray-400">
          Soares©2024
        </span>
        <ul className="flex items-center gap-8 text-sm">
          <li className="flex items-center gap-3">
            Instagram <ExternalLink size={14} />
          </li>
          <li className="flex items-center gap-3">
            Linkedin <ExternalLink size={14} />
          </li>
          <li className="flex items-center gap-3">
            Twitter <ExternalLink size={14} />
          </li>
          <li className="flex items-center gap-3">
            GitHub <ExternalLink size={14} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
