import React from "react";
import Image from "next/image";
import GlowingDot from "./glowdot";
import Link from "next/link";
import AosInit from "./AosInit";
interface ProjectListComponentProps{
    title:string,
    src:string,
    date:string,
    link:string,
}
interface ProjectListComponentCard2Props{
    title:string,
    description:string,
    details:string,
    img:string,
    
}

function ProjectListComponent({title, src, date, link}:ProjectListComponentProps) {
  return (
    <>
    <AosInit/>
    <div id="first-card">
      <div className="flex justify-between items-center pr-3">
        <div className="flex flex-col">
          <p
            className="text-5xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-gray-500 drop-shadow-glow font-bold text-center"
            // data-aos="fade-down"
          >
            {title}
          </p>
          <p className="text-2xl mb-3 text-gray-500" data-aos="fade-down">
            {date}
          </p>
        </div>
        <Link href={link} target="blank">
        <Image
          src="/moveupright.svg"
          width={40}
          height={40}
          alt="moveupright"
          className="hover:scale-125 transition-all ease-in-out duration-300 active:scale-75"
        />
        </Link>
      </div>
      <img
        src={src}
        width={800}
        height={1000}
        alt="project pic"
        className="w-full"
      />
    </div>
    </>
  );
}

function ProjectListComponentCard2({title,description,details,img}:ProjectListComponentCard2Props) {
  return (
    <div id="second-card" className="mt-10">
      <AosInit/>
      <div className="flex items-center gap-2">
        <GlowingDot />
        <p
          className="text-xl text-gray-300 drop-shadow-glow font-extrabold text-center"
          // data-aos="fade-down"
          id={title}
        >
          {title}
        </p>
      </div>
      <div className="flex flex-col mt-10 px-2 gap-y-4 border border-b-zinc-500 pb-4">
        <p
          className="text-4xl text-start font-extrabold drop-shadow-glow"
          // data-aos="fade-down"
        >
          {description}
        </p>
        <p className="font3 text-gray-400">
          {details}
        </p>
        <img
          src={img}
          width={800}
          height={1000}
          alt="project pic"
          className="w-full"
        />
      </div>
    </div>
    
  );
}

export { ProjectListComponent, ProjectListComponentCard2 };