import React from 'react'
import Banner from "@/components/ui/Banner";
import SmallBanner from '@/components/ui/SmallBanner';
import PricingSection from '@/components/ui/PricingSection';

export default function page() {
  return (
    <main className="border-y border-[#eeeef0]">
        <section className="container border-x border-b border-[#eeeef0] h-12.5">
            <div className='p-10 border-x border-[#eeeef0]'></div>
        </section>
        <section className="container border-x border-[#eeeef0] ">
            <div className='p-2 border-x border-[#eeeef0] dark:bg-foreground bg-background'>   
              <Banner />
              <SmallBanner />
              <PricingSection />
            </div> 
        </section>
        <section className="container border-x border-t border-[#eeeef0] h-12">
            <div className='p-6 border-x border-[#eeeef0]'></div>
        </section>
    </main>
  )
}
