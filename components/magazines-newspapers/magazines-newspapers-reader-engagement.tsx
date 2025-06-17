import { BarChart3, Globe, Users, TrendingUp, Eye, Clock } from "lucide-react"

export function MagazinesNewspapersReaderEngagement() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Analytics Dashboard */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Real-Time Analytics Dashboard</h3>
                <p className="text-sm text-gray-600">Understand your readers better</p>
              </div>

              <div className="space-y-6">
                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-blue-600 font-medium">Active Readers</div>
                        <div className="text-2xl font-bold text-blue-900">12.5K</div>
                      </div>
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+18%</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-purple-600 font-medium">Page Views</div>
                        <div className="text-2xl font-bold text-purple-900">89.2K</div>
                      </div>
                      <Eye className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+24%</span>
                    </div>
                  </div>
                </div>

                {/* Reading behavior */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700">Reading Behavior</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded text-white text-xs font-bold flex items-center justify-center">
                          1
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Front Page</div>
                          <div className="text-xs text-gray-500">Avg. 3.2 min reading time</div>
                        </div>
                      </div>
                      <div className="text-sm text-blue-600 font-medium">85%</div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded text-white text-xs font-bold flex items-center justify-center">
                          2
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Sports Section</div>
                          <div className="text-xs text-gray-500">Avg. 2.8 min reading time</div>
                        </div>
                      </div>
                      <div className="text-sm text-green-600 font-medium">72%</div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white text-xs font-bold flex items-center justify-center">
                          3
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Business News</div>
                          <div className="text-xs text-gray-500">Avg. 4.1 min reading time</div>
                        </div>
                      </div>
                      <div className="text-sm text-purple-600 font-medium">68%</div>
                    </div>
                  </div>
                </div>

                {/* Geographic distribution */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700">Global Reach</div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white p-2 rounded">
                      <div className="text-lg font-bold text-gray-900">45</div>
                      <div className="text-xs text-gray-600">Countries</div>
                    </div>
                    <div className="bg-white p-2 rounded">
                      <div className="text-lg font-bold text-gray-900">12</div>
                      <div className="text-xs text-gray-600">Languages</div>
                    </div>
                    <div className="bg-white p-2 rounded">
                      <div className="text-lg font-bold text-gray-900">24/7</div>
                      <div className="text-xs text-gray-600">Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics & Insights
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Understand Your Readers Better</h2>
              <p className="text-xl text-gray-600">
                Use publica.la's dashboard to access real-time analytics of your store and your users' behavior. Make
                data-driven decisions to improve engagement and revenue.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Monitoring</h3>
                  <p className="text-gray-600">
                    Track reader engagement, popular content, and reading patterns as they happen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Insights</h3>
                  <p className="text-gray-600">
                    Understand your international audience with geographic and demographic breakdowns.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reading Behavior</h3>
                  <p className="text-gray-600">
                    Analyze how readers interact with your content to optimize layout and engagement.
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
