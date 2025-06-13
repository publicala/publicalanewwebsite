"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Palette } from "lucide-react"

const themes = [
  {
    id: "publishers",
    name: "For Publishers",
    description: "Optimized for publishing houses with catalog management focus",
    screenshot: "/images/theme-publishers.png",
    accent: "#2563eb",
    background: "#f8fafc",
  },
  {
    id: "bookshops",
    name: "For Bookshops",
    description: "Designed for bookstores with inventory and sales features",
    screenshot: "/images/theme-bookshops.png",
    accent: "#7c3aed",
    background: "#faf5ff",
  },
  {
    id: "libraries",
    name: "For Libraries",
    description: "Perfect for libraries with lending and collection features",
    screenshot: "/images/theme-libraries.png",
    accent: "#059669",
    background: "#f0fdf4",
  },
  {
    id: "authors",
    name: "For Authors",
    description: "Tailored for content creators with portfolio showcase",
    screenshot: "/images/theme-authors.png",
    accent: "#ea580c",
    background: "#fff7ed",
  },
]

export function ThemeOptions() {
  const [activeTheme, setActiveTheme] = useState("professional")

  const currentTheme = themes.find((t) => t.id === activeTheme)

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customizable Store Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create a branded store experience tailored to your specific needs. Choose from industry-optimized templates
            designed for different types of organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Theme selection */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Palette className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Choose Your Store Type</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {themes.map((theme) => (
                <Card
                  key={theme.id}
                  className={`cursor-pointer transition-all duration-200 overflow-hidden ${
                    activeTheme === theme.id
                      ? "border-2 border-primary shadow-md"
                      : "border border-gray-200 hover:border-gray-300 hover:shadow-sm"
                  }`}
                  onClick={() => setActiveTheme(theme.id)}
                >
                  <CardContent className="p-4">
                    <div className="aspect-video w-full rounded-md overflow-hidden mb-3 bg-gray-100">
                      <img
                        src={theme.screenshot || "/placeholder.svg"}
                        alt={`${theme.name} screenshot`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=180&width=320"
                        }}
                      />
                    </div>
                    <h4 className="font-semibold mb-1">{theme.name}</h4>
                    <p className="text-sm text-gray-600">{theme.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
