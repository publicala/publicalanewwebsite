import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-200 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-blue-300 rounded-full"></div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-blue-600 mb-12">
          We boost the profits of publishers, magazines, newspapers, and more
        </h1>
        <div className="flex flex-col sm:flex-row gap-6">
          <Button
            asChild
            size="lg"
            className="rounded-md font-medium bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
          >
            <Link href="/get-started">Get Started For Free</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="rounded-md font-medium text-blue-600 hover:bg-blue-50 px-8 py-6 group"
          >
            <Link href="/schedule-demo" className="flex items-center">
              Request a demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
