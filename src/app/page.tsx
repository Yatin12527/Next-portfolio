import Skills from "./skills/page";
import Projects from "./projects/page";
import Home from "./about/page";
import Journey from "./journey/page";
import AosInit from "../components/AosInit";

export default function Page() {
  return (
    <>
      <AosInit />
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <div id="home" className="h-1"></div>
        <div className="flex-grow">
          <Home />
        </div>
        <div className="h-1" id="skills"></div>
        <div className="min-h-screen">
          <Skills />
        </div>
        <div className="min-h-screen mt-10" id="projects">
          <Projects />
        </div>
        <div className="min-h-screen mt-10 mb-2" id="journey">
          <Journey />
        </div>
      </div>
    </>
  );
}
