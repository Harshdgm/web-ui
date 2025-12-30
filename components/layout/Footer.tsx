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

      <div className="container border-x border-t border-gray-200 dark:border-white/10 py-4 px-4 sm:px-6 md:px-8 text-center text-sm text-gray-700 dark:text-gray-300">
        <p className="wrap-break-words sm:break-normal">
          © {new Date().getFullYear()}{" "}
          <a
            href="mailto:harshvaddoriya0319@gmail.com"
            className="text-gray-800 dark:text-gray-300 hover:underline"
          >
            harshvaddoriya0319@gmail.com
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
