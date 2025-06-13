"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedBackground } from "@/components/ui/animated-background"

interface CustomerLogosShowcaseProps {
  title?: string
  subtitle?: string
  variant?: "homepage" | "solution" | "case-studies"
  industry?: "publishers" | "bookshops" | "creators" | "libraries" | "magazines"
}

export function CustomerLogosShowcase({
  title = "Trusted by Leading Organizations",
  subtitle = "Join thousands of content creators and publishers who trust Publica.la",
  variant = "homepage",
  industry,
}: CustomerLogosShowcaseProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null)
  const scrollingRef = useRef(false)

  // Define logo sets based on industry/context
  const getLogos = () => {
    switch (industry) {
      case "publishers":
        return [
          { name: "Major Publisher 1", width: 140, height: 60 },
          { name: "Academic Press", width: 120, height: 50 },
          { name: "Independent Publisher", width: 130, height: 55 },
          { name: "Educational Publisher", width: 135, height: 58 },
          { name: "Trade Publisher", width: 125, height: 52 },
        ]
      case "bookshops":
        return [
          { name: "Independent Bookstore", width: 130, height: 55 },
          { name: "Chain Bookstore", width: 140, height: 60 },
          { name: "Online Bookshop", width: 120, height: 50 },
          { name: "Specialty Bookstore", width: 135, height: 58 },
        ]
      case "creators":
        return [
          { name: "Content Creator 1", width: 125, height: 52 },
          { name: "Digital Author", width: 130, height: 55 },
          { name: "Course Creator", width: 135, height: 58 },
          { name: "Media Producer", width: 140, height: 60 },
        ]
      case "libraries":
        return [
          { name: "Public Library System", width: 140, height: 60 },
          { name: "University Library", width: 130, height: 55 },
          { name: "Research Library", width: 125, height: 52 },
          { name: "Digital Library", width: 135, height: 58 },
        ]
      case "magazines":
        return [
          { name: "News Magazine", width: 130, height: 55 },
          { name: "Trade Publication", width: 140, height: 60 },
          { name: "Digital Magazine", width: 125, height: 52 },
          { name: "Industry Journal", width: 135, height: 58 },
        ]
      default:
        return [
          { name: "BajaLibros", src: "/images/logos/bajalibros.png", width: 160, height: 60 },
          { name: "Penguin Random House", src: "/images/logos/penguin-random-house.png", width: 180, height: 70 },
          { name: "Grupo Planeta", src: "/images/logos/grupo-planeta.jpeg", width: 170, height: 65 },
          { name: "La Tercera", src: "/images/logos/la-tercera.png", width: 140, height: 50 },
          { name: "Santillana", src: "/images/logos/santillana.png", width: 160, height: 60 },
          { name: "Forbes", src: "/images/logos/forbes.png", width: 120, height: 45 },
          { name: "Christianbook", src: "/images/logos/christianbook.png", width: 180, height: 65 },
          { name: "SAGA Egmont", src: "/images/logos/saga-egmont.webp", width: 160, height: 70 },
        ]
    }
  }

  const logos = getLogos()

  // Duplicate logos to create a seamless loop effect
  const displayLogos = [...logos, ...logos]

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (!carouselRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    setShowLeftArrow(scrollLeft > 20)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20)
  }

  // Scroll functions with debounce to prevent conflicts
  const scrollLeft = () => {
    if (!carouselRef.current || scrollingRef.current) return

    pauseAutoScroll()
    scrollingRef.current = true

    const scrollAmount = Math.min(300, carouselRef.current.clientWidth / 2)
    carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })

    setTimeout(() => {
      scrollingRef.current = false
      checkScrollPosition()
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
    }, 500)
  }

  // Improved auto-scroll functionality
  const startAutoScroll = () => {
    if (autoScrollTimerRef.current) clearInterval(autoScrollTimerRef.current)

    setIsPaused(false)

    // Use requestAnimationFrame for smoother animation
    let lastTimestamp = 0
    const scrollSpeed = 0.12 // pixels per millisecond (significantly reduced)

    const scroll = (timestamp: number) => {
      if (isPaused) return

      if (!carouselRef.current) return

      if (lastTimestamp) {
        const elapsed = timestamp - lastTimestamp
        const scrollAmount = scrollSpeed * elapsed

        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current

        // Reset to beginning when we reach halfway point (since we duplicated the logos)
        if (scrollLeft >= scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0
        } else {
          carouselRef.current.scrollLeft += scrollAmount
        }

        checkScrollPosition()
      }

      lastTimestamp = timestamp

      if (!isPaused) {
        requestAnimationFrame(scroll)
      }
    }

    requestAnimationFrame(scroll)
  }

  const pauseAutoScroll = () => {
    setIsPaused(true)

    // Restart after 5 seconds of inactivity
    setTimeout(() => {
      if (!scrollingRef.current) {
        startAutoScroll()
      }
    }, 5000)
  }

  // Initialize auto-scroll and cleanup
  useEffect(() => {
    // Short delay before starting to ensure component is fully rendered
    const timer = setTimeout(() => {
      startAutoScroll()
    }, 1000)

    return () => {
      clearTimeout(timer)
      if (autoScrollTimerRef.current) clearInterval(autoScrollTimerRef.current)
    }
  }, [])

  // Add scroll event listener
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      checkScrollPosition()
    }

    carousel.addEventListener("scroll", handleScroll)
    checkScrollPosition() // Initial check

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
        <SectionHeader title={title} subtitle={subtitle} />

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

          {/* Carousel container - fixed height to prevent tilting */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide gap-8 py-4 px-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              height: "120px", // Fixed height to prevent tilting
            }}
            onMouseEnter={() => pauseAutoScroll()}
            onMouseLeave={() => startAutoScroll()}
            onTouchStart={() => pauseAutoScroll()}
            onTouchEnd={() => startAutoScroll()}
          >
            {displayLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-none flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-w-[200px] h-[100px]"
                style={{ transform: "translateZ(0)" }} // Force GPU acceleration
              >
                <Image
                  src={
                    logo.src ||
                    `/placeholder.svg?height=${logo.height || "/placeholder.svg"}&width=${logo.width}&text=${encodeURIComponent(logo.name)}`
                  }
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
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
