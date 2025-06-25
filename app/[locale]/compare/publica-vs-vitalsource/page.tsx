import type { Metadata } from "next"
import Image from "next/image"
import { CalendlyButton } from "@/components/calendly-button"
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/app/dictionaries"

export const metadata: Metadata = {
  title: "publica.la vs VitalSource - Platform Comparison",
  description:
    "Compare publica.la and VitalSource digital publishing platforms. See detailed feature comparison, capabilities, and which platform fits your needs.",
}

export default async function PublicaVsVitalSourcePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  const compareDict = dict.compare
  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-8 space-x-6">
              <Image
                src="/images/publica-logo-new.svg"
                alt="publica.la"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
              <span className="text-4xl font-bold text-gray-400">vs</span>
              <Image
                src="/images/logos/vitalsource-logo.svg"
                alt="VitalSource"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">{compareDict.vitalSource.title}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              {compareDict.vitalSource.subtitle}
            </p>
            <CalendlyButton size="lg">{compareDict.cta.button}</CalendlyButton>
          </div>
        </section>

        {/* Vision Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🧭 Vision: Inclusive Platform vs. Academic Ecosystem
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Image
                    src="/images/publica-logo-new.svg"
                    alt="publica.la"
                    width={150}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Publica.la is a comprehensive, publisher-first platform that enables any kind of publisher—academic,
                  trade, educational, corporate, or independent—to launch, control, and monetize digital and physical
                  content globally. It empowers publishers with full branding, global sales infrastructure, content
                  protection, and tax compliance, all under their control.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Image
                    src="/images/logos/vitalsource-logo.svg"
                    alt="VitalSource"
                    width={150}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  VitalSource is a trusted name in academic publishing, with a strong focus on institutional delivery,
                  courseware integration, and learning management systems (LMS). It offers robust digital textbook
                  delivery, analytics, and accessibility—but is often institution-driven and limited in
                  direct-to-consumer flexibility.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-primary">
                📌 publica.la = Platform for all publishers. VitalSource = Platform for academic distribution.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Capabilities Comparison */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ⚙️ Platform Capabilities: Flexibility vs. Specialization
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Capability</th>
                      <th className="px-6 py-4 text-center">
                        <Image
                          src="/images/publica-logo-new.svg"
                          alt="publica.la"
                          width={120}
                          height={30}
                          className="h-6 w-auto mx-auto"
                        />
                      </th>
                      <th className="px-6 py-4 text-center">
                        <Image
                          src="/images/logos/vitalsource-logo.svg"
                          alt="VitalSource"
                          width={120}
                          height={30}
                          className="h-6 w-auto mx-auto"
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium">Publisher type</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Academic, trade, indie, corporate</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Primarily academic</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Platform ownership</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">100% white-labeled, publisher-owned</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">VitalSource-branded ecosystem</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Digital delivery</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Native reader/player (eBooks, audiobooks, streaming, offline)</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">eTextbooks via Bookshelf</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">DRM & access control</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Time-limited access, watermarking, user control</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Institution-based access control</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">eCommerce (B2C & B2B)</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Built-in (subscriptions, rentals, one-time sales)</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">No direct eCommerce (except via integrations)</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Physical book support</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Supported</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">No</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Direct-to-consumer storefronts</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Yes, with full branding and pricing control</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">No (institutional portals only)</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">LMS/Campus integrations</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <AlertTriangle className="h-5 w-5 text-yellow-500" />
                          <span className="text-sm">Basic integrations (e.g. LTI, SCORM export)</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Strong LMS, SIS, and courseware integrations</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Accessibility (WCAG, screen readers)</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Yes</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Strong in academic compliance</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">API availability</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">REST API for storefronts, access, analytics</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">API access for LMS partners</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-primary">
                📌 VitalSource is strong in institutional workflows. publica.la gives publishers full independence to
                serve both institutions and individuals directly.
              </p>
            </div>
          </div>
        </section>

        {/* Global Sales & Compliance */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">🌍 Global Sales & Compliance</h2>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center">
                        <Image
                          src="/images/publica-logo-new.svg"
                          alt="publica.la"
                          width={120}
                          height={30}
                          className="h-6 w-auto mx-auto"
                        />
                      </th>
                      <th className="px-6 py-4 text-center">
                        <Image
                          src="/images/logos/vitalsource-logo.svg"
                          alt="VitalSource"
                          width={120}
                          height={30}
                          className="h-6 w-auto mx-auto"
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium">Global payment processing</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Native (Stripe, MercadoPago, etc.)</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">Not built-in</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium">Multi-currency support</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Yes</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">No (not DTC)</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Tax compliance (EU VAT, US, LATAM)</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Automated digital goods tax handling</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">Handled via 3rd-party integrations or not applicable</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium">Regional pricing</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Available by territory or customer group</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">No</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Direct consumer revenue model</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Subscriptions, bundles, pay-per-access</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">No</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium">Private libraries or hubs</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Supported</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">No</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Institutional bulk licensing</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Yes</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Yes (core feature)</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-primary">
                📌 publica.la enables global monetization, while VitalSource is ideal for large-scale academic
                deployment—but typically outside a publisher's own storefront or sales funnel.
              </p>
            </div>
          </div>
        </section>

        {/* Ideal Use Cases */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">🧑‍💼 Ideal Use Cases</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Use Case</th>
                      <th className="px-6 py-4 text-center">
                        <Image
                          src="/images/publica-logo-new.svg"
                          alt="publica.la"
                          width={120}
                          height={30}
                          className="h-6 w-auto mx-auto"
                        />
                      </th>
                      <th className="px-6 py-4 text-center">
                        <Image
                          src="/images/logos/vitalsource-logo.svg"
                          alt="VitalSource"
                          width={120}
                          height={30}
                          className="h-6 w-auto mx-auto"
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium">University or campus course distribution</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Supported</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Excellent fit</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Trade publisher selling books worldwide</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Native fit</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">Not designed for</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Direct-to-reader academic sales</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Yes</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">Not available</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Independent authors or educators</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Fully supported</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">Not applicable</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Selling physical + digital bundles</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Yes</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">No</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Corporate training portals</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Yes</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">No</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Custom branded content hubs</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Built-in</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">No</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* The Right Fit */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">🧩 The Right Fit</h2>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Goal</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">Choose publica.la if...</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">Choose VitalSource if...</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium">You want to sell to both institutions and individuals</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Yes</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">No</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium">You need flexible monetization models (DTC/B2B)</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Yes</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">No</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">You're building direct brand awareness and loyalty</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Yes</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span className="text-sm">No</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium">You want to plug into an academic LMS ecosystem</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <AlertTriangle className="h-5 w-5 text-yellow-500" />
                          <span className="text-sm">Partial support</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Strong native integrations</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">
                        Your main focus is eTextbook delivery within universities
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <AlertTriangle className="h-5 w-5 text-yellow-500" />
                          <span className="text-sm">Viable</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">Best-in-class</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Final Thought */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">🏁 Final Thought</h2>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6">
                VitalSource is excellent at delivering academic content through institutional frameworks—but publishers
                rely on third parties for sales, branding, and control.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                publica.la offers a more flexible, direct, and globally compliant platform, making it ideal for
                publishers looking to expand reach, control margins, and own their audience—whether in academia, trade,
                or professional education.
              </p>
              <p className="text-xl font-semibold text-primary">
                If your strategy includes global sales, digital innovation, or diverse monetization models,
                <br />
                publica.la is the platform that grows with you.
              </p>
            </div>

            <CalendlyButton size="lg" className="mb-4" />
            <p className="text-gray-600">See how publica.la can transform your digital publishing strategy</p>
          </div>
        </section>
      </div>
      <Footer dict={dict} locale={locale} />
    </>
  )
}
