import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DetailedCaseStudy } from "@/components/detailed-case-study"
import { getDictionary } from "@/app/dictionaries"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  
  return {
    title: `${dict.caseStudies.forbesColombia.title} | Publica.la`,
    description: dict.caseStudies.forbesColombia.clientDescription.substring(0, 160) + "...",
  }
}

export default async function ForbesColombiaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  const caseStudy = dict.caseStudies.forbesColombia

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />

      <DetailedCaseStudy
        logoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-K1krJLrBeqxlMKETgIzySh0VMRplgy.webp"
        logoAlt={caseStudy.logoAlt}
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        heroImageAlt={caseStudy.heroImageAlt}
        clientDescription={caseStudy.clientDescription}
        challengesList={caseStudy.challengesList}
        solutionText={caseStudy.solutionText}
        resultsList={caseStudy.resultsList}
        testimonialQuote={caseStudy.testimonialQuote}
        testimonialAuthor={caseStudy.testimonialAuthor}
        testimonialRole={caseStudy.testimonialRole}
        whyChooseUsList={caseStudy.whyChooseUsList}
        additionalQuote={caseStudy.additionalQuote}
        additionalImages={caseStudy.additionalImages}
        sectionTitles={caseStudy.sectionTitles}
      />

      <Footer dict={dict} locale={locale} />
    </main>
  )
}
