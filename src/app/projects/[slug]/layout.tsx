"use client";
import ProjectBG from "@/components/ui/projectPage-background";
import "../../../styles/globals.css";

import { useState, useEffect } from "react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <div className="relative">
      <ProjectBG />
      <main className="max-w-screen-2xl mx-auto font4">{children}</main>
    </div>
  ) : null;
}
