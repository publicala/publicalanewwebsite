"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, TrendingUp, Users, Eye, Download, DollarSign } from "lucide-react"

const metrics = [
  { icon: Users, label: "Active Readers", value: "24,891", change: "+12%", color: "blue" },
  { icon: Eye, label: "Page Views", value: "1.2M", change: "+8%", color: "green" },
  { icon: Download, label: "Downloads", value: "45,672", change: "+24%", color: "purple" },
  { icon: DollarSign, label: "Revenue", value: "$28,940", change: "+18%", color: "yellow" },
]

const chartData = [
  { day: "Mon", value: 65 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 52 },
  { day: "Thu", value: 91 },
  { day: "Fri", value: 84 },
  { day: "Sat", value: 67 },
  { day: "Sun", value: 73 },
]

export function AnalyticsDashboard() {
  const maxValue = Math.max(...chartData.map((d) => d.value))

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Analytics & Insights</h2>
            <p className="text-lg text-gray-600 mb-8">
              Make data-driven decisions with comprehensive analytics that track reader behavior, content performance,
              and revenue metrics in real-time.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="space-y-3">
                  {[
                    "Real-time reader engagement tracking",
                    "Content performance analytics",
                    "Revenue and sales reporting",
                    "Geographic distribution insights",
                    "Custom dashboard creation",
                    "Automated report generation",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold">Analytics Benefits</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Increased Engagement</span>
                      <span className="font-medium text-green-600">+45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Better Content Strategy</span>
                      <span className="font-medium text-blue-600">+32%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue Optimization</span>
                      <span className="font-medium text-purple-600">+28%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric) => {
                const Icon = metric.icon
                return (
                  <Card key={metric.label} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={`w-8 h-8 rounded-lg ${
                            metric.color === "blue"
                              ? "bg-blue-100"
                              : metric.color === "green"
                                ? "bg-green-100"
                                : metric.color === "purple"
                                  ? "bg-purple-100"
                                  : "bg-yellow-100"
                          } flex items-center justify-center`}
                        >
                          <Icon
                            className={`h-4 w-4 ${
                              metric.color === "blue"
                                ? "text-blue-600"
                                : metric.color === "green"
                                  ? "text-green-600"
                                  : metric.color === "purple"
                                    ? "text-purple-600"
                                    : "text-yellow-600"
                            }`}
                          />
                        </div>
                        <span className="text-xs font-medium text-green-600">{metric.change}</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Chart visualization */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Weekly Performance</h3>
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>

                <div className="space-y-4">
                  {/* Bar chart */}
                  <div className="flex items-end gap-2 h-32">
                    {chartData.map((data, i) => (
                      <div key={data.day} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                          style={{ height: `${(data.value / maxValue) * 100}%` }}
                        ></div>
                        <div className="text-xs text-gray-500">{data.day}</div>
                      </div>
                    ))}
                  </div>

                  {/* Summary stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">73.2%</div>
                      <div className="text-xs text-gray-600">Avg Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">4.8min</div>
                      <div className="text-xs text-gray-600">Avg Session</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">2.3x</div>
                      <div className="text-xs text-gray-600">Return Rate</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Real-time activity */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Real-time Activity</h3>
                <div className="space-y-3">
                  {[
                    { action: "New subscription", time: "2 min ago", type: "success" },
                    { action: "Content downloaded", time: "5 min ago", type: "info" },
                    { action: "User registered", time: "8 min ago", type: "success" },
                    { action: "Payment processed", time: "12 min ago", type: "success" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          activity.type === "success" ? "bg-green-500" : "bg-blue-500"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{activity.action}</div>
                        <div className="text-xs text-gray-500">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
