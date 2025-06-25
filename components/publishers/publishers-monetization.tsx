import type React from "react"
import { CheckCircle } from "lucide-react"

export function PublishersMonetization({ dict }: { dict: any }) {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                        <div className="w-4 h-4 text-white">💰</div>
                      </div>
                      <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                  </div>

                  {/* Revenue cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                      <div className="text-2xl font-bold text-green-700">{dict.revenueCard.monthlyRevenue}</div>
                      <div className="text-sm text-green-600">{dict.revenueCard.monthlyRevenueLabel}</div>
                      <div className="text-xs text-green-500 mt-1">{dict.revenueCard.monthlyRevenueChange}</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                      <div className="text-2xl font-bold text-blue-700">{dict.revenueCard.activeSubscribers}</div>
                      <div className="text-sm text-blue-600">{dict.revenueCard.activeSubscribersLabel}</div>
                      <div className="text-xs text-blue-500 mt-1">{dict.revenueCard.activeSubscribersChange}</div>
                    </div>
                  </div>

                  {/* Revenue chart */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="h-3 bg-gray-200 rounded w-1/3 mb-3"></div>
                    <div className="flex items-end gap-2 h-20">
                      {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-green-500 to-green-400 rounded-t flex-1"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">{dict.revenueGrowth}</div>
                  </div>

                  {/* Payment methods */}
                  <div className="grid grid-cols-3 gap-3">
                    {dict.paymentMethods.map((method: string, idx: number) => (
                      <div key={method} className={`bg-${['purple','blue','orange'][idx]}-50 p-3 rounded-lg border border-${['purple','blue','orange'][idx]}-100 text-center`}>
                        <div className={`w-8 h-8 bg-${['purple','blue','orange'][idx]}-500 rounded mx-auto mb-2`}></div>
                        <div className={`text-xs text-${['purple','blue','orange'][idx]}-700`}>{method}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-20 w-24 h-24 bg-green-50 rounded-full z-0"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {dict.subtitle}
            </p>

            <div className="space-y-6">
              <MonetizationBlock dict={dict.subscription} />
              <MonetizationBlock dict={dict.payPerContent} />
              <MonetizationBlock dict={dict.hybrid} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MonetizationBlock({ dict }: { dict: any }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold mb-2">{dict.title}</h3>
      <p className="text-gray-600 mb-4">{dict.desc}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {dict.items.map((item: string) => (
          <CheckItem key={item}>{item}</CheckItem>
        ))}
      </div>
    </div>
  )
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
      <span className="text-gray-700">{children}</span>
    </div>
  )
}
