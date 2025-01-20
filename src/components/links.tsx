import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

const linksData = [
  {
    href: "https://www.linkedin.com/in/yatinder-kumar-955b3a272/",
    src: "/linkedin.svg",
    fallback: "Linkedin",
  },
  {
    href: "https://github.com/Yatin12527",
    src: "/github.svg",
    fallback: "Github",
  },
  {
    href: "mailto:chhoker.yatinder123@gmail.com",
    src: "/gmail.svg",
    fallback: "Email",
  },
  {
    href: "https://drive.google.com/file/d/1ufW0Qn0emmKuISf8jdKjZlJw6buQbd-b/view?usp=drive_link",
    src: "/resume.svg",
    fallback: "Resume",
  },
];

interface LinkInterface {
  href: string;
  src: string;
  fallback: string;
}

const LinkItem = ({ href, src, fallback }: LinkInterface) => {
  return (
    <Avatar className="hover:scale-125 ease-in-out duration-300 active:animate-in cursor-pointer">
      <Link href={href} target="blank" title={fallback}>
        <AvatarImage src={src} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Link>
    </Avatar>
  );
};

const Links = () => {
  return (
    <div className="flex gap-3 md:gap-5">
      {linksData.map((link, index) => (
        <LinkItem
          key={index}
          href={link.href}
          src={link.src}
          fallback={link.fallback}
        />
      ))}
    </div>
  );
};

export default Links;
