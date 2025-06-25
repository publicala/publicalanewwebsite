"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Users, Globe, TrendingUp, Star, Sparkles } from "lucide-react"
import { DemoRequestModal } from "@/components/demo-request-modal"
import { StatsCard } from "@/components/ui/stats-card"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { CalendlyButton } from "@/components/calendly-button"

interface CTASectionProps {
  dict?: {
    ctaSection: {
      badge: string
      title: string
      titleHighlight: string
      subtitle: string
      stats: Array<{
        value: string
        label: string
      }>
      scheduleButton: string
      watchDemoButton: string
      benefits: Array<{
        text: string
      }>
    }
  }
}

// Default English values for backward compatibility
const defaultCTADict = {
  ctaSection: {
    badge: "Ready to get started?",
    title: "Ready to transform your",
    titleHighlight: "digital publishing?",
    subtitle: "Join thousands of organizations that trust Publica.la for their enterprise publishing needs.",
    stats: [
      { value: "1000+", label: "Organizations" },
      { value: "50+", label: "Countries" },
      { value: "300%", label: "Avg Growth" },
      { value: "4.9/5", label: "Rating" }
    ],
    scheduleButton: "Schedule a Meeting",
    watchDemoButton: "Watch Demo",
    benefits: [
      { text: "No credit card required" },
      { text: "14-day free trial" },
      { text: "Cancel anytime" }
    ]
  }
}

export function CTASection({ dict }: CTASectionProps) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  
  // Handle both cases: when dict is the entire dictionary or just the ctaSection
  const ctaDict = dict || defaultCTADict
  const ctaSection = ctaDict.ctaSection || ctaDict

  const statIcons = [Users, Globe, TrendingUp, Star]
  const statColors = ["blue", "green", "purple", "orange"] as const

  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-br from-primary/5 via-white to-purple/5 overflow-hidden">
      <AnimatedBackground variant="section" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            <span>{ctaSection.badge}</span>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {ctaSection.title}{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {ctaSection.titleHighlight}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {ctaSection.subtitle}
            </p>
          </div>

          {/* Enhanced stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            {ctaSection.stats.map((stat, index) => (
              <StatsCard
                key={index}
                icon={statIcons[index]}
                value={stat.value}
                label={stat.label}
                color={statColors[index]}
                className="animate-fade-in-up"
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton
              size="lg"
              className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              showArrow={true}
            >
              {ctaSection.scheduleButton}
            </CalendlyButton>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-gray-50 transition-all duration-300"
              onClick={() => setIsDemoModalOpen(true)}
            >
              {ctaSection.watchDemoButton}
            </Button>
          </div>

          <div className="text-sm text-gray-500 space-y-2">
            {ctaSection.benefits.map((benefit, index) => (
              <p key={index}>✓ {benefit.text}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Request Modal */}
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  )
}
