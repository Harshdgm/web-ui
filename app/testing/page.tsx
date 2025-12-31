"use client";

import DiagonalDivider from "@/components/ui/DiagonalDivider";
import ImageGrid from "@/components/ui/ImageGrid";
import InstallationCommand from "@/components/ui/InstallationCommand";
import Tags from "@/components/ui/Tags";
import TestOptions from "@/components/ui/TestOptions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Testing() {
  return (
    <>
        <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar
            closeOnClick
            pauseOnHover={false}
        />
    
        <main className="border-y border-[#eeeef0]">
            <section aria-hidden="true" className="border-b border-[#eeeef0] overflow-hidden">
                <DiagonalDivider height={32} spacing={12} />
            </section>
            <section>
                <div className="container border-x border-[#eeeef0]">
                    <div className="px-4 py-0 font-bold text-[24px] sm:mx-5 md:mx-10 border-x border-[#eeeef0]">
                        Components
                    </div>
                </div>
                <div className="container border-x border-t border-b border-[#eeeef0] overflow-hidden">
                    <div className="py-2 px-4 text-[16px] sm:mx-5 md:mx-10 border-x border-[#eeeef0]">
                        A collection of reusable components.
                    </div>
                </div>
                <div className="container border-x border-t border-b border-[#eeeef0] overflow-hidden">
                    <InstallationCommand />
                </div>
            </section>
              
            <section className="container border-x border-[#eeeef0] h-10">
                <div className="px-4 py-5 font-bold text-[24px] sm:mx-5 md:mx-10 border-x border-[#eeeef0]" />
            </section>  
            <section aria-hidden="true" className="border-t border-b border-[#eeeef0] overflow-hidden">
                <DiagonalDivider height={32} spacing={12} />
            </section> 
            <section>
                <div className="container border-x border-[#eeeef0]">
                    <div className=" font-bold text-[24px] sm:mx-5 md:mx-10 border-x border-[#eeeef0]">
                        <TestOptions />
                    </div>
                </div>
            </section>
            <section className="container border-x border-b border-[#eeeef0] ">
                <div className="p-4 flex items-center justify-center gap-3 text-[12px]  sm:mx-5 md:mx-10 border-x border-[#eeeef0] bg-[var(--backgroundLight)]">
                    Use For <Tags />
                </div>
            </section>
            <section className="container border-x border-[#eeeef0] h-10">
                <div className="px-4 py-5 font-bold text-[24px] sm:mx-5 md:mx-10 border-x border-b border-[#eeeef0]" />
            </section> 
            <section className="container border-x  border-[#eeeef0]">
                <div className=" sm:mx-5 md:mx-10 border-x border-[#eeeef0]">
                    <ImageGrid />
                </div>
            </section>
        </main>
    </>
  );
}


