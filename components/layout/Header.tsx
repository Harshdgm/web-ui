"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="container relative flex h-16 items-center justify-between border-x border-[#eeeef0]">
        <Link href="/" className="text-lg font-semibold">
          Web UI
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>

        <span className="absolute bottom-0 left-0 w-full h-2px bg-[linear-gradient(90deg,#fcfcfc,#f0f0f0)]"></span>
      </div>
    </header>
  );
}
