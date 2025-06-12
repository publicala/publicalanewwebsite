import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LibrariesHero } from "@/components/libraries/libraries-hero"
import { CustomerLogosShowcase } from "@/components/customer-logos-showcase"
import { LibrariesFeatures } from "@/components/libraries/libraries-features"
import { LibrariesDigitalCollection } from "@/components/libraries/libraries-digital-collection"
import { LibrariesPatronEngagement } from "@/components/libraries/libraries-patron-engagement"
import { LibrariesAnalytics } from "@/components/libraries/libraries-analytics"
import { LibrariesIntegration } from "@/components/libraries/libraries-integration"
import { LibrariesCaseStudy } from "@/components/libraries/libraries-case-study"
import { LibrariesCTA } from "@/components/libraries/libraries-cta"

export default function LibrariesPage() {
  return (
    <>
      <Navbar />
      <main>
        <LibrariesHero />
        <CustomerLogosShowcase
          title="Trusted by Libraries Worldwide"
          subtitle="Public and academic libraries modernize their services with Publica.la"
          variant="solution"
          industry="libraries"
        />
        <LibrariesFeatures />
        <LibrariesDigitalCollection />
        <LibrariesPatronEngagement />
        <LibrariesAnalytics />
        <LibrariesIntegration />
        <LibrariesCaseStudy />
        <LibrariesCTA />
      </main>
      <Footer />
    </>
  )
}
