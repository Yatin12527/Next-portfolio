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
        <CardTitle className="font4 sm:text-lg text-xs ">
          {props.title}
        </CardTitle>
        <CardDescription className="font3  sm:text-base text-xs">
          {props.time}
        </CardDescription>
      </div>
      <div className="flex justify-between items-center m-0 p-0">
        <CardDescription className="font3 sm:text-base text-xs ">
          {props.description}
        </CardDescription>
        <CardDescription className="font3 sm:text-base text-xs">
          {props.location}
        </CardDescription>
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
    - Developed and optimized apyflux.com using .NET, Next.js, and SQL Server, reducing page load time by 40% and improving UX, leading to a 20% increase in user engagement.<br/>
    - Migrated codebase to App Router and integrated APIs across modules, improving routing performance and reducing data-fetching latency by 25%.<br/>
    - Built an admin dashboard with PrimeReact and Shadcn and implemented SEO improvements (+35%), boosting admin productivity and search visibility.<br/>
  `,
    time: "Sept 2024 – Dec 2024",
    location: "Remote",
  },
  {
    title: "Head Student Coordinator",
    description: "Placement Cell, UIET Maharshi Dayanand University",
    content: `
    - Led a team of 15 members, managing campus placements for 600+ students and organizing workshops and mock interviews to increase placement success rate by 25%.<br/>
    - Increased company participation by 30% and strengthened college-HR relationships, resulting in 40% more companies revisiting for placements.<br/>
    - Streamlined student placement data management, reducing errors by 90% and improving overall reporting and coordination efficiency.<br/>
  `,
    time: "Sept 2024 – Present",
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
          data-aos="fade-up"
        >
          <TabsList className="grid w-full grid-cols-2 border border-zinc-800 bg-[#1f1e1f] h-10 sm:h-11 p-1">
            <TabsTrigger
              value="experience"
              className="sm:text-lg text-base font4 "
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="sm:text-lg text-base font4"
            >
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
