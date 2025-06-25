import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PrivacyContent } from "@/components/privacy-content"
import { getDictionary } from "@/app/dictionaries"

export const metadata = {
  title: "Privacy Policy | Publica.la",
  description: "Privacy Policy for Publica.la's digital publishing platform.",
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <PrivacyContent dict={dict} />
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
