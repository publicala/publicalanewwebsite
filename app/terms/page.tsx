import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TermsContent } from "@/components/terms-content"

export const metadata = {
  title: "Terms & Conditions | Publica.la",
  description: "Read the terms and conditions for using Publica.la's digital publishing platform.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <TermsContent />
      <Footer />
    </main>
  )
}
