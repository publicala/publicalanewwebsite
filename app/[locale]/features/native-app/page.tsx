import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NativeAppFeature } from "@/components/features/native-app-feature"
import { CTASection } from "@/components/cta-section"
import { getDictionary } from "@/app/dictionaries"

export const metadata = {
  title: "Native App | Publica.la Features",
  description:
    "Discover Publica.la's native app solution for iOS and Android, providing seamless reading experiences across all devices.",
}

export default async function NativeAppPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <NativeAppFeature dict={dict.nativeAppFeature} />
      <CTASection dict={dict} />
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
