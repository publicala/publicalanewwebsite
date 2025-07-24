"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedBackground } from "@/components/ui/animated-background"

type Logo = {
  name: string
  src?: string
  width: number
  height: number
}

interface CustomerLogosShowcaseProps {
  title?: string
  subtitle?: string
  variant?: "homepage" | "solution" | "case-studies"
  industry?: "publishers" | "bookshops" | "creators" | "libraries" | "magazines"
  dict?: {
    customerLogosShowcase: {
      title: string
      subtitle: string
    }
  }
}

export function CustomerLogosShowcase({
  title,
  subtitle,
  variant = "homepage",
  industry,
  dict,
}: CustomerLogosShowcaseProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  // Use dict values if provided, otherwise fall back to props or defaults
  const displayTitle = dict?.customerLogosShowcase?.title || title || "Trusted by Leading Organizations"
  const displaySubtitle = dict?.customerLogosShowcase?.subtitle || subtitle || "Join thousands of content creators and publishers who trust Publica.la"

  // Single refs for managing animation
  const animationFrameRef = useRef<number | null>(null)
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const scrollingRef = useRef(false)
  const lastScrollTimeRef = useRef(0)

  // Define logo sets based on industry/context
  const getLogos = (): Logo[] => {
    switch (industry) {
      case "publishers":
        return [
          { name: "Penguin Random House", src: "/images/logos/penguin-random-house.webp", width: 180, height: 70 },
          { name: "Grupo Planeta", src: "/images/logos/grupo-planeta.webp", width: 170, height: 65 },
          { name: "Santillana", src: "/images/logos/santillana.webp", width: 160, height: 60 },
          { name: "SAGA Egmont", src: "/images/logos/saga-egmont.webp", width: 160, height: 70 },
        ]
      case "bookshops":
        return [
          { name: "BajaLibros", src: "/images/logos/bajalibros.webp", width: 160, height: 60 },
          { name: "Antártica Libros", src: "/images/logos/antartica-libros.webp", width: 180, height: 70 },
          { name: "Bookshop", src: "/images/logos/bookshop.webp", width: 140, height: 50 },
          { name: "Sanborns", src: "/images/logos/sanborns.webp", width: 150, height: 55 },
          { name: "Christianbook", src: "/images/logos/christianbook.webp", width: 180, height: 65 },
          { name: "Ebooks Patagonia", src: "/images/logos/ebooks-patagonia-logo.webp", width: 170, height: 60 },
        ]
      case "creators":
        return [
          { name: "Patrick Mork", src: "/images/logos/mork.webp", width: 160, height: 60 },
          { name: "Draper", src: "/images/logos/draper.webp", width: 160, height: 60 },
        ]
      case "libraries":
        return [
          { name: "CANOPUS Lector", src: "/images/logos/canopus-lector.webp", width: 160, height: 60 },
          { name: "Libros y Libros", src: "/images/logos/libros-y-libros.webp", width: 160, height: 60 },
          { name: "Alpha CLOUD", src: "/images/logos/alpha-cloud.webp", width: 160, height: 60 },
          { name: "Biblioteca virtual AMOLCA", src: "/images/logos/amolca.webp", width: 160, height: 60 },
        ]
      case "magazines":
        return [
          { name: "Forbes", src: "/images/logos/forbes.webp", width: 120, height: 45 }, // Path remains the same, content updated
          { name: "La Tercera", src: "/images/logos/la-tercera.webp", width: 140, height: 50 },
          { name: "Barcelona", src: "/images/logos/barcelona.webp", width: 140, height: 50 },
          { name: "Página 12", src: "/images/logos/pagina12.webp", width: 140, height: 50 },
          { name: "La Diaria", src: "/images/logos/ladiaria.webp", width: 140, height: 50 },
          { name: "Caras y Caretas", src: "/images/logos/carasycaretas.webp", width: 140, height: 50 },
        ]
      default: // Homepage / General
        return [
          { name: "BajaLibros", src: "/images/logos/bajalibros.webp", width: 160, height: 60 },
          { name: "Penguin Random House", src: "/images/logos/penguin-random-house.webp", width: 180, height: 70 },
          { name: "Grupo Planeta", src: "/images/logos/grupo-planeta.webp", width: 170, height: 65 },
          { name: "La Tercera", src: "/images/logos/la-tercera.webp", width: 140, height: 50 },
          { name: "Santillana", src: "/images/logos/santillana.webp", width: 160, height: 60 },
          { name: "Forbes", src: "/images/logos/forbes.webp", width: 120, height: 45 }, // Path remains the same, content updated
          { name: "Christianbook", src: "/images/logos/christianbook.webp", width: 180, height: 65 },
          { name: "SAGA Egmont", src: "/images/logos/saga-egmont.webp", width: 160, height: 70 },
          { name: "Antártica Libros", src: "/images/logos/antartica-libros.webp", width: 180, height: 70 },
          { name: "Bookshop", src: "/images/logos/bookshop.webp", width: 140, height: 50 },
          { name: "Sanborns", src: "/images/logos/sanborns.webp", width: 150, height: 55 },
          { name: "Ebooks Patagonia", src: "/images/logos/ebooks-patagonia-logo.webp", width: 170, height: 60 },
        ]
    }
  }

  const logos = getLogos()
  const displayLogos = [...logos, ...logos]

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (!carouselRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    setShowLeftArrow(scrollLeft > 20)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20)
  }

  // Clean up all timers and animations
  const cleanup = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
      pauseTimeoutRef.current = null
    }
  }

  // Improved auto-scroll with proper cleanup
  const startAutoScroll = () => {
    // Clean up any existing animation
    cleanup()

    if (isPaused) return

    const scrollSpeed = 0.5 // pixels per frame (much slower and consistent)

    const animate = () => {
      if (isPaused || !carouselRef.current) return

      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current

      // Reset to beginning when we reach halfway point
      if (scrollLeft >= scrollWidth / 2) {
        carouselRef.current.scrollLeft = 0
      } else {
        carouselRef.current.scrollLeft += scrollSpeed
      }

      checkScrollPosition()

      // Schedule next frame only if not paused
      if (!isPaused) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)
  }

  // Pause auto-scroll with timeout to resume
  const pauseAutoScroll = () => {
    setIsPaused(true)
    cleanup()

    // Clear any existing pause timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
    }

    // Resume after 3 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => {
      if (!scrollingRef.current) {
        setIsPaused(false)
      }
    }, 3000)
  }

  // Manual scroll functions
  const scrollLeft = () => {
    if (!carouselRef.current || scrollingRef.current) return

    pauseAutoScroll()
    scrollingRef.current = true

    const scrollAmount = Math.min(300, carouselRef.current.clientWidth / 2)
    carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })

    setTimeout(() => {
      scrollingRef.current = false
      checkScrollPosition()
      if (!isPaused) {
        startAutoScroll()
      }
    }, 500)
  }

  const scrollRight = () => {
    if (!carouselRef.current || scrollingRef.current) return

    pauseAutoScroll()
    scrollingRef.current = true

    const scrollAmount = Math.min(300, carouselRef.current.clientWidth / 2)
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })

    setTimeout(() => {
      scrollingRef.current = false
      checkScrollPosition()
      if (!isPaused) {
        startAutoScroll()
      }
    }, 500)
  }

  // Initialize auto-scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPaused(false)
    }, 1000)

    return () => {
      clearTimeout(timer)
      cleanup()
    }
  }, [])

  // Start/stop auto-scroll based on isPaused state
  useEffect(() => {
    if (!isPaused) {
      startAutoScroll()
    } else {
      cleanup()
    }

    return cleanup
  }, [isPaused])

  // Add scroll event listener
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      checkScrollPosition()
    }

    carousel.addEventListener("scroll", handleScroll)
    checkScrollPosition()

    return () => {
      carousel.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const containerClasses = {
    homepage: "py-20 px-6 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100",
    solution: "py-16 px-6 bg-white",
    "case-studies": "py-16 px-6 bg-gradient-to-br from-gray-50 to-white",
  }

  return (
    <section className={`w-full relative overflow-hidden ${containerClasses[variant]}`}>
      <AnimatedBackground variant="minimal" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader title={displayTitle} subtitle={displaySubtitle} />

        <div className="relative mt-12">
          {/* Left scroll button */}
          <button
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md border border-gray-100 transition-opacity duration-300 ${
              showLeftArrow ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          {/* Carousel container */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto overflow-y-hidden scrollbar-hide gap-8 py-4 px-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              height: "120px",
            }}
            onMouseEnter={() => pauseAutoScroll()}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => pauseAutoScroll()}
            onTouchEnd={() => setIsPaused(false)}
          >
            {displayLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-none flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-w-[200px] h-[100px]"
                style={{ transform: "translateZ(0)" }}
              >
                <Image
                  src={
                    logo.src ||
                    `/placeholder.svg?height=${logo.height || "60"}&width=${logo.width || "160"}&text=${encodeURIComponent(logo.name)}`
                  }
                  alt={`${logo.name} logo`}
                  width={logo.width || 160}
                  height={logo.height || 60}
                  className="max-w-full max-h-full h-auto w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          {/* Right scroll button */}
          <button
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md border border-gray-100 transition-opacity duration-300 ${
              showRightArrow ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Gradient fades on edges */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
