import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <h3 className="text-7xl">404</h3>
        <p className="text-xl">
          Ops, parece que esta página não existe. Está perdido?
        </p>
        <Link
          href="/"
          className="group flex items-center rounded-full border border-transparent bg-white px-5 py-3 text-center text-black"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-black opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Volte para Home.</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
