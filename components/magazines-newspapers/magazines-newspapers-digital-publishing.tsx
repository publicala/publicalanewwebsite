import { Smartphone, Tablet, Monitor, Zap } from "lucide-react"

export function MagazinesNewspapersDigitalPublishing() {
  const devices = [
    {
      icon: Monitor,
      title: "Desktop & Web",
      description: "Full-screen reading experience",
      stats: "HD Quality",
    },
    {
      icon: Tablet,
      title: "Tablet Optimized",
      description: "Perfect for magazine layouts",
      stats: "Smart Zoom",
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Optimized for smartphones",
      stats: "Touch Friendly",
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
                Smart Zoom Technology
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Provide an Unparalleled Reading Experience
              </h2>
              <p className="text-xl text-gray-600">
                Give your users the ability to interact with your ePaper from their favorite devices. Smart Zoom ensures
                perfect readability on any screen size while maintaining your original design.
              </p>
            </div>

            <div className="space-y-6">
              {devices.map((device, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <device.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{device.title}</h3>
                      <p className="text-sm text-gray-600">{device.description}</p>
                    </div>
                    <div className="text-sm font-medium text-blue-600">{device.stats}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ePaper Reader Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Interactive ePaper Reader</h3>
                <p className="text-sm text-gray-600">Experience your publication on any device</p>
              </div>

              {/* Simulated ePaper interface */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500">100% Zoom</div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-800 rounded"></div>
                        <div className="h-2 bg-gray-400 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-400 rounded w-1/2"></div>
                      </div>
                      <div className="bg-gray-200 rounded aspect-square"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                    Zoom In
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    Full Page
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
