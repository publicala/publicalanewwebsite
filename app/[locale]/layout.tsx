import type React from "react"
import type { Metadata } from "next"
import { getDictionary } from "@/app/dictionaries"

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
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  
  return {
    title: dict.seo.defaultMeta.title,
    description: dict.seo.defaultMeta.description,
    keywords: dict.seo.defaultMeta.keywords,
    openGraph: {
      title: dict.seo.defaultMeta.title,
      description: dict.seo.defaultMeta.description,
      images: [dict.seo.defaultMeta.ogImage],
      locale: locale === 'en' ? 'en_US' : locale === 'es' ? 'es_ES' : 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: dict.seo.defaultMeta.twitterCard as any,
      title: dict.seo.defaultMeta.title,
      description: dict.seo.defaultMeta.description,
      images: [dict.seo.defaultMeta.ogImage],
    },
    alternates: {
      canonical: `https://publica.la/${locale}`,
      languages: {
        'en': 'https://publica.la/en',
        'es': 'https://publica.la/es',
        'pt': 'https://publica.la/pt',
      }
    }
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
      {children}
    </>
  )
}
