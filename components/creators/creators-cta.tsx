import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"
import { DemoRequestModal } from "@/components/demo-request-modal"

export function CreatorsCTA() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  
  return (
    <section className="w-full py-20 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to monetize your creative work?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of content creators who are building sustainable businesses by selling directly to their
          audience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CalendlyButton
            size="lg"
            className="text-lg px-8 py-6 rounded-md"
            showArrow={true}
          >
            Start Creating
          </CalendlyButton>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 rounded-md"
            onClick={() => setIsDemoModalOpen(true)}
          >
            See How It Works
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <p className="text-gray-600">Control over your content and pricing</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-2">90%</div>
            <p className="text-gray-600">Revenue share - keep more of what you earn</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-gray-600">Global sales - earn while you sleep</p>
          </div>
        </div>
      </div>
      
      {/* Demo Request Modal */}
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  )
}
