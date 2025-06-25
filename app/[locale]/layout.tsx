import type React from "react"
import type { Metadata } from "next"

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
      {children}
    </>
  )
}
