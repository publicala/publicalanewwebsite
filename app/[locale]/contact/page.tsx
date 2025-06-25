import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactPresence } from "@/components/contact/contact-presence"
import { getDictionary } from "@/app/dictionaries"

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")

  return (
    <div className="min-h-screen bg-white">
      <Navbar dict={dict} locale={locale} />
      <main>
        <ContactHero dict={dict} />
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ContactForm dict={dict} />
              <ContactInfo dict={dict} />
            </div>
          </div>
        </div>
        <ContactPresence dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  )
}
