import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/logo.svg" alt="Background Logo" fill className="object-contain scale-[2.5] opacity-10" />
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
