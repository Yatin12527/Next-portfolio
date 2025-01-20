import { MapPin } from "lucide-react";
import { ChevronDown } from "lucide-react";

function About() {
  return (
    <>
      <div className="justify-center items-center flex p-8 mt-56 font4 ">
        <img
          src="/star.svg"
          className="absolute left-10 md:relative w-10 sm:w-20 animate-pulse mb-96"
          data-aos="zoom-in"
          alt="star"
        />

        <div className="flex flex-col items-center" data-aos="zoom-out">
          <p className=" text-4xl sm:text-8xl text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 drop-shadow-glow">
            Hey, I&apos;m <span className="font-bold italic">Yatinder</span>
            <br /> I make <span className="font2">full-stack apps</span>
          </p>
          <div className="flex gap-2 mt-4 justify-center items-center">
            <MapPin className="text-slate-400" />
            <p className=" text-base sm:text-2xl  text-slate-400 font4">
              Haryana, India
            </p>
          </div>
          <img
            src="/star.svg"
            className=" w-10 sm:w-20 animate-pulse self-end  "
            data-aos="zoom-in"
            alt="star"
          />
          <ChevronDown
            className="animate-bounce"
            size={34}
            data-aos="zoom-in"
          />
        </div>
      </div>
    </>
  );
}

export default About;
