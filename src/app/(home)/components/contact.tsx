import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl border-t border-zinc-800 py-[10vh]">
      <div className="flex flex-col">
        <h3 className="flex flex-col text-left text-5xl font-medium leading-snug">
          <span>Tem alguma idéia em mente?</span>
          <span className="flex items-center">
            Vamos conversar <ArrowUpRight size={48} />
          </span>
        </h3>
      </div>
    </section>
  );
};

export default Contact;
