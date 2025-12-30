"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Header() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const darkMode = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 dark:bg-foreground bg-background text-foreground  transition-colors duration-300 ">
      <div className="container flex items-center justify-between h-16 border-x border-[#eeeef0] relative px-4 sm:px-6 md:px-8">
        <Link href="/" className="text-lg md:text-xl font-semibold">
          Web UI
        </Link>

        <nav className="hidden md:flex gap-6 text-base">
          <Link href="/" className="transition-colors hover:underline hover:text-[#FFD700]">Home</Link>
          <Link href="/color-pallete" className="hover:underline hover:text-[#FFD700]">Color Pallete</Link>
          <Link href="/design-pattern" className="hover:underline hover:text-[#FFD700]">Design Pattern</Link>
        </nav>

        <button className="md:hidden p-2" aria-label="Open menu">
          <HiMenuAlt3 size={20} />
        </button>

        <button onClick={toggleTheme} aria-label="Toggle dark mode"
          className="p-2 rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
            {isDark ? <BsSun size={20} color="#FFD700" /> : <BsMoon size={20} color="#1a1a1a" />}
        </button>


        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[linear-gradient(90deg,#fcfcfc,#f0f0f0)] dark:bg-[linear-gradient(90deg,#171717,#1a1a1a)]"></span>
      </div>
    </header>
  );
}
