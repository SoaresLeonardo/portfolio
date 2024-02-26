'use client';

import poppins from './font-poppins';

const Hero = () => {
  return (
    <section className="flex w-full items-center justify-center px-5 pt-[24vh]">
      <div className="flex w-full max-w-7xl items-start justify-start text-left">
        <div className="flex flex-col gap-6">
          <h3
            className={`${poppins.className} text-5xl font-normal leading-tight`}
          >
            Hi, Im Owen Bick <br /> Im a software engineer based in Boston
          </h3>
          <p className="text-sm uppercase text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
