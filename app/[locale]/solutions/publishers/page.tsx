import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PublishersHero } from "@/components/publishers/publishers-hero"
import { CustomerLogosShowcase } from "@/components/customer-logos-showcase"
import { PublishersFeatures } from "@/components/publishers/publishers-features"
import { PublishersMonetization } from "@/components/publishers/publishers-monetization"
import { PublishersEngagement } from "@/components/publishers/publishers-engagement"
import { PublishersAnalytics } from "@/components/publishers/publishers-analytics"
import { CTASection } from "@/components/cta-section"
import { PublishersCaseStudy } from "@/components/publishers/publishers-case-study"
import { getDictionary } from "@/app/dictionaries"
import { FaqSection } from "@/components/faq-section"
import Script from "next/script"

export const metadata = {
  title: "Solutions for Publishers | Publica.la",
  description:
    "Discover how Publica.la helps publishers monetize content, engage audiences, and gain valuable insights through powerful analytics.",
}

export default async function PublishersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  const pubDict = dict.publishersSolution
  const faq = (pubDict as any)?.faq

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <PublishersHero dict={pubDict.hero} />
      <CustomerLogosShowcase
        title={pubDict.customerLogos.title}
        subtitle={pubDict.customerLogos.subtitle}
        variant="solution"
        industry="publishers"
      />
      <PublishersFeatures dict={pubDict.features} />
      <PublishersMonetization dict={pubDict.monetization} />
      <PublishersEngagement dict={pubDict.engagement} />
      <PublishersAnalytics dict={pubDict.analytics} />
      <PublishersCaseStudy dict={pubDict.caseStudy} />
      {faq?.questions?.length ? (
        <>
          <FaqSection title={faq.title} subtitle={faq.subtitle} items={faq.questions} />
          <Script id="faq-schema-publishers" type="application/ld+json">
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
      <CTASection dict={dict} />
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
