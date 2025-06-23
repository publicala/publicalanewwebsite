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
          Ready to transform your digital publishing?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of organizations that trust Publica.la for their enterprise publishing needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-md font-medium bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
          >
            <Link href="/get-started">Get started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-md font-medium border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-6"
          >
            <Link href="/schedule-demo">Schedule a demo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
