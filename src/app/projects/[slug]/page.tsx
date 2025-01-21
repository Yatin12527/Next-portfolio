import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import GlowingDot from "../../../components/glowdot";
function Project() {
  return (
    <div className="flex flex-row mt-10  items-center justify-between">
      <div id="left section" className="p-4 fixed top-1 left-1">
        <a href="/#projects">
          <button className="flex flex-row border space-x-2 border-zinc-500 rounded-3xl hover:shadow-[0px_0px_23px_0px_rgba(255,255,255,0.4)] transition-all ease-in-out cursor-pointer active:scale-90 w-fit p-3 bg-[rgba(1,9,28,255)]">
            <ArrowLeft />
            <p>Back</p>
          </button>
        </a>
      </div>
      <div id="main section" className="p-10 ">
        <div id="first card">
          <div className="flex justify-between items-center pr-3">
            <div className="flex flex-col">
              <p
                className=" text-5xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r bg-blue-800 from-slate-200 to-gray-500 drop-shadow-glow font-bold  text-center"
                data-aos="fade-down"
              >
                Title
              </p>
              <p className="text-2xl  mb-3 text-gray-500" data-aos="fade-down">
                Jan 2025
              </p>
            </div>
            <Image
              src="/moveupright.svg"
              width={40}
              height={40}
              alt="moveupright"
              className="hover:scale-125 transition-all ease-in-out duration-300 active:scale-75"
            />
          </div>
          <Image
            src="/project2.png"
            width={800}
            height={1000}
            alt="project pic"
          />
        </div>
        <div id="second card" className="mt-10">
          <div className="flex items-center gap-2">
            <GlowingDot />
            <p
              className=" text-xl text-gray-300 drop-shadow-glow font-extrabold  text-center "
              data-aos="fade-down"
            >
              Bullet point
            </p>
          </div>
          <div className="flex flex-col mt-10 px-2 gap-y-4">
            <p
              className=" text-4xl text-start font-extrabold  drop-shadow-glow  "
              data-aos="fade-down"
            >
              Heading
            </p>
            <p className="font3 w-[790px] text-gray-400">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
        <div className="h-96"></div>
      </div>

      <div id="right sticky bar">
      <div className="flex flex-col">
              <p
                className=" text-5xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r bg-blue-800 from-slate-200 to-gray-500 drop-shadow-glow font-bold  text-center"
                data-aos="fade-down"
              >
                Title
              </p>
              <p className="text-2xl  mb-3 text-gray-500" data-aos="fade-down">
                Jan 2025
              </p>
            </div>
      </div>
    </div>
  );
}

export default Project;
