import next from "next";

interface Story {
  teller: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string
}

export const StoriesStateManagement = (() => {
  let current_index = 0;
  let setStoryCallback: ((i:number) => void) | null = null;
  const stories: Story[] = [
    {
      teller: "Brandon Miller",
      title: "Finding Strength in Community",
      content: "This platform gave me the courage to share my story in a safe space. Connecting with others who understood helped me heal, and now I use my voice to support those still suffering in silence. It’s more than a tool—it’s a lifeline.",
      imageUrl: "/story- (4).png",
      date: "24 October 2025"
    },
    {
      teller: "Beatrice K.",
      title: "A Safe Space to Heal",
      content: "The safe spaces provided a comforting environment where I could express myself without judgment.",
      imageUrl: "/story- (2).png",
      date: "23 October 2025"
    },
    {
      teller: "Clara S.",
      title: "Empowered Through Sharing",
      content: "Sharing my story with others gave me a sense of empowerment and helped me realize I'm not alone.",
      imageUrl: "/story- (3).png",
      date: "24 September 2025"
    },
    {
      teller: "Diana R.",
      title: "Healing Together",
      content: "The connections I made in the group have been instrumental in my healing process.",
      imageUrl: "/story- (5).jpeg",
      date: "24 October 2025"
    },
  ];

  function nextStoryIndex(): number  {
      return (current_index + 1) % stories.length;
    }
  return {
    bindSetStory: (setStory: (i:number) => void) => {
      setStoryCallback = setStory;
    },
    nextStory: () => {
      const nextIndex = nextStoryIndex();
      if (setStoryCallback) {
        current_index = nextIndex;
        setStoryCallback(nextIndex);

      }
    },
    setStory: (i: number) => {
      if (!setStoryCallback) return;
      current_index = i;
      setStoryCallback(i);

    },
    getCurrentStory: () => stories[current_index],
    stories,
    current_index: () => current_index
  }
})()