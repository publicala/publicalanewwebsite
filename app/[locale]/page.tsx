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
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  
  return {
    title: dict.seo.pages.home.title,
    description: dict.seo.pages.home.description,
    keywords: dict.seo.pages.home.keywords,
    openGraph: {
      title: dict.seo.pages.home.title,
      description: dict.seo.pages.home.description,
      images: [dict.seo.defaultMeta.ogImage],
      locale: locale === 'en' ? 'en_US' : locale === 'es' ? 'es_ES' : 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: dict.seo.defaultMeta.twitterCard as any,
      title: dict.seo.pages.home.title,
      description: dict.seo.pages.home.description,
      images: [dict.seo.defaultMeta.ogImage],
    },
    alternates: {
      canonical: `https://publica.la/${locale}`,
      languages: {
        'en': 'https://publica.la/en',
        'es': 'https://publica.la/es',
        'pt': 'https://publica.la/pt',
      }
    }
  }
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
      <SolutionsSection dict={dict} locale={locale} />
      <FeaturesSection dict={dict} />
      <TestimonialsSection dict={dict} />
      <CTASection dict={dict} />
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
