import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NativeAppFeature } from "@/components/features/native-app-feature"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "Native App | Publica.la Features",
  description:
    "Discover Publica.la's native app solution for iOS and Android, providing seamless reading experiences across all devices.",
}

export default function NativeAppPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <NativeAppFeature />
      <CTASection />
      <Footer />
    </main>
  )
}
