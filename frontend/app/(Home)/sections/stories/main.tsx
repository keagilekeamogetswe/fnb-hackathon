"use client";
import { useEffect, useState } from "react";
import { MainStoryImage } from "./image";
import StoryIndexIndicator from "./indicator";
import Name_Date from "./name";
import { MainStorySlides } from "./slides";
import { StoriesStateManagement } from "./state.management";
import StoryContent from "./content";

export default function MainStories() {
  const [current_index, setStoryIndex] = useState(0);
  StoriesStateManagement.bindSetStory(setStoryIndex);
  useEffect(() => {
    const timer_id = setInterval(() => {
      StoriesStateManagement.nextStory();
    }, 7000);
    return () => clearInterval(timer_id)
  }, [current_index]);
  const story = StoriesStateManagement.getCurrentStory();
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-row gap-x-4">
        <MainStoryImage src={story.imageUrl} />
        <div className="flex flex-col gap-y-1 grow">
          <MainStorySlides />
          <StoryIndexIndicator />
          <Name_Date name={story.teller} date={story.date} />
        </div>
      </div>
      <StoryContent title={story.title} content={story.content} />
    </div>
  )
}