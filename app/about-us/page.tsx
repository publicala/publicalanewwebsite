import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTeam } from "@/components/about/about-team"
import { AboutValues } from "@/components/about/about-values"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "About Us | Publica.la",
  description:
    "Learn about Publica.la's mission to boost the profits of publishers, magazines, newspapers, and more through our innovative digital publishing platform.",
}

export default function AboutUsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <CTASection />
      <Footer />
    </main>
  )
}
