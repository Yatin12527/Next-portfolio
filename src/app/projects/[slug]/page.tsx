"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useInView } from "react-intersection-observer";
import projectList from "@/components/projectItems";
import {
  ProjectListComponent,
  ProjectListComponentCard2,
} from "@/components/projectListComponent";
import Link from "next/link";
import AosInit from "@/components/AosInit";

const StickySidebar = ({
  detail,
  isActive,
}: {
  detail: string;
  isActive: boolean;
}) => {
  return (
    <Link href={`#${detail}`}>
      <button
        className={`text-[12px] custom6:text-base font3 m-1 cursor-pointer transition-colors duration-300 ease-in-out ${
          isActive ? "text-white" : "text-gray-400"
        }`}
      >
        {detail}
      </button>
    </Link>
  );
};

function Project() {
  const params = useParams<{ slug: string }>();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const selectedProject = projectList.find((project) => {
    return project.title.toLowerCase() === params.slug?.toLowerCase();
  });

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  const handleSectionInView = (title: string) => {
    setActiveSection(title);
  };

  return (
    <>
      <AosInit />
      <div className="flex flex-col custom7:flex-row ">
        <div className="w-1/5">
          <Link href="/#projects">
            <button
              className="flex flex-row border space-x-2 border-zinc-500 rounded-3xl hover:shadow-[0px_0px_23px_0px_rgba(255,255,255,0.4)] transition-all ease-in-out cursor-pointer active:scale-90 w-fit p-3 bg-[rgba(1,9,28,255)] fixed top-3 custom7:top-5 left-3"
              data-aos="fade-right"
            >
              <ArrowLeft data-aos="fade-right" />
              <p>Back</p>
            </button>
          </Link>
        </div>
        <div className="w-full custom7:w-3/5 p-16 custom7:p-10 animate-slide-fade-in">
          <ProjectListComponent
            key={selectedProject.title}
            title={selectedProject.title}
            date={selectedProject.date}
            src={selectedProject.src}
            link={selectedProject.link}
          />
          {selectedProject.Info.map((info) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [ref, inView] = useInView({ threshold: 0.5 });
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useEffect(() => {
              if (inView) {
                handleSectionInView(info.title);
              }
            }, [inView]);
            return (
              <div key={info.description} ref={ref} id={info.title}>
                <ProjectListComponentCard2
                  title={info.title}
                  description={info.description}
                  details={info.details}
                  img={info.img}
                />
              </div>
            );
          })}
        </div>
        <div
          className="hidden custom7:block w-1/5 p-4 custom7:fixed top-14 right-0"
          data-aos="fade-left"
        >
          <div className="flex flex-col">
            <p className="text-xl custom6:text-2xl text-start font-extrabold drop-shadow-glow mb-3">
              On this page
            </p>
            {selectedProject.Info.map((info) => (
              <StickySidebar
                key={info.title}
                detail={info.title}
                isActive={activeSection === info.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
