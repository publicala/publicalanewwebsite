import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Clock, Shield, BarChart3, Smartphone } from "lucide-react"

export function LibrariesFeatures() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Library Management Solution</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage and distribute digital collections to your community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BookOpen className="h-6 w-6" />}
            title="Digital Collection Management"
            description="Organize and catalog your digital resources with powerful metadata and search capabilities."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Patron Management"
            description="Manage library cards, borrowing privileges, and patron communications in one place."
          />
          <FeatureCard
            icon={<Clock className="h-6 w-6" />}
            title="24/7 Access"
            description="Provide round-the-clock access to digital resources from anywhere in the world."
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="Access Control"
            description="Implement borrowing limits, holds, and digital rights management seamlessly."
          />
          <FeatureCard
            icon={<BarChart3 className="h-6 w-6" />}
            title="Usage Analytics"
            description="Track collection usage, popular titles, and patron engagement metrics."
          />
          <FeatureCard
            icon={<Smartphone className="h-6 w-6" />}
            title="Mobile Access"
            description="Native mobile apps for iOS and Android ensure accessibility on all devices."
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
