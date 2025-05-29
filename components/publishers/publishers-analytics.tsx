import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, LineChart, PieChart, TrendingUp, Users } from "lucide-react"

export function PublishersAnalytics() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Data-Driven Publishing Decisions</h2>
            <p className="text-lg text-gray-600 mb-8">
              Gain valuable insights into your content performance and reader behavior with our comprehensive analytics
              dashboard.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Users size={16} className="text-primary" />
                    Reader Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">87%</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp size={16} className="text-primary" />
                    Content Views
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.5K</div>
                  <p className="text-xs text-muted-foreground">+18% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <LineChart size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Reader Behavior Analytics</h4>
                  <p className="text-sm text-gray-500">
                    Track how readers interact with your content, including reading time, completion rates, and popular
                    sections.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Sales & Revenue Tracking</h4>
                  <p className="text-sm text-gray-500">
                    Monitor sales performance, subscription growth, and revenue streams with detailed financial
                    analytics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <PieChart size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Audience Demographics</h4>
                  <p className="text-sm text-gray-500">
                    Understand your audience with demographic data, geographic distribution, and device usage
                    statistics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/control-panel.png"
              alt="Analytics dashboard"
              width={400}
              height={800}
              className="rounded-3xl shadow-xl mx-auto"
            />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/5 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
