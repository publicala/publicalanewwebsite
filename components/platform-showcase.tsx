"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, BarChart3, Shield, Globe } from "lucide-react"
import React from "react"

interface PlatformShowcaseProps {
  dict: {
    platformShowcase: {
      title: string
      subtitle: string
      features: Array<{
        id: string
        title: string
        description: string
        color: string
      }>
      analytics: {
        revenueGrowth: string
        thisMonth: string
        totalUsers: string
      }
      sales: {
        globalRevenue: string
        countries: string
        currencies: string
        multiCurrency: string
        creditCards: {
          title: string
          description: string
        }
        digitalWallets: {
          title: string
          description: string
        }
      }
      security: {
        drm: {
          title: string
          description: string
        }
        streaming: {
          title: string
          description: string
        }
        observability: {
          title: string
          description: string
        }
      }
    }
  }
}

const colorClasses = {
  blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200",
  purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200",
  green: "from-green-500 to-green-600 bg-green-50 text-green-600 border-green-200",
  red: "from-red-500 to-red-600 bg-red-50 text-red-600 border-red-200",
  indigo: "from-indigo-500 to-indigo-600 bg-indigo-50 text-indigo-600 border-indigo-200",
  yellow: "from-yellow-500 to-yellow-600 bg-yellow-50 text-yellow-600 border-yellow-200",
}

export function PlatformShowcase({ dict }: PlatformShowcaseProps) {
  const [activeFeature, setActiveFeature] = useState("content")

  const featureIcons = [BookOpen, BarChart3, Shield, Globe]
  const activeFeatureData = dict.platformShowcase.features.find((f) => f.id === activeFeature)
  const activeFeatureIcon = featureIcons[dict.platformShowcase.features.findIndex((f) => f.id === activeFeature)]

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.platformShowcase.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict.platformShowcase.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Feature tabs */}
          <div className="space-y-4">
            {dict.platformShowcase.features.map((feature, index) => {
              const Icon = featureIcons[index]
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
                        {React.createElement(activeFeatureIcon, { className: "h-8 w-8 text-white" })}
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
                          <div className="text-sm text-green-700">{dict.platformShowcase.analytics.revenueGrowth}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">+24%</div>
                            <div className="text-sm text-gray-600">{dict.platformShowcase.analytics.thisMonth}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">89.2K</div>
                            <div className="text-sm text-gray-600">{dict.platformShowcase.analytics.totalUsers}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {(activeFeature === "security" || activeFeature === "sales") && (
                      <div className="space-y-4">
                        {activeFeature === "sales" ? (
                          // Sales-specific content
                          <div className="space-y-4">
                            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                              <div className="grid grid-cols-3 gap-4 mb-4">
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-indigo-600">$2.4M</div>
                                  <div className="text-sm text-indigo-700">{dict.platformShowcase.sales.globalRevenue}</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-green-600">156</div>
                                  <div className="text-sm text-green-700">{dict.platformShowcase.sales.countries}</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-blue-600">24</div>
                                  <div className="text-sm text-blue-700">{dict.platformShowcase.sales.currencies}</div>
                                </div>
                              </div>
                              <div className="text-sm text-indigo-700 text-center">
                                {dict.platformShowcase.sales.multiCurrency}
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                                  <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium">{dict.platformShowcase.sales.creditCards.title}</div>
                                  <div className="text-xs text-gray-600">{dict.platformShowcase.sales.creditCards.description}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                                  <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium">{dict.platformShowcase.sales.digitalWallets.title}</div>
                                  <div className="text-xs text-gray-600">{dict.platformShowcase.sales.digitalWallets.description}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          // Security content
                          <div className="grid grid-cols-1 gap-3">
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <div
                                className={`w-8 h-8 rounded-full bg-gradient-to-br ${colorClasses[activeFeatureData.color as keyof typeof colorClasses].split(" ")[0]} ${colorClasses[activeFeatureData.color as keyof typeof colorClasses].split(" ")[1]} flex items-center justify-center`}
                              >
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900">
                                  {dict.platformShowcase.security.drm.title}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {dict.platformShowcase.security.drm.description}
                                </div>
                              </div>
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <div
                                className={`w-8 h-8 rounded-full bg-gradient-to-br ${colorClasses[activeFeatureData.color as keyof typeof colorClasses].split(" ")[0]} ${colorClasses[activeFeatureData.color as keyof typeof colorClasses].split(" ")[1]} flex items-center justify-center`}
                              >
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900">
                                  {dict.platformShowcase.security.streaming.title}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {dict.platformShowcase.security.streaming.description}
                                </div>
                              </div>
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <div
                                className={`w-8 h-8 rounded-full bg-gradient-to-br ${colorClasses[activeFeatureData.color as keyof typeof colorClasses].split(" ")[0]} ${colorClasses[activeFeatureData.color as keyof typeof colorClasses].split(" ")[1]} flex items-center justify-center`}
                              >
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900">
                                  {dict.platformShowcase.security.observability.title}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {dict.platformShowcase.security.observability.description}
                                </div>
                              </div>
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        )}
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
