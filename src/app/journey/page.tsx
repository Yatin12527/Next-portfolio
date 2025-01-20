import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface journeyInterface {
  props: {
    title: string;
    description: string;
    time: string;
    content: string;
    location: string;
  };
}

const JourneyCard = ({ props }: journeyInterface) => {
  return (
    <>
      <div className="flex justify-between items-center pt-3">
        <CardTitle className="font4 sm:text-lg text-xs ">{props.title}</CardTitle>
        <CardDescription className="font3  sm:text-base text-xs">{props.time}</CardDescription>
      </div>
      <div className="flex justify-between items-center m-0 p-0">
        <CardDescription className="font3 sm:text-base text-xs ">
          {props.description}
        </CardDescription>
        <CardDescription className="font3 sm:text-base text-xs">{props.location}</CardDescription>
      </div>

      <CardDescription
        className="font3 border-b-2 border-zinc-700 text-zinc-300 pb-2 sm:text-base text-xs"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </>
  );
};

const exp = [
  {
    title: "Full Stack Developer Intern",
    description: "Zucol",
    content: `
      - Worked on apyflux.com using .NET and Next.js.<br/>
      - Collaborated with teams to integrate APIs and improve performance.
    `,
    time: "Sept 2024 – Dec 2024 ",
    location: "Remote",
  },
  {
    title: "Head of Content Department",
    description: "Placement Cell, UIET Maharshi Dayanand University",
    content: `
      - Led content creation and collaborated with companies for recruitment drives.<br />
      - Analyzed feedback to improve strategies and content effectiveness.
    `,
    time: "Sept 2024 – Present ",
    location: "Rohtak, Haryana",
  },
];

const edu = [
  {
    title: "University Institute of Engineering and Technology, MDU",
    description: "B.Tech in Electronics and Communications Engineering",
    content: "CGPA: 8.5",
    time: "Oct 2022 – Present",
    location: "Rohtak, Haryana",
  },
  {
    title: "D.A.V Centenary Public School",
    description: "High School",
    content: "10th: 95.5%, 12th: 95.2%",
    time: "Apr 2018 – July 2021 ",
    location: "Samalkha, Panipat",
  },
];

function Journey() {
  return (
    <div className="flex  mt-32  flex-col ">
      <p
        className="text-[54px] ml-5 sm:ml-20 mb-7 text-transparent bg-clip-text bg-gradient-to-r bg-blue-800 from-slate-200 to-gray-600 drop-shadow-glow font-bold "
        data-aos="fade-down"
      >
        <span className="font2 italic">Experience &</span> Education
      </p>
      <div className="flex justify-center items-center sm:p-0 p-2">
        <Tabs
          defaultValue="experience"
          className="sm:w-[650px]   "
          data-aos="fade-right"
        >
          <TabsList className="grid w-full grid-cols-2 border border-zinc-800 bg-[#1f1e1f] h-10 sm:h-11 p-1">
            <TabsTrigger value="experience" className="sm:text-lg text-base font4 ">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="sm:text-lg text-base font4">
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <Card
              className="bg-[#1f1e1f] cursor-pointer border border-zinc-700"
              spotlightColor="rgba(255, 255, 255, 0.25) "
            >
              <CardHeader>
                {exp.map((data) => (
                  <JourneyCard key={data.title} props={data} />
                ))}
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="education">
            <Card
              className="bg-[#1f1e1f] cursor-pointer border-zinc-700 "
              spotlightColor="rgba(255, 255, 255, 0.25)"
            >
              <CardHeader>
                {edu.map((data) => (
                  <JourneyCard key={data.title} props={data} />
                ))}
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
export default Journey;
