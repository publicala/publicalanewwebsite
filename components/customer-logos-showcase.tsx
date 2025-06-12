import Image from "next/image"

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
    homepage: "py-16 px-6 bg-gray-50 border-t border-gray-100",
    solution: "py-12 px-6 bg-white",
    "case-studies": "py-12 px-6 bg-gray-50",
  }

  return (
    <section className={`w-full ${containerClasses[variant]}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <Image
                src={
                  logo.src ||
                  `/placeholder.svg?height=${logo.height}&width=${logo.width}&text=${encodeURIComponent(logo.name)}`
                }
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
                className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
