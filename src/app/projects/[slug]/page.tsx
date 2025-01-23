"use client";

import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import projectList from "@/components/projectItems";
import {
  ProjectListComponent,
  ProjectListComponentCard2,
} from "@/components/projectListComponent";
import AosInit from "@/components/AosInit";

function Project() {
  const params = useParams<{ slug: string }>();

  const selectedProject = projectList.find((project) => {
    return project.title.toLowerCase() === params.slug?.toLowerCase();
  });

  if (!selectedProject) {
    return <div>Project not found. Check console logs for details.</div>;
  }

  return (
    <>
      <AosInit />
      <div className="flex flex-row ">
        <div className="w-1/5 p-4 top-0">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/#projects">
            <button className="flex flex-row border space-x-2 border-zinc-500 rounded-3xl hover:shadow-[0px_0px_23px_0px_rgba(255,255,255,0.4)] transition-all ease-in-out cursor-pointer active:scale-90 w-fit p-3 bg-[rgba(1,9,28,255)] fixed left-1">
              <ArrowLeft />
              <p>Back</p>
            </button>
          </a>
        </div>

        <div className="w-3/5 p-10 ">
          <ProjectListComponent
            key={selectedProject.title}
            title={selectedProject.title}
            date={selectedProject.date}
            src={selectedProject.src}
            link={selectedProject.link}
          />

          {selectedProject.Info.map((info) => (
            <ProjectListComponentCard2
              key={info.description}
              title={info.title}
              description={info.description}
              details={info.details}
              img={info.img}
            />
          ))}
        </div>

        <div className="w-1/5 p-4 fixed top-0 right-2">
          <div className="flex flex-col"></div>
        </div>
      </div>
    </>
  );
}

export default Project;
