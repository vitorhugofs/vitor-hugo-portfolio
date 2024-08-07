"use client";

import Image from "next/image";
import { Project } from "./Projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col text-white dark:text-default justify-between w-full mb-8">
      <Image
        onClick={() => window.open(project.link)}
        className="w-full mb-8 rounded-xl hover:cursor-pointer hover:scale-[102%] duration-300"
        width="0"
        height="0"
        sizes="100vw"
        src={project.image}
        alt={project.name}
      />

      <div className="flex flex-col w-full items-center justify-center">
        <h4 className="text-xl text-primary mb-2">{project.name}</h4>
        <p className="text-md text-center text-gray dark:text-default mb-4">
          {project.description}
        </p>
        <a className="text-lg c-link" href={project.link}>
          Access
        </a>
      </div>
    </div>
  );
}
