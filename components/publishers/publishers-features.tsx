import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, BarChart2, Users, Globe, Shield, Zap } from "lucide-react"

export function PublishersFeatures() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Publishing Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed in the digital publishing landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BookOpen className="h-6 w-6" />}
            title="Content Management"
            description="Easily upload, organize, and manage your digital publications in various formats."
          />
          <FeatureCard
            icon={<BarChart2 className="h-6 w-6" />}
            title="Advanced Analytics"
            description="Gain valuable insights into reader behavior and content performance."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Audience Engagement"
            description="Build stronger relationships with your readers through interactive features."
          />
          <FeatureCard
            icon={<Globe className="h-6 w-6" />}
            title="Global Distribution"
            description="Reach readers worldwide with multi-platform distribution capabilities."
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="Digital Rights Management"
            description="Protect your intellectual property with robust DRM solutions."
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6" />}
            title="Flexible Monetization"
            description="Implement various revenue models to maximize your publishing income."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border border-gray-200 transition-all hover:shadow-md hover:border-primary/30 h-full">
      <CardHeader>
        <div className="text-primary mb-4 bg-primary/5 w-12 h-12 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
