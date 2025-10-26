import gsap from "gsap"
import Image from "next/image"
import { useEffect, useRef } from "react"


interface MainStoryImageProps {
  src: string
}
export function MainStoryImage({ src }: MainStoryImageProps) {
  const image = useRef<HTMLImageElement>(null);
  useEffect(() => {
    gsap.set(image.current, {
      scale: 1
    })
    if (image.current) {
      gsap.from(image.current,
        {
          scale: 1.5,
          duration: 1,
          ease: "power2.out"
        }
      )
    }
  })

  return (
    <div className="overflow-hidden rounded-xl border-[3px] border-[#6A8C0C] basis-[117px] grow shrink-0 aspect-2/3 relative shadow-[0_0_22px_rgba(0,0,0,0.61)]  ">
      <Image src={src}
        ref={image}
        alt="Story image"
        fill
        unoptimized
        className="object-cover"
      />
    </div>
  )
}
