import Helpline from "./sections/helpline";
import IntroSection from "./sections/intro";
import Stories from "./sections/stories";
import VoiceMatter from "./sections/voicematters";
import WhyYou from "./sections/why.you";


export default function HomePage() {
  return (
    <main className="m-10">
      <IntroSection />
      <VoiceMatter />
      <Stories />
      <WhyYou />
      <Helpline />
    </main>
  )
}