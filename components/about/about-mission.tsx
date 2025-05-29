import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Globe, TrendingUp } from "lucide-react"

export function AboutMission() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To empower publishers worldwide with innovative digital solutions that maximize their reach, engagement, and
            revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MissionCard
            icon={<BookOpen className="h-8 w-8" />}
            title="Democratize Publishing"
            description="Make digital publishing accessible to content creators of all sizes, from independent authors to major publishing houses."
          />
          <MissionCard
            icon={<Globe className="h-8 w-8" />}
            title="Global Reach"
            description="Enable publishers to reach audiences worldwide without technical barriers or geographic limitations."
          />
          <MissionCard
            icon={<TrendingUp className="h-8 w-8" />}
            title="Drive Growth"
            description="Provide tools and insights that help publishers grow their audience, enhance engagement, and increase revenue."
          />
        </div>
      </div>
    </section>
  )
}

function MissionCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-8">
        <div className="text-blue-600 mb-6">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
