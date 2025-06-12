import Image from "next/image"
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
        ]
    }
  }

  const logos = getLogos()

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={
                  logo.src ||
                  `/placeholder.svg?height=${logo.height || "/placeholder.svg"}&width=${logo.width}&text=${encodeURIComponent(logo.name)}`
                }
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
                className="max-w-full h-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
