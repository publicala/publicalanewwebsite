import type React from "react"
import { CheckCircle, Zap, Shield, BarChart3, Palette, Globe, DollarSign, Code, Clock, Lock } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { FeatureCard } from "@/components/ui/feature-card"
import { AnimatedBackground } from "@/components/ui/animated-background"

const features = [
  {
    icon: Zap,
    title: "Advanced Content Management",
    description: "Streamline your workflow with our intuitive content management system designed for publishers.",
  },
  {
    icon: Palette,
    title: "Multi-format Publishing",
    description: "Support for EPUB, PDF, audio, and interactive content formats with seamless conversion.",
  },
  {
    icon: Shield,
    title: "Secure Digital Rights Management",
    description: "Protect your content with enterprise-grade DRM and access control features.",
  },
  {
    icon: BarChart3,
    title: "Comprehensive Analytics",
    description: "Get detailed insights into reader behavior, sales performance, and content engagement.",
  },
  {
    icon: Globe,
    title: "Global Distribution Network",
    description: "Reach readers worldwide with our extensive distribution and delivery infrastructure.",
  },
  {
    icon: DollarSign,
    title: "Monetization Tools",
    description: "Flexible pricing models, subscription management, and revenue optimization features.",
  },
  {
    icon: Code,
    title: "API Access for Developers",
    description: "Integrate with your existing systems using our comprehensive REST API and webhooks.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime Guarantee",
    description: "Reliable infrastructure with enterprise-grade hosting and 24/7 monitoring.",
  },
  {
    icon: Lock,
    title: "Enterprise-grade Security",
    description: "SOC 2 compliant with advanced encryption and security monitoring.",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative w-full py-24 px-6 bg-gray-50 overflow-hidden">
      <AnimatedBackground variant="minimal" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Enterprise-Grade Features for Professional Publishing"
          subtitle="Our platform provides all the tools you need to manage and distribute your digital content with confidence and scale."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant="default"
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Enhanced visual element */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to see it in action?</h3>
                <p className="text-gray-600 mb-6">
                  Experience the power of our platform with a personalized demo tailored to your publishing needs.
                </p>
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Live platform walkthrough</span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Custom use case discussion</span>
                </div>
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
