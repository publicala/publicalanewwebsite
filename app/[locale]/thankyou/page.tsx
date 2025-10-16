import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/app/dictionaries"
import { CheckCircle } from "lucide-react"

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")

  return (
    <div className="min-h-screen bg-white">
      <Navbar dict={dict} locale={locale} />
      <main className="flex items-center justify-center min-h-[80vh]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {dict.thankYou?.title || "Thank You!"}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {dict.thankYou?.subtitle || "Your demo request has been received successfully."}
            </p>
            <p className="text-lg text-gray-500 mb-8">
              {dict.thankYou?.description || "We'll be in touch soon to schedule your personalized demo. In the meantime, feel free to explore our platform and learn more about how we can help transform your digital publishing business."}
            </p>
          </div>
          
          <div className="space-y-4">
            <a
              href={`/${locale}`}
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {dict.thankYou?.backToHome || "Back to Home"}
            </a>
            <div className="text-sm text-gray-400">
              {dict.thankYou?.contactInfo || "Questions? Contact us at support@publica.la"}
            </div>
          </div>
        </div>
      </main>
      <Footer dict={dict} locale={locale} />
    </div>
  )
}
