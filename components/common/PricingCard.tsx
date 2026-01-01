import React from "react"
import { FaCheck, FaStar } from "react-icons/fa";

interface PricingCardProps {
  title: string
  description: string
  price: string
  duration: string
  transactionFee: string
  isRecommended?: boolean
  isCurrent?: boolean
  buttonText: string
  features: string[] 
}

export default function PricingCard({
  title,
  description,
  price,
  duration,
  transactionFee,
  features, 
  isRecommended = false,
  isCurrent = false,
  buttonText,
}: PricingCardProps) {
  return (
    <div className="relative w-full max-w-[360px] rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-sm">
      {isRecommended && (
        <div className="absolute right-4 top-7 flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-[var(--primary)]">
            <span>Recommended</span>
            <FaStar className="text-[#FFD700]" />
        </div>
      )}

      <div className="mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>

      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-sm text-gray-500"> /{duration}</span>
      </div>

      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <FaCheck className="text-green-500 text-xs" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <p className="mb-6 text-sm text-gray-500">
        {transactionFee}
      </p>

      <button disabled={isCurrent}
        className={`w-full rounded-lg py-2 text-sm font-medium transition
          ${isCurrent
              ? "cursor-not-allowed border border-blue-700 text-gray-400 hover:bg-blue-700 hover:text-[var(--background)]"
              : "bg-[var(--primary)] text-white hover:opacity-90"
          }`}>
        {buttonText}
      </button>
    </div>
  )
}
