import Image from "next/image"

export function PricingHero() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/gradient-background.webp" alt="Background" fill className="object-cover" priority />
      </div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
          Simple, Transparent <span className="text-primary">Pricing</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your publishing needs. Scale as your catalog and audience grow.
        </p>

        <div className="mt-12 inline-flex items-center p-1 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex space-x-1">
            <button className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-white">Monthly</button>
            <button className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
              Annual (Save 15%)
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
