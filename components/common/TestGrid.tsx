"use client";

interface CommonGridRowProps {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}

export default function TestGrid({ left, right, className }: CommonGridRowProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 text-center cursor-pointer border-b border-[#eeeef0] text-base font-semibold ${className}`}>
      <div className="border-r border-[#eeeef0] p-3 ">{left}</div>
      <div className="border-l border-[#eeeef0] p-3">{right}</div>
    </div>
  );
}
