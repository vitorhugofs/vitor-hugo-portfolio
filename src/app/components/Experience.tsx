import InfoSection from "./InfoSection";

export default function Experience() {
  return (
    <InfoSection>
      <h2 className="text-2xl text-white dark:text-default mb-8">
        My experience
      </h2>

      <div className="flex flex-col text-white dark:text-default items-center lg:items-start color-text">
        <h3 className="text-lg text-primary">
          Carbonaut - Front-end development
        </h3>
        <p className="text-md mb-6">Curitiba | March 2021 - November 2023</p>
        <p className="text-sm text-gray dark:text-default dark:text-default text-center lg:text-left">
          Worked on several projects as a frontend developer, covering areas
          such as implementing design screens following a pixel-perfect quality
          review, refactoring old code, contract definition with the backend,
          hybrid development using Ionic, and test coverage with both unit and
          e2e tests.
        </p>
      </div>
    </InfoSection>
  );
}
