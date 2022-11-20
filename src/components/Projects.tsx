import * as React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

interface IProjectsProps {}

const Projects: React.FunctionComponent<IProjectsProps> = (props) => {
  return (
    <section id="Work">
      <SectionHeader number={3} title="Some apps I've Built" />
      <div className="flex flex-col gap-52">
        <div className="relative flex h-fit">
          <div className="w-1/2  ">
            <Image
              src="/codefork.png"
              alt="CodeFork Landing Page"
              width={600}
              height={500}
              className="absolute "
            />
          </div>
          <div className="w-1/2  z-10">
            <p className="text-teal-300 text-sm text-right mb-2">
              Featured Project
            </p>
            <p className="text-2xl font-bold text-slate-200 text-right mb-6">
              Code Fork
            </p>
            <p className="text-slate-400 bg-slate-800 p-4 rounded">
              A web app built upon the GitHub API. Developers can view their
              code whithin multiple tabs and create documentation for their
              code. If the repo is public the documentation will also be public.
              With realtime chat features users can work together build there
              docs. Users who are viewing docs and repos can ask questions with
              other online users.
            </p>
          </div>
        </div>
        <div className="relative flex h-fit">
          <div className="w-1/2  ">
            <Image
              src="/codefork.png"
              alt="CodeFork Landing Page"
              width={600}
              height={500}
              className="absolute "
            />
          </div>
          <div className="w-1/2  z-10">
            <p className="text-teal-300 text-sm text-right mb-2">
              Featured Project
            </p>
            <p className="text-2xl font-bold text-slate-200 text-right mb-6">
              Team &apos;n Plan
            </p>
            <p className="text-slate-400 bg-slate-800 p-4 rounded">
              A web app built upon the GitHub API. Developers can view their
              code whithin multiple tabs and create documentation for their
              code. If the repo is public the documentation will also be public.
              With realtime chat features users can work together build there
              docs. Users who are viewing docs and repos can ask questions with
              other online users.
            </p>
          </div>
        </div>
        <div className="relative flex h-fit">
          <div className="w-1/2  ">
            <Image
              src="/codefork.png"
              alt="CodeFork Landing Page"
              width={600}
              height={500}
              className="absolute "
            />
          </div>
          <div className="w-1/2  z-10">
            <p className="text-teal-300 text-sm text-right mb-2">
              Featured Project
            </p>
            <p className="text-2xl font-bold text-slate-200 text-right mb-6">
              Team &apos;n Plan
            </p>
            <p className="text-slate-400 bg-slate-800 p-4 rounded">
              A web app built upon the GitHub API. Developers can view their
              code whithin multiple tabs and create documentation for their
              code. If the repo is public the documentation will also be public.
              With realtime chat features users can work together build there
              docs. Users who are viewing docs and repos can ask questions with
              other online users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
