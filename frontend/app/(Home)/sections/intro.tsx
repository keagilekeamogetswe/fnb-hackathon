import Link from "next/link";
export default function IntroSection() {
  return (
    <div className="flex flex-col gap-y-16 items-center  bg-[linear-gradient(180deg,rgba(142,176,47,0.2)_0%,rgba(142,176,47,0)_100%)] pb-16 -mx-10 -mt-10 px-10  pt-10">
      <div>
        <h1 className="text-4xl text-center font-bold mt-16">Break the Silence. <br />Build the Change.</h1>
        <p className="text-sm text-center m-4">Be the spark that transforms communities. Your journey toward a better world starts here.</p>
      </div>
      <Link className="text-center cursor-pointer px-16 py-3 bg-[#8EB02F] rounded-full text-[#1D1E21]" href="/get-started">Voice Out</Link>
    </div>
  )
}