"use client";
import Link from "next/link";
import { useState } from "react";
import DecryptedAvatar from "@/components/DecryptedAvatar";
import Links from "../links";

export default function Navbar() {
  const [activeSegment, setActiveSegment] = useState({});

  const menuItems = [
    { title: "About", href: "about" },
    { title: "Skills", href: "skills" },
    { title: "Projects", href: "projects" },
    { title: "Journey", href: "journey" },
  ];

  return (
    <div className="w-full">
      <div className="flex top-4 fixed z-20 sm:w-full justify-center items-center">
        <div
          className="absolute z-40 left-3 sm:top-0 top-1 "
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <Link href="#about" title="Yatinder Chhoker">
            <DecryptedAvatar />
          </Link>
        </div>
        <div
          className="border border-white px-2 py-2 rounded-full hidden custom5:flex gap-4 bg-gradient-to-r from-black/30 to-gray-500/20 backdrop-blur-lg shadow-md"
          data-aos="fade-down"
        >
          {menuItems.map(({ title, href }) => (
            <Link
              key={href}
              href={`#${href}`}
              className={
                activeSegment === href
                  ? "text-white font1 drop-shadow-glow bg-white/20 backdrop-blur-3xl border-b-2 border-t-2  border-white rounded-[18px]  transition ease-in-out delay-350 px-2 py-0"
                  : "text-white px-2 font1 py-1 "
              }
              onClick={() => setActiveSegment(href)}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
      <div
        className="fixed  top-5 right-6 z-50"
        data-aos="fade-up"
        data-aos-delay="2000"
      >
        <Links />
      </div>
    </div>
  );
}
