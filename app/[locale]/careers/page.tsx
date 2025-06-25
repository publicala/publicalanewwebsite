import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { CareersOpenings } from "@/components/careers/careers-openings"
import { CareersValues } from "@/components/careers/careers-values"
import { CareersBenefits } from "@/components/careers/careers-benefits"
import { CareersApplication } from "@/components/careers/careers-application"
import { getDictionary } from "@/app/dictionaries"

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar dict={dict} locale={locale} />
      <main>
        <CareersHero dict={dict} />
        <CareersValues dict={dict} />
        <CareersBenefits dict={dict} />
        <CareersOpenings dict={dict} />
        <CareersApplication dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  )
}
