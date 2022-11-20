import * as React from "react";
import Image from "next/image";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeader from "./SectionHeader";
interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <section className="flex flex-col" id="About">
      <SectionHeader number={1} title="About Me" />
      <div className="flex">
        <div className="flex flex-col gap-4 w-3/4">
          <p className="text-slate-400">
            Hello! My name is Noel and I enjoy creating things that live on the
            the internet. My interest in web development started when in my
            second year working for VerQu. The primary app our dev team created
            is a cmd line application which can migrate data from a src to
            destination. Setup and reporting was not very intuitive. I wanted to
            make a front-end to more easily interact, manage and dashboard key
            metrics for all accounts.
          </p>

          <p className="text-slate-400">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <div className="flex gap-12 text-slate-400">
            <ul className="flex flex-col gap-2">
              <li className=" flex items-center">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-teal-400 text-sm mr-2"
                />
                Javascript
              </li>
              <li className=" flex items-center">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-teal-400 text-sm mr-2"
                />
                Typescript
              </li>
              <li className=" flex items-center">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-teal-400 text-sm mr-2"
                />
                React
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className=" flex items-center">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-teal-400 text-sm mr-2"
                />
                Node.js
              </li>
              <li className=" flex items-center">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-teal-400 text-sm mr-2"
                />
                Next.js
              </li>
              <li className=" flex items-center">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-teal-400 text-sm mr-2"
                />
                Graph QL
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/4">
          <Image
            src="/profile.jpg"
            alt="profile picture"
            width={250}
            height={250}
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
