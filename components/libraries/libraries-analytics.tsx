import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Users, BookOpen, Clock, Target } from "lucide-react"

export function LibrariesAnalytics() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Data-Driven <span className="text-primary">Library Management</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Make informed decisions with comprehensive analytics and reporting tools designed for library administrators
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Analytics Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">2,847</div>
                    <div className="text-sm text-blue-600">Monthly Checkouts</div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span className="text-xs text-green-600">+12%</span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">1,234</div>
                    <div className="text-sm text-green-600">Active Patrons</div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3 text-green-500" />
                      <span className="text-xs text-green-600">+8%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Popular Categories</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Fiction</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span className="text-xs text-gray-500">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Non-Fiction</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <span className="text-xs text-gray-500">65%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Children's</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                        <span className="text-xs text-gray-500">45%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Key Insights & Reports</h3>

            <div className="grid grid-cols-1 gap-4">
              <AnalyticsCard
                icon={<Users className="h-5 w-5" />}
                title="Patron Behavior Analysis"
                description="Understand reading patterns and preferences"
                color="bg-blue-50 text-blue-600"
              />
              <AnalyticsCard
                icon={<BookOpen className="h-5 w-5" />}
                title="Collection Performance"
                description="Track which titles are most popular"
                color="bg-green-50 text-green-600"
              />
              <AnalyticsCard
                icon={<Clock className="h-5 w-5" />}
                title="Usage Patterns"
                description="Peak hours and seasonal trends"
                color="bg-purple-50 text-purple-600"
              />
              <AnalyticsCard
                icon={<Target className="h-5 w-5" />}
                title="Goal Tracking"
                description="Monitor circulation and engagement goals"
                color="bg-orange-50 text-orange-600"
              />
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Automated Reports</h4>
              <p className="text-sm text-gray-600">
                Receive weekly, monthly, and annual reports automatically delivered to your inbox with key performance
                metrics and actionable insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AnalyticsCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}) {
  return (
    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-all">
      <div className={`p-2 rounded-lg ${color}`}>{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
