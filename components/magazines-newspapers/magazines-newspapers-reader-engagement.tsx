import { MessageCircle, Heart, Share2, BookOpen, TrendingUp, Users } from "lucide-react"

export function MagazinesNewspapersReaderEngagement() {
  const engagementFeatures = [
    {
      icon: MessageCircle,
      title: "Comments & Discussions",
      description: "Foster community engagement with moderated comment systems",
      metric: "85% increase in engagement",
    },
    {
      icon: Share2,
      title: "Social Sharing",
      description: "Built-in social media integration for viral content distribution",
      metric: "3x more shares",
    },
    {
      icon: BookOpen,
      title: "Personalized Reading",
      description: "AI-powered content recommendations based on reader preferences",
      metric: "40% longer sessions",
    },
    {
      icon: Heart,
      title: "Reader Loyalty",
      description: "Subscription tiers and exclusive content for premium readers",
      metric: "60% retention rate",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Reader engagement dashboard */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Reader Engagement Dashboard</h3>
                <p className="text-sm text-gray-600">Real-time engagement metrics</p>
              </div>

              <div className="space-y-6">
                {/* Engagement stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-purple-600 font-medium">Active Readers</div>
                        <div className="text-2xl font-bold text-purple-900">8.2K</div>
                      </div>
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+12%</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-pink-600 font-medium">Comments</div>
                        <div className="text-2xl font-bold text-pink-900">1.5K</div>
                      </div>
                      <MessageCircle className="w-8 h-8 text-pink-600" />
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+28%</span>
                    </div>
                  </div>
                </div>

                {/* Popular articles */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700">Trending Articles</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded text-white text-xs font-bold flex items-center justify-center">
                          1
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Tech Innovation Report</div>
                          <div className="text-xs text-gray-500">2.1K views • 45 comments</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-gray-600">234</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded text-white text-xs font-bold flex items-center justify-center">
                          2
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Market Analysis Weekly</div>
                          <div className="text-xs text-gray-500">1.8K views • 32 comments</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-gray-600">189</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white text-xs font-bold flex items-center justify-center">
                          3
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Sports Championship</div>
                          <div className="text-xs text-gray-500">1.6K views • 28 comments</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-gray-600">156</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Engagement timeline */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700">Today's Activity</div>
                  <div className="flex items-end space-x-1 h-16">
                    {[30, 45, 35, 60, 40, 55, 70, 50, 65, 45, 80, 60].map((height, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-purple-500 to-pink-400 rounded-t flex-1"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>12AM</span>
                    <span>6AM</span>
                    <span>12PM</span>
                    <span>6PM</span>
                    <span>12AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                <Users className="w-4 h-4 mr-2" />
                Reader Engagement
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Build Loyal Reader Communities</h2>
              <p className="text-xl text-gray-600">
                Transform passive readers into active community members with powerful engagement tools and personalized
                experiences.
              </p>
            </div>

            <div className="space-y-6">
              {engagementFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-2">{feature.description}</p>
                    <div className="text-sm font-medium text-purple-600">{feature.metric}</div>
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
