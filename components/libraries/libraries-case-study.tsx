import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote, TrendingUp, Users, BookOpen, Clock } from "lucide-react"

export function LibrariesCaseStudy() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Story</h2>
          <p className="text-lg text-muted-foreground">
            See how Metro Public Library transformed their digital services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  MPL
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Metro Public Library</h3>
                  <p className="text-gray-600">Serving 250,000+ residents</p>
                </div>
              </div>

              <div className="mb-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-lg text-gray-700 italic">
                  "Publica.la transformed how we serve our community. Digital checkouts increased by 300% in the first
                  year, and patron satisfaction has never been higher."
                </blockquote>
                <cite className="text-sm text-gray-600 mt-4 block">— Sarah Johnson, Head Librarian</cite>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Challenges Solved</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Limited after-hours access to resources</li>
                  <li>• Outdated catalog system</li>
                  <li>• Low digital engagement</li>
                  <li>• Manual patron management</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Impressive Results</h3>

            <div className="grid grid-cols-2 gap-4">
              <ResultCard
                icon={<TrendingUp className="h-6 w-6" />}
                value="300%"
                label="Increase in digital checkouts"
                color="text-green-600"
              />
              <ResultCard
                icon={<Users className="h-6 w-6" />}
                value="85%"
                label="More active patrons"
                color="text-blue-600"
              />
              <ResultCard
                icon={<BookOpen className="h-6 w-6" />}
                value="15K"
                label="New digital titles added"
                color="text-purple-600"
              />
              <ResultCard
                icon={<Clock className="h-6 w-6" />}
                value="24/7"
                label="Access availability"
                color="text-orange-600"
              />
            </div>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg">Implementation Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <TimelineItem
                    phase="Planning & Setup"
                    duration="2 weeks"
                    description="System configuration and data migration"
                    status="completed"
                  />
                  <TimelineItem
                    phase="Staff Training"
                    duration="1 week"
                    description="Comprehensive training for library staff"
                    status="completed"
                  />
                  <TimelineItem
                    phase="Patron Onboarding"
                    duration="4 weeks"
                    description="Gradual rollout to library patrons"
                    status="completed"
                  />
                  <TimelineItem
                    phase="Full Launch"
                    duration="Ongoing"
                    description="Complete digital library services"
                    status="active"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResultCard({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode
  value: string
  label: string
  color: string
}) {
  return (
    <Card className="border border-gray-200 text-center p-4">
      <CardContent className="p-0">
        <div className={`${color} mb-2 flex justify-center`}>{icon}</div>
        <div className={`text-2xl font-bold ${color} mb-1`}>{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </CardContent>
    </Card>
  )
}

function TimelineItem({
  phase,
  duration,
  description,
  status,
}: {
  phase: string
  duration: string
  description: string
  status: string
}) {
  const statusColors = {
    completed: "bg-green-500",
    active: "bg-blue-500",
    pending: "bg-gray-300",
  }

  return (
    <div className="flex items-start gap-3">
      <div className={`w-3 h-3 rounded-full mt-1 ${statusColors[status as keyof typeof statusColors]}`}></div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-medium text-gray-900">{phase}</h4>
          <span className="text-xs text-gray-500">{duration}</span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
