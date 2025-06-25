import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { PlatformShowcase } from "@/components/platform-showcase"
import { CustomerLogosShowcase } from "@/components/customer-logos-showcase"
import { SolutionsSection } from "@/components/solutions-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { getDictionary } from "@/app/dictionaries"

export const metadata = {
  title: "publica.la - Digital Publishing Platform for Modern Publishers",
  description:
    "Transform your printed content into engaging digital experiences with publica.la. The leading ePaper platform trusted by 400+ publishers, bookshops, magazines, and newspapers worldwide. Features Smart Zoom technology, global distribution, AI-powered insights, and seamless monetization tools.",
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")

  return (
    <main className="min-h-screen">
      <Navbar dict={dict} locale={locale} />
      <HeroSection dict={dict} />
      <CustomerLogosShowcase
        title={dict.customerLogosShowcase.title}
        subtitle={dict.customerLogosShowcase.subtitle}
        variant="homepage"
      />
      <PlatformShowcase dict={dict} />
      <SolutionsSection dict={dict} />
      <FeaturesSection dict={dict} />
      <TestimonialsSection dict={dict} />
      <CTASection dict={dict} />
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
