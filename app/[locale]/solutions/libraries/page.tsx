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
import { getDictionary } from "@/app/dictionaries"

export default async function LibrariesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  const librariesDict = dict.librariesSolution
  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <main>
        <LibrariesHero dict={librariesDict.hero} />
        <CustomerLogosShowcase
          title={librariesDict.customerLogos.title}
          subtitle={librariesDict.customerLogos.subtitle}
          variant="solution"
          industry="libraries"
        />
        <LibrariesFeatures dict={librariesDict.features} />
        <LibrariesDigitalCollection dict={librariesDict.digitalCollection} />
        <LibrariesPatronEngagement dict={librariesDict.patronEngagement} />
        <LibrariesAnalytics dict={librariesDict.analytics} />
        <LibrariesIntegration dict={librariesDict.integration} />
        <LibrariesCaseStudy dict={librariesDict.caseStudy} />
        <LibrariesCTA dict={librariesDict.cta} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  )
}
