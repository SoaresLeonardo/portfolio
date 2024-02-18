import Link from 'next/link';

const Role = () => {
  return (
    <section className="mx-auto max-w-7xl border-t border-zinc-800 py-[11vh]">
      <div className="flex flex-col items-start justify-start gap-5">
        <p className="w-full max-w-3xl 2xl:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          sapiente optio et cupiditate quod quibusdam nam reprehenderit odit
          explicabo at ratione architecto voluptas odio <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          sapiente optio et cupiditate quod quibusdam nam reprehenderit odit
          explicabo at ratione architecto voluptas odio
        </p>
        <Link href="/me" className="rounded-full bg-white px-5 py-3 text-black">
          Mais Sobre Mim
        </Link>
      </div>
    </section>
  );
};

export default Role;
