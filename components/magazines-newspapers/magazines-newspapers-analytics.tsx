import { BarChart3, TrendingUp, Eye, Clock, Users, DollarSign } from "lucide-react"

export function MagazinesNewspapersAnalytics() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            <BarChart3 className="w-4 h-4 mr-2" />
            Analytics & Insights
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Data-Driven Editorial Decisions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make informed decisions with comprehensive analytics that track every aspect of your publication's
            performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Key metrics */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Performance Overview</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Last 30 days</span>
              </div>
            </div>

            {/* Chart visualization */}
            <div className="space-y-6">
              <div className="flex items-end space-x-2 h-32">
                {[65, 78, 52, 85, 69, 92, 74, 88, 76, 95, 82, 89, 77, 91, 84].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2.4M</div>
                <div className="text-sm text-gray-600">Page Views</div>
                <div className="flex items-center justify-center mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">+15%</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">45K</div>
                <div className="text-sm text-gray-600">Subscribers</div>
                <div className="flex items-center justify-center mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">+8%</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">3.2m</div>
                <div className="text-sm text-gray-600">Avg. Session</div>
                <div className="flex items-center justify-center mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">+22%</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">68%</div>
                <div className="text-sm text-gray-600">Return Rate</div>
                <div className="flex items-center justify-center mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">+5%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top articles */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Articles</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded text-white text-sm font-bold flex items-center justify-center">
                  1
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 mb-1">Breaking: Tech Merger</div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      <span>12.5K</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      <span>89%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white text-sm font-bold flex items-center justify-center">
                  2
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 mb-1">Market Analysis</div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      <span>9.8K</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      <span>76%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded text-white text-sm font-bold flex items-center justify-center">
                  3
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 mb-1">Sports Update</div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      <span>8.2K</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      <span>72%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="text-sm font-medium text-gray-700 mb-3">Revenue Insights</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Subscription Revenue</span>
                  <span className="text-sm font-medium text-gray-900">$24,500</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Ad Revenue</span>
                  <span className="text-sm font-medium text-gray-900">$8,200</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-900">Total Revenue</span>
                  <span className="text-sm font-bold text-green-600">$32,700</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
            <p className="text-gray-600">
              Monitor your publication's performance with live data updates and instant insights.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Predictive Insights</h3>
            <p className="text-gray-600">
              AI-powered predictions help you understand future trends and reader behavior.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue Optimization</h3>
            <p className="text-gray-600">
              Maximize revenue with detailed financial analytics and optimization recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
