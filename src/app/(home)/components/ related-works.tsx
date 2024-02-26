import { others } from '@/constants/navigation';
import Link from 'next/link';

const RelatedWorks = () => {
  return (
    <div className="mb-44 mt-44 flex w-full items-end justify-end">
      <div>
        <span className="text-xs uppercase">Arquivados</span>
        <ul className="mt-4 flex flex-col items-start justify-start gap-3 text-start">
          {others.map((link) => (
            <li key={`Veja ${link.name}`}>
              <Link href={link.href} className="group relative" target="_blank">
                {link.name}
                <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-gray-400 duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RelatedWorks;
