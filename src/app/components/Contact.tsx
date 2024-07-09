import InfoSection from "./InfoSection";

export default function Contact() {
  return (
    <InfoSection>
      <div className="flex flex-col text-white dark:text-default items-center justify-center">
        <div className="text-white dark:text-default flex flex-col items-center justify-center">
          <p className="mb-16 text-2xl text-center">
            Have you liked my profile?{" "}
            <span className="text-primary">Let&#39;s work together!</span>
          </p>

          <a
            className="mb-4 text-lg c-link"
            href="https://linkedin.com/in/vitor-hugo-fernandes-57b95a89/"
          >
            Check my linkedin
          </a>

          <a
            className="mb-4 text-lg c-link"
            href="mailto:vitorhugo.fernandes12@gmail.com"
          >
            Send me an email!
          </a>
        </div>
      </div>
    </InfoSection>
  );
}
