import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Packages } from "@/components/sections/packages";
import { Community } from "@/components/sections/community";
import { Vibe } from "@/components/sections/vibe";
import { TransformationalJourney } from "@/components/sections/transformational-journey";
import { VideoSection } from "@/components/sections/video-section";
import { ClientExperiences } from "@/components/sections/client-experiences";
import { ProgramCTA } from "@/components/sections/program-cta";


export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <Hero />
      <TransformationalJourney />
      <VideoSection />
      <Packages />
      <Community />
      <Vibe />
      <ClientExperiences />
      <ProgramCTA />
      <Footer />
    </main>
  );
}
