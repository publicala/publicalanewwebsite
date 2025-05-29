export function PricingHero() {
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

        {/* Visual pricing representation */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 max-w-md">
            <div className="flex items-center justify-between mb-6">
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Value Comparison</h3>
                <p className="text-sm text-gray-600">See how much you save</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">%</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Monthly Plan</span>
                <span className="font-medium">$99/mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Annual Plan</span>
                <span className="font-medium text-green-600">$84/mo</span>
              </div>
              <div className="border-t pt-3 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-900">You Save</span>
                <span className="font-bold text-green-600">$180/year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
