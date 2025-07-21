import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, Newspaper, BookOpen, Users, Library } from "lucide-react"

interface CaseStudiesListProps {
  dict: any
  locale?: string
}

const icons = {
  publishers: Building2,
  bookshops: BookOpen,
  "newspapers-magazines": Newspaper,
  "content-creators": Users,
  libraries: Library,
}

const colors = {
  publishers: "bg-blue-50 text-blue-700 border-blue-200",
  bookshops: "bg-green-50 text-green-700 border-green-200",
  "newspapers-magazines": "bg-purple-50 text-purple-700 border-purple-200",
  "content-creators": "bg-orange-50 text-orange-700 border-orange-200",
  libraries: "bg-teal-50 text-teal-700 border-teal-200",
}

const images = {
  "hammurabi-publishing": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disen%CC%83o%20sin%20ti%CC%81tulo%20%2815%29-AM2SIFCXWmh7VmITCRm8rsY0Q7kdME.png",
  "bajalibros": "/images/logos/bajalibros.png",
  "antartica-libreria": "/antarctica-digital-bookstore.png",
  "ebooks-patagonia": "/patagonia-ebooks-montage.png",
  "forbes-colombia": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disen%CC%83o%20sin%20ti%CC%81tulo%20%2823%29-nGfFDP1fjrcLQcjPTdbSwt6bMGHjp8.png",
}

export function CaseStudiesList({ dict, locale }: CaseStudiesListProps) {
  const getLocalizedHref = (href: string) => {
    if (href.startsWith('/')) {
      return `/${locale}${href}`
    }
    return href
  }
  
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.caseStudies.list.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.caseStudies.list.subtitle}
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(dict.caseStudies.list.categories)
            .filter(([_, category]: [string, any]) => category.cases.length > 0)
            .map(([key, category]: [string, any]) => {
              const IconComponent = icons[key as keyof typeof icons]
              const color = colors[key as keyof typeof colors]

              return (
                <div key={key} className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <Badge variant="outline" className={color}>
                      {category.cases.length} {category.cases.length === 1 ? dict.caseStudies.list.caseStudy : dict.caseStudies.list.caseStudies}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {category.cases.map((caseStudy: any) => (
                      <Card
                        key={caseStudy.id}
                        className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={images[caseStudy.id as keyof typeof images] || "/placeholder.svg"}
                            alt={caseStudy.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex flex-wrap gap-2 mb-2">
                              {caseStudy.tags.map((tag: string) => (
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
                            <h5 className="font-semibold text-sm">{dict.caseStudies.list.keyResults}</h5>
                            <ul className="space-y-1">
                              {caseStudy.results.slice(0, 2).map((result: string, index: number) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Link
                            href={getLocalizedHref(`/case-studies/${caseStudy.id}`)}
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group/link"
                          >
                            {dict.caseStudies.list.readFullCaseStudy}
                            <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
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
                  href={getLocalizedHref("/pricing")}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Get Started For Free
                </Link>
                <Link
                  href={getLocalizedHref("/about-us")}
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
