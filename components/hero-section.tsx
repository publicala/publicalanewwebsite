"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, BookOpen, Users, TrendingUp } from "lucide-react"
import { DemoRequestModal } from "@/components/demo-request-modal"

// Array of taglines for A/B testing
const TAGLINES = [
  {
    heading: "Sell Smarter. Showcase Better.",
    subheading: "The ultimate platform to manage digital libraries and power your content ecommerce.",
  },
  {
    heading: "Your Digital Library. Your Online Store. One Platform.",
    subheading: "Build, brand, and monetize your digital content with ease.",
  },
  {
    heading: "Ecommerce Meets Content Management",
    subheading: "Organize your digital library and sell ebooks, audiobooks, and more — all in one place.",
  },
  {
    heading: "From Library to Checkout in Seconds",
    subheading: "A seamless platform for managing digital collections and selling content globally.",
  },
  {
    heading: "Turn Your Digital Library Into a Revenue Engine",
    subheading: "Comprehensive tools to manage, showcase, and monetize your content catalog.",
  },
  {
    heading: "Where Digital Libraries and Ecommerce Converge",
    subheading: "Simplify content management and boost revenue with a single, powerful platform.",
  },
  {
    heading: "Build Your Digital Library. Sell to the World.",
    subheading: "Publica.la helps you organize, customize, and monetize your content at scale.",
  },
]

export function HeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  // Select a random tagline on component mount
  const tagline = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * TAGLINES.length)
    return TAGLINES[randomIndex]
  }, [])

  return (
    <section className="relative w-full py-20 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              {tagline.heading}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">{tagline.subheading}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-md font-medium">
                <a href="https://app.publica.la/platform/sign-up/register/" target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-md font-medium"
                onClick={() => setIsDemoModalOpen(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-white flex items-center justify-center text-xs font-medium text-white"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span>Trusted by 1000+ organizations worldwide</span>
            </div>
          </div>

          {/* Visual dashboard mockup */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                      <div className="h-3 bg-blue-200 rounded w-12"></div>
                    </div>
                    <div className="text-xl font-bold text-blue-700">1,247</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="h-4 w-4 text-green-600" />
                      <div className="h-3 bg-green-200 rounded w-12"></div>
                    </div>
                    <div className="text-xl font-bold text-green-700">89.2K</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="h-4 w-4 text-purple-600" />
                      <div className="h-3 bg-purple-200 rounded w-12"></div>
                    </div>
                    <div className="text-xl font-bold text-purple-700">+24%</div>
                  </div>
                </div>

                {/* Chart visualization */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="h-3 bg-gray-200 rounded w-1/3 mb-3"></div>
                  <div className="flex items-end gap-2 h-20">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t flex-1"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Content list */}
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-gray-300 to-gray-400"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-300 rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="w-12 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-8 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full z-0 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full z-0 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Demo Request Modal */}
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  )
}
