import "../../../styles/globals.css";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" text-white bg-black w-full  ">
      <main className="max-w-screen-2xl mx-auto">{children}</main>
    </div>
  );
}
