"use client";

import Images from "@/assets/Images/index";
import Image from "next/image";
import Link from "next/link";

export default function ImageContentGrid() {
  const images = [
    Images.model7, 
    Images.model9,
    Images.model2, 
    Images.model11
   ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-4">
      <div className="grid grid-cols-2 gap-3">
        {images.map((src, idx) => (
          <div key={idx}
            className="w-full h-52 sm:h-64 rounded-xl overflow-hidden bg-[var(--backgroundLight)] border border-[var(--border)]">
            <Image src={src} alt="preview" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 px-3 md:text-left">
        <h2 className="text-[22px] md:text-[26px] font-bold text-[var(--foreground)]">
          Stunning Layout
        </h2>

        <p className="text-[14px] md:text-[16px] text-[var(--foreground)]/80">
          Create beautiful UI sections with a modern responsive grid.
          No complicated flex tricks — clean and simple structure.
        </p>

        <Link href="/"
          className="self-start bg-[var(--foreground)] text-[var(--background)] px-4 py-2 rounded-lg text-sm hover:opacity-90 transition">
          Learn More
        </Link>
      </div>
    </div>
  );
}
