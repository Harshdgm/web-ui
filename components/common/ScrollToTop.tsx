"use client";

import { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 border border-[#FFD700] rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 transition">
      <GoArrowUp size={20}/>
    </button>
  );
};

export default ScrollToTop;
