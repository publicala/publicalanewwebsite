import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MagazinesNewspapersFeatures } from "@/components/magazines-newspapers/magazines-newspapers-features"
import { MagazinesNewspapersDigitalPublishing } from "@/components/magazines-newspapers/magazines-newspapers-digital-publishing"
import { MagazinesNewspapersReaderEngagement } from "@/components/magazines-newspapers/magazines-newspapers-reader-engagement"
import { MagazinesNewspapersAnalytics } from "@/components/magazines-newspapers/magazines-newspapers-analytics"
import { MagazinesNewspapersMonetization } from "@/components/magazines-newspapers/magazines-newspapers-monetization"
import { MagazinesNewspapersCaseStudy } from "@/components/magazines-newspapers/magazines-newspapers-case-study"
import { MagazinesNewspapersCta } from "@/components/magazines-newspapers/magazines-newspapers-cta"
import { CustomerLogosShowcase } from "@/components/customer-logos-showcase"
import { getDictionary } from "@/app/dictionaries"

export default async function MagazinesNewspapersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  const magazinesNewspapersDict = dict.magazinesNewspapersSolution
  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <main>
        {/* Simple Hero Section */}
        <section className="relative w-full py-16 md:py-24 px-6 bg-gradient-to-b from-primary/5 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              {magazinesNewspapersDict.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6" dangerouslySetInnerHTML={{ __html: magazinesNewspapersDict.hero.title.replace('<1>', '<span class="text-primary">').replace('</1>', '</span>') }} />
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {magazinesNewspapersDict.hero.subtitle}
            </p>
          </div>
        </section>
        
        <CustomerLogosShowcase
          title={magazinesNewspapersDict.customerLogos.title}
          subtitle={magazinesNewspapersDict.customerLogos.subtitle}
          variant="solution"
          industry="magazines"
        />
        <MagazinesNewspapersFeatures />
        <MagazinesNewspapersDigitalPublishing />
        <MagazinesNewspapersReaderEngagement />
        <MagazinesNewspapersAnalytics />
        <MagazinesNewspapersMonetization />
        <MagazinesNewspapersCaseStudy />
        <MagazinesNewspapersCta />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  )
}
