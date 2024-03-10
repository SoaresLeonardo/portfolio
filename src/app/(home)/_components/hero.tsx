import Link from 'next/link';
import poppins from './font-poppins';
import { ArrowRight } from 'lucide-react';

const HeroTitle = () => {
  return (
    <h1
      className={`${poppins.className} mb-5 text-[27px] font-normal leading-tight`}
    >
      Hey, Sou Leonardo.
    </h1>
  );
};

const HeroDescription = () => {
  return (
    <p className="mb-5 text-xl font-normal leading-8">
      <strong>FullStack Developer Web</strong>
      <br />
      Dev | Node.JS & Nest.JS & React.JS & Next.JS
    </p>
  );
};

const HeroNavigation = () => {
  return (
    <div className="flex items-center gap-7">
      <Link
        href="/me"
        className="group flex items-center rounded-md bg-black px-[10px] py-2 text-center text-sm text-white"
      >
        <span className="flex items-center">
          Saiba mais <ArrowRight className="ml-2" size={14} />
        </span>
      </Link>
      <Link
        href="/me"
        className="group flex items-center rounded-md border border-gray-200 bg-white px-[10px] py-2 text-center text-sm text-black"
      >
        <span>Fale comigo</span>
      </Link>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-3xl text-left">
        <div className="py-5">
          <div className="flex flex-col items-start justify-start">
            <HeroTitle />
            <HeroDescription />
            <HeroNavigation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
