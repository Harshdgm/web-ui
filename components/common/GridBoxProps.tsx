import React from "react";
import Image, { StaticImageData } from "next/image";
import { hasGrayBg } from "@/utils/grid"

interface GridBoxProps {
  images: (string | StaticImageData)[];
}

const rows = 4;
const cols = 4;

const GridBox: React.FC<GridBoxProps> = ({ images }) => {
  let imageIndex = 0; 

  return (
    <>
      <div className="container border-x border-[#eeeef0]">
        <div className="border-x border-[#eeeef0] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: rows * cols }).map((_, index) => {
            const row = Math.floor(index / cols) + 1;
            const col = (index % cols) + 1;

            const isGray = hasGrayBg(row, col);

            return (
              <div
                key={index}
                className="aspect-square border border-[#eeeef0] flex items-center justify-center"
                style={{ backgroundColor: isGray ? "#eeeef0" : "transparent" }}
              >
                {!isGray && images[imageIndex] && (
                  <Image
                    src={images[imageIndex++]}
                    alt={`Grid ${index + 1}`}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GridBox;
