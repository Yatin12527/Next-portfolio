import { ArrowLeft } from "lucide-react";

function Project() {
  return (
    <div className="flex flex-col mt-10">
      <div id="left section" className="p-4">
        <a href="/#projects">
          <button className="flex flex-row border space-x-2 border-zinc-500 rounded-3xl hover:shadow-[0px_0px_30px_16px_rgba(100,100,100,0.6)] transition-all ease-in-out cursor-pointer active:scale-90 w-fit p-3 bg-[rgba(1,9,28,255)]">
            <ArrowLeft />
            <p>Back</p>
          </button>
        </a>
      </div>
      <div id="main section"></div>
      <div id="right sticky bar"></div>
    </div>
  );
}

export default Project;
