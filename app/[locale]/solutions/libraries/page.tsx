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
import { FaqSection } from "@/components/faq-section"
import Script from "next/script"

export default async function LibrariesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  const librariesDict = dict.librariesSolution
  const faq = (librariesDict as any)?.faq
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
        <LibrariesFeatures />
        <LibrariesDigitalCollection />
        <LibrariesPatronEngagement />
        <LibrariesAnalytics />
        <LibrariesIntegration />
        <LibrariesCaseStudy />
        {faq?.questions?.length ? (
          <>
            <FaqSection title={faq.title} subtitle={faq.subtitle} items={faq.questions} />
            <Script id="faq-schema-libraries" type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": (faq?.questions || []).map((q: any) => ({
                  "@type": "Question",
                  name: q.question,
                  acceptedAnswer: { "@type": "Answer", text: q.answer }
                }))
              })}
            </Script>
          </>
        ) : null}
        <LibrariesCTA />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  )
}
