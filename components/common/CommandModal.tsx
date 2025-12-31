"use client";

import { FiX, FiCopy } from "react-icons/fi";

interface CommonModalProps {
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
}: CommonModalProps) {
  if (!open) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const formattedCode = (() => {
    try {
      return JSON.stringify(JSON.parse(code), null, 2);
    } catch {
      return code.trim();
    }
  })();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="w-full max-w-lg rounded-xl bg--background shadow-lg">
        <div className="flex items-center justify-between px-6 py-4 border border-[#eeeef0]">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text--foreground">
                {subtitle}
              </p>
            )}
          </div>
          <button onClick={onClose}>
            <FiX className="h-5 w-5 text-foreground hover:text-foreground" />
          </button>
        </div>

        <div className="px-6 py-4">
          <div className="relative rounded-lg bg-backgroundLight p-4 font-mono text-sm border border-[#eeeef0]">
            <button
              onClick={handleCopy}
              className="absolute right-3 top-3 rounded-md p-1 hover:bg-black/5 dark:hover:bg-white/10"
            >
              <FiCopy className="h-4 w-4 text-foreground" />
            </button>

            <pre className="whitespace-pre text-foreground">
                {formattedCode}
            </pre>
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-[#eeeef0]">
          <button className="text-sm text-foreground hover:underline">
            Read the docs
          </button>
          <button
            onClick={onClose}
            className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
