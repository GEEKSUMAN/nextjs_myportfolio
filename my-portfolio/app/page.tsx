import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suman Maji - Full Stack & Game Backend Developer Portfolio", // Change the title
  description: "Suman Maji - Full Stack & Game Backend Developer Portfolio", // Change the description
};

export default function Home() {
  return (
    <div>
      <ThemeToggleButton />
      <Header />
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
