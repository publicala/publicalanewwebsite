import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CaseStudiesList() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudyCard
            title="Forbes Colombia"
            description="How Forbes Colombia increased digital subscription sales by 15% and expanded their subscriber base with Publica.la."
            href="/case-studies/forbes-colombia"
            stats={["+15%", "Sales"]}
            company="Forbes Colombia"
          />

          <CaseStudyCard
            title="Editorial Hammurabi"
            description="How a leading legal publisher in Argentina expanded their digital reach and modernized their operations with Publica.la."
            href="/case-studies/hammurabi-publishing"
            stats={["Digital", "Transformation"]}
            company="Editorial Hammurabi"
          />

          {/* Add more case study cards as they become available */}
          <ComingSoonCard />
        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({
  title,
  description,
  href,
  stats,
  company,
}: {
  title: string
  description: string
  href: string
  stats?: [string, string]
  company: string
}) {
  const companyInitials = company
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
  const colors = ["bg-blue-500", "bg-purple-500", "bg-green-500"]
  const colorIndex = company.length % colors.length

  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
      <div className="relative h-48 bg-gray-100 flex items-center justify-center p-6">
        <div
          className={`w-24 h-24 ${colors[colorIndex]} rounded-lg flex items-center justify-center text-white text-2xl font-bold`}
        >
          {companyInitials}
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>

        {stats && (
          <div className="mb-6 bg-primary/5 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary">{stats[0]}</div>
            <div className="text-sm text-gray-600">{stats[1]}</div>
          </div>
        )}

        <Button asChild className="w-full mt-auto">
          <Link href={href} className="flex items-center justify-center">
            Read Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function ComingSoonCard() {
  return (
    <Card className="overflow-hidden border border-dashed border-gray-300 bg-gray-50 h-full flex flex-col">
      <CardContent className="p-6 flex-grow flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
          <span className="text-2xl text-gray-400">+</span>
        </div>
        <h3 className="text-2xl font-bold mb-2">More Success Stories</h3>
        <p className="text-gray-600 mb-6">
          We're constantly adding new case studies. Check back soon for more success stories.
        </p>
      </CardContent>
    </Card>
  )
}
