import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, BookOpen, Globe, Zap, Smartphone, Plug } from "lucide-react"

export function FeaturesOverview() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Platform Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the advanced capabilities that make Publica.la the leading choice for digital publishing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Bot className="h-6 w-6" />}
            title="Vito AI"
            description="Interactive AI assistant that enhances the reading experience with summaries and self-assessments"
            href="/features/vito-ai"
            featured={true}
          />

          <FeatureCard
            icon={<Smartphone className="h-6 w-6" />}
            title="Native App"
            description="Provide your readers with a seamless mobile experience through customizable native apps for iOS and Android"
            href="/features/native-app"
          />

          <FeatureCard
            icon={<Plug className="h-6 w-6" />}
            title="Integrations"
            description="Connect your publishing platform with your favorite tools and services through extensive integration options"
            href="/features/integrations"
          />

          <FeatureCard
            icon={<BookOpen className="h-6 w-6" />}
            title="Interactive Reader"
            description="Engage readers with a beautiful, responsive reading experience across all devices"
            href="/features/interactive-reader"
          />

          <FeatureCard
            icon={<Globe className="h-6 w-6" />}
            title="Global Distribution"
            description="Reach readers worldwide with multi-language support and international payment processing"
            href="/features/global-distribution"
          />

          <FeatureCard
            icon={<Zap className="h-6 w-6" />}
            title="Analytics Dashboard"
            description="Gain valuable insights into reader behavior and content performance"
            href="/features/analytics"
          />
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
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  featured?: boolean
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
          {featured && (
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
              New
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
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
