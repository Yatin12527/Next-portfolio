interface SkillCardProps {
  title: string;
  description: string;
  src: string;
  bg: string;
}
function NewCard({ title, description, src, bg }: SkillCardProps) {
  return (
    <>
      {" "}
      <div className=" w-[300px] custom3:w-[320.675px] bg-[#1f1e1f] rounded-2xl font3 border border-gray-300/20 backdrop-blur-lg cursor-pointer shine-effect " >
        <div className="flex gap-2 p-1 pr-12">
          <div className={`${bg} p-1 rounded-2xl`}>
            <img src={src} className="w-16 h-16 "></img>
          </div>
          <div className="flex flex-col justify-center px-2">
            <p className="text-xl text-gray-300 font-bold mb-1">{title}</p>
            <p className="text-base text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCard;
