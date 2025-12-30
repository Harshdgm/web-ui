"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  // Load saved theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // default to system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="container relative flex h-16 items-center justify-between border-x border-[#eeeef0]">
        <Link href="/" className="text-lg font-semibold">
          Web UI
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle dark mode"
        >
          {isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>

        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[linear-gradient(90deg,#fcfcfc,#f0f0f0)] dark:bg-[linear-gradient(90deg,#171717,#1a1a1a)]"></span>
      </div>
    </header>
  );
}
