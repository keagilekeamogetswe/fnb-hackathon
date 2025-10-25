import Image from "next/image";
import { StoriesStateManagement } from "./state.management"
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface SlideProps {
  src: string;
  title: string;
  i: number;
  sequencial_index: number
}
let loaded = false;
export default function SingleSlide({ src, title, i, sequencial_index }: SlideProps) {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!loaded) {
      loaded = true;
      return;
    };
    if (container.current) {
      gsap.fromTo(container.current,
        {
          delay: 0.2,
          stagger: 0.2,
          x: 100 * (sequencial_index + 1),
          ease: "power2.out"
        },
        {
          x: 0,
          ease: "power2.out"
        }
      )
    }
  }, [sequencial_index])
  return (
    <div ref={container} className="curser-pointer grow shrink-0 basis-[60px] aspect-2/3 relative border-2 border-[#d9d9d933] rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.25)] overflow-hidden"
      onClick={() => {
        StoriesStateManagement.setStory(i);
      }}
    >

      <Image
        src={src}
        alt={title}
        fill
        unoptimized
        className="object-cover rounded-lg"
      />
    </div>
  )
}