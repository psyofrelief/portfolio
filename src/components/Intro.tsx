import React from "react";
import "../styles/Intro.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Intro: React.FC = (): JSX.Element => {
  return (
    <section className="intro">
      <p className="label">{`<Intro>`}</p>
      <p className="who-i-am">
        Hello. I'm <span className="name-highlight">Faried</span>.{" "}
        <span className="pronunciation">{`(/'fah reed/)`}</span>{" "}
      </p>
      <p className="what-i-do">
        I'm a full stack developer, avid bookworm, and an MMA practitioner.
      </p>
      <div className="cont-social-icons">
        <a href="https://github.com/psyofrelief" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>{" "}
        <a href="https://www.linkedin.com/in/faried-idris" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
      </div>{" "}
      <p className="label">{`</Intro>`}</p>
      <FontAwesomeIcon icon={faArrowDownLong} className="arrow-down" />
    </section>
  );
};

export default Intro;
