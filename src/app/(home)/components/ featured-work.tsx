/* eslint-disable @next/next/no-img-element */
import { WorkProps } from './type';

const FeaturedWork = (work: WorkProps) => {
  return (
    <div className="w-full">
      <img
        src={work.image}
        alt={`Projeto ${work.name} em Destaque ${work.description}`}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default FeaturedWork;
