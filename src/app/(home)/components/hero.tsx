import poppins from './font-poppins';

const Hero = () => {
  return (
    <section className="pt-[24vh]">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6">
          <h3 className={`${poppins.className} text-7xl leading-tight`}>
            Creative <br /> Web Developer.
          </h3>
          <p className="w-full max-w-2xl text-xl">
            Olá, sou o Leonardo. Especializado em projetar e construir
            aplicações web, busco proporcionar a melhor experiência ao usuário
            com designs atraentes e animações envolventes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
