import React from "react";
import { Project } from "./Projects";

export default function ProjectCard ({ project }: { project: Project }) {
    return (
        <div className="flex flex-col md:flex-row text-white justify-between w-full mb-8">
            <img className="w-full md:w-1/2 mb-8" src={project.image} alt={project.name} />

            <div className="flex flex-col w-full md:w-1/2 items-start justify-start ml-4">
                <h4 className="text-xl text-primary mb-2">{project.name}</h4>
                <p className="text-md text-gray">{project.description}</p>
                <a className="text-md text-secondary" href={project.link}>Acesse</a>
            </div>
        </div>
    )
}