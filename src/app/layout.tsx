"use client";

import "../styles/globals.css";
import { usePathname } from 'next/navigation';
import GradientBackground from "../components/ui/gradient-background";
import Navbar from "../components/ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isProjectPage = pathname?.includes('/projects/');

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width initial-scale=1.0" />
      </head>

      <body className="text-white">
        <GradientBackground />
        {!isProjectPage && <Navbar />}
        <main className="max-w-screen-2xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
