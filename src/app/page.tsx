import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/contact";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
