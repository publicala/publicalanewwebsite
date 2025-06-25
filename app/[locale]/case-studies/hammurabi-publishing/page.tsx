import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DetailedCaseStudy } from "@/components/detailed-case-study"
import { getDictionary } from "@/app/dictionaries"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  
  return {
    title: `${dict.caseStudies.hammurabiPublishing.title} | Publica.la`,
    description: dict.caseStudies.hammurabiPublishing.clientDescription.substring(0, 160) + "...",
  }
}

export default async function HammurabiPublishingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  const caseStudy = dict.caseStudies.hammurabiPublishing

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />

      <DetailedCaseStudy
        logoSrc="/placeholder.svg?height=100&width=300"
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
        additionalImages={caseStudy.additionalImages}
        sectionTitles={caseStudy.sectionTitles}
      />

      <Footer dict={dict} locale={locale} />
    </main>
  )
}
