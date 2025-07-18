import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import { DemoRequestModal } from "@/components/demo-request-modal"

export function PricingCTA() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  
  return (
    <section className="w-full py-20 px-6 bg-primary/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your digital publishing?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of publishers who trust Publica.la for their digital content needs. Plans start at just
          $20/month with no hidden fees.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CalendlyButton
            size="lg"
            className="text-lg px-8 py-6 rounded-md"
          >
            Start Your Free Trial
          </CalendlyButton>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 rounded-md"
            onClick={() => setIsDemoModalOpen(true)}
          >
            Contact Sales
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex justify-center">
            <div className="h-12 w-32 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <span className="text-gray-400 font-medium">Publisher 1</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-12 w-32 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <span className="text-gray-400 font-medium">Publisher 2</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-12 w-32 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <span className="text-gray-400 font-medium">Publisher 3</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-12 w-32 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <span className="text-gray-400 font-medium">Publisher 4</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full z-0"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full z-0"></div>
      
      {/* Demo Request Modal */}
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  )
}
