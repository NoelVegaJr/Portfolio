import * as React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

interface IProjectsProps {}

const Projects: React.FunctionComponent<IProjectsProps> = (props) => {
  return (
    <section id="Work">
      <SectionHeader number={3} title="Some apps I've Built" />
      <div className="flex flex-col">
        <div className="">
          <div>
            <p className="text-teal-300 text-sm ">Featured Project:</p>
            <p className="text-2xl font-bold text-slate-200">Orderly</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative w-full sm:52 md:h-full rounded ">
              <video
                controls
                src="/OrderlyPreview.mp4"
                className=" top-0 w-full h-full"
              />
            </div>

            <div className="w-full h-full flex flex-col gap-4">
              <div>
                <p className="text-teal-300 text-xl mb-2">Purpose:</p>
                <p className="text-slate-300 bg-slate-800 p-4 rounded text-sm">
                  Create the all in one collaboration/task app to reduce the
                  number of licenses companies pay when buying individual
                  seperate solutions and makes collaborating using these
                  solutions seamless under one product. Live beta will be
                  released early March 2023. V1.0 is planned to be released
                  early May 2023
                </p>
              </div>
              <div>
                <p className="text-teal-300 text-xl">Tech:</p>

                <ul className="text-xs flex flex-wrap gap-x-4 gap-y-2 text-orange-400">
                  <li>Typescript</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Pusher / Websockets</li>
                  <li>Prisma</li>
                  <li>MySQL</li>
                  <li>Next Auth</li>
                  <li>AWS</li>
                  <li>S3</li>
                </ul>
              </div>
              <div className=" md:flex justify-center gap-20">
                <div className=" md:w-1/2 p-4">
                  <p className="text-teal-300 text-lg">Current features:</p>
                  <div className="gap-10 flex flex-col">
                    <div>
                      <p className="text-orange-400">Home Space:</p>
                      <ul className="text-slate-300 list-disc ml-6">
                        <li>Manage friends and connections.</li>
                        <li>
                          Create and launch into servers you created or
                          contribute too.
                        </li>
                        <li>Instant messaging with friends</li>
                        <li>Realtime friend online statusing</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-orange-400">Servers:</p>
                      <ul className="text-slate-300 list-disc ml-6">
                        <li>
                          Create and manage workspaces for teams/departments
                        </li>
                        <li>
                          Explore and join public workspaces on the server
                        </li>
                        <li>
                          Must have an invitation to join private workspaces
                        </li>
                        <li>Generate invitation links to the server</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-orange-400">Workspaces:</p>
                      <ul className="text-slate-300 list-disc ml-6">
                        <li>Create channels for different teams/objectives</li>
                        <li>
                          Each Channel comes with its own chat, task board and
                          white board
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className=" md:w-1/2 p-4">
                  <p className="text-teal-300 text-lg">In progress:</p>

                  <ul className="text-slate-300 list-disc ml-6">
                    <li>User Roles/Permissions</li>
                    <li>
                      Cloud Storage with explorer type navigation for your docs
                      and channels you are contributing too
                    </li>
                    <li>
                      Detailed tasks:
                      <ul className="text-slate-300 list-disc ml-6">
                        <li>Assignee</li>
                        <li>Deadlines</li>
                        <li>Kanban board</li>
                        <li>Checklist</li>
                      </ul>
                    </li>
                    <li>Chat GPT Assitant via Chat GPT API</li>
                    <li>Text on white board</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative flex h-fit">
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
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
