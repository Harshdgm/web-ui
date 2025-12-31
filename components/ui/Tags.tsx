"use client";

import Link from "next/link";
import { techBadges } from "@/constant/techBadges";

export default function Tags() {
  return (
    <div className="flex flex-wrap justify-center gap-3 text-center">
      {techBadges.map(({ label, icon: Icon, link }) => (
        <Link
          key={label}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[var(--backgroundLight)] px-3 py-1 rounded-full text-[10px] font-medium 
                     border border-[var(--border)] cursor-pointer hover:opacity-80 hover:shadow-sm transition">
          <Icon className="text-[12px]" />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}
