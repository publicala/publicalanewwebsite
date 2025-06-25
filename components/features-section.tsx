import type React from "react"
import { CheckCircle, Zap, Shield, BarChart3, Palette, Globe, DollarSign, Code, Clock, Lock } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { FeatureCard } from "@/components/ui/feature-card"
import { AnimatedBackground } from "@/components/ui/animated-background"

interface FeaturesSectionProps {
  dict: {
    featuresSection: {
      title: string
      subtitle: string
      features: Array<{
        title: string
        description: string
      }>
      demoSection: {
        title: string
        description: string
        benefits: Array<{
          text: string
        }>
      }
    }
  }
}

export function FeaturesSection({ dict }: FeaturesSectionProps) {
  const featureIcons = [Zap, Palette, Shield, BarChart3, Globe, DollarSign, Code, Clock, Lock]

  return (
    <section className="relative w-full py-24 px-6 bg-gray-50 overflow-hidden">
      <AnimatedBackground variant="minimal" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title={dict.featuresSection.title}
          subtitle={dict.featuresSection.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.featuresSection.features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={featureIcons[index]}
              title={feature.title}
              description={feature.description}
              variant="default"
              className="animate-fade-in-up"
            />
          ))}
        </div>

        {/* Enhanced visual element */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{dict.featuresSection.demoSection.title}</h3>
                <p className="text-gray-600 mb-6">
                  {dict.featuresSection.demoSection.description}
                </p>
                {dict.featuresSection.demoSection.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4 mt-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-purple/10 rounded-xl p-6 border border-primary/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="h-3 bg-gray-200 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <div className="h-3 bg-gray-200 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <div className="h-3 bg-gray-200 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
