import { DollarSign, CreditCard, Calendar, Tag, Gift } from "lucide-react"

export function CreatorsMonetization() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Monetization Options</h2>
            <p className="text-lg text-gray-600 mb-8">
              Choose the right pricing model for your content and audience. Our platform supports multiple ways to
              monetize your creative work.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">One-Time Purchases</h4>
                  <p className="text-gray-500">
                    Sell individual items or bundles for a single payment. Set your own prices and offer special
                    promotions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Subscriptions</h4>
                  <p className="text-gray-500">
                    Create recurring revenue with monthly or annual subscriptions. Offer different tiers with varying
                    levels of access.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Tag size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Pay-What-You-Want</h4>
                  <p className="text-gray-500">
                    Let customers decide how much to pay. Set a minimum price or make it completely flexible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Gift size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Freemium Model</h4>
                  <p className="text-gray-500">
                    Offer some content for free to attract an audience, then monetize with premium offerings or
                    upgrades.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <DollarSign size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Licensing Options</h4>
                  <p className="text-gray-500">
                    Offer different license types for your content, such as personal, commercial, or exclusive use.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-8 mx-auto max-w-sm">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-6 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Payment Successful!</h3>
                <p className="text-green-100">Your earnings are growing</p>
              </div>

              {/* Earnings Summary */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">This Month</span>
                  <span className="font-bold text-lg">$2,847</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Total Earnings</span>
                  <span className="font-bold text-lg text-green-600">$18,392</span>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 mb-3">Recent Sales</h4>

                <div className="flex items-center gap-3 p-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <CreditCard size={16} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Digital Course</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                  <span className="text-sm font-bold text-green-600">+$97</span>
                </div>

                <div className="flex items-center gap-3 p-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Calendar size={16} className="text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Monthly Subscription</p>
                    <p className="text-xs text-gray-500">5 hours ago</p>
                  </div>
                  <span className="text-sm font-bold text-green-600">+$29</span>
                </div>

                <div className="flex items-center gap-3 p-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Gift size={16} className="text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Bundle Package</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                  <span className="text-sm font-bold text-green-600">+$149</span>
                </div>
              </div>

              {/* Growth Indicator */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 text-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">↗ 23% increase this month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
