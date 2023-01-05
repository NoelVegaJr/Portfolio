import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Modal from "./Modal";

interface IContactProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const Contact: React.FunctionComponent<IContactProps> = ({
  isOpen,
  open,
  close,
}) => {
  return (
    <section
      id="Contact"
      className="text-center flex flex-col gap-8 max-w-lg mx-auto mb-80"
    >
      <p className="text-teal-300 text-lg ">04. What&apos;s Next?</p>
      <p className="text-5xl text-slate-300 font-bold">Get In Touch</p>
      <p className="text-slate-400">
        I am currently looking for an opportunity for a software developer
        position on a team which values hard work and communication. If you have
        any questions please feel free to reach out and I should get back to you
        within 12 hours. Thanks for visiting 😄💖
      </p>
      <button
        onClick={open}
        className="border font-semibold border-teal-400 px-8 p-4 text-teal-400 w-fit rounded hover:bg-slate-800 mx-auto"
      >
        Say Hello
      </button>
      {isOpen && <Modal close={close} />}

      <ul className="flex  items-center justify-center text-3xl text-slate-400 gap-10 mt-4 xl:hidden">
        <li>
          <a
            href="https://github.com/NoelVegaJr"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithubAlt} className="" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/noelvegajr/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
