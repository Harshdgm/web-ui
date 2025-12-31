"use client";

import Link from "next/link";
import { useState } from "react";
import { FiX, FiCopy } from "react-icons/fi";
import { LuCheck, LuCopy } from "react-icons/lu";
import { toast } from "react-toastify";

interface CommandModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  code: string;
}

export default function CommandModal({
  open,
  onClose,
  title,
  subtitle,
  code,
}: CommandModalProps) {
  const [copied, setCopied] = useState(false);
  if (!open) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success("Command copied");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
  };

  const formattedCode = (() => {
    try {
      return JSON.stringify(JSON.parse(code), null, 2);
    } catch {
      return code.trim();
    }
  })();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 dark:bg-white/10 ">
      <div className="w-full max-w-lg rounded-xl bg-[var(--background)] shadow-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
          <div>
            <h2 className="text-lg font-semibold text-[var(--foreground)]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-[var(--foreground)]/70">
                {subtitle}
              </p>
            )}
          </div>
          <button onClick={onClose}>
            <FiX className="h-5 w-5 text-[var(--foreground)] hover:opacity-80 transition" />
          </button>
        </div>

        <div className="px-6 py-4">
          <div className="relative rounded-lg bg-[var(--backgroundLight)] p-4 font-mono text-sm border border-[var(--border)]">
            <button onClick={handleCopy}
              className="absolute right-3 top-3 rounded-md p-1 hover:bg-black/5 dark:hover:bg-white/10">
              {/* <FiCopy className="h-4 w-4 text-[var(--foreground)]" /> */}
              {copied ? (
                 <LuCheck className="h-3 w-3 text-green-600" />
                ) : (
                 <LuCopy className="h-3 w-3" />
                )}
            </button>

            <pre className="whitespace-pre text-[var(--foreground)]">
              {formattedCode}
            </pre>
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-[var(--border)]">
          <Link
            href="https://jestjs.io/docs/getting-started"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--foreground)]/80 hover:underline">
              Read the docs
          </Link>
          <button
            onClick={onClose}
            className="rounded-md bg-[var(--foreground)] px-4 py-2 text-sm text-[var(--background)] hover:opacity-90 dark:bg-[var(--foreground)] dark:text-[var(--background)]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
