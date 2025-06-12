"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Monitor, Smartphone, Tablet } from "lucide-react"

const themes = [
  {
    id: "professional",
    name: "Professional Blue",
    description: "Clean and corporate design perfect for business content",
    primary: "#2563eb",
    secondary: "#1e40af",
    accent: "#3b82f6",
    background: "#f8fafc",
  },
  {
    id: "creative",
    name: "Creative Purple",
    description: "Vibrant and modern design for creative professionals",
    primary: "#7c3aed",
    secondary: "#6d28d9",
    accent: "#8b5cf6",
    background: "#faf5ff",
  },
  {
    id: "nature",
    name: "Nature Green",
    description: "Organic and calming design inspired by nature",
    primary: "#059669",
    secondary: "#047857",
    accent: "#10b981",
    background: "#f0fdf4",
  },
  {
    id: "sunset",
    name: "Sunset Orange",
    description: "Warm and energetic design with sunset colors",
    primary: "#ea580c",
    secondary: "#c2410c",
    accent: "#f97316",
    background: "#fff7ed",
  },
]

const devices = [
  { id: "desktop", icon: Monitor, label: "Desktop" },
  { id: "tablet", icon: Tablet, label: "Tablet" },
  { id: "mobile", icon: Smartphone, label: "Mobile" },
]

export function ThemeOptions() {
  const [activeTheme, setActiveTheme] = useState("professional")
  const [activeDevice, setActiveDevice] = useState("desktop")

  const currentTheme = themes.find((t) => t.id === activeTheme)

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customizable Store Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create a branded STORE experience that reflects your identity. Choose from pre-designed themes or customize
            every detail to match your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Theme selection */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Palette className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Choose Your Theme</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {themes.map((theme) => (
                <Card
                  key={theme.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    activeTheme === theme.id
                      ? "border-2 border-primary shadow-md"
                      : "border border-gray-200 hover:border-gray-300 hover:shadow-sm"
                  }`}
                  onClick={() => setActiveTheme(theme.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-2 mb-3">
                      <div
                        className="w-6 h-6 rounded-full border border-gray-200"
                        style={{ backgroundColor: theme.primary }}
                      ></div>
                      <div
                        className="w-6 h-6 rounded-full border border-gray-200"
                        style={{ backgroundColor: theme.secondary }}
                      ></div>
                      <div
                        className="w-6 h-6 rounded-full border border-gray-200"
                        style={{ backgroundColor: theme.accent }}
                      ></div>
                    </div>
                    <h4 className="font-semibold mb-1">{theme.name}</h4>
                    <p className="text-sm text-gray-600">{theme.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Device preview options */}
            <div className="space-y-4">
              <h4 className="font-semibold">Preview Device</h4>
              <div className="flex gap-2">
                {devices.map((device) => {
                  const Icon = device.icon
                  return (
                    <Button
                      key={device.id}
                      variant={activeDevice === device.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveDevice(device.id)}
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {device.label}
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Theme preview */}
          <div className="relative">
            <Card className="border border-gray-200 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div
                  className={`p-6 ${
                    activeDevice === "mobile"
                      ? "max-w-sm mx-auto"
                      : activeDevice === "tablet"
                        ? "max-w-md mx-auto"
                        : "w-full"
                  }`}
                  style={{ backgroundColor: currentTheme?.background }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded" style={{ backgroundColor: currentTheme?.primary }}></div>
                      <div className="h-4 bg-gray-300 rounded w-24"></div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-4 mb-6 border-b border-gray-200 pb-2">
                    {["Home", "Library", "About"].map((item, i) => (
                      <div
                        key={item}
                        className={`h-3 rounded ${i === 0 ? "w-12" : "w-16"}`}
                        style={{
                          backgroundColor: i === 0 ? currentTheme?.primary : "#d1d5db",
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Content area */}
                  <div className="space-y-4">
                    <div className="h-6 rounded w-3/4" style={{ backgroundColor: currentTheme?.secondary }}></div>

                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2].map((i) => (
                        <div key={i} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                          <div
                            className="w-full h-16 rounded mb-2"
                            style={{ backgroundColor: currentTheme?.accent + "20" }}
                          ></div>
                          <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                          <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: currentTheme?.primary }}></div>
                        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-100 rounded w-full"></div>
                        <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                        <div className="h-2 bg-gray-100 rounded w-3/5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex justify-center gap-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-2 rounded"
                          style={{
                            backgroundColor: i === 1 ? currentTheme?.accent : "#e5e7eb",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
