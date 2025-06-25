import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TermsContent } from "@/components/terms-content"
import { getDictionary } from "@/app/dictionaries"

export const metadata = {
  title: "Terms & Conditions | Publica.la",
  description: "Read the terms and conditions for using Publica.la's digital publishing platform.",
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <TermsContent dict={dict} />
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
