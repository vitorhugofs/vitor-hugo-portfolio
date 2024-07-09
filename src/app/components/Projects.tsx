import InfoSection from "./InfoSection";
import ProjectCard from "./ProjectCard";

export interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
  type: "real-life" | "personal";
}

export default function Projects() {
  const projects: Project[] = [
    {
      name: "Wellabe",
      description:
        "I've been part of the process of rebranding of the main app and maintenance of the application including all the side-apps, which includes a whole medical checkup assitance app umbrella.",
      link: "https://play.google.com/store/apps/details?id=de.bodylabs.app",
      image: "/wellabe.png",
      type: "real-life",
    },
    {
      name: "Marlie",
      description:
        "Been part of the prototype research as well as the early stages of development.",
      link: "https://play.google.com/store/apps/details?id=de.wellabe.health&hl=pt&gl=US&pli=1",
      image: "/marlie.png",
      type: "real-life",
    },
    {
      name: "Carbonaut",
      description: "Developed most of the site using Svelte.",
      link: "https://carbonaut.io/",
      image: "/carbonaut.png",
      type: "real-life",
    },
    {
      name: "Track Your IP",
      description: "Tool to geolocate any IP address and show it on a map.",
      link: "https://trackyourip.netlify.app/",
      image: "/track-your-ip.png",
      type: "personal",
    },
    {
      name: "Country List",
      description: "A simple list of countries with its infos and flags.",
      link: "https://country-list-sand.vercel.app/",
      image: "/country-list.png",
      type: "personal",
    },
  ];

  return (
    <InfoSection>
      <h1 className="text-2xl text-white dark:text-default mb-8">
        My projects
      </h1>
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </InfoSection>
  );
}
