import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingTiers } from "@/components/pricing/pricing-tiers"
import { PricingFeatures } from "@/components/pricing/pricing-features"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { CTASection } from "@/components/cta-section"
import { getDictionary } from "@/app/dictionaries"
import Script from "next/script"

export const metadata = {
  title: "Pricing | Publica.la",
  description:
    "Flexible pricing plans for publishers of all sizes. Choose the right plan for your digital publishing needs.",
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <PricingHero dict={dict} />
      <PricingTiers dict={dict} locale={locale} />
      <PricingFeatures dict={dict} />
      <PricingFAQ dict={dict} />
      <CTASection dict={dict} secondary={{ text: "See pricing details", href: `/${locale}/pricing#plans` }} />
      <Script id="faq-schema-pricing" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": (dict as any)?.pricingFAQ?.questions?.map((item: any) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer }
          })) || []
        })}
      </Script>
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
