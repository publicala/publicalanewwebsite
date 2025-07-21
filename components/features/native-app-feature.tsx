"use client"

import { ArrowRight, Smartphone } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"

export function NativeAppFeature({ dict }: { dict: any }) {
  
  return (
    <section className="relative w-full py-16 md:py-24 px-6 bg-gradient-to-b from-primary/5 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              <Smartphone className="mr-1 h-4 w-4" />
              {dict.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{dict.title}</h1>
            <p className="text-lg text-gray-600 mb-8">
              {dict.subtitle}
            </p>
            <div>
              <CalendlyButton
                size="lg"
                className="rounded-md"
                showArrow={true}
              >
                {dict.learnMore}
              </CalendlyButton>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
