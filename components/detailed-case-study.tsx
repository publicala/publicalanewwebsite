import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"

interface DetailedCaseStudyProps {
  logoSrc: string
  logoAlt: string
  title: string
  subtitle: string
  heroImageSrc: string
  heroImageAlt: string
  clientDescription: string
  challengesList: string[]
  solutionText: string
  resultsList: {
    highlight?: string
    text: string
  }[]
  testimonialQuote: string
  testimonialAuthor: string
  testimonialRole: string
  whyChooseUsList: string[]
  additionalQuote?: string
  additionalImages: {
    src: string
    alt: string
  }[]
}

export function DetailedCaseStudy({
  logoSrc,
  logoAlt,
  title,
  subtitle,
  heroImageSrc,
  heroImageAlt,
  clientDescription,
  challengesList,
  solutionText,
  resultsList,
  testimonialQuote,
  testimonialAuthor,
  testimonialRole,
  whyChooseUsList,
  additionalQuote,
  additionalImages,
}: DetailedCaseStudyProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative h-24 w-64">
            <Image src={logoSrc || "/placeholder.svg"} alt={logoAlt} fill className="object-contain" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      </div>

      {/* Hero Image */}
      <div className="mb-16 rounded-xl overflow-hidden shadow-xl">
        <div className="relative aspect-video w-full">
          <Image src={heroImageSrc || "/placeholder.svg"} alt={heroImageAlt} fill className="object-cover" />
        </div>
      </div>

      {/* Client Description */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Who They Are</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700">{clientDescription}</p>
        </div>
      </div>

      {/* Challenges */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Challenges and Goals</h2>
        <ul className="space-y-4">
          {challengesList.map((challenge, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <span className="text-gray-700">{challenge}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Solution */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700">{solutionText}</p>
        </div>
      </div>

      {/* Results */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Results</h2>
        {resultsList[0]?.highlight && (
          <div className="bg-primary/5 p-8 rounded-lg mb-8 text-center">
            <p className="text-4xl font-bold text-primary mb-2">{resultsList[0].highlight}</p>
            <p className="text-xl text-gray-700">{resultsList[0].text}</p>
          </div>
        )}
        <ul className="space-y-4">
          {resultsList.slice(resultsList[0]?.highlight ? 1 : 0).map((result, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500 flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-gray-700">{result.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Testimonial */}
      <div className="mb-16 bg-gray-50 p-8 rounded-xl border border-gray-100">
        <div className="flex items-start gap-4">
          <div className="text-primary/20 flex-shrink-0">
            <Quote size={48} />
          </div>
          <div>
            <p className="text-xl italic mb-6">{testimonialQuote}</p>
            <div>
              <p className="font-bold text-lg">{testimonialAuthor}</p>
              <p className="text-gray-600">{testimonialRole}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why publica.la?</h2>
        <ul className="space-y-4">
          {whyChooseUsList.map((reason, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span className="text-gray-700">{reason}</span>
            </li>
          ))}
        </ul>
        {additionalQuote && (
          <div className="mt-8 border-l-4 border-primary pl-4 py-2">
            <p className="text-lg italic">{additionalQuote}</p>
          </div>
        )}
      </div>

      {/* Additional Images */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {additionalImages.map((image, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-md">
            <div className="relative aspect-video w-full">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to achieve similar results?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Let's discuss how publica.la can help your organization succeed in digital publishing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg px-8 py-6 rounded-md">
            <Link href="/get-started">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-md">
            <Link href="/schedule-demo">Schedule a Demo</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
