"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { DemoRequestModal } from "@/components/demo-request-modal"
import { CustomerLogos } from "./customer-logos"

export function CTASection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="w-full py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your digital publishing?</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Join thousands of organizations that trust Publica.la for their enterprise publishing needs.
        </p>

        {/* Customer Logos */}
        <div className="mb-12">
          <CustomerLogos />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg px-8 py-6 rounded-md">
            <a href="https://app.publica.la/platform/sign-up/register/" target="_blank" rel="noopener noreferrer">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 rounded-md"
            onClick={() => setIsDemoModalOpen(true)}
          >
            Schedule a Demo
          </Button>
        </div>
      </div>

      {/* Demo Request Modal */}
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  )
}
