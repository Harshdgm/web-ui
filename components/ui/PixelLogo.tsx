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
      <div className="text-gray-500 text-xs tracking-wider [writing-mode:vertical-rl] rotate-180 px-4">
        Logotype
      </div>
      <div className={`${pressStart.className} border-l border-[#eeeef0] flex items-center justify-center text-black text-[48px] leading-none font-normal`}>
        <span className="ml-2">Harsh Dev</span>
      </div>
    </div>
    </>
  );
}
