import ProjectCard from "@/components/projectCard";
import { Card } from "./ui/card";

function Journey() {
  return (
    <div>
      <Card>
        <div className="flex justify-between items-center">
          <CardTitle key={data.title} className="font4 text-xl ">
            {data.title}
          </CardTitle>
          <CardDescription className="font3">{data.time}</CardDescription>
        </div>
        <CardDescription className="font3">{data.description}</CardDescription>
        <CardDescription className="font3 border-b-2 border-zinc-600 pb-2 text-zinc-300">
          {data.content}
        </CardDescription>
      </Card>
    </div>
  );
}

export default Journey;
