import { Projects } from '@/data/projects';
import WorkList from './work-list';
import FeaturedWork from './ featured-work';
import RelatedWorks from './ related-works';

const Work = () => {
  const featuredWork = Projects.slice(0, 1)[0];

  return (
    <section className="w-full pt-[24vh]">
      <FeaturedWork {...featuredWork} />
      <div className="mt-32 pl-[10%] pr-[10%]">
        <WorkList works={Projects} />
        <RelatedWorks />
      </div>
    </section>
  );
};

export default Work;
