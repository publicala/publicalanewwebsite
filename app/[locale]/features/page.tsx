import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturesOverview } from "@/components/features-overview"
import { CTASection } from "@/components/cta-section"
import { getDictionary } from "@/app/dictionaries"
import Script from "next/script"

export const metadata = {
  title: "Features | Publica.la",
  description:
    "Explore the powerful features of Publica.la's digital publishing platform, including Vito AI, interactive reader, and more.",
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale as 'en' | 'es' | 'pt')

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <section className="relative w-full py-16 md:py-24 px-6 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            {dict.featuresHero.title} <span className="text-primary">{dict.featuresHero.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {dict.featuresHero.subtitle}
          </p>
        </div>
      </section>
      <FeaturesOverview dict={dict} />
      <CTASection dict={dict} secondary={{ text: "See pricing", href: `/${locale}/pricing` }} />
      <Script id="faq-schema-features" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": ((dict as any)?.featuresFAQ?.questions || []).map((item: any) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer }
          }))
        })}
      </Script>
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
