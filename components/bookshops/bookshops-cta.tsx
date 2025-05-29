import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BookshopsCTA() {
  return (
    <section className="w-full py-20 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to expand your bookshop into the digital realm?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join hundreds of bookshops that are growing their business and reaching new customers with digital offerings.
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-2">14-day</div>
            <p className="text-gray-600">Free trial with full access to all features</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-2">No</div>
            <p className="text-gray-600">Technical expertise required to get started</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-2">Full</div>
            <p className="text-gray-600">Support and guidance throughout the process</p>
          </div>
        </div>
      </div>
    </section>
  )
}
