import NewCard from "@/components/skillCard";
function Skills() {
  const cardComponent = [
    {
      title: "React JS",
      description: "Javascript library",
      src: "/react.png",
      bg: "bg-[#61DAFB4D]",
    },
    {
      title: "Next JS",
      description: "React Framework",
      src: "/next.png",
      bg: "bg-white",
    },
    {
      title: "Node JS",
      description: "Javascript Runtime",
      src: "/node.png",
      bg: "bg-green-900",
    },
    {
      title: "Express JS",
      description: "Node js Framework",
      src: "/express.png",
      bg: "bg-white",
    },
    {
      title: "MongoDB",
      description: "NoSQL Database",
      src: "/mongo.png",
      bg: "bg-green-900",
    },
    {
      title: "MySQL",
      description: "SQL Database",
      src: "/sql.png",
      bg: "bg-[#019dc5]",
    },
    {
      title: "Tailwind CSS",
      description: "CSS Framework",
      src: "/tailwind.webp",
      bg: "bg-white",
    },
    {
      title: "Git",
      description: "Version Control",
      src: "/git.png",
      bg: "bg-red-900",
    },
    {
      title: "C++",
      description: "Programming Language",
      src: "/cpp.png",
      bg: "bg-[#76b4dc]",
    },
    {
      title: "Data Studio",
      description: "Database Tool",
      src: "/datastudio.png",
      bg: "bg-white",
    },
    {
      title: "DevOps",
      description: "Collaboration Tool",
      src: "/devops.png",
      bg: "bg-white",
    },
  ];
  return (
    <div className="font4 ml-5 mt-20 sm:ml-20">
      <p
        className="text-[54px]  text-transparent bg-clip-text bg-gradient-to-r bg-blue-800 from-slate-200 to-gray-600 drop-shadow-glow font-bold "
        data-aos="fade-down"
      >
        <span className="font2 italic">Technologies</span> I&apos;ve worked with
      </p>
      <p className="mt-10 text-2xl font3 text-gray-500" data-aos="fade-down">
        I&apos;ve gained proficiency in a range of modern development{" "}
        <span className="font2 italic">technologies & tools</span> over the
        course of my learning journey.
      </p>
      <div
        className="grid grid-cols-1  items-center custom2:grid-cols-2 custom1:grid-cols-3 space-y-4 mt-3  "
        data-aos="fade-up"
      >
        {cardComponent.map((data) => (
          <NewCard
            key={data.title}
            title={data.title}
            description={data.description}
            src={data.src}
            bg={data.bg}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
