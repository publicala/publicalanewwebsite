import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BookshopsHero() {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-blue-50 to-purple-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-200 rounded-full"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Solutions for Bookshops & Retailers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Expand Your Bookshop with <span className="text-primary">Digital Offerings</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
              Complement your physical inventory with a curated digital bookstore. Sell ebooks, audiobooks, and digital
              content to reach more customers and create new revenue streams.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-md font-medium">
                <Link href="/get-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-md font-medium">
                <Link href="/schedule-demo">Request a Demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-lg shadow-xl overflow-hidden border border-gray-100 p-8">
              <div className="flex flex-col items-center justify-center">
                <div className="text-6xl text-primary mb-4">📚</div>
                <p className="text-gray-700 text-center">Visualize your digital bookstore.</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
