"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"

export function LibrariesCTA() {
  
  return (
    <section className="w-full py-20 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to modernize your library?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join hundreds of libraries worldwide that have transformed their digital services with Publica.la
        </p>
        <div className="flex justify-center mb-12">
          <CalendlyButton
            size="lg"
            className="text-lg px-8 py-6 rounded-md"
            showArrow={true}
          >
            Start Your Digital Transformation
          </CalendlyButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Quick Setup</h3>
            <p className="text-gray-600 text-sm">Get started in under 30 days with full migration support</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Dedicated Support</h3>
            <p className="text-gray-600 text-sm">24/7 technical support and training for your team</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Proven Results</h3>
            <p className="text-gray-600 text-sm">Average 250% increase in digital engagement</p>
          </div>
        </div>
      </div>
    </section>
  )
}
