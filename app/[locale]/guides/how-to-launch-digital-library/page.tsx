import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/app/dictionaries"
import Script from "next/script"
import { GuideForm } from "./guide-form"

export default async function GuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <section className="py-16 px-6 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold">How to launch a digital library</h1>
          <p className="mt-2 text-gray-600">A step-by-step guide with a downloadable checklist template.</p>
          <GuideForm />
        </div>
      </section>
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to launch a digital library",
          author: { "@type": "Organization", name: "Publica.la" },
          mainEntityOfPage: `https://publica.la/${locale}/guides/how-to-launch-digital-library`,
        })}
      </Script>
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
