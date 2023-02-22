import React, { RefObject } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.scss";
const ResumePDF = require("../Resume.pdf");

type HideProps = {
  menu: string;
};

type MenuProps = {
  hidden: HideProps;
  handleHide: () => void;
  refAbout: React.RefObject<HTMLElement>;
  refTools: React.RefObject<HTMLElement>;
  refProjects: React.RefObject<HTMLElement>;
  refContact: React.RefObject<HTMLElement>;
};

const Navbar = (props: MenuProps) => {
  const { hidden, handleHide } = props;

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key !== "Enter") {
      return false;
    }
    return true;
  }

  function scrollIntoView(ref: RefObject<HTMLElement>) {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }

  return (
    <nav className="navbar">
      <div className="logo">F.I</div>
      <div className="logo-large">Faried.Idris</div>
      <div
        className={hidden.menu === "" ? "hide" : "menuLink"}
        onClick={handleHide}
        onKeyDown={(e) => {
          if (handleKeyPress(e)) handleHide();
        }}
        tabIndex={1}
      >
        .find()
      </div>
      <div className="navbar-links">
        <p
          onClick={() => scrollIntoView(props.refAbout)}
          tabIndex={1}
          onKeyDown={(e) => {
            if (handleKeyPress(e)) scrollIntoView(props.refAbout);
          }}
        >
          .about()
        </p>
        <p
          onClick={() => scrollIntoView(props.refTools)}
          tabIndex={1}
          onKeyDown={(e) => {
            if (handleKeyPress(e)) scrollIntoView(props.refTools);
          }}
        >
          .tools()
        </p>
        <p
          onClick={() => scrollIntoView(props.refProjects)}
          tabIndex={1}
          onKeyDown={(e) => {
            if (handleKeyPress(e)) scrollIntoView(props.refProjects);
          }}
        >
          .projects()
        </p>
        <p
          onClick={() => scrollIntoView(props.refContact)}
          tabIndex={1}
          onKeyDown={(e) => {
            if (handleKeyPress(e)) scrollIntoView(props.refContact);
          }}
        >
          .contact()
        </p>
        <a
          href={ResumePDF}
          target="_blank"
          rel="noreferrer"
          className="btn-resume"
        >
          Resumé{" "}
          <span>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
