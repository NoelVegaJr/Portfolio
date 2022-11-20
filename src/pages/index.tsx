import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className=" bg-slate-900 h-full ">
      <Navbar />
      <div className="flex mt-16 grow ">
        <div className="flex flex-col items-center gap-6  h-full justify-end fixed bottom-0">
          <ul className="flex flex-col items-center">
            <li className="cursor-pointer hover:-translate-y-2 transition-all duration-200 p-2 px-6 text-slate-400 hover:text-teal-400 rotate-90">
              <FontAwesomeIcon icon={faGithubAlt} className="" />
            </li>
            <li className="cursor-pointer hover:-translate-y-2 transition-all duration-200 p-2 text-slate-400 hover:text-teal-400 rotate-90">
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
          </ul>
          <div className="h-32 w-0.5  bg-slate-400 " />
        </div>
        <div className=" max-w-5xl mx-auto">
          <HeroSection />
          <main className=" bg-slate-900 flex flex-col gap-96">
            <About />
            <WorkExperience />
            <Projects />
            <Contact />
          </main>
        </div>

        <div className="flex flex-col items-center gap-24 h-full justify-end fixed -right-10 bottom-0">
          <p className="text-slate-400 rotate-90">noeljr126@gmail.com</p>
          <div className="h-32 w-0.5  bg-slate-400 " />
        </div>
      </div>
      <Footer />
    </div>
  );
}
