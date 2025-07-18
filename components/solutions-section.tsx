import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Store, Pen, Library, Newspaper, ArrowRight } from "lucide-react"

interface SolutionsSectionProps {
  locale?: string
  dict: {
    solutionsSection: {
      title: string
      subtitle: string
      solutions: Array<{
        title: string
        description: string
        href: string
      }>
      customSolution: {
        title: string
        description: string
        buttonText: string
      }
      learnMore: string
    }
  }
}

export function SolutionsSection({ dict, locale }: SolutionsSectionProps) {
  const getLocalizedHref = (href: string) => {
    if (href.startsWith('/')) {
      return `/${locale}${href}`
    }
    return href
  }
  
  const solutionIcons = [
    <BookOpen key="publishers" className="h-8 w-8" />,
    <Store key="bookshops" className="h-8 w-8" />,
    <Pen key="creators" className="h-8 w-8" />,
    <Library key="libraries" className="h-8 w-8" />,
    <Newspaper key="magazines" className="h-8 w-8" />,
  ]

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.solutionsSection.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.solutionsSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.solutionsSection.solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solutionIcons[index]}
              title={solution.title}
              description={solution.description}
              href={getLocalizedHref(solution.href)}
              learnMore={dict.solutionsSection.learnMore}
            />
          ))}
          <Card className="border border-dashed border-gray-300 bg-gray-50 flex flex-col justify-center items-center p-6">
            <CardContent className="p-0 text-center">
              <h3 className="text-xl font-medium mb-2">{dict.solutionsSection.customSolution.title}</h3>
              <p className="text-muted-foreground mb-4">{dict.solutionsSection.customSolution.description}</p>
              <Button asChild variant="outline">
                <Link href={getLocalizedHref("/contact")}>{dict.solutionsSection.customSolution.buttonText}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function SolutionCard({
  icon,
  title,
  description,
  href,
  learnMore,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  learnMore: string
}) {
  return (
    <Card className="border border-gray-200 transition-all hover:shadow-md hover:border-primary/30 h-full">
      <CardHeader>
        <div className="text-primary mb-4 bg-primary/5 w-14 h-14 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-base">{description}</CardDescription>
        <Button
          asChild
          variant="ghost"
          className="p-0 h-auto font-medium text-primary hover:text-primary/80 hover:bg-transparent"
        >
          <Link href={href} className="flex items-center gap-1">
            {learnMore} <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
