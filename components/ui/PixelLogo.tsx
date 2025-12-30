import { Press_Start_2P } from "next/font/google";
import DiagonalDivider from "./DiagonalDivider";

const pressStart = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export default function Logo() {
  return (
    <>
    <div aria-hidden="true"
      className="border-t border-b border-[#eeeef0] overflow-hidden">
      <DiagonalDivider height={32} spacing={12} />
    </div>
    <div className="container flex gap-40 border-x border-[#eeeef0]">
      <div className="text-gray-500 text-xs tracking-wider [writing-mode:vertical-rl] rotate-180 px-4 pl-7.5 border-l border-[#eeeef0]">
        Logotype
      </div>
      <div className={`${pressStart.className} flex items-center justify-center w-full  text-[48px] leading-none font-normal mr-30`}>
        Harsh Dev
      </div>
    </div>
    </>
  );
}
