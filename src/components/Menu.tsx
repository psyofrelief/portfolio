import React, { RefObject } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
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

const Menu = (props: MenuProps) => {
  const { hidden, handleHide } = props;

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") {
      return false;
    }

    return true;
  };

  function scrollIntoView(ref: RefObject<HTMLElement>) {
    if (ref.current) {
      handleHide();
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
  return (
    <aside className={hidden.menu === "hide" ? "hide" : "menu"}>
      <p
        className="close"
        onClick={handleHide}
        onKeyDown={(e) => {
          if (handleKeyPress(e)) handleHide();
        }}
        tabIndex={0}
      >
        {String(".close()")}
      </p>
      <p
        onClick={() => scrollIntoView(props.refAbout)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (handleKeyPress(e)) scrollIntoView(props.refAbout);
        }}
      >
        {String(".about()")}
      </p>
      <p
        onClick={() => scrollIntoView(props.refTools)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (handleKeyPress(e)) scrollIntoView(props.refTools);
        }}
      >
        {String(".tools()")}
      </p>
      <p
        onClick={() => scrollIntoView(props.refProjects)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (handleKeyPress(e)) scrollIntoView(props.refProjects);
        }}
      >
        {String(".projects()")}
      </p>
      <p
        onClick={() => scrollIntoView(props.refContact)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (handleKeyPress(e)) scrollIntoView(props.refContact);
        }}
      >
        {String(".contact()")}
      </p>
      <a href={ResumePDF} className="btn-resume">
        Resumé{" "}
        <span>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </span>
      </a>
    </aside>
  );
};

export default Menu;
