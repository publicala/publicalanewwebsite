import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MagazinesNewspapersHero } from "@/components/magazines-newspapers/magazines-newspapers-hero"
import { MagazinesNewspapersFeatures } from "@/components/magazines-newspapers/magazines-newspapers-features"
import { MagazinesNewspapersDigitalPublishing } from "@/components/magazines-newspapers/magazines-newspapers-digital-publishing"
import { MagazinesNewspapersReaderEngagement } from "@/components/magazines-newspapers/magazines-newspapers-reader-engagement"
import { MagazinesNewspapersAnalytics } from "@/components/magazines-newspapers/magazines-newspapers-analytics"
import { MagazinesNewspapersMonetization } from "@/components/magazines-newspapers/magazines-newspapers-monetization"
import { MagazinesNewspapersCaseStudy } from "@/components/magazines-newspapers/magazines-newspapers-case-study"
import { MagazinesNewspapersCta } from "@/components/magazines-newspapers/magazines-newspapers-cta"
import { CustomerLogosShowcase } from "@/components/customer-logos-showcase"

export default function MagazinesNewspapersPage() {
  return (
    <>
      <Navbar />
      <main>
        <MagazinesNewspapersHero />
        <CustomerLogosShowcase
          title="Trusted by Media Organizations"
          subtitle="Leading magazines and newspapers digitize their content with Publica.la"
          variant="solution"
          industry="magazines"
        />
        <MagazinesNewspapersFeatures />
        <MagazinesNewspapersDigitalPublishing />
        <MagazinesNewspapersReaderEngagement />
        <MagazinesNewspapersAnalytics />
        <MagazinesNewspapersMonetization />
        <MagazinesNewspapersCaseStudy />
        <MagazinesNewspapersCta />
      </main>
      <Footer />
    </>
  )
}
