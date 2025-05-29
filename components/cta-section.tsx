"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, TrendingUp, Star } from "lucide-react"
import { DemoRequestModal } from "@/components/demo-request-modal"

const stats = [
  { icon: Users, value: "1000+", label: "Organizations", color: "blue" },
  { icon: Globe, value: "50+", label: "Countries", color: "green" },
  { icon: TrendingUp, value: "300%", label: "Avg Growth", color: "purple" },
  { icon: Star, value: "4.9/5", label: "Rating", color: "yellow" },
]

export function CTASection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="w-full py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your digital publishing?</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Join thousands of organizations that trust Publica.la for their enterprise publishing needs.
        </p>

        {/* Trust indicators with visual elements */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-3 rounded-full ${
                      stat.color === "blue"
                        ? "bg-blue-100"
                        : stat.color === "green"
                          ? "bg-green-100"
                          : stat.color === "purple"
                            ? "bg-purple-100"
                            : "bg-yellow-100"
                    } flex items-center justify-center`}
                  >
                    <Icon
                      className={`h-8 w-8 ${
                        stat.color === "blue"
                          ? "text-blue-600"
                          : stat.color === "green"
                            ? "text-green-600"
                            : stat.color === "purple"
                              ? "text-purple-600"
                              : "text-yellow-600"
                      }`}
                    />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
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
