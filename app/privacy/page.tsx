import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PrivacyContent } from "@/components/privacy-content"

export const metadata = {
  title: "Privacy Policy | Publica.la",
  description: "Privacy Policy for Publica.la's digital publishing platform.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PrivacyContent />
      <Footer />
    </main>
  )
}
