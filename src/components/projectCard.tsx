import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "lucide-react";

interface AvatarProps {
  src: string[];
  fallback: string;
  bg: string[];
}

const NewAvatar = ({ src, fallback, bg }: AvatarProps) => {
  return (
    <div className="flex gap-2">
      {src.map((imageUrl, index) => (
        <Avatar key={index}>
          <div className={`${bg[index]} p-0.5`}>
            <AvatarImage src={imageUrl} />
          </div>
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
};
interface ProjectCardProps {
  title: string;
  description: string;
  src: string;
  year: string;
  avsrc: string[];
  bg: string[];
  spotlightcolor: string;
}
function ProjectCard({
  title,
  description,
  src,
  year,
  avsrc,
  bg,
  spotlightcolor,
}: ProjectCardProps) {
  return (
    <div className="flex justify-center md:justify-start">
      <Card
        spotlightColor={spotlightcolor}
        className="bg-[#1f1e1f] rounded-2xl font3 border border-gray-600 h-[340px] w-[330px] sm:h-[465px] sm:w-[600px] mt-10 transition-transform ease-in-out duration-300 hover:scale-95"
      >
        <CardHeader>
          <CardTitle className="mb-5 text-2xl flex justify-between font4 mt-2">
            {title}
            <a href={`projects/${title}`}>
              <Link className="hover:scale-125 ease-in-out duration-300 active:animate-in cursor-pointer" />
            </a>
          </CardTitle>
          <CardDescription>
            <span className="font-bold">{year}</span>&nbsp;-&nbsp;
            <span className="text-gray-400">{description}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row">
            <NewAvatar fallback="error" src={avsrc} bg={bg} />
          </div>
          <div className="mt-5">
            <img src={src} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProjectCard;
