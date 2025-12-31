"use client";

import React, { useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";
import { toast } from "react-toastify";
import {commands} from "@/constant/commands";
import CommandModal from "../common/CommandModal";

export default function InstallationCommand() {
  const [active, setActive] = useState("pnpm");
  const [copied, setCopied] = useState(false);
  const [openMCP, setOpenMCP] = useState(false);

  const handleMCP = () => {
     setOpenMCP(true);
  }

  const handleCopy = () => {
    const command = commands.find((c) => c.id === active)?.command;
    if (!command) return;

    navigator.clipboard.writeText(command);
    toast.success("Command copied");

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
     <CommandModal
        open={openMCP}
        onClose={() => setOpenMCP(false)}
        title="Configure MCP"
        subtitle="Copy and paste the following code into your project's components.json."
        code={`{
            "registries": {
                "@ncdai": "https://chanhdai.com/r/{name}.json"
                }
            }`
        }
      />
   
    <div className="text-[16px] sm:mx-5 md:mx-10 border-x border-[#eeeef0]">
      <div className="font-mono flex items-center justify-between border-b border-[#eeeef0] bg-[var(--backgroundLight)]">
        <div className="flex">
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
        <div className="flex">
            <p className="cursor-pointer " onClick={handleMCP}>MCP</p>
            <button onClick={handleCopy} className="p-2 mx-3  text-foreground hover:text-primary transition-colors flex items-center hover:bg-background hover:rounded-[5px]">
                {copied ? (
                    <LuCheck className="h-3 w-3 text-green-600" />
                ) : (
                    <LuCopy className="h-3 w-3" />
                )}
            </button>
        </div>
      </div>

      <div className="p-4 font-mono text-sm bg-[var(--backgroundLight)] text-foreground">
        {commands.find((c) => c.id === active)?.command}
      </div>
    </div>
    </>
  );
}
