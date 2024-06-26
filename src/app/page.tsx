import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-default">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
