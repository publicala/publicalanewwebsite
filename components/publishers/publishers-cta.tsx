import { ArrowRight } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"

export function PublishersCTA() {
  
  return (
    <section className="w-full py-20 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your publishing business?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join leading publishers who are using our platform to create exceptional digital content experiences, engage
          readers, and drive revenue growth.
        </p>
        <div className="flex justify-center">
          <CalendlyButton
            size="lg"
            className="text-lg px-8 py-6 rounded-md"
            showArrow={true}
          >
            Get Started
          </CalendlyButton>
        </div>
        <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p className="text-lg font-medium mb-4">Trusted by publishers worldwide</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="h-12 bg-gray-100 rounded-md w-32 flex items-center justify-center text-gray-500">
              Publisher 1
            </div>
            <div className="h-12 bg-gray-100 rounded-md w-32 flex items-center justify-center text-gray-500">
              Publisher 2
            </div>
            <div className="h-12 bg-gray-100 rounded-md w-32 flex items-center justify-center text-gray-500">
              Publisher 3
            </div>
            <div className="h-12 bg-gray-100 rounded-md w-32 flex items-center justify-center text-gray-500">
              Publisher 4
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
