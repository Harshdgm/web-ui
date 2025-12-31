"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  wordDelay?: number;
  letterDelay?: number;
}

export default function AnimatedText({
  text,
  className = "",
  wordDelay = 0.4,
  letterDelay = 0.05,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block mr-2"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: wordIndex * wordDelay,
                staggerChildren: letterDelay,
              },
            },
          }}
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block text-stroke"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
}
