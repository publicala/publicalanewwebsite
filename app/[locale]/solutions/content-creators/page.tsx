import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CreatorsHero } from "@/components/creators/creators-hero"
import { CreatorsFeatures } from "@/components/creators/creators-features"
import { CreatorsFormats } from "@/components/creators/creators-formats"
import { CreatorsMonetization } from "@/components/creators/creators-monetization"
import { CreatorsWorkflow } from "@/components/creators/creators-workflow"
import { CreatorsAudience } from "@/components/creators/creators-audience"
import { CreatorsTestimonials } from "@/components/creators/creators-testimonials"
import { CTASection } from "@/components/cta-section"
import { CreatorsCaseStudy } from "@/components/creators/creators-case-study"
import { CustomerLogosShowcase } from "@/components/customer-logos-showcase"
import { getDictionary } from "@/app/dictionaries"

export const metadata = {
  title: "Solutions for Content Creators | Publica.la",
  description:
    "Empower your creative business with tools to sell any type of digital content - from photos and audio to books, PDFs, and more.",
}

export default async function ContentCreatorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  const creatorsDict = dict.creatorsSolution
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <CreatorsHero dict={creatorsDict.hero} />
      <CustomerLogosShowcase
        title={creatorsDict.customerLogos.title}
        subtitle={creatorsDict.customerLogos.subtitle}
        variant="solution"
        industry="creators"
      />
      <CreatorsFeatures dict={creatorsDict.features} />
      <CreatorsFormats dict={creatorsDict.formats} />
      <CreatorsMonetization dict={creatorsDict.monetization} />
      <CreatorsWorkflow dict={creatorsDict.workflow} />
      <CreatorsAudience dict={creatorsDict.audience} />
      <CreatorsCaseStudy dict={creatorsDict.caseStudy} />
      <CreatorsTestimonials dict={creatorsDict.testimonials} />
      <CTASection dict={dict} />
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
