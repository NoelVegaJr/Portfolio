import * as React from "react";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IWorkExperienceProps {}

const WorkExperience: React.FunctionComponent<IWorkExperienceProps> = (
  props
) => {
  const [active, setActive] = useState("Relativity");

  const handleClick = (text: string) => {
    setActive(text);
  };

  return (
    <section id="Experience">
      <SectionHeader number={2} title="Where I've Worked" />
      <div className="flex flex-col md:flex-row gap-4">
        <ul className="text-slate-500 w-fit text-sm flex md:flex-col">
          <li
            className={`border-l ${
              active === "Relativity"
                ? "border-l-teal-300 text-teal-300"
                : "border-l-slate-600"
            } px-4 py-3 cursor-pointer hover:bg-slate-800 hover:text-teal-300 transition-all duration-300`}
            onClick={(e) => handleClick(e.currentTarget.innerText as string)}
          >
            Relativity
          </li>
          <li
            className={`border-l ${
              active === "VerQu"
                ? "border-l-teal-300 text-teal-300"
                : "border-l-slate-600"
            } px-4 py-3 cursor-pointer hover:bg-slate-800 hover:text-teal-300 transition-all duration-300`}
            onClick={(e) => handleClick(e.currentTarget.innerText as string)}
          >
            VerQu
          </li>
        </ul>
        <div>
          {active === "Relativity" && (
            <div>
              <p className="mb-2">
                <span className="text-slate-300">Service Delivery</span>{" "}
                <span className="text-orange-400">@ Relativity</span>
              </p>
              <p className="text-slate-400 mb-6">
                October 2020 - November 2022
              </p>
              <ul className="text-slate-400 flex flex-col gap-4 text-sm">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="text-teal-400 text-sm mr-6"
                  />
                  <p>Use powershell and sql to automate backend processes.</p>
                </li>
                <li className="flex">
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="text-teal-400 text-sm mr-6"
                  />
                  <p>Use powershell and sql to automate backend processes.</p>
                </li>
                <li className="flex">
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="text-teal-400 text-sm mr-6"
                  />
                  <p>
                    My solution increased performance 1000%+ going from 200 GB
                    migrated a day per account to 2.4 TB migrated a day per
                    account.
                  </p>
                </li>
              </ul>
            </div>
          )}
          {active === "VerQu" && (
            <div>
              <p className="mb-2">
                <span className="text-slate-300">Data Migration Engineer</span>{" "}
                <span className="text-orange-400">@ VerQu</span>
              </p>
              <p className="text-slate-400 mb-6">
                February 2018 - October 2020
              </p>
              <ul className="text-slate-400 flex flex-col gap-4">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="text-teal-400 text-sm mr-6"
                  />
                  <p>
                    Install migration software in client environments developed
                    by our software team.
                  </p>
                </li>
                <li className="flex">
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="text-teal-400 text-sm mr-6"
                  />
                  <p>
                    Responsible for migrating client data and providing
                    daily/weekly updates at client and team meetings.
                  </p>
                </li>
                <li className="flex">
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="text-teal-400 text-sm mr-6"
                  />
                  <p>
                    Generate reports using MSSQL then compiling this data into a
                    digestible Excel or PowerBi report.
                  </p>
                </li>
                <li className="flex">
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="text-teal-400 text-sm mr-6"
                  />
                  <p>
                    Report bugs and work with the dev team via Slack/Jira to
                    solve issues in our software.
                  </p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
