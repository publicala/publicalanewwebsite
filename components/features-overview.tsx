import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, BookOpen, Globe, Zap, Smartphone, Plug } from "lucide-react"

interface FeaturesOverviewProps {
  dict: any
}

export function FeaturesOverview({ dict }: FeaturesOverviewProps) {
  const icons = {
    "Vito AI": <Bot className="h-6 w-6" />,
    "Native App": <Smartphone className="h-6 w-6" />,
    "Integrations": <Plug className="h-6 w-6" />,
    "Interactive Reader": <BookOpen className="h-6 w-6" />,
    "Global Distribution": <Globe className="h-6 w-6" />,
    "Analytics Dashboard": <Zap className="h-6 w-6" />
  }

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.featuresOverview.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.featuresOverview.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.featuresOverview.features.map((feature: any, index: number) => (
            <FeatureCard
              key={index}
              icon={icons[feature.title as keyof typeof icons]}
              title={feature.title}
              description={feature.description}
              href={feature.href}
              featured={feature.featured}
              newLabel={feature.new}
              learnMore={dict.featuresOverview.learnMore}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  href,
  featured = false,
  newLabel,
  learnMore,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  featured?: boolean
  newLabel?: string
  learnMore: string
}) {
  return (
    <Card
      className={`border transition-all hover:shadow-md h-full ${featured ? "border-primary/50 shadow-md" : "border-gray-200"}`}
    >
      <CardHeader>
        <div
          className={`mb-4 w-12 h-12 rounded-lg flex items-center justify-center ${featured ? "bg-primary/10 text-primary" : "bg-primary/5 text-primary"}`}
        >
          {icon}
        </div>
        <CardTitle className="text-xl">
          {title}
          {featured && newLabel && (
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {newLabel}
            </span>
          )}
        </CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          asChild
          variant="ghost"
          className="p-0 h-auto font-medium text-primary hover:text-primary/80 hover:bg-transparent"
        >
          <Link href={href} className="flex items-center gap-1">
            {learnMore} <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
