"use client";

import AnimatedText from "@/components/common/AnimatedText";

export default function Hero() {
  return (
    <div className="sm:m-5 md:m-15 lg:m-20">
      <AnimatedText
        text="Welcome to Web UI..."
        className="font-bold text-[24px] sm:text-[20px] md:text-[40px] lg:text-[70px]"
        wordDelay={0.6}     
        letterDelay={0.1}  
      />
    </div>
  );
}
