import { CreditCard, ShoppingBag, Tag, Globe, CheckCircle } from "lucide-react"

export function BookshopsOnlineSales({ dict }: { dict: any }) {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{dict.dashboard.title}</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">{dict.dashboard.monthlyRevenue}</div>
                      <div className="text-sm text-green-500">{dict.dashboard.monthlyRevenueLabel}</div>
                      <div className="text-xs text-green-600 mt-1">{dict.dashboard.monthlyRevenueChange}</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">{dict.dashboard.totalOrders}</div>
                      <div className="text-sm text-blue-500">{dict.dashboard.totalOrdersLabel}</div>
                      <div className="text-xs text-blue-600 mt-1">{dict.dashboard.totalOrdersChange}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-800">{dict.dashboard.topSellers}</h4>
                    <div className="space-y-3">
                      {dict.dashboard.bestSellers.map((book: any) => (
                        <div key={book.title} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                            <span className="text-sm font-medium text-primary">📖</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-700">{book.title}</div>
                            <div className="text-xs text-gray-500">{book.author}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-gray-900">{book.sales}</div>
                            <div className="text-xs text-green-600">{book.revenue}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-800">{dict.dashboard.salesChart}</h4>
                    <div className="flex items-end gap-2 h-20">
                      {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-primary to-primary/60 rounded-t flex-1"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 text-center">{dict.dashboard.salesGrowth}</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {dict.subtitle}
            </p>

            <div className="space-y-6">
              {dict.features.map((feature: any) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
