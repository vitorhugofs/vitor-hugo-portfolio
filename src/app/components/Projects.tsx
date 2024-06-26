import React from "react";
import ProjectCard from "./ProjectCard";
import InfoSection from "./InfoSection";

export interface Project {
    name: string;
    description: string;
    link: string;
    image: string;
    type: 'real-life' | 'personal';
}

export default function Projects () {

    const projects: Project[] = [{
        name: "Wellabe",
        description: "Participei de todo o processo de rebranding e manutenção da aplicação.",
        link: "https://play.google.com/store/apps/details?id=de.bodylabs.app",
        image: "/wellabe.png",
        type: 'real-life'
    }, 
    {
        name: "Marlie",
        description: "Liderei o desenvolvimento do protótipo e participei das decisões técnicas.",
        link: "https://play.google.com/store/apps/details?id=de.wellabe.health&hl=pt&gl=US&pli=1",
        image: "/marlie.png", 
        type: 'real-life'
    },
    {
        name: "Carbonaut",
        description: "Desenvolvi boa parte do site utilizando Svelte.",
        link: "https://carbonaut.io/",
        image: "/carbonaut.png",
        type: 'real-life'
    },
    {
        name: "Track Your IP",
        description: "Ferramenta para localizar endereços de IP e mostrar no mapa.",
        link: "https://trackyourip.netlify.app/",
        image: "/track-your-ip.png",
        type: 'personal'
    },
    {
        name: 'Country List',
        description: 'Lista de países com detalhes e informações.',
        link: 'https://country-list-sand.vercel.app/',
        image: '/country-list.png',
        type: 'personal'
    }
]; 

    return (
        <InfoSection>
            { projects.map((project, index) => <ProjectCard project={project} key={index} />)}
        </InfoSection>
    )
}