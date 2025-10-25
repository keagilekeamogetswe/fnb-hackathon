import { StoriesStateManagement } from "./state.management"
interface Name_DateProps {
  name: string,
  date: string
}
export default function Name_Date({ name, date }: Name_DateProps) {
  const story = StoriesStateManagement.getCurrentStory();

  return (
    <div>
      <h1 className="text-[20px] font-medium">{name}</h1>
      <p className="text-sm text-[#8B8B8B]">{date}</p>
    </div>
  )
}