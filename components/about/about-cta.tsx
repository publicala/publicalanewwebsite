import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function AboutCTA() {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image src="/images/logo.svg" alt="Background Logo" fill className="object-contain scale-150 opacity-10" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Ready to transform your digital publishing strategy?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of publishers who trust Publica.la to power their digital content ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-md font-medium bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
          >
            <Link href="/get-started">Get Started For Free</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-md font-medium border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-6"
          >
            <Link href="/schedule-demo">Schedule a Demo</Link>
          </Button>
        </div>

        <div className="mt-16 p-6 bg-white rounded-lg shadow-md">
          <p className="text-xl font-medium text-gray-900 mb-4">Have questions? We're here to help.</p>
          <p className="text-gray-600 mb-6">
            Our team is ready to answer your questions and help you get the most out of Publica.la.
          </p>
          <Button asChild variant="ghost" className="text-blue-600 hover:bg-blue-50">
            <Link href="/contact">Contact Us →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
