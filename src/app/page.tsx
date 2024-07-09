"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const toggleDarkMode = () => {
    const isDark = document.body.classList.toggle("dark");

    localStorage.setItem("darkMode", isDark ? "true" : "false");
    setDarkMode(isDark);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onScroll = () => {
    const { pageYOffset, scrollY } = window;

    const show = (pageYOffset || scrollY) > 5;

    setShowScrollButton(show);
  };

  useEffect(() => {
    if (!document) {
      return;
    }

    const isDarkActive = document.body.classList.contains("dark");
    const setDark = () => document.body.classList.add("dark");
    setDarkMode(localStorage.getItem("darkMode") === "true");

    if (darkMode && !isDarkActive) {
      setDark();
      return;
    }

    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-default dark:bg-bg-white">
      <div
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 w-6 h-6 mr-2"
      >
        <Image
          className="cursor-pointer"
          src={!darkMode ? "/sun.svg" : "/sun-dark.svg"}
          alt="icon for toggling dark mode"
          height="32"
          width="32"
        />
      </div>
      <span
        onClick={scrollToTop}
        className={
          (showScrollButton ? "" : "hidden absolute") +
          "fixed cursor-pointer bottom-0 md:bottom-4 right-4 bg-default dark:bg-bg-white text-4xl text-white dark:text-default dark:text-default"
        }
      >
        ⬆
      </span>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
