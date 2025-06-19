import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CalendlyButton } from "@/components/calendly-button"
import { Check, X, AlertTriangle } from "lucide-react"

export default function PublicaVsSupaduPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
              <div className="text-center">
                <img src="/images/publica-logo-new.svg" alt="publica.la" className="h-12 mx-auto mb-4" />
                <p className="text-gray-600 max-w-xs">Platform-first solution for complete publishing control</p>
              </div>
              <span className="text-gray-400 text-4xl font-bold">vs</span>
              <div className="text-center">
                <img src="/images/logos/supadu-logo.png" alt="Supadu" className="h-12 mx-auto mb-4" />
                <p className="text-gray-600 max-w-xs">Agency-led service for catalog presentation</p>
              </div>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A comprehensive comparison to help you choose the right publishing platform for your business
            </p>
          </div>
        </div>
      </section>

      {/* Vision Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🧭 Vision: Platform vs. Presentation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl">
              <img src="/images/publica-logo-new.svg" alt="publica.la" className="h-8 mb-4" />
              <p className="text-gray-700 leading-relaxed">
                A powerful, cloud-based publishing platform that enables publishers to own their storefront, control
                global sales and tax compliance, and deliver both digital and physical content through a seamless,
                scalable system. publica.la is product-first, fully white-labeled, and designed for long-term
                independence.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <img src="/images/logos/supadu-logo.png" alt="Supadu" className="h-8 mb-4" />
              <p className="text-gray-700 leading-relaxed">
                A capable marketing agency with strong metadata and catalog presentation tools. Supadu helps publishers
                build attractive, searchable websites, particularly for ONIX-based physical book catalogs—but often
                relies on external tools for delivery, transactions, and scaling.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-primary font-bold">📌 publica.la = Product. Supadu = Service.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">⚙️ Platform Capabilities: Built-In vs. Outsourced</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="text-left p-6 font-bold">Capability</th>
                  <th className="text-center p-6">
                    <img src="/images/publica-logo-new.svg" alt="publica.la" className="h-8 mx-auto" />
                  </th>
                  <th className="text-center p-6">
                    <img src="/images/logos/supadu-logo.png" alt="Supadu" className="h-8 mx-auto" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    capability: "Platform ownership",
                    publica: { status: "success", text: "100% white-labeled" },
                    supadu: { status: "error", text: "Agency-controlled hosting/backend" },
                  },
                  {
                    capability: "Digital delivery (eBooks, audiobooks)",
                    publica: { status: "success", text: "Native DRM reader/player with streaming & offline" },
                    supadu: { status: "error", text: "Not supported" },
                  },
                  {
                    capability: "DRM & access control",
                    publica: { status: "success", text: "Expirations, watermarking, user roles" },
                    supadu: { status: "error", text: "None" },
                  },
                  {
                    capability: "Subscriptions, rentals, bundles",
                    publica: { status: "success", text: "Built-in" },
                    supadu: { status: "error", text: "Not supported" },
                  },
                  {
                    capability: "Global payments & tax compliance",
                    publica: { status: "success", text: "Automatic handling (VAT, GST, digital goods rules)" },
                    supadu: { status: "warning", text: "Requires external tools" },
                  },
                  {
                    capability: "Physical book store integration",
                    publica: { status: "success", text: "Supported" },
                    supadu: { status: "success", text: "Supported" },
                  },
                  {
                    capability: "ONIX metadata support",
                    publica: { status: "success", text: "Core feature" },
                    supadu: { status: "success", text: "Core feature" },
                  },
                  {
                    capability: "Search & discoverability tools",
                    publica: { status: "success", text: "Smart filters, relevance, tagging" },
                    supadu: { status: "success", text: "Solid metadata search" },
                  },
                  {
                    capability: "First-party analytics",
                    publica: { status: "success", text: "User behavior, conversions, content views" },
                    supadu: { status: "warning", text: "Basic or external" },
                  },
                  {
                    capability: "Multilingual & multi-currency",
                    publica: { status: "success", text: "Native support" },
                    supadu: { status: "success", text: "Native support" },
                  },
                  {
                    capability: "Full API access",
                    publica: { status: "success", text: "Available" },
                    supadu: { status: "success", text: "Available" },
                  },
                  {
                    capability: "Support model",
                    publica: { status: "success", text: "Product-led + documentation & live help" },
                    supadu: { status: "warning", text: "Agency-led, variable availability" },
                  },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-6 font-medium">{row.capability}</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {row.publica.status === "success" && <Check className="text-green-600" size={20} />}
                        {row.publica.status === "warning" && <AlertTriangle className="text-yellow-600" size={20} />}
                        {row.publica.status === "error" && <X className="text-red-600" size={20} />}
                        <span className="text-sm">{row.publica.text}</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {row.supadu.status === "success" && <Check className="text-green-600" size={20} />}
                        {row.supadu.status === "warning" && <AlertTriangle className="text-yellow-600" size={20} />}
                        {row.supadu.status === "error" && <X className="text-red-600" size={20} />}
                        <span className="text-sm">{row.supadu.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Global Sales & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🌍 Global Sales & Compliance</h2>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-primary font-bold">
                📌 publica.la doesn't just help you sell globally—it helps you stay compliant.
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left p-6 font-bold">Feature</th>
                  <th className="text-center p-6">
                    <img src="/images/publica-logo-new.svg" alt="publica.la" className="h-8 mx-auto" />
                  </th>
                  <th className="text-center p-6">
                    <img src="/images/logos/supadu-logo.png" alt="Supadu" className="h-8 mx-auto" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Multi-currency storefronts",
                    publica: { status: "success", text: "Yes" },
                    supadu: { status: "success", text: "Yes" },
                  },
                  {
                    feature: "Global payment processors",
                    publica: { status: "success", text: "Integrated (Stripe, MercadoPago, etc.)" },
                    supadu: { status: "warning", text: "Depends on implementation" },
                  },
                  {
                    feature: "Regional pricing",
                    publica: { status: "success", text: "Native pricing by territory" },
                    supadu: { status: "error", text: "Not supported" },
                  },
                  {
                    feature: "Automatic tax handling",
                    publica: { status: "success", text: "Built-in (EU, US, LATAM, etc.)" },
                    supadu: { status: "error", text: "Not included" },
                  },
                  {
                    feature: "B2B invoicing & licensing support",
                    publica: { status: "success", text: "Yes" },
                    supadu: { status: "error", text: "No" },
                  },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-6 font-medium">{row.feature}</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {row.publica.status === "success" && <Check className="text-green-600" size={20} />}
                        {row.publica.status === "warning" && <AlertTriangle className="text-yellow-600" size={20} />}
                        {row.publica.status === "error" && <X className="text-red-600" size={20} />}
                        <span className="text-sm">{row.publica.text}</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {row.supadu.status === "success" && <Check className="text-green-600" size={20} />}
                        {row.supadu.status === "warning" && <AlertTriangle className="text-yellow-600" size={20} />}
                        {row.supadu.status === "error" && <X className="text-red-600" size={20} />}
                        <span className="text-sm">{row.supadu.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ideal Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🧑‍💼 Ideal Use Cases</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="text-left p-6 font-bold">Use Case</th>
                  <th className="text-center p-6">
                    <img src="/images/publica-logo-new.svg" alt="publica.la" className="h-8 mx-auto" />
                  </th>
                  <th className="text-center p-6">
                    <img src="/images/logos/supadu-logo.png" alt="Supadu" className="h-8 mx-auto" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    useCase: "Academic/trade site refresh",
                    publica: { status: "success", text: "Yes" },
                    supadu: { status: "success", text: "Yes" },
                  },
                  {
                    useCase: "Subscription-based storefront",
                    publica: { status: "success", text: "Native support" },
                    supadu: { status: "error", text: "No" },
                  },
                  {
                    useCase: "Controlled private libraries",
                    publica: { status: "success", text: "Yes" },
                    supadu: { status: "error", text: "No" },
                  },
                  {
                    useCase: "Global launch (multi-country/multi-language)",
                    publica: { status: "success", text: "Self-service" },
                    supadu: { status: "warning", text: "Requires agency setup" },
                  },
                  {
                    useCase: "Metadata-rich catalog search",
                    publica: { status: "success", text: "ONIX + custom filters" },
                    supadu: { status: "success", text: "ONIX-driven search" },
                  },
                  {
                    useCase: "First-party sales & audience control",
                    publica: { status: "success", text: "Yes" },
                    supadu: { status: "error", text: "No (via buy buttons)" },
                  },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-6 font-medium">{row.useCase}</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {row.publica.status === "success" && <Check className="text-green-600" size={20} />}
                        {row.publica.status === "warning" && <AlertTriangle className="text-yellow-600" size={20} />}
                        {row.publica.status === "error" && <X className="text-red-600" size={20} />}
                        <span className="text-sm">{row.publica.text}</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {row.supadu.status === "success" && <Check className="text-green-600" size={20} />}
                        {row.supadu.status === "warning" && <AlertTriangle className="text-yellow-600" size={20} />}
                        {row.supadu.status === "error" && <X className="text-red-600" size={20} />}
                        <span className="text-sm">{row.supadu.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The Right Fit */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🧩 The Right Fit</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left p-6 font-bold">Goal</th>
                  <th className="text-center p-6">
                    <img src="/images/publica-logo-new.svg" alt="publica.la" className="h-8 mx-auto" />
                  </th>
                  <th className="text-center p-6">
                    <img src="/images/logos/supadu-logo.png" alt="Supadu" className="h-8 mx-auto" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    goal: "You want to control your entire sales channel",
                    publica: { status: "success", text: "Yes" },
                    supadu: { status: "error", text: "No" },
                  },
                  {
                    goal: "You need a flexible digital business model",
                    publica: { status: "success", text: "Yes" },
                    supadu: { status: "error", text: "No" },
                  },
                  {
                    goal: "You prioritize fast visual upgrades to your catalog",
                    publica: { status: "success", text: "Yes" },
                    supadu: { status: "success", text: "Yes" },
                  },
                  {
                    goal: "You're focused on long-term audience ownership",
                    publica: { status: "success", text: "Yes" },
                    supadu: { status: "error", text: "No" },
                  },
                  {
                    goal: "You only need a better-looking website for discoverability",
                    publica: { status: "warning", text: "Maybe" },
                    supadu: { status: "success", text: "Yes" },
                  },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-6 font-medium">{row.goal}</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {row.publica.status === "success" && <Check className="text-green-600" size={20} />}
                        {row.publica.status === "warning" && <AlertTriangle className="text-yellow-600" size={20} />}
                        {row.publica.status === "error" && <X className="text-red-600" size={20} />}
                        <span className="text-sm">{row.publica.text}</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {row.supadu.status === "success" && <Check className="text-green-600" size={20} />}
                        {row.supadu.status === "warning" && <AlertTriangle className="text-yellow-600" size={20} />}
                        {row.supadu.status === "error" && <X className="text-red-600" size={20} />}
                        <span className="text-sm">{row.supadu.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final Thought */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">🏁 Final Thought</h2>

          <div className="space-y-6 text-lg text-gray-700 mb-12">
            <p>Both platforms serve important roles—but in different ways.</p>

            <p>
              <strong>Supadu</strong> is great for publishers who want a better-looking storefront powered by clean
              metadata.
            </p>

            <p>
              <strong>publica.la</strong> is the right choice for publishers who want to own their infrastructure, sell
              globally, and grow direct relationships—while staying compliant and independent.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
            <p className="text-2xl font-bold text-primary mb-4">If you're building a business—not just a website—</p>
            <p className="text-xl text-gray-700">publica.la is the platform you build it on.</p>
          </div>

          <CalendlyButton text="Schedule a Demo" variant="default" size="lg" className="text-lg px-8 py-4" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
