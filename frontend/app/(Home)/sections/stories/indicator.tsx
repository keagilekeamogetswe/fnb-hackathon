"use client"
import { useState } from "react";
import { StoriesStateManagement } from "./state.management";

export default function StoryIndexIndicator() {
  const [index, setIndex] = useState(0);
  console.log("Rendering indicator at index: ", index);
  return (

    <div className=" p-1.5 bg-[#ffffff33] rounded-full mt-3 w-fit flex flex-row gap-1">
      {StoriesStateManagement.stories.map((_, i) =>
        <div key={i} className={`w-2 h-2 transition-colors duration-200 ease-in-out  ${(i == StoriesStateManagement.current_index()) ? " bg-[#8EB02F] " : " bg-white "}rounded-full`} />
      )}
    </div>
  )
}