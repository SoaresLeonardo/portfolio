import poppins from './font-poppins';

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl pt-[24vh]">
      <div>
        <div className="flex flex-col gap-6">
          <h3 className={`${poppins.className} text-7xl leading-tight`}>
            Independent <br /> Software Designer.
          </h3>
          <p className="w-full max-w-2xl text-xl">
            I design and build software with the goal of telling stories,
            reducing friction, and crafting digital experiences that are a joy
            to use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div className="flex w-full flex-col">
        <div className="flex items-start">
          <div>
            <h3 className={`${poppins.className} text-title`}>Desenvolvedor</h3>
          </div>
          <div className="w-full max-w-lg pl-36 pt-20">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              quo ipsa culpa placeat vel, fugit quidem blanditiis.
            </p>
          </div>
        </div>
        <div className="-mt-14 flex items-end justify-end">
          <div className="flex items-center gap-5">
            <h3 className={`${poppins.className} text-title`}>FullStack</h3>
            <div className="animate-spin-slow select-none">
              <img src="text-animation.png" alt="text" />
            </div>
            <h3 className={`${poppins.className} text-title`}>Criativo</h3>
          </div>
        </div>
      </div> */
}
