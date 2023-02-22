import React from "react";
import "../styles/Tools.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faSquareJs,
  faNode,
  faHtml5,
  faSass,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";

type MenuProps = {
  refTools: React.RefObject<HTMLElement>;
};

const Tools = (props: MenuProps) => {
  return (
    <section className="tools" ref={props.refTools}>
      <p className="label">{`<Tools>`}</p>
      <p className="comment">{`// Here are some web developement tools I'm proficient in using, as well as some extras.`}</p>
      <div className="cont-tools">
        <p className="label-fullstack">{`</FullStack>`}</p>
        <div className="icon-with-name">
          <FontAwesomeIcon icon={faReact} />
          <p>React</p>
        </div>
        <div className="icon-with-name">
          <FontAwesomeIcon icon={faSquareJs} />
          <p>JavaS</p>
        </div>
        <div className="icon-with-name">
          <FontAwesomeIcon icon={faHtml5} />
          <p>Html</p>
        </div>
        <div className="icon-with-name">
          <FontAwesomeIcon icon={faCss3Alt} />
          <p>Css</p>
        </div>
        <div className="icon-with-name">
          <FontAwesomeIcon icon={faSass} />
          <p>Sass</p>
        </div>
        <div className="icon-with-name">
          <FontAwesomeIcon icon={faReact} />
          <p>React</p>
        </div>
        <div className="icon-with-name">
          <FontAwesomeIcon icon={faNode} />
          <p>Node</p>
        </div>
      </div>
      <div className="cont-tools-other">
        <p>{`</Other>`}</p>
        <p>Emacs</p>
        <p>Git</p>
        <p>Linux</p>
        <p>TDD</p>
      </div>
      <p className="label">{`</Tools>`}</p>
    </section>
  );
};

export default Tools;
