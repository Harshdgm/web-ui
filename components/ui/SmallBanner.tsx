import SmallCard from '../common/SmallCard'
import smallCardData from "@/constant/smallCard"

export default function SmallBanner() {
  return (
    <div className="m-4 flex items-center justify-center flex-wrap gap-3 pt-6 md:pt-10 lg:pt-12">
      {smallCardData.map((card) => (
        <SmallCard key={card.id} {...card} />
      ))}
    </div>
  )
}
