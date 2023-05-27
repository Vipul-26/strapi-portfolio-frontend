import About from "components/About";
import Contact from "components/Contact";
import Experience from "components/Experience";
import Hero from "components/Hero";
import Projects from "components/Projects";
import React from "react";
import styles from "./main.module.css";

const Main = () => {
  return (
    <div id="home" className={styles.home}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
