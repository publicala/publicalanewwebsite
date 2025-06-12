import { Smartphone, Tablet, Printer, Globe, Zap } from "lucide-react"

export function MagazinesNewspapersDigitalPublishing() {
  const platforms = [
    {
      icon: Globe,
      title: "Web Platform",
      description: "Responsive web experience",
      stats: "99.9% uptime",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native iOS & Android apps",
      stats: "4.8★ rating",
    },
    {
      icon: Tablet,
      title: "Tablet Optimized",
      description: "Enhanced reading experience",
      stats: "2x engagement",
    },
    {
      icon: Printer,
      title: "Print Integration",
      description: "Seamless print workflow",
      stats: "50% cost reduction",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Zap className="w-4 h-4 mr-2" />
                Multi-Platform Publishing
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Reach Readers Everywhere</h2>
              <p className="text-xl text-gray-600">
                Publish your content across all platforms simultaneously. From web to mobile, tablet to print - ensure
                your stories reach every reader, everywhere.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <platform.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{platform.title}</h3>
                      <p className="text-sm text-gray-600">{platform.description}</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-blue-600">{platform.stats}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Publishing workflow visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Publishing Workflow</h3>
                <p className="text-sm text-gray-600">From creation to distribution</p>
              </div>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">Content Creation</span>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-green-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">Editorial Review</span>
                      <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">In Progress</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-yellow-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">Multi-Platform Publishing</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Pending</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-gray-300 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">Analytics & Optimization</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Scheduled</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-gray-300 h-2 rounded-full w-0"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Estimated completion:</span>
                  <span className="font-medium text-gray-900">2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
