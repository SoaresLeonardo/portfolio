/* eslint-disable @next/next/no-img-element */
import { WorkProps } from './type';

const WorkCard = ({
  name,
  description,
  image,
  type,
  created_at
}: WorkProps) => {
  return (
    <div className="project-card">
      <img
        src={image}
        alt={`Imagem do Projeto ${name} Descrição: ${description}`}
        className="aspect-video w-full rounded-md object-cover"
      />
      <div className="pt-5">
        <div className="relative flex items-center">
          <span className="text-4xl font-medium">{name}</span>
          <span className="absolute right-0 flex items-center gap-2 text-lg text-gray-400">
            <span>{type}</span>
            <span>{created_at}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
