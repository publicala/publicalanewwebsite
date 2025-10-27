import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/app/dictionaries"
import Link from "next/link"

const VENDORS = [
  { name: "Supadu", slug: "supadu" },
  { name: "VitalSource", slug: "vitalsource" },
  { name: "OverDrive", slug: "overdrive" },
  { name: "Bibliotheca", slug: "bibliotheca" },
]

export default async function AlternativesHub({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <section className="py-16 px-6 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold">Alternatives to Top Platforms</h1>
          <p className="mt-2 text-gray-600">Compare pros/cons and see when to choose Publica.la.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {VENDORS.map((v) => (
              <Link key={v.slug} href={`/${locale}/compare/alternatives/${v.slug}`} className="p-5 border rounded-xl hover:shadow-md transition">
                <div className="text-xl font-semibold">Alternatives to {v.name}</div>
                <div className="text-gray-600 text-sm mt-1">Compare options and trade-offs</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer dict={dict} locale={locale} />
    </main>
  )
}


