import { CustomerLogosShowcase } from "@/components/customer-logos-showcase"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { CaseStudiesList } from "@/components/case-studies/case-studies-list"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/app/dictionaries"

export default async function CaseStudiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as 'en' | 'es' | 'pt')
  
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <CaseStudiesHero dict={dict} />
      <CustomerLogosShowcase
        title={dict.customerLogosShowcase.title}
        subtitle={dict.customerLogosShowcase.subtitle}
        variant="case-studies"
        dict={dict}
      />
      <CaseStudiesList dict={dict} />
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
