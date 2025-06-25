import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/app/dictionaries"
import Image from "next/image"
import { CalendlyButton } from "@/components/calendly-button"

export default async function PublicaVsSupaduPage({ params }: { params: Promise<{ locale: string }> }) {
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
            <div className="flex items-center justify-center mb-8 space-x-6">
              <Image
                src="/images/publica-logo-new.svg"
                alt="publica.la"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
              <span className="text-4xl font-bold text-gray-400">vs</span>
              <Image
                src="/images/logos/supadu-logo.png"
                alt="Supadu"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">{compareDict.supadu.title}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              {compareDict.supadu.subtitle}
            </p>
            <CalendlyButton size="lg">{compareDict.cta.button}</CalendlyButton>
          </div>
        </section>
        {/* Features Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {compareDict.hero.title}
                <span className="text-primary">{compareDict.hero.titleHighlight}</span>
              </h2>
              <p className="text-lg text-gray-600">{compareDict.hero.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Image
                    src="/images/publica-logo-new.svg"
                    alt="publica.la"
                    width={150}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
                <ul className="text-gray-700 leading-relaxed list-disc pl-5 space-y-2">
                  {compareDict.supadu.features.map((feature: string, idx: number) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Image
                    src="/images/logos/supadu-logo.png"
                    alt="Supadu"
                    width={150}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {compareDict.supadu.subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer dict={dict} locale={locale} />
    </>
  )
}
