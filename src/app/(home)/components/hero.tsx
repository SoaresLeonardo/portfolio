import poppins from './font-poppins';

const Hero = () => {
  return (
    <section className="mx-[7vw] pt-[24vh]">
      <div className="flex w-full flex-col">
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
      </div>
    </section>
  );
};

export default Hero;
