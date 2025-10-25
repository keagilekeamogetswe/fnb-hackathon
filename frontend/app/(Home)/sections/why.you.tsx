import Link from "next/link";

export default function WhyYou() {
  return (
    <div className="pb-16 -mx-10  px-10  pt-10 bg-[linear-gradient(180deg,#6A2DC0_0%,#2D203D_100%)] flex flex-col items-center">
      <h1 className="text-4xl text-center font-bold">Your Voice Builds a Better Society</h1>
      <p className="text-center text-sm m-8">
        By using this platform, you’re not just reporting — you’re creating impact<br /><br />
        <b>Join the movement. Speak up. Be the change.</b>
      </p>
      <Link className="grow-0 w-fit text-center cursor-pointer px-16 py-3 bg-[#8EB02F] rounded-full text-[#1D1E21]" href="/get-started">Join us</Link>

    </div>
  )
}