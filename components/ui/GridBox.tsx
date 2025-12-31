"use client";

import React, { useEffect, useState } from "react";
import GridBoxProps from "@/components/common/GridBoxProps";
import Images from "@/assets/Images/index";
import Image from "next/image";

const images = [
  Images.model1,
  Images.model2,
  Images.model11,
  Images.model6,
  Images.model9,
  Images.model10,
  Images.model7,
  Images.model5,
];

const GridBox: React.FC = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
        setIsDesktop(window.innerWidth >= 1024);
        };

        checkScreen(); 
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return(
        <>
        <div className="container border-x border-b border-[#eeeef0] h-12.5">
            <div className="h-full border-x border-[#eeeef0]" />
        </div>

        {isDesktop && <GridBoxProps images={images} />}

        {!isDesktop && (
            <div className="container border-x border-[#eeeef0]">
                <div className="grid grid-cols-2">
                    {images.map((img, index) => (
                    <div key={index} className="aspect-square border border-[#eeeef0]">
                        <Image
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"/>
                    </div>
                    ))}
                </div>
            </div>
        )}
        <div className="container border-x border-t border-[#eeeef0] h-12">
            <div className="h-full border-x border-[#eeeef0]" />
        </div>
        </>
  ) 
  
}

export default GridBox;