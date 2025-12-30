"use client";

import DiagonalDivider from "../ui/DiagonalDivider";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div
        aria-hidden="true"
        className="border-t border-b border-[#eeeef0] overflow-hidden"
      >
        <DiagonalDivider height={32} spacing={12} />
      </div>

      <div className="container border-x border-t border-[#eeeef0] py-4 text-center text-sm text-black/70 dark:text-white/70 px-4 sm:px-6 md:px-8">
  <p className="break-words sm:break-normal">
    © {new Date().getFullYear()}{" "}
    <a
      href="mailto:harshvaddoriya0319@gmail.com"
      className="hover:underline"
    >
      harshvaddoriya0319@gmail.com
    </a>
    . All rights reserved.
  </p>
</div>

    </footer>
  );
}
