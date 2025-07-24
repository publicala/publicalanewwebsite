import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CalendlyButton } from "@/components/calendly-button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/app/dictionaries"

export const metadata: Metadata = {
  title: "Platform Comparisons - publica.la vs Competitors",
  description:
    "Compare publica.la with other digital publishing platforms. See detailed feature comparisons, pricing, and capabilities.",
}

export default async function ComparePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  const compareDict = dict.compare

  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {compareDict.hero.title} <span className="text-primary">{compareDict.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {compareDict.hero.subtitle}
            </p>
          </div>
        </section>

        {/* Comparisons Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Supadu Comparison */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center justify-center mb-6 space-x-4">
                    <Image
                      src="/images/publica-logo-new.svg"
                      alt="publica.la"
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                    <span className="text-2xl font-bold text-gray-400">vs</span>
                    <Image
                      src="/images/logos/supadu-logo.webp"
                      alt="Supadu"
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-4">{compareDict.supadu.title}</h3>

                  <p className="text-gray-600 text-center mb-6">
                    {compareDict.supadu.subtitle}
                  </p>

                  <div className="space-y-3 mb-8">
                    {compareDict.supadu.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/${locale}/compare/publica-vs-supadu`}
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>{compareDict.viewComparison}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* VitalSource Comparison */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center justify-center mb-6 space-x-4">
                    <Image
                      src="/images/publica-logo-new.svg"
                      alt="publica.la"
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                    <span className="text-2xl font-bold text-gray-400">vs</span>
                    <Image
                      src="/images/logos/vitalsource-logo.svg"
                      alt="VitalSource"
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-4">{compareDict.vitalSource.title}</h3>

                  <p className="text-gray-600 text-center mb-6">
                    {compareDict.vitalSource.subtitle}
                  </p>

                  <div className="space-y-3 mb-8">
                    {compareDict.vitalSource.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/${locale}/compare/publica-vs-vitalsource`}
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>{compareDict.viewComparison}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{compareDict.cta.title}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {compareDict.cta.subtitle}
            </p>
            <CalendlyButton
              text={compareDict.cta.button}
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            />
          </div>
        </section>
      </div>
      <Footer dict={dict} locale={locale} />
    </>
  )
}
