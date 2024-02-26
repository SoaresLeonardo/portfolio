import Link from 'next/link';

const Role = () => {
  return (
    <section className="mx-auto max-w-7xl py-[8vh]">
      <div className="flex flex-col items-start justify-start gap-5 px-20 py-5">
        <p className="w-full max-w-3xl 2xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          sapiente optio et cupiditate quod quibusdam nam reprehenderit odit
          explicabo at ratione architecto voluptas odio <br />
        </p>
        <div className="flex gap-5">
          <Link
            href="/me"
            className="group flex items-center rounded-full border border-transparent bg-white px-5 py-2 text-center text-black"
          >
            <span className="relative w-fit">
              <span className="absolute bottom-2 h-[0.15em] w-0 bg-black opacity-90 duration-300 ease-out group-hover:w-full"></span>
              <span>Veja mais sobre mim.</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Role;
