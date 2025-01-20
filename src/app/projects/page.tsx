import ProjectCard from "@/components/projectCard";
const projectComponent = [
  {
    title: "Problem Piper",
    description:
      "Developed the frontend of a platform for distributing programming challenges, leveraging next.js.",
    src: "/project1.png",
    year: "Nov 2024",
    avsrc: ["/next.png", "/tailwind.webp", "/python.png", "/fastapi.png"],
    bg: ["bg-white", "bg-white", "bg-blue-900", "bg-white"],
    spotlightcolor: "	rgba(255, 0, 255, 0.15)",
  },
  {
    title: "Portfolio",
    description:
      "A sleek portfolio built with Next.js and Tailwind CSS, featuring responsive design and modern aesthetics.",
    src: "/project2.png",
    year: "Jan 2025",
    avsrc: ["/next.png", "/tailwind.webp"],
    bg: ["bg-white", "bg-white"],
    spotlightcolor: "	rgba(255, 255, 255, 0.15)",
  },
];
function Projects() {
  return (
    <>
      <div className="font4 ml-0 p-5 sm:p-0 mt-32 sm:ml-20 " >
        <p
          className="text-6xl text-transparent bg-clip-text bg-gradient-to-r bg-blue-800 from-slate-200 to-gray-600 drop-shadow-glow font-bold"
          data-aos="fade-right"
        >
          Projects 
        </p>
        <div
          className=" grid grid-cols-1 custom4:grid-cols-2 gap-6"
          data-aos="fade-left"
        >
          {projectComponent.map((data) => (
            <ProjectCard
              key={data.title}
              title={data.title}
              description={data.description}
              src={data.src}
              year={data.year}
              avsrc={data.avsrc}
              bg={data.bg}
              spotlightcolor={data.spotlightcolor}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
