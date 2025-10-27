import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/app/dictionaries"
import { notFound } from "next/navigation"
import { CheckCircle } from "lucide-react"

type AltConfig = {
  vendor: string
  slug: string
  alternatives: string[]
  whenToChooseUs: string[]
}

const ALTS: AltConfig[] = [
  { vendor: "Supadu", slug: "supadu", alternatives: ["Publica.la", "Custom Shopify"], whenToChooseUs: ["You want an integrated reader", "You want higher revenue share"] },
  { vendor: "VitalSource", slug: "vitalsource", alternatives: ["Publica.la", "Custom LMS"], whenToChooseUs: ["You want brand control", "You want direct relationships"] },
  { vendor: "OverDrive", slug: "overdrive", alternatives: ["Publica.la", "Bibliotheca"], whenToChooseUs: ["You need flexible licensing", "You want analytics"] },
  { vendor: "Bibliotheca", slug: "bibliotheca", alternatives: ["Publica.la", "OverDrive"], whenToChooseUs: ["You need multi-format support", "You want global reach"] },
]

export async function generateStaticParams() {
  return ALTS.map((c) => ({ vendor: c.slug }))
}

export default async function AlternativesDetail({ params }: { params: Promise<{ locale: string; vendor: string }> }) {
  const { locale, vendor } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  const cfg = ALTS.find((c) => c.slug === vendor)
  if (!cfg) return notFound()

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <section className="py-16 px-6 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold">Alternatives to {cfg.vendor}</h1>
          <p className="mt-2 text-gray-600">Explore viable options and when each makes sense.</p>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Top alternatives</h2>
            <ul className="mt-3 space-y-2">
              {cfg.alternatives.map((a, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary" /> <span>{a}</span></li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <h2 className="text-xl font-semibold">When to choose Publica.la</h2>
            <ul className="mt-3 space-y-2">
              {cfg.whenToChooseUs.map((a, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> <span>{a}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer dict={dict} locale={locale} />
    </main>
  )
}


