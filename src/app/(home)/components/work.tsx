import { Projects } from '@/data/projects';
import Link from 'next/link';

type ProjectProps = {
  name: string;
  created_at: string;
  description: string;
  type: string;
  image: string;
};

const ProjectCard = (project: ProjectProps) => {
  return (
    <div className="project-card">
      <img src={project.image} alt="" className="rounded-md" />

      <div className="pt-5">
        <div>
          <span className="text-4xl">{project.name}</span>
          <p className="pt-5">{project.description}</p>
          <span>
            <span>{project.type}</span>
            <span>{project.created_at}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

const ProjectsList = ({ projects }: { projects: ProjectProps[] }) => {
  return (
    <div className="flex w-full flex-wrap">
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  );
};

const Work = () => {
  return (
    <section className="mx-auto max-w-7xl pt-[24vh]">
      <div className="projects-container flex w-full flex-col">
        <ProjectsList projects={Projects} />
        <div className="mb-44 mt-44 flex w-full items-end justify-end">
          <div>
            <span className="text-sm uppercase">Arquivados</span>
            <ul className="mt-4 flex flex-col items-start justify-start text-start">
              <li>ProjectName</li>
              <li>ProjectName</li>
              <li>Portfólio 2020</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
