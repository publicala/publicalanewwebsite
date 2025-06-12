import { CreditCard, ShoppingBag, Tag, Globe } from "lucide-react"

export function BookshopsOnlineSales() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-sm mx-auto">
              {/* Sales Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-700">$8,450</div>
                  <div className="text-sm text-green-600">Total Sales</div>
                  <div className="text-xs text-green-500">↗ +12% this month</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-700">127</div>
                  <div className="text-sm text-blue-600">Orders</div>
                  <div className="text-xs text-blue-500">↗ +8% this week</div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-700 mb-3">Payment Methods</div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                    <CreditCard size={20} className="text-purple-600" />
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-orange-600 rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-700 mb-3">Recent Orders</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
                      B
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium">The Great Novel</div>
                      <div className="text-xs text-gray-500">$12.99</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded flex items-center justify-center text-white text-xs font-bold">
                      M
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium">Mystery Tales</div>
                      <div className="text-xs text-gray-500">$9.99</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue Chart */}
              <div>
                <div className="text-sm font-medium text-gray-700 mb-3">Daily Revenue</div>
                <div className="flex items-end gap-1 h-16">
                  {[40, 65, 45, 80, 55, 70, 85].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-green-400 to-green-500 rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-50 rounded-full z-0"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Online Sales</h2>
            <p className="text-lg text-gray-600 mb-8">
              Sell digital content directly to your customers through a branded online storefront that integrates with
              your existing website and systems.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Branded Digital Storefront</h4>
                  <p className="text-gray-500">
                    Create a custom-branded digital bookstore that reflects your shop's unique identity and seamlessly
                    integrates with your existing website.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Flexible Payment Options</h4>
                  <p className="text-gray-500">
                    Offer customers multiple payment methods and purchasing options, including one-time purchases,
                    bundles, and subscriptions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Tag size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Promotional Tools</h4>
                  <p className="text-gray-500">
                    Create special offers, discount codes, and promotional bundles to drive sales and engage customers
                    with your digital inventory.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Global Reach</h4>
                  <p className="text-gray-500">
                    Expand your customer base beyond your local area and sell to readers worldwide without shipping
                    costs or logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
