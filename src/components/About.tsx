import React from "react";
import "../styles/About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const avatarr = require("../img/avatar.webp");
const ResumePDF = require("../Resume.pdf");

type MenuProps = {
  refAbout?: React.RefObject<HTMLElement>;
};

const About = (props: MenuProps) => {
  return (
    <main className="about" ref={props.refAbout}>
      <p className="label">{`<About>`}</p>
      <p className="about-text">
        {String(`I'm a full stack web developer with a passion for creating
        dynamic, user friendly websites with a great UI. I'm committed to
        keeping abreast of the newest advancements and developements in my
        industry, and always strive to enhance my abilities through ongoing
        education and skill developement. I'm able to cooperate & collaborate in
        a team environment, whether it be over an online conference or in a face
to face setting.`)}
      </p>
      <a href={ResumePDF} target="_blank" rel="noreferrer" className="resume">
        {String(`Resumé`)}
        <span>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </span>
      </a>
      <p className={String(`label`)}>{`</About>`}</p>
      <img
        alt={String(`avatar`)}
        src={String(avatarr)}
        className={String(`avatar`)}
      />
    </main>
  );
};

export default About;
