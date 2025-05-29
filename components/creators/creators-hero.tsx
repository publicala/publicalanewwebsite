import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Upload, DollarSign, Users, TrendingUp } from "lucide-react"

export function CreatorsHero() {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Solutions for Content Creators
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Monetize Your <span className="text-primary">Creative Work</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
              Sell any type of digital content directly to your audience. From photos and audio to books, PDFs, and more
              – all on your own terms.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-md font-medium">
                <Link href="/get-started">
                  Start Creating
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-md font-medium">
                <Link href="/schedule-demo">See How It Works</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Creator Dashboard Mockup */}
            <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
              {/* Window Controls */}
              <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-sm font-medium text-gray-600">Creator Dashboard</div>
                <div className="w-16"></div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <Upload className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">247</div>
                    <div className="text-xs text-gray-600">Content Items</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">$3,247</div>
                    <div className="text-xs text-gray-600">This Month</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">1,523</div>
                    <div className="text-xs text-gray-600">Followers</div>
                  </div>
                </div>

                {/* Revenue Chart */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-800">Revenue Trend</h3>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-end space-x-2 h-20">
                    {[40, 65, 45, 80, 55, 90, 75].map((height, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-primary to-primary/60 rounded-t flex-1"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Recent Content */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Recent Uploads</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Photography Guide.pdf", sales: 23, color: "bg-red-100 text-red-600" },
                      { name: "Audio Course.mp3", sales: 15, color: "bg-blue-100 text-blue-600" },
                      { name: "Design Templates.zip", sales: 31, color: "bg-green-100 text-green-600" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 rounded ${item.color} flex items-center justify-center text-xs font-bold`}
                          >
                            {item.name.charAt(0)}
                          </div>
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{item.sales} sales</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
