"use client";

import React, { useState } from "react";

const commands = [
  { id: "pnpm", label: "pnpm", command: "pnpm add @ncdai/github-stars" },
  { id: "yarn", label: "yarn", command: "yarn add @ncdai/github-stars" },
  { id: "npm", label: "npm", command: "npm install @ncdai/github-stars" },
  { id: "bun", label: "bun", command: "bunx --bun shadcn add @ncdai/github-stars" },
];

export default function InstallationCommand() {
  const [active, setActive] = useState("pnpm");

  return (
    <div className="text-[16px] sm:mx-5 md:mx-10 border-x border-[#eeeef0]">
      <div className="flex items-center border-b border-[#eeeef0] bg-background">
        {commands.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
              active === item.id
                ? "border-[#FFD700] text-[#FFD700]"
                : "border-transparent text-foreground"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="p-4 font-mono text-sm bg-background text-foreground">
        {commands.find((c) => c.id === active)?.command}
      </div>
    </div>
  );
}
