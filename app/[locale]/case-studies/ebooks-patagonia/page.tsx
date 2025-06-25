import { DetailedCaseStudy } from "@/components/detailed-case-study"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/app/dictionaries"

export default async function EbooksPatagoniaCaseStudyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as 'en' | 'es' | 'pt')
  const data = dict.caseStudies.ebooksPatagonia
  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <DetailedCaseStudy
        logoAlt={data.logoAlt}
        title={data.title}
        subtitle={data.subtitle}
        heroImageAlt={data.heroImageAlt}
        clientDescription={data.clientDescription}
        challengesList={data.challengesList}
        solutionText={data.solutionText}
        resultsList={data.resultsList}
        testimonialQuote={data.testimonialQuote}
        testimonialAuthor={data.testimonialAuthor}
        testimonialRole={data.testimonialRole}
        whyChooseUsList={data.whyChooseUsList}
        additionalImages={data.additionalImages}
        sectionTitles={data.sectionTitles}
      />
      <Footer dict={dict} locale={locale} />
    </>
  )
}
