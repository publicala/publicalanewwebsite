import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Store, Pen, Library, Newspaper, ArrowRight } from "lucide-react"

export function SolutionsSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Solutions for Every Need</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored digital publishing solutions for organizations across the content ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SolutionCard
            icon={<BookOpen className="h-8 w-8" />}
            title="For Publishers"
            description="Streamline your ebook and audiobooks ecommerce workflow with our comprehensive platform designed for publishers of all sizes."
            href="/solutions/publishers"
          />
          <SolutionCard
            icon={<Store className="h-8 w-8" />}
            title="For Bookshops"
            description="Expand your reach with digital offerings and create new revenue streams for your bookshop."
            href="/solutions/bookshops"
          />
          <SolutionCard
            icon={<Pen className="h-8 w-8" />}
            title="For Content Creators"
            description="Focus on creating exceptional content while we handle the technical aspects of distribution and monetization."
            href="/solutions/content-creators"
          />
          <SolutionCard
            icon={<Library className="h-8 w-8" />}
            title="For Libraries"
            description="Modernize your library with digital solutions that make content more accessible to your community."
            href="/solutions/libraries"
          />
          <SolutionCard
            icon={<Newspaper className="h-8 w-8" />}
            title="For Magazines & Newspapers"
            description="Streamline your replica edition and digital subscription process and reach readers across all devices and platforms."
            href="/solutions/magazines-newspapers"
          />
          <Card className="border border-dashed border-gray-300 bg-gray-50 flex flex-col justify-center items-center p-6">
            <CardContent className="p-0 text-center">
              <h3 className="text-xl font-medium mb-2">Need a custom solution?</h3>
              <p className="text-muted-foreground mb-4">Contact our team to discuss your specific requirements</p>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Sales</Link>
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
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
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
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
