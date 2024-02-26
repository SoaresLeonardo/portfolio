import { ArrowUpRight } from 'lucide-react';
import poppins from './font-poppins';

const Contact: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl py-[24vh]">
      <div className="flex flex-col items-start justify-start px-20 py-5">
        <h3
          className={`${poppins.className} flex flex-col text-left text-5xl font-medium leading-snug`}
        >
          <span>Tem um projeto? Vamos conversar</span>
          <span className="flex items-center">
            Me contate <ArrowUpRight size={48} />
          </span>
        </h3>
      </div>
    </section>
  );
};

export default Contact;
