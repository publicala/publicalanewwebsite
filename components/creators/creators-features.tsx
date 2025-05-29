import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, DollarSign, Palette, Users, BarChart2, Shield } from "lucide-react"

export function CreatorsFeatures() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed specifically for independent content creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FileText className="h-6 w-6" />}
            title="Multi-Format Support"
            description="Sell any type of digital content – ebooks, audiobooks, photos, videos, PDFs, and more."
          />
          <FeatureCard
            icon={<DollarSign className="h-6 w-6" />}
            title="Flexible Monetization"
            description="Choose from multiple pricing models including one-time purchases, subscriptions, and pay-what-you-want."
          />
          <FeatureCard
            icon={<Palette className="h-6 w-6" />}
            title="Customizable Storefront"
            description="Create a branded storefront that reflects your unique style and creative vision."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Audience Building"
            description="Grow your audience with built-in marketing tools, email integration, and social sharing."
          />
          <FeatureCard
            icon={<BarChart2 className="h-6 w-6" />}
            title="Creator Analytics"
            description="Gain insights into your audience, sales, and content performance to optimize your strategy."
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="Content Protection"
            description="Protect your work with robust digital rights management and licensing options."
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
