import { ArrowLeft } from "lucide-react";
import projectList from "@/components/projectItems";
import {
  ProjectListComponent,
  ProjectListComponentCard2,
} from "@/components/projectListComponent";

function Project() {
  return (
    <div className="flex flex-row ">
      {/* Left Section - 20% width */}

      <div className="w-1/5 p-4 top-0">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/#projects">
          <button className="flex flex-row border space-x-2 border-zinc-500 rounded-3xl hover:shadow-[0px_0px_23px_0px_rgba(255,255,255,0.4)] transition-all ease-in-out cursor-pointer active:scale-90 w-fit p-3 bg-[rgba(1,9,28,255)] fixed left-1">
            <ArrowLeft />
            <p>Back</p>
          </button>
        </a>
      </div>

      {/* Middle Section - 60% width */}
      <div className="w-3/5 p-10 ">
        {projectList.map((data) => (
          <ProjectListComponent
            key={data.title}
            title={data.title}
            date={data.date}
            src={data.src}
            link={data.link}
          />
        ))}
        {projectList.map((data) =>
          data.Info.map((info) => (
            <ProjectListComponentCard2
              key={info.description}
              title={info.title}
              description={info.description}
              details={info.details}
              img={info.img}
            />
          ))
        )}{" "}
      </div>

      {/* Right Section - 20% width */}
      <div className="w-1/5 p-4 fixed top-0 right-2">
        <div className="flex flex-col">
          <p
            className="text-5xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-gray-500 drop-shadow-glow font-bold text-center"
            data-aos="fade-down"
          >
            Title
          </p>
          <p className="text-2xl mb-3 text-gray-500" data-aos="fade-down">
            Jan 2025
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
