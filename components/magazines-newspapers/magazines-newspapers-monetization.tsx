import { DollarSign, CreditCard, Target, TrendingUp, Users, Zap } from "lucide-react"

export function MagazinesNewspapersMonetization() {
  const revenueStreams = [
    {
      icon: CreditCard,
      title: "Subscription Tiers",
      description: "Flexible pricing models with premium content access",
      revenue: "$18,500/month",
      growth: "+25%",
    },
    {
      icon: Target,
      title: "Targeted Advertising",
      description: "Smart ad placement with reader behavior analytics",
      revenue: "$12,200/month",
      growth: "+18%",
    },
    {
      icon: Users,
      title: "Sponsored Content",
      description: "Native advertising that matches your editorial style",
      revenue: "$8,900/month",
      growth: "+32%",
    },
    {
      icon: Zap,
      title: "Premium Features",
      description: "Exclusive content, early access, and member benefits",
      revenue: "$5,400/month",
      growth: "+45%",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <DollarSign className="w-4 h-4 mr-2" />
                Revenue Optimization
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Maximize Your Revenue Potential</h2>
              <p className="text-xl text-gray-600">
                Diversify your income streams with multiple monetization strategies designed for modern digital
                publishing.
              </p>
            </div>

            <div className="space-y-6">
              {revenueStreams.map((stream, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <stream.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{stream.title}</h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{stream.revenue}</div>
                        <div className="flex items-center text-sm text-green-600">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {stream.growth}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">{stream.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-green-800 mb-1">Total Monthly Revenue</div>
                  <div className="text-3xl font-bold text-green-900">$45,000</div>
                  <div className="flex items-center text-sm text-green-600 mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+28% from last month</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-600 mb-1">Annual Projection</div>
                  <div className="text-2xl font-bold text-green-900">$540K</div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Revenue Dashboard</h3>
                <p className="text-sm text-gray-600">Real-time monetization metrics</p>
              </div>

              <div className="space-y-6">
                {/* Revenue breakdown chart */}
                <div className="space-y-4">
                  <div className="text-sm font-medium text-gray-700">Revenue Breakdown</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span className="text-sm text-gray-700">Subscriptions</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">41%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-2/5"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span className="text-sm text-gray-700">Advertising</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">27%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                        <span className="text-sm text-gray-700">Sponsored Content</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">20%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-1/5"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-orange-500 rounded"></div>
                        <span className="text-sm text-gray-700">Premium Features</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">12%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full w-1/8"></div>
                    </div>
                  </div>
                </div>

                {/* Performance metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">94%</div>
                    <div className="text-sm text-gray-600">Payment Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">$42</div>
                    <div className="text-sm text-gray-600">Avg. Revenue/User</div>
                  </div>
                </div>

                {/* Recent transactions */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700">Recent Transactions</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Premium Subscription</span>
                      </div>
                      <span className="text-sm font-medium text-green-600">+$29.99</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Ad Revenue</span>
                      </div>
                      <span className="text-sm font-medium text-blue-600">+$156.80</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">Sponsored Article</span>
                      </div>
                      <span className="text-sm font-medium text-purple-600">+$500.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
