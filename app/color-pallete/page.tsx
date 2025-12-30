import React from 'react'
import ColorPalleteBox from '@/components/ui/ColorPalleteBox'
import { COLOR_PALETTES } from "@/constant/colorPalettes";

export default function page() {
  return (
    <main className="border-y border-[#eeeef0]">
        <section className="container border-x border-b border-[#eeeef0] h-[50px]">
            <div className='p-10 border-x border-[#eeeef0]'></div>
        </section>
        <section className="container border-x border-[#eeeef0]">
            <div className='p-10 border-x border-[#eeeef0] bg-[#fafafa] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>   
                {COLOR_PALETTES.map((palette, index) => (
                <ColorPalleteBox key={index} colors={palette} />
                ))}
            </div> 
        </section>
        <section className="container border-x border-t border-[#eeeef0] h-[48px]">
            <div className='p-6 border-x border-[#eeeef0]'></div>
        </section>
    </main>
  )
}
