import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Packages } from "@/components/sections/packages";
import { Community } from "@/components/sections/community";
import { Vibe } from "@/components/sections/vibe";
import { Promo } from "@/components/sections/promo";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <Hero />
      <Packages />
      <Community />
      <Vibe />
      <Promo />
      <Footer />
    </main>
  );
}
