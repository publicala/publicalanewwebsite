import { CustomerLogosShowcase } from "@/components/customer-logos-showcase"
import { BookshopsHero } from "@/components/bookshops/bookshops-hero"
import { BookshopsFeatures } from "@/components/bookshops/bookshops-features"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookshopsDigitalInventory } from "@/components/bookshops/bookshops-digital-inventory"
import { BookshopsOnlineSales } from "@/components/bookshops/bookshops-online-sales"
import { BookshopsEngagement } from "@/components/bookshops/bookshops-engagement"
import { BookshopsTestimonials } from "@/components/bookshops/bookshops-testimonials"
import { BookshopsIntegration } from "@/components/bookshops/bookshops-integration"
import { CTASection } from "@/components/cta-section"
import { BookshopsCaseStudy } from "@/components/bookshops/bookshops-case-study"
import { BookshopsCTA } from "@/components/bookshops/bookshops-cta"
import { getDictionary } from "@/app/dictionaries"
import { FaqSection } from "@/components/faq-section"
import Script from "next/script"

export const metadata = {
  title: "Solutions for Bookshops and Retailers | Publica.la",
  description:
    "Expand your bookshop's reach with digital offerings. Publica.la helps bookshops and retailers sell ebooks and digital content alongside physical inventory.",
}

export default async function BookshopsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  const bookshopsDict = dict.bookshopsSolution
  const faq = (bookshopsDict as any)?.faq
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <BookshopsHero dict={bookshopsDict.hero} />
      <CustomerLogosShowcase
        title={bookshopsDict.customerLogos.title}
        subtitle={bookshopsDict.customerLogos.subtitle}
        variant="solution"
        industry="bookshops"
      />
      <BookshopsFeatures dict={bookshopsDict.features} />
      <BookshopsDigitalInventory dict={bookshopsDict.digitalInventory} />
      <BookshopsOnlineSales dict={bookshopsDict.onlineSales} />
      <BookshopsEngagement dict={bookshopsDict.engagement} />
      <BookshopsIntegration dict={bookshopsDict.integration} />
      <BookshopsCaseStudy dict={bookshopsDict.caseStudy} />
      <BookshopsTestimonials dict={bookshopsDict.testimonials} />
      {faq?.questions?.length ? (
        <>
          <FaqSection title={faq.title} subtitle={faq.subtitle} items={faq.questions} />
          <Script id="faq-schema-bookshops" type="application/ld+json">
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
      <BookshopsCTA dict={bookshopsDict.cta} />
      <CTASection dict={dict} />
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
