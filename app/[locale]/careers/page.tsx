import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { CareersOpenings } from "@/components/careers/careers-openings"
import { CareersValues } from "@/components/careers/careers-values"
import { CareersBenefits } from "@/components/careers/careers-benefits"
import { CareersApplication } from "@/components/careers/careers-application"
import { getDictionary } from "@/app/dictionaries"
import { Metadata } from "next"

/**
 * SEO METADATA - ALWAYS IN ENGLISH
 * 
 * Career page metadata is always in English to ensure consistent
 * search engine indexing and social media sharing for job listings.
 */
export const metadata: Metadata = {
  title: "Careers - Join Our Team | Publica.la",
  description: "Join our growing team at Publica.la and help shape the future of digital publishing. We're hiring Frontend Developers, Product Managers, Customer Success Managers, and DevOps Engineers.",
  keywords: ["careers", "jobs", "digital publishing", "frontend developer", "product manager", "customer success", "devops", "remote work"],
  openGraph: {
    title: "Careers - Join Our Team | Publica.la",
    description: "Join our growing team at Publica.la and help shape the future of digital publishing. Remote and hybrid positions available.",
    type: "website",
  },
}

/**
 * CAREERS PAGE - ALWAYS IN ENGLISH
 * 
 * This careers page is intentionally designed to always display in English,
 * regardless of the user's selected locale. This ensures consistent job 
 * descriptions, requirements, and application processes for all candidates.
 * 
 * The navbar and footer still respect the user's language preference,
 * but all careers content (hero, values, benefits, openings, application process)
 * uses English content exclusively.
 */
export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  
  // Get user's locale dictionary only for navbar/footer
  // All careers content is hardcoded in English
  const userDict = await getDictionary(locale as "en" | "es" | "pt")
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar and Footer use user's language preference */}
      <Navbar dict={userDict} locale={locale} />
      <main>
        {/* All careers components use hardcoded English content */}
        <CareersHero />
        <CareersValues />
        <CareersBenefits />
        <CareersOpenings />
        <CareersApplication />
      </main>
      <Footer dict={userDict} locale={locale} />
    </div>
  )
}
