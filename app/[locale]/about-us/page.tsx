import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTeam } from "@/components/about/about-team"
import { AboutValues } from "@/components/about/about-values"
import { CTASection } from "@/components/cta-section"
import { getDictionary } from "@/app/dictionaries"

export const metadata = {
  title: "About Us | Publica.la",
  description:
    "Learn about Publica.la's mission to boost the profits of publishers, magazines, newspapers, and more through our innovative digital publishing platform.",
}

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <AboutHero dict={dict} />
      <AboutStory dict={dict} />
      <AboutMission dict={dict} />
      <AboutValues dict={dict} />
      <AboutTeam dict={dict} locale={locale} />
      <CTASection dict={dict} />
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
