"use client"
import { StoriesStateManagement } from "./state.management"
import { SlideOrder } from "./_slides";
import SingleSlide from "./single.slide";

export function MainStorySlides() {
  const current_index = StoriesStateManagement.current_index;
  return (
    <div className="p-3 bg-[#545457] w-full flex flex-row gap-2.5 rounded-xl shadow-[0_4px_7px_rgba(0,0,0,0.25)] relative">
      {SlideOrder.getOrder(current_index(), StoriesStateManagement.stories.length).
        map((actual_index, sequential_index) => {
          const story = StoriesStateManagement.stories[actual_index];
          if (actual_index == current_index())
            return;
          return (
            <SingleSlide key={actual_index} src={story.imageUrl} title={story.title} i={actual_index} sequencial_index={sequential_index} />
          )
        })}
      <button onClick={() => { StoriesStateManagement.nextStory() }} title="scroll" className="absolute h-[33px] w-[22px] flex items-center justify-center  bg-[#8B8B8B] border-white border rounded-md -right-4.5 top-[50%] translate-y-[-50%]">
        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L9 8.5L1 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
