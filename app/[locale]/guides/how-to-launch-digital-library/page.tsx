"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/app/dictionaries"
import Script from "next/script"
import { useState } from "react"

export default async function GuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  return <GuideClient locale={locale} dict={dict} />
}

function GuideClient({ locale, dict }: { locale: string; dict: any }) {
  const [downloaded, setDownloaded] = useState(false)
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <section className="py-16 px-6 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold">How to launch a digital library</h1>
          <p className="mt-2 text-gray-600">A step-by-step guide with a downloadable checklist template.</p>
          {!downloaded ? (
            <form
              className="mt-6 p-4 border rounded-xl bg-white shadow-sm grid gap-3 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault()
                setDownloaded(true)
              }}
            >
              <input name="name" placeholder="Your name" className="border rounded-md px-3 py-2" required />
              <input name="email" type="email" placeholder="Work email" className="border rounded-md px-3 py-2" required />
              <button className="sm:col-span-2 bg-primary text-white rounded-md py-2">Get the checklist</button>
            </form>
          ) : (
            <a href="/templates/digital-library-checklist.pdf" className="inline-block mt-6 bg-primary text-white rounded-md px-4 py-2" download>
              Download the checklist
            </a>
          )}
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


