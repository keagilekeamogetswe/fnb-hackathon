interface StoryContentProps {
  title: string,
  content: string
}
export default function StoryContent({ title, content }: StoryContentProps) {
  return (
    <div className="p-4  bg-[rgba(145,145,145,0.22)] rounded-md">
      <h3 className="text-[20px] font-medium text-[#B7E539]">{title}</h3>
      <small className="text-sm text-[#C0C0C0] ">Testimonial</small>
      <p className="mt-4">{content}</p>
    </div>
  )
}