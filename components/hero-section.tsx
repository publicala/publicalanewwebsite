"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
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

          {/* YouTube video embed */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/ULZaZTvsUQs"
                  title="Publica.la Platform Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
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
