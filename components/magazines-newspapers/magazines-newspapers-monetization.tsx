import { Puzzle, Code, BarChart3, Zap, ArrowRight } from "lucide-react"

export function MagazinesNewspapersMonetization() {
  const integrations = [
    {
      icon: BarChart3,
      title: "CRM Integration",
      description: "Connect with your customer relationship management system",
      status: "Available",
    },
    {
      icon: Code,
      title: "ERP Systems",
      description: "Integrate with enterprise resource planning platforms",
      status: "Available",
    },
    {
      icon: Puzzle,
      title: "E-commerce Platforms",
      description: "Connect with your existing online store infrastructure",
      status: "Available",
    },
    {
      icon: Zap,
      title: "Custom APIs",
      description: "Build custom integrations with our comprehensive API",
      status: "Developer Ready",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                <Puzzle className="w-4 h-4 mr-2" />
                System Integration
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Easily Integrate Your Applications</h2>
              <p className="text-xl text-gray-600">
                Integrate your own advertising and connect your digital store with your CRM, ERP, LMS, or other
                e-commerce platforms. Keep track of all activities within your store.
              </p>
            </div>

            <div className="space-y-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <integration.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{integration.title}</h3>
                      <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                        {integration.status}
                      </span>
                    </div>
                    <p className="text-gray-600">{integration.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-purple-800 mb-1">API Documentation</div>
                  <div className="text-lg font-semibold text-purple-900">Comprehensive developer resources</div>
                  <div className="text-sm text-purple-600 mt-1">RESTful APIs, webhooks, and SDKs available</div>
                </div>
                <ArrowRight className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Integration Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Integration Hub</h3>
                <p className="text-sm text-gray-600">Connect all your business systems</p>
              </div>

              <div className="space-y-6">
                {/* Connected systems */}
                <div className="space-y-4">
                  <div className="text-sm font-medium text-gray-700">Connected Systems</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-900">Salesforce CRM</span>
                      </div>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-900">Google Analytics</span>
                      </div>
                      <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-900">Custom API</span>
                      </div>
                      <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">Active</span>
                    </div>
                  </div>
                </div>

                {/* API usage stats */}
                <div className="space-y-4">
                  <div className="text-sm font-medium text-gray-700">API Usage (Last 30 Days)</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">24.5K</div>
                      <div className="text-xs text-gray-600">API Calls</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">99.9%</div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700">Quick Actions</div>
                  <div className="space-y-2">
                    <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">
                      View API Documentation
                    </button>
                    <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">
                      Generate API Key
                    </button>
                    <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">
                      Test Webhook
                    </button>
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
