import { DollarSign, TrendingUp, Globe, Users, Zap } from "lucide-react"

export function MagazinesNewspapersAnalytics() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <DollarSign className="w-4 h-4 mr-2" />
                Revenue Expansion
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Expand Your Revenue Without Borders</h2>
              <p className="text-xl text-gray-600">
                Maximize your revenue by reaching more people with your ePaper content. Connect with subscribers
                worldwide and grow your digital presence.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h3>
                  <p className="text-gray-600 mb-2">
                    Connect with your audience securely anywhere in the world without geographical limits.
                  </p>
                  <div className="text-sm font-medium text-green-600">Available in 45+ countries</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Monetization</h3>
                  <p className="text-gray-600 mb-2">
                    Multiple subscription models and payment options to maximize your revenue potential.
                  </p>
                  <div className="text-sm font-medium text-blue-600">Average 40% revenue increase</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketplace Integration</h3>
                  <p className="text-gray-600 mb-2">
                    Increase reach by adding your catalog to publica.la's marketplace for cross-promotion.
                  </p>
                  <div className="text-sm font-medium text-purple-600">Up to 3x more visibility</div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Revenue Growth Dashboard</h3>
                <p className="text-sm text-gray-600">Track your digital transformation success</p>
              </div>

              <div className="space-y-6">
                {/* Revenue metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-green-600 font-medium">Monthly Revenue</div>
                        <div className="text-2xl font-bold text-green-900">$24.5K</div>
                      </div>
                      <DollarSign className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+42% vs print</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-blue-600 font-medium">Subscribers</div>
                        <div className="text-2xl font-bold text-blue-900">8.9K</div>
                      </div>
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+65% growth</span>
                    </div>
                  </div>
                </div>

                {/* Growth chart */}
                <div className="space-y-4">
                  <div className="text-sm font-medium text-gray-700">6-Month Growth Trend</div>
                  <div className="flex items-end space-x-2 h-24">
                    {[40, 55, 45, 70, 60, 85].map((height, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">45</div>
                    <div className="text-xs text-gray-600">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">12</div>
                    <div className="text-xs text-gray-600">Currencies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
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
