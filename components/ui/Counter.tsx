"use client";

import { motion,  type Variants } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { id: 1, number: 10, suffix: "+", label: "Team Size" },
  { id: 2, number: 280, suffix: "+", label: "Hours of Work a Month" },
  { id: 3, number: 40, suffix: "+", label: "Projects Completed" },
  { id: 4, number: 20, suffix: "+", label: "Clients Trusted Us" },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Counter() {
  return (
    <section className="px-var(--wrapspace) py-5 border-y border-[#eeeef0]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto flex max-w-[calc(var(--wrap)+var(--wrapspace)*2)] flex-wrap overflow-hidden rounded-[30px]"
      >
        {stats.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            variants={itemVariants}
            className=" flex-1 basis-1/4 text-center px-5 py-5
              border-r border-white/20 last:border-r-0
              max-[992px]:basis-1/2
              max-[992px]:px-3.75
              max-[992px]:py-10
              max-[992px]:border-r-0
              max-[992px]:border-b max-[992px]:border-white/20
              max-[992px]:nth-last-1:border-b-0
              max-[992px]:nth-last-2:border-b-0">
            <h3 className="font-bold leading-tight text-[clamp(32px,6vw,70px)]">
              <CountUp
                start={0}
                end={item.number}
                duration={2}
                suffix={item.suffix}
              />
            </h3>

            <p className="mt-1.5 font-medium text-[clamp(14px,2vw,20px)]">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
