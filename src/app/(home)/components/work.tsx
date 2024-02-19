/* eslint-disable @next/next/no-img-element */
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
      <img
        src={project.image}
        alt={`Imagem do Projeto ${project.name}`}
        className="rounded-md"
      />
      <div className="pt-5">
        <div>
          <span className="text-4xl font-normal">{project.name}</span>
          <p className="w-full max-w-3xl pb-5 pt-5 text-lg">
            {project.description}
          </p>
          <span className="flex items-center gap-2 text-lg text-gray-400">
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
    <div className="flex w-full flex-wrap items-start justify-center">
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  );
};

const Work = () => {
  return (
    <section className="pt-[24vh]">
      <div className="projects-container flex w-full flex-col items-center justify-center">
        <ProjectsList projects={Projects} />
        <div className="mb-44 mt-44 flex w-full max-w-7xl items-end justify-end">
          <div>
            <span className="text-xs uppercase">Arquivados</span>
            <ul className="mt-4 flex flex-col items-start justify-start gap-3 text-start">
              <li>
                <Link href="/" className="group relative">
                  Projetoname
                  <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-gray-400 duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/" className="group relative">
                  Projetoname
                  <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-gray-400 duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/" className="group relative">
                  Portfólio 2020
                  <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-gray-400 duration-300 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
