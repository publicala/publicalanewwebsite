"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Sparkles } from "lucide-react"
import { DemoVideoModal } from "@/components/demo-video-modal"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { CalendlyButton } from "@/components/calendly-button"
import Image from "next/image"

interface HeroSectionProps {
  dict?: {
    hero: {
      taglines: Array<{
        heading: string
        subheading: string
      }>
      trustedBy: string
      scheduleMeeting: string
      watchDemo: string
      joinLeaders: string
      noCreditCard: string
    }
  }
}

export function HeroSection({ dict }: HeroSectionProps) {
  const [isDemoVideoOpen, setIsDemoVideoOpen] = useState(false)
  
  // Use dictionary taglines if available, otherwise fall back to default
  const taglines = dict?.hero.taglines || [
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
  
  const [tagline, setTagline] = useState(taglines[0]) // Start with first tagline

  // Select a random tagline only on client side
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * taglines.length)
    setTagline(taglines[randomIndex])
  }, [taglines])

  return (
    <section className="relative w-full py-20 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <AnimatedBackground variant="hero" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>{dict?.hero.trustedBy || "Trusted by 1000+ organizations worldwide"}</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
                {tagline.heading}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">{tagline.subheading}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <CalendlyButton
                size="lg"
                className="rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                showArrow={true}
              >
                {dict?.hero.scheduleMeeting || "Schedule a Meeting"}
              </CalendlyButton>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl font-medium border-2 hover:bg-gray-50 transition-all duration-300"
                onClick={() => setIsDemoVideoOpen(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                {dict?.hero.watchDemo || "Watch Demo"}
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  { src: "/images/isologos/santillana-iso.png", alt: "Santillana" },
                  { src: "/images/isologos/penguin-iso.jpeg", alt: "Penguin Random House" },
                  { src: "/images/isologos/forbes-iso.png", alt: "Forbes" },
                  { src: "/images/isologos/planeta-iso.gif", alt: "Grupo Planeta" },
                ].map((logo, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300"
                  >
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">{dict?.hero.joinLeaders || "Join industry leaders"}</span>
                <br />
                <span className="text-xs">{dict?.hero.noCreditCard || "No credit card required"}</span>
              </div>
            </div>
          </div>

          {/* Enhanced video section */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 group hover:shadow-3xl transition-all duration-500">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.youtube.com/embed/ULZaZTvsUQs"
                  title="Publica.la Platform Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full z-0 blur-2xl animate-pulse"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full z-0 blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Demo Video Modal */}
      <DemoVideoModal isOpen={isDemoVideoOpen} onClose={() => setIsDemoVideoOpen(false)} />
    </section>
  )
}
