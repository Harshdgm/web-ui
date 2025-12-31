import React from "react";
import GridBoxProps from "@/components/common/GridBoxProps";
import Images from "@/assets/Images/index";

const images = [
  Images.model1,
  Images.model2,
  Images.model9,
  Images.model10,
  Images.model11,
  Images.model6,
  Images.model7,
  Images.model5,
];

const GridBox: React.FC = () => {
  return(
    <>
      <div className="container border-x border-b border-[#eeeef0] h-12.5">
        <div className="h-full border-x border-[#eeeef0]" />
      </div>
      <GridBoxProps images={images} />
      <div className="container border-x border-t border-[#eeeef0] h-12">
        <div className="h-full border-x border-[#eeeef0]" />
      </div>
    </>
  ) 
  
}

export default GridBox;