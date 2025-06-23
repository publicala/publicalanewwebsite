import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, Newspaper, BookOpen, Users, Library } from "lucide-react"

const caseStudiesByCategory = {
  publishers: {
    title: "Publishers",
    icon: Building2,
    color: "bg-blue-50 text-blue-700 border-blue-200",
    cases: [
      {
        id: "hammurabi-publishing",
        title: "Editorial Hammurabi",
        subtitle: "Expanding Digital Reach in Legal Publishing",
        description:
          "How a leading legal publisher in Argentina modernized their operations and expanded their audience with digital publishing solutions.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disen%CC%83o%20sin%20ti%CC%81tulo%20%2815%29-AM2SIFCXWmh7VmITCRm8rsY0Q7kdME.png",
        results: [
          "Significant increase in sales and new subscribers",
          "Expanded national and international audience",
          "Strengthened position as forward-thinking legal publisher",
        ],
        tags: ["Legal Publishing", "Digital Transformation", "SME"],
      },
    ],
  },
  bookshops: {
    title: "Bookshops",
    icon: BookOpen,
    color: "bg-green-50 text-green-700 border-green-200",
    cases: [
      {
        id: "bajalibros",
        title: "BajaLibros",
        subtitle: "Expanding Digital Library Across Borders",
        description:
          "How Argentina's leading eBook and audiobook platform successfully launched in Colombia, Mexico and Spain using multi-store architecture and localized payment solutions.",
        image: "/images/logos/bajalibros.png",
        results: [
          "+20% growth in total revenue within the first year",
          "30% of new subscriptions from Colombia, 25% from Mexico",
          "10,000+ app downloads in Spain during Q1 2025",
        ],
        tags: ["Digital Library", "International Expansion", "Multi-store Architecture"],
      },
      {
        id: "antartica-libreria",
        title: "Antártica Librería",
        subtitle: "Transforming Chile's Largest Bookstore Chain",
        description:
          "How Chile's oldest and largest bookstore chain successfully entered the digital realm, offering eBooks and audiobooks while maintaining their trusted brand identity.",
        image: "/antarctica-digital-bookstore.png",
        results: [
          "30% increase in digital content revenue within 12 months",
          "15% lift in conversion rate on digital storefront",
          "5,000+ native app downloads in first quarter",
        ],
        tags: ["Brick-and-Mortar", "Digital Transformation", "Multi-format Content"],
      },
      {
        id: "ebooks-patagonia",
        title: "Ebooks Patagonia",
        subtitle: "Driving Institutional Sales & Marketing Efficiency with a 300% ROI",
        description:
          "Learn how Ebooks Patagonia leveraged Publica.la to achieve a 300% ROI by expanding institutional sales and implementing data-driven marketing strategies.",
        image: "/patagonia-ebooks-montage.png",
        results: [
          "300% ROI achieved in 2022",
          "Significant growth in sales to educational institutions and libraries",
          "Enhanced marketing effectiveness through data-driven campaigns",
        ],
        tags: ["Digital Bookstore", "Institutional Sales", "ROI Growth", "Data-Driven Marketing"],
      },
    ],
  },
  "newspapers-magazines": {
    title: "Newspapers & Magazines",
    icon: Newspaper,
    color: "bg-purple-50 text-purple-700 border-purple-200",
    cases: [
      {
        id: "forbes-colombia",
        title: "Forbes Colombia",
        subtitle: "Digital Content Management and Monetization",
        description:
          "Discover how Forbes Colombia increased digital subscription sales by 15% and expanded their subscriber base with comprehensive digital publishing solutions.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disen%CC%83o%20sin%20ti%CC%81tulo%20%2823%29-nGfFDP1fjrcLQcjPTdbSwt6bMGHjp8.png",
        results: [
          "+15% increase in subscription sales in 2022",
          "22% of total subscription sales in 2023 came through publica.la",
          "Significant expansion in subscriber base",
        ],
        tags: ["Business Magazine", "Subscription Growth", "Digital Monetization"],
      },
    ],
  },
  "content-creators": {
    title: "Content Creators",
    icon: Users,
    color: "bg-orange-50 text-orange-700 border-orange-200",
    cases: [],
  },
  libraries: {
    title: "Libraries",
    icon: Library,
    color: "bg-teal-50 text-teal-700 border-teal-200",
    cases: [],
  },
}

export function CaseStudiesList() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories by Solution</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore how organizations across different industries achieve digital publishing success with Publica.la
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(caseStudiesByCategory).map(([key, category]) => {
            const IconComponent = category.icon

            return (
              <div key={key} className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <Badge variant="outline" className={category.color}>
                    {category.cases.length} {category.cases.length === 1 ? "Case Study" : "Case Studies"}
                  </Badge>
                </div>

                {category.cases.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {category.cases.map((caseStudy) => (
                      <Card
                        key={caseStudy.id}
                        className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={caseStudy.image || "/placeholder.svg"}
                            alt={caseStudy.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex flex-wrap gap-2 mb-2">
                              {caseStudy.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <CardContent className="p-6">
                          <h4 className="text-xl font-bold mb-2">{caseStudy.title}</h4>
                          <p className="text-sm text-primary font-medium mb-3">{caseStudy.subtitle}</p>
                          <p className="text-gray-600 mb-4 line-clamp-3">{caseStudy.description}</p>

                          <div className="space-y-2 mb-6">
                            <h5 className="font-semibold text-sm">Key Results:</h5>
                            <ul className="space-y-1">
                              {caseStudy.results.slice(0, 2).map((result, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Link
                            href={`/case-studies/${caseStudy.id}`}
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group/link"
                          >
                            Read Full Case Study
                            <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="border-2 border-dashed border-gray-300">
                    <CardContent className="p-12 text-center">
                      <div className={`inline-flex p-3 rounded-full ${category.color} mb-4`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Coming Soon</h4>
                      <p className="text-gray-600 mb-4">
                        We're working on case studies for {category.title.toLowerCase()}. Check back soon to see how
                        organizations in this sector succeed with Publica.la.
                      </p>
                      <Badge variant="outline" className="bg-gray-50">
                        More case studies coming soon
                      </Badge>
                    </CardContent>
                  </Card>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to Be Our Next Success Story?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join hundreds of organizations that have transformed their digital publishing with Publica.la. Let's
                discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Get Started For Free
                </Link>
                <Link
                  href="/about-us" // Or perhaps /contact or /calendly-modal trigger
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
                >
                  Request a Demo
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
