import { WorkProps } from './type';
import WorkCard from './work-card';

const WorkList = ({ works }: { works: WorkProps[] }) => {
  return (
    <div className="grid grid-cols-1 gap-x-14 gap-y-10 pb-20 md:grid-cols-12 md:gap-y-20 xl:gap-x-16 2xl:gap-x-20">
      {works.slice(0, 4).map((work) => (
        <WorkCard key={`Work: ${work.name}`} {...work} />
      ))}
    </div>
  );
};

export default WorkList;
