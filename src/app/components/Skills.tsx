import InfoSection from "./InfoSection";

export default function Skills() {
  return (
    <InfoSection>
      <div className="flex flex-row text-white dark:text-default justify-between w-full">
        <div className="flex flex-col items-start justify-start w-1/2 ">
          <h2 className="text-xl mb-8">Hard Skills</h2>

          <ul className="flex flex-wrap items-start flex-col text-start text-lg w-full">
            <li className="text-secondary">JavaScript</li>
            <li>TypeScript</li>
            <li className="text-secondary">HTML</li>
            <li>CSS</li>
            <li className="text-secondary">Angular</li>
            <li>Ionic</li>
            <li className="text-secondary">Next.js</li>
            <li>React Native</li>
            <li className="text-secondary">Tailwind</li>
            <li>Git</li>
            <li className="text-secondary">Capacitor</li>
            <li>React</li>
            <li className="text-secondary">GitHub</li>
            <li>Figma</li>
          </ul>
        </div>

        <div className="flex flex-col items-end justify-start w-1/2 text-right">
          <h2 className="text-xl mb-8">Soft Skills</h2>

          <ul className="flex flex-wrap items-end flex-col text-lg w-full">
            <li>Easy to comunicate</li>
            <li className="text-secondary">Good time management</li>
            <li>Self-motivated</li>
            <li className="text-secondary">Fast learner</li>
            <li>Team player</li>
            <li className="text-secondary">High adaptability</li>
            <li>Calm and friendly</li>
            <li className="text-secondary">Ability to work under pressure</li>
            <li>Calm and friendly</li>
            <li className="text-secondary">Experience leading projects</li>
          </ul>
        </div>
      </div>
    </InfoSection>
  );
}
