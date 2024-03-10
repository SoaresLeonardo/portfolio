import { cn } from '@/lib/utils';

/* eslint-disable @next/next/no-img-element */
export type WorkProps = {
  name: string;
  created_at: string;
  description: string;
  type: string;
  href: string;
  image: string;
};

type WorkCardProps = {
  work: WorkProps;
  className?: string;
};

const WorkCard = ({ work, className }: WorkCardProps) => {
  return (
    <div className="mx-6 my-9">
      <div className="relative mx-auto min-h-80 w-full max-w-3xl overflow-hidden rounded-md">
        <a
          href={work.href}
          className={cn(
            ['flex w-full justify-between bg-[#F8F8F8]'],
            className
          )}
        >
          <div className="w-[calc(50%-30px)] self-center px-10">
            <h3 className="mb-3 text-xl">{work.name}</h3>
            <p className="mb-4 text-lg">
              <span className="">{work.type}</span>
              <span>{work.created_at}</span>
            </p>
            <p className="mb-2 text-lg">{work.description}</p>
          </div>
          <div className="h-full w-1/2">
            <img
              src={work.image}
              alt={`${work.name} ${work.type}`}
              className="h-full w-full object-cover"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
