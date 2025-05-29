import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeaturesOverview } from "@/components/features-overview"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "Features | Publica.la",
  description:
    "Explore the powerful features of Publica.la's digital publishing platform, including Vito AI, interactive reader, and more.",
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="relative w-full py-16 md:py-24 px-6 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Powerful Features for Modern Publishing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the tools and capabilities that make Publica.la the leading platform for digital content creators
            and publishers.
          </p>
        </div>
      </section>
      <FeaturesOverview />
      <CTASection />
      <Footer />
    </main>
  )
}
