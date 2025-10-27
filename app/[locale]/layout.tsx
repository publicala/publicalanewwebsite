import type React from "react"
import type { Metadata } from "next"
import { StickyCTA } from "@/components/sticky-cta"
import { IntentOffers } from "@/components/intent-offers"
import Script from "next/script"

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'pt' },
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  
  return {
    title: "publica.la - Digital Publishing Platform for Modern Publishers",
    description:
      "Transform your printed content into engaging digital experiences with publica.la. The leading ePaper platform trusted by 400+ publishers, bookshops, magazines, and newspapers worldwide. Features Smart Zoom technology, global distribution, AI-powered insights, and seamless monetization tools.",
    openGraph: {
      locale: locale === 'en' ? 'en_US' : locale === 'es' ? 'es_ES' : 'pt_BR',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  
  return (
    <>
      <Script id="org-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Publica.la",
          url: "https://publica.la",
          logo: "https://publica.la/images/publica-logo-new.svg",
          sameAs: [
            "https://www.linkedin.com/company/publicala/"
          ]
        })}
      </Script>
      {children}
      <StickyCTA />
      <IntentOffers />
    </>
  )
}
