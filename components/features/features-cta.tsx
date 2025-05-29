import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FeaturesCTA() {
  return (
    <section className="w-full py-20 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to enhance your digital publications?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join leading publishers who are using Publica.la's advanced features to create exceptional digital content
          experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg px-8 py-6 rounded-md">
            <a href="https://app.publica.la/platform/sign-up/register/" target="_blank" rel="noopener noreferrer">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-md">
            <Link href="/schedule-demo">Schedule a Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
