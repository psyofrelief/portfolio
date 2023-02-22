import React, { useState } from "react";
import "../styles/Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const clickeyImg = require("../img/clickey.webp");
const moneymetricsImg = require("../img/moneymetrics.webp");
const portfolioImg = require("../img/portfolio.webp");

type MenuProps = {
  refProjects: React.RefObject<HTMLElement>;
};

const Projects = (props: MenuProps) => {
  type HideState = {
    project1?: Boolean;
    project2?: Boolean;
    project3?: Boolean;
  };

  type ProjectType = String;

  const [hide, setHide] = useState<HideState>({
    project1: false,
    project2: false,
    project3: false,
  });

  const handleHide = (project: ProjectType): void => {
    setHide({ [String(project)]: true });
  };

  const handleHideLeave = (project: ProjectType): void => {
    setHide({ [String(project)]: false });
  };

  return (
    <section className="projects" ref={props.refProjects}>
      <p className="label">{String("<Projects>")}</p>
      <p className="comment">
        "// Here are my favourite projects that I've worked on"
      </p>
      <div className="cont-projects">
        <div className="cont-project-item">
          <p className="project-name">ClicKEY</p>
          <div
            className="project-img"
            onMouseEnter={() => handleHide("project1")}
            onMouseLeave={() => handleHideLeave("project1")}
            style={{ backgroundImage: `url(${clickeyImg})` }}
          >
            {hide.project1 === true ? (
              <p className="project-about">
                An e-commerce website for keycaps and keyboard switches.
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="project-tools">
            <p className="project-tool">HTML</p>
            <p className="project-tool">SCSS</p>
            <p className="project-tool">JAVASCRIPT</p>
            <p className="project-tool">REACT</p>
          </div>
          <div className="project-links">
            <a
              href="https://psyofrelief.github.io/clickey"
              className="btn-preview"
              target="_blank"
              rel="noreferrer"
            >
              Live Preview{" "}
              <span>
                <FontAwesomeIcon icon={faLink} />
              </span>
            </a>
            <a
              href="https://github.com/psyofrelief/clickey"
              target="_blank"
              className="btn-code"
              rel="noreferrer"
            >
              Code{" "}
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
          </div>
        </div>
        <div className="cont-project-item">
          <p className="project-name">MoneyMetrics</p>
          <div
            className="project-img"
            onMouseEnter={() => handleHide("project2")}
            onMouseLeave={() => handleHideLeave("project2")}
            style={{ backgroundImage: `url(${moneymetricsImg})` }}
          >
            {hide.project2 ? (
              <p className="project-about">
                A website that allows users to convert between currencies, and
                units
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="project-tools">
            <p className="project-tool">HTML</p>
            <p className="project-tool">SCSS</p>
            <p className="project-tool">JAVASCRIPT</p>
            <p className="project-tool">REACT</p>
          </div>
          <div className="project-links">
            <a
              href="https://psyofrelief.github.io/MoneyMetrics"
              target="_blank"
              className="btn-preview"
              rel="noreferrer"
            >
              Live Preview{" "}
              <span>
                <FontAwesomeIcon icon={faLink} />
              </span>
            </a>
            <a
              href="https://github.com/psyofrelief/MoneyMetrics"
              target="_blank
"
              rel="noreferrer"
              className="btn-code"
            >
              Code{" "}
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
          </div>
        </div>
        <div className="cont-project-item">
          <p className="project-name">This Portfolio </p>
          <div
            className="project-img"
            onMouseEnter={() => handleHide("project3")}
            onMouseLeave={() => handleHideLeave("project3")}
            style={{ backgroundImage: `url(${portfolioImg})` }}
          >
            {hide.project3 ? (
              <p className="project-about">
                {String(`Nothing new here. This has been one of my favourite projects to
          work on!`)}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="project-tools">
            <p className="project-tool">TYPESCRIPT</p>
            <p className="project-tool">NODEJS</p>
            <p className="project-tool">JAVASCRIPT</p>
            <p className="project-tool">REACT</p>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/psyofrelief/portfolio"
              className="btn-code"
            >
              Code{" "}
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
          </div>
        </div>
      </div>

      <p className="label">{String("</Projects>")}</p>
    </section>
  );
};

export default Projects;
