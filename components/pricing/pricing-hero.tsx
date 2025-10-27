interface PricingHeroProps {
  dict: {
    pricingHero: {
      title: string
      titleHighlight: string
      subtitle: string
    }
  }
}

export function PricingHero({ dict }: PricingHeroProps) {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 overflow-hidden">
      {/* Background gradient instead of image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
          {dict.pricingHero.title} <span className="text-primary">{dict.pricingHero.titleHighlight}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {dict.pricingHero.subtitle}
        </p>
        <div className="mt-6 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700">
            <span className="font-semibold mr-1 text-gray-900">Save 40%+</span> vs industry average fees
          </span>
        </div>
      </div>
    </section>
  )
}
