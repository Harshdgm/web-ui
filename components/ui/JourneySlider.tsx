"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { journeyData } from "@/data/JourneyData";

const JourneySlider = () => {
  return (
    <section className="w-full py-10 relative bg-(--background) text-(--foreground)">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        className=" [&_.swiper-button-next]:hidden
          [&_.swiper-button-prev]:hidden
          [&_.swiper-pagination]:static
          [&_.swiper-pagination]:mt-10
          [&_.swiper-pagination-bullet]:bg-transparent
          [&_.swiper-pagination-bullet]:text-[#eeeef0]
          dark:[&_.swiper-pagination-bullet]:text-[#eeeef0]
          [&_.swiper-pagination-bullet]:opacity-100
          [&_.swiper-pagination-bullet]:mx-[15px]
          [&_.swiper-pagination-bullet]:text-base
          [&_.swiper-pagination-bullet-active]:text-(--foreground)
          [&_.swiper-pagination-bullet-active]:font-semibold">
           
         {journeyData.map((step) => (
            <SwiperSlide key={step.id}>
                <div className="relative flex items-center justify-between py-15 max-md:flex-col max-md:gap-5 max-md:px-5 max-md:py-10">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-(--foreground) z-0 max-md:top-5" />

                <div className="relative flex-[0_0_40%] z-10 max-md:w-full">
                    <div className="absolute left-21 max-md:static max-md:text-center max-md:mb-5">
                    <p className="text-[clamp(24px,6vw,55px)] leading-[clamp(32px,8vw,75px)] font-bold">
                        #{step.id}
                    </p>
                    </div>

                    <h3
                    className="absolute left-24 -translate-y-full border-l border-(--foreground) pl-4 text-[clamp(16px,2vw,18px)] font-semibold leading-[3.4]
                        max-md:static max-md:translate-y-0 max-md:border-none max-md:pl-0 max-md:text-center max-md:leading-snug">
                    {step.title}
                    </h3>
                </div>

                <div
                    className="relative z-10 flex items-center justify-center flex-1
                    bg-(--background) border border-(--foreground) p-10 rounded-3xl min-h-64
                    max-md:p-5 max-md:rounded-2xl">
                    <p className="text-base leading-relaxed max-md:text-sm text-(--foreground)">
                    {step.description}
                    </p>
                </div>
                <div className="w-[20%] max-md:hidden" />
                </div>
            </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
};

export default JourneySlider;
