import { useState, ChangeEvent } from "react";
import "../styles/Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";

type MenuProps = {
  refContact?: React.RefObject<HTMLElement>;
};
const Contact = (props: MenuProps) => {
  type email = {
    name: String;
    email: String;
    message: String;
  };

  const [state, setState] = useState<email>({
    name: "",
    email: "",
    message: "",
  });

  const resetForm = () => {
    setState({ ...state, name: "", email: "", message: "" });
  };

  const sendEmail = (e: HTMLElement | any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n95n8eg",
        "template_ggr56pk",
        e.target,
        "FtTzHzabOubAwpbpX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    resetForm();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact" ref={props.refContact}>
      <p className="label">{String("<Contact>")}</p>
      <p className="heading">
        Get in touch{" "}
        <span>
          <FontAwesomeIcon icon={faSatelliteDish} />
        </span>
      </p>
      <div className="brief">
        <p>Have any questions?</p>
        <p>{String("Shoot me an email, I'll respond within the day.")}</p>
      </div>{" "}
      <p className="comment">{"// Some socials"}</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/faried-idris" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/psyofrelief" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <form id="contact-form" onSubmit={sendEmail}>
        <input
          name="name"
          type="text"
          value={String(state.name)}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={String(state.email)}
          onChange={handleChange}
        />
        <textarea
          cols={50}
          id="inp-message"
          name="message"
          rows={8}
          maxLength={500}
          placeholder="Message"
          value={String(state.message)}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn-send">
          Send
        </button>
      </form>
      <p className="label">{String("</Contact>")}</p>
    </section>
  );
};

export default Contact;
