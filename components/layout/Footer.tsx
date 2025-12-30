"use client";

import DiagonalDivider from "../ui/DiagonalDivider";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div aria-hidden="true"
          className="border-t border-b border-[#eeeef0] overflow-hidden">
          <DiagonalDivider height={32} spacing={12} />
      </div>
      <div className="container text-center text-sm text-black/70 border-t py-4 border-x border-[#eeeef0]">
        © {new Date().getFullYear()} harshvaddoriya0319@gmail.com. All rights reserved.
      </div>
    </footer>
  );
}
