import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Quote } from "lucide-react"

interface CaseStudyProps {
  title: string
  subtitle: string
  overview: string
  challenges: string[]
  solution: string
  results: string[]
  quote: string
  quoteName: string
  quoteRole: string
  imageSrc: string
  imageAlt: string
  reversed?: boolean
}

export function CaseStudy({
  title,
  subtitle,
  overview,
  challenges,
  solution,
  results,
  quote,
  quoteName,
  quoteRole,
  imageSrc,
  imageAlt,
  reversed = false,
}: CaseStudyProps) {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <Card className="border-0 shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className={`grid grid-cols-1 ${imageSrc ? "lg:grid-cols-2" : ""} gap-0 ${reversed ? "flex-row-reverse" : ""}`}>
              {imageSrc && (
                <div className={`order-2 lg:order-${reversed ? "2" : "1"} h-full`}>
                  <div className="relative h-full min-h-[300px] lg:min-h-[500px]">
                    <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
                  </div>
                </div>
              )}

              <div className={`order-1 lg:order-${reversed ? "1" : "2"} p-8 lg:p-12 bg-white`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Overview</h3>
                    <p className="text-gray-600">{overview}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Challenges</h3>
                    <ul className="space-y-2">
                      {challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Solution</h3>
                    <p className="text-gray-600">{solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Results</h3>
                    <ul className="space-y-2">
                      {results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-l-4 border-primary pl-4 py-2">
                    <div className="text-primary/20 mb-2">
                      <Quote size={24} />
                    </div>
                    <p className="text-lg italic mb-2">{quote}</p>
                    <div>
                      <p className="font-medium">{quoteName}</p>
                      <p className="text-sm text-gray-500">{quoteRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
