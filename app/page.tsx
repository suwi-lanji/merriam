import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Portfolio } from "@/components/portfolio"
import { Pricing } from "@/components/pricing"
import { SocialMedia } from "@/components/social-media"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Portfolio />
      <Pricing />
      <SocialMedia />
      <Contact />
      <Footer />
    </main>
  )
}

