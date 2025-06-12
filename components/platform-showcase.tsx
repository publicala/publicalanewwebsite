"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Palette, BarChart3, Shield, Globe, Zap } from "lucide-react"

const features = [
  {
    id: "content",
    title: "Content Management",
    description: "Organize and manage your digital library with powerful tools",
    icon: BookOpen,
    color: "blue",
  },
  {
    id: "customization",
    title: "Brand Customization",
    description: "Create a unique branded experience for your readers",
    icon: Palette,
    color: "purple",
  },
  {
    id: "analytics",
    title: "Advanced Analytics",
    description: "Track performance and reader engagement in real-time",
    icon: BarChart3,
    color: "green",
  },
  {
    id: "security",
    title: "Enterprise Security",
    description: "Protect your content with industry-leading security",
    icon: Shield,
    color: "red",
  },
  {
    id: "distribution",
    title: "Global Distribution",
    description: "Reach readers worldwide with our distribution network",
    icon: Globe,
    color: "indigo",
  },
  {
    id: "performance",
    title: "Lightning Fast",
    description: "Optimized for speed and performance across all devices",
    icon: Zap,
    color: "yellow",
  },
]

const colorClasses = {
  blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200",
  purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200",
  green: "from-green-500 to-green-600 bg-green-50 text-green-600 border-green-200",
  red: "from-red-500 to-red-600 bg-red-50 text-red-600 border-red-200",
  indigo: "from-indigo-500 to-indigo-600 bg-indigo-50 text-indigo-600 border-indigo-200",
  yellow: "from-yellow-500 to-yellow-600 bg-yellow-50 text-yellow-600 border-yellow-200",
}

export function PlatformShowcase() {
  const [activeFeature, setActiveFeature] = useState("content")

  const activeFeatureData = features.find((f) => f.id === activeFeature)

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Platform Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, manage, and monetize your digital content in one comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Feature tabs */}
          <div className="space-y-4">
            {features.map((feature) => {
              const Icon = feature.icon
              const isActive = activeFeature === feature.id
              const colors = colorClasses[feature.color as keyof typeof colorClasses].split(" ")

              return (
                <Card
                  key={feature.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    isActive
                      ? `border-2 ${colors[3]} shadow-md`
                      : "border border-gray-200 hover:border-gray-300 hover:shadow-sm"
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg ${colors[2]} flex items-center justify-center`}>
                        <Icon className={`h-6 w-6 ${colors[4]}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Feature visualization */}
          <div className="relative">
            <Card className="border border-gray-200 shadow-lg">
              <CardContent className="p-8">
                {activeFeatureData && (
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorClasses[activeFeatureData.color as keyof typeof colorClasses].split(" ")[0]} ${colorClasses[activeFeatureData.color as keyof typeof colorClasses].split(" ")[1]} flex items-center justify-center`}
                      >
                        <activeFeatureData.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{activeFeatureData.title}</h3>
                        <p className="text-gray-600">{activeFeatureData.description}</p>
                      </div>
                    </div>

                    {/* Dynamic content based on active feature */}
                    {activeFeature === "content" && (
                      <div className="rounded-lg overflow-hidden">
                        <img
                          src="/images/marketplace-interface.png"
                          alt="Publica.la marketplace interface showing content inventory management"
                          className="w-full h-auto"
                        />
                      </div>
                    )}

                    {activeFeature === "customization" && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-purple-100 p-3 rounded-lg text-center">
                            <div className="w-full h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded mb-2"></div>
                            <div className="text-xs text-purple-700">Purple</div>
                          </div>
                          <div className="bg-blue-100 p-3 rounded-lg text-center">
                            <div className="w-full h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded mb-2"></div>
                            <div className="text-xs text-blue-700">Blue</div>
                          </div>
                          <div className="bg-green-100 p-3 rounded-lg text-center">
                            <div className="w-full h-16 bg-gradient-to-br from-green-400 to-green-600 rounded mb-2"></div>
                            <div className="text-xs text-green-700">Green</div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="h-4 bg-purple-200 rounded w-1/3 mb-3"></div>
                          <div className="space-y-2">
                            <div className="flex gap-2">
                              <div className="w-4 h-4 bg-purple-500 rounded"></div>
                              <div className="h-3 bg-gray-200 rounded flex-1"></div>
                            </div>
                            <div className="flex gap-2">
                              <div className="w-4 h-4 bg-purple-300 rounded"></div>
                              <div className="h-3 bg-gray-200 rounded flex-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeFeature === "analytics" && (
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                          <div className="flex items-end gap-2 h-24 mb-2">
                            {[30, 60, 45, 80, 55, 90, 70].map((height, i) => (
                              <div
                                key={i}
                                className="bg-gradient-to-t from-green-500 to-green-400 rounded-t flex-1"
                                style={{ height: `${height}%` }}
                              ></div>
                            ))}
                          </div>
                          <div className="text-sm text-green-700">Revenue Growth</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">+24%</div>
                            <div className="text-sm text-gray-600">This Month</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">89.2K</div>
                            <div className="text-sm text-gray-600">Total Users</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {(activeFeature === "security" ||
                      activeFeature === "distribution" ||
                      activeFeature === "performance") && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <div
                                className={`w-8 h-8 rounded-full bg-gradient-to-br ${colorClasses[activeFeatureData.color as keyof typeof colorClasses].split(" ")[0]} ${colorClasses[activeFeatureData.color as keyof typeof colorClasses].split(" ")[1]} flex items-center justify-center`}
                              >
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <div className="h-3 bg-gray-300 rounded w-3/4 mb-1"></div>
                                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                              </div>
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
