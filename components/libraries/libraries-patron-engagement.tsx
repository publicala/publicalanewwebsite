import type React from "react"
import { MessageSquare, Star, Calendar, Bell, Users, Award } from "lucide-react"

export function LibrariesPatronEngagement() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Community Engagement Tools
              </h3>

              <div className="space-y-4">
                <EngagementFeature
                  icon={<MessageSquare className="h-4 w-4" />}
                  title="Discussion Forums"
                  description="Book clubs and reading discussions"
                />
                <EngagementFeature
                  icon={<Star className="h-4 w-4" />}
                  title="Reviews & Ratings"
                  description="Patron-generated content and recommendations"
                />
                <EngagementFeature
                  icon={<Calendar className="h-4 w-4" />}
                  title="Events Calendar"
                  description="Virtual and in-person library events"
                />
                <EngagementFeature
                  icon={<Bell className="h-4 w-4" />}
                  title="Smart Notifications"
                  description="Due dates, holds, and new arrivals"
                />
                <EngagementFeature
                  icon={<Award className="h-4 w-4" />}
                  title="Reading Challenges"
                  description="Gamified reading programs and badges"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Build Stronger <span className="text-primary">Community Connections</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Foster engagement and create a vibrant digital community around your library. Encourage reading,
              facilitate discussions, and strengthen patron relationships.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-gray-600">Increase in patron engagement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3.2x</div>
                <div className="text-sm text-gray-600">More digital checkouts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">92%</div>
                <div className="text-sm text-gray-600">Patron satisfaction rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">45%</div>
                <div className="text-sm text-gray-600">Reduction in overdue items</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EngagementFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="bg-primary/10 text-primary p-2 rounded-lg flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
