import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { CaseStudiesList } from "@/components/case-studies/case-studies-list"

export const metadata = {
  title: "Case Studies | Publica.la",
  description:
    "Discover how leading publishers and content creators are achieving success with Publica.la's digital publishing platform.",
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <CaseStudiesHero />
      <CaseStudiesList />
      <Footer />
    </main>
  )
}
