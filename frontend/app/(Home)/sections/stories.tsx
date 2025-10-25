import Image from "next/image";
import MainStories from "./stories/main";

export default function Stories() {
  return (
    <div className="bg-[#424247] pb-16 -mx-10  px-10  pt-10">
      <small className="text-[#8EB02F] text-base font-bold">STORIES & TESTIMONIALS</small>
      <h2 className="text-3xl font-semibold">Connect & Heal</h2>
      <p className="mt-5 mb-10 text-[14px]">Join safe spaces for women, children, and men to share experiences and find strength in community.</p>
      <div className="relative w-full aspect-[3/2]">
        <Image
          src="/story- (1).png"
          alt="Story image"
          fill
          unoptimized
          className="object-cover" />
      </div>
      <h4 className="text-2xl mt-10 font-medium">Stories</h4>
      <p className="mt-2 mb-10 text-[14px]">Space where real voices find strength, and shared experiences become pathways to healing.</p>
      <MainStories />
    </div>
  )
}