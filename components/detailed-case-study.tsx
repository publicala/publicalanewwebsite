import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, TrendingUp, Users, Quote } from "lucide-react"
import Link from "next/link"

interface DetailedCaseStudyProps {
  logoAlt: string
  title: string
  subtitle: string
  heroImageAlt: string
  clientDescription: string
  challengesList: string[]
  solutionText: string
  resultsList: Array<{
    highlight?: string
    text: string
  }>
  testimonialQuote: string
  testimonialAuthor: string
  testimonialRole: string
  whyChooseUsList: string[]
  additionalQuote?: string
  additionalImages?: Array<{
    src: string
    alt: string
  }>
}

export function DetailedCaseStudy({
  logoAlt,
  title,
  subtitle,
  clientDescription,
  challengesList,
  solutionText,
  resultsList,
  testimonialQuote,
  testimonialAuthor,
  testimonialRole,
  whyChooseUsList,
  additionalQuote,
}: DetailedCaseStudyProps) {
  const companyName = logoAlt.replace(" Logo", "")
  const companyInitials = companyName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 px-6 bg-gradient-to-br from-primary/10 via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white text-xl font-bold">
                  {companyInitials}
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
                  <p className="text-lg text-gray-600">{subtitle}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">Growth</div>
                    <div className="text-sm text-gray-600">Achieved</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">Audience</div>
                    <div className="text-sm text-gray-600">Expanded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Description */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">About {companyName}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{clientDescription}</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="w-full py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">The Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challengesList.map((challenge, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{challenge}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">The Solution</h2>
          <div className="bg-primary/5 rounded-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">{solutionText}</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="w-full py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">The Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resultsList.map((result, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  {result.highlight ? (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{result.highlight}</div>
                      <p className="text-gray-600">{result.text}</p>
                    </div>
                  ) : (
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{result.text}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="w-full py-16 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-12 w-12 mx-auto mb-6 opacity-50" />
          <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">"{testimonialQuote}"</blockquote>
          <div>
            <div className="font-bold text-lg">{testimonialAuthor}</div>
            <div className="opacity-90">{testimonialRole}</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Why {companyName} Chose Publica.la</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsList.map((reason, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-gray-700">{reason}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Quote */}
      {additionalQuote && (
        <section className="w-full py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <Quote className="h-8 w-8 mx-auto mb-4 text-primary" />
              <p className="text-lg text-gray-700 italic">"{additionalQuote}"</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="w-full py-16 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join {companyName} and hundreds of other publishers who are growing their business with Publica.la.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-md font-medium">
              <Link href="/get-started">Get Started Free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-md font-medium border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/schedule-demo">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
