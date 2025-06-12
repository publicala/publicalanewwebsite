"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, TrendingUp, Star, Sparkles } from "lucide-react"
import { DemoRequestModal } from "@/components/demo-request-modal"
import { StatsCard } from "@/components/ui/stats-card"
import { AnimatedBackground } from "@/components/ui/animated-background"

const stats = [
  { icon: Users, value: "1000+", label: "Organizations", color: "blue" as const },
  { icon: Globe, value: "50+", label: "Countries", color: "green" as const },
  { icon: TrendingUp, value: "300%", label: "Avg Growth", color: "purple" as const },
  { icon: Star, value: "4.9/5", label: "Rating", color: "orange" as const },
]

export function CTASection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-br from-primary/5 via-white to-purple/5 overflow-hidden">
      <AnimatedBackground variant="section" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            <span>Ready to get started?</span>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Ready to transform your{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                digital publishing?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of organizations that trust Publica.la for their enterprise publishing needs.
            </p>
          </div>

          {/* Enhanced stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                color={stat.color}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <a href="https://app.publica.la/platform/sign-up/register/" target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-gray-50 transition-all duration-300"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Schedule a Demo
            </Button>
          </div>

          <div className="text-sm text-gray-500 space-y-2">
            <p>✓ No credit card required</p>
            <p>✓ 14-day free trial</p>
            <p>✓ Cancel anytime</p>
          </div>
        </div>
      </div>

      {/* Demo Request Modal */}
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  )
}
