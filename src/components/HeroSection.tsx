import * as React from "react";

interface IHeroSectionProps {}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = (props) => {
  return (
    <section className=" h-screen grid place-content-center " id="Hero">
      <div className="flex flex-col gap-4 max-w-4xl mx-auto h-full ">
        <p className="text-teal-400">Hi, my name is</p>
        <p className="text-slate-200 text-6xl font-bold">Noel Vega</p>
        <p className="text-slate-400 text-6xl font-bold">
          I build things for the web.
        </p>
        <p className="text-slate-500 font-bold">
          I&apos;m a software engineer specializing in building and designing
          digital experiences. Currently am focused on Web app for developers
          and teams to easily document there code called{" "}
          <span className="text-teal-400 cursor-pointer">CodeFork</span>.
        </p>
        <button className="border font-semibold border-teal-400 px-8 p-4 text-teal-400 w-fit rounded hover:bg-slate-800">
          Check out my resume
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
