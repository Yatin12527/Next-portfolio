import ProjectCard from "@/components/projectCard";
const projectComponent = [
  {
    title: "ScanDine",
    description:
      "A platform to create digital menu and generate one time qr which is valid forever. Select from modern design and edit your menus whenever you want very easily! ",
    src: "/scandine.png",
    year: "July 2025",
    avsrc: [
      "/next.png",
      "/tailwind.webp",
      "/mongo.png",
      "/express.png",
      "/node.png",
    ],
    bg: ["bg-white", "bg-white", "bg-green-900", "bg-black"],
    spotlightcolor: "	rgba(255, 148, 112,0.45)",
  },
  {
    title: "AdMyBrand",
    description:
      "A modern, responsive landing page template with smooth animations, bold typography, and clean, modular design.",
    src: "/admybrand.png",
    year: "Jan 2025",
    avsrc: ["/next.png", "/tailwind.webp"],
    bg: ["bg-white", "bg-white"],
    spotlightcolor: "	rgba(128, 0, 128, 0.25)",
  },
];
function Projects() {
  return (
    <>
      <div className="font4 ml-0 p-5 sm:p-0 mt-32 sm:ml-20 ">
        <p
          className="text-6xl text-transparent bg-clip-text bg-gradient-to-r bg-blue-800 from-slate-200 to-gray-600 drop-shadow-glow font-bold"
          data-aos="fade-down"
        >
          Projects
        </p>
        <div
          className=" grid grid-cols-1 custom4:grid-cols-2 gap-6"
          data-aos="fade-up"
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
