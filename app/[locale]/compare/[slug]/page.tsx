import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/app/dictionaries"
import { notFound } from "next/navigation"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

type CompareConfig = {
  vendor: string
  vendorLogo: string
  slug: string
  pros: string[]
  cons: string[]
  whyUs: string[]
}

const COMPARES: CompareConfig[] = [
  {
    vendor: "Supadu",
    vendorLogo: "/images/logos/supadu-logo.webp",
    slug: "publica-vs-supadu",
    pros: ["Hosted storefronts", "Catalog tools"],
    cons: ["Limited reader UX", "Fewer analytics"],
    whyUs: ["Native interactive reader", "Vito AI", "Flexible commerce"],
  },
  {
    vendor: "VitalSource",
    vendorLogo: "/images/logos/vitalsource-logo.svg",
    slug: "publica-vs-vitalsource",
    pros: ["Distribution network", "Enterprise ready"],
    cons: ["Less brand control", "Higher take rates"],
    whyUs: ["Own your brand", "Keep 85% revenue", "First-party data"],
  },
]

export async function generateStaticParams() {
  return COMPARES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cfg = COMPARES.find((c) => c.slug === slug)
  if (!cfg) return {}
  return {
    title: `Publica.la vs ${cfg.vendor} – Detailed Comparison`,
    description: `Compare Publica.la with ${cfg.vendor}: features, pricing, control, and revenue share differences.`,
  }
}

export default async function CompareDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  const cfg = COMPARES.find((c) => c.slug === slug)
  if (!cfg) return notFound()

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar dict={dict} locale={locale} />
      <section className="relative w-full py-16 px-6 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <Image src="/images/publica-logo-new.svg" alt="Publica.la" width={120} height={36} />
            <span className="text-2xl font-bold text-gray-400">vs</span>
            <Image src={cfg.vendorLogo} alt={cfg.vendor} width={120} height={36} />
          </div>
          <h1 className="mt-6 text-4xl font-bold">Publica.la vs {cfg.vendor}</h1>
          <p className="mt-2 text-gray-600">What’s different, when to choose each, and how to decide.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold">Where {cfg.vendor} is strong</h2>
              <ul className="mt-3 space-y-2">
                {cfg.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> <span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Limitations</h2>
              <ul className="mt-3 space-y-2">
                {cfg.cons.map((p, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-orange-600" /> <span>{p}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold">Why teams choose Publica.la</h2>
            <ul className="mt-3 grid md:grid-cols-2 gap-2">
              {cfg.whyUs.map((p, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary" /> <span>{p}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer dict={dict} locale={locale} />
    </main>
  )
}


