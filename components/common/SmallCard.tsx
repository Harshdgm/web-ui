import Image,{StaticImageData} from 'next/image'

interface SmallCardProps {
  title: string
  name: string
  img: StaticImageData
}

export default function SmallCard({ title, name, img }: SmallCardProps) {
  return (
    <div className="w-[196px] border border-[#eeeef0] rounded-xl text-background flex px-2 py-1">
      <div className="w-1/2 flex flex-col justify-center text-left">
        <h1 className="text-xs font-semibold leading-tight">{title}</h1>
        <p className="text-[10px] opacity-70">{name}</p>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="w-[65px] h-[65px] relative">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover"   
            sizes="65px"
          />
        </div>
      </div>
    </div>
  )
}
