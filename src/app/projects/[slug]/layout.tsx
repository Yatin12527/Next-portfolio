"use client";
import "../../../styles/globals.css";
import { useState, useEffect } from "react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setLoading(true);
  }, []);

  return isClient && Loading ? (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="text-white">
        <main className="max-w-screen-2xl mx-auto font4">{children}</main>
      </body>
    </html>
  ) : null;
}
