import { Link } from "@nextui-org/react";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <div className="relative flex flex-col h-screen">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://www.linkedin.com/in/engineer-chetan-sharma/"
          title="Chetan's LinkedIn"
        >
          <span className="text-default-600">Designed & built by</span>
          <p className="text-primary">Chetan Sharma</p>
        </Link>
      </footer>
    </div>
  );
}
