import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Tools from "./Tools";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Menu from "./Menu";
import Footer from "./Footer";
import "../styles/Homepage.scss";

const Homepage = () => {
  type HideProps = {
    menu: string;
  };
  const [hidden, setHidden] = useState<HideProps>({
    menu: "hide",
  });
  const refAbout = useRef<HTMLDivElement>(null);
  const refTools = useRef<HTMLElement>(null);
  const refProjects = useRef<HTMLElement>(null);
  const refContact = useRef<HTMLElement>(null);

  const handleHide = () => {
    if (hidden.menu === "") {
      setHidden({ menu: "hide" });
      return;
    }
    setHidden({ menu: "" });
  };

  return (
    <div className="homepage">
      <Menu
        refAbout={refAbout}
        refTools={refTools}
        refProjects={refProjects}
        refContact={refContact}
        hidden={hidden}
        handleHide={handleHide}
      />
      <Navbar
        hidden={hidden}
        handleHide={handleHide}
        refAbout={refAbout}
        refTools={refTools}
        refProjects={refProjects}
        refContact={refContact}
      />
      <Intro />

      <Tools refTools={refTools} />
      <About refAbout={refAbout} />
      <Projects refProjects={refProjects} />
      <Contact refContact={refContact} />
      <Footer />
    </div>
  );
};

export default Homepage;
