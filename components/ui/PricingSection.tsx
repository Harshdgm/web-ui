import React from "react"
import PricingCard from "@/components/common/PricingCard"

export default function PricingSection() {
  return (
    <section className="mx-auto max-w-[var(--wrap)] px-[var(--wrapspace)] py-6 md:py-8 lg:py-10">
      <div className="w-full pb-3 border-b border-[#eeeef0]">
           <h1 className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-bold">Planning</h1>
           <p className="mt-2 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">set payment planning according to your usecase with monthly basis</p>
      </div>
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center pt-10">
        <PricingCard
          title="Basic"
          description="There are some limitations that maybe annoying."
          price="$99.99"
          duration="year"
          transactionFee="2% + $0.30 per transaction"
          buttonText="Try for free 14 days"
          features={[
            "Basic SEO Tools",
            "Unlock Campaign features",
            "Limited keywords",
            "25 Research",
            "General Support",
          ]}
        />

        <PricingCard
          title="Pro"
          description="Enjoy many features that fit for helping your business."
          price="$299.99"
          duration="year"
          transactionFee="2.5% + $0.30 per transaction"
          isRecommended
          isCurrent
          buttonText="Start Now"
          features={[
            "Best SEO Tools",
            "Unlock Campaign features",
            "Unlimited keywords",
            "50 Research",
            "General Support",
          ]}
        />

        <PricingCard
          title="Enterprise"
          description="Enjoy all features that fit for helping your business."
          price="$349.99"
          duration="year"
          transactionFee="2.5% + $0.30 per transaction"
          isRecommended
          isCurrent
          buttonText="Start Now"
          features={[
            "All SEO Tools",
            "Unlock Campaign features",
            "Unlimited keywords",
            "Unlimited Research",
            "All Support",
          ]}
        />
      </div>
    </section>
  )
}
