import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Database, CreditCard, Mail, Calendar, Shield } from "lucide-react"

export function LibrariesIntegration() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless <span className="text-primary">System Integration</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with your existing library management systems and third-party services for a unified workflow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Popular Integrations</h3>
            <div className="grid grid-cols-1 gap-4">
              <IntegrationCard
                icon={<Database className="h-5 w-5" />}
                title="Library Management Systems"
                description="Koha, Evergreen, Symphony, Alma"
                status="Active"
              />
              <IntegrationCard
                icon={<CreditCard className="h-5 w-5" />}
                title="Payment Processing"
                description="Stripe, PayPal, Square for fines and fees"
                status="Available"
              />
              <IntegrationCard
                icon={<Mail className="h-5 w-5" />}
                title="Email & SMS"
                description="Automated notifications and reminders"
                status="Active"
              />
              <IntegrationCard
                icon={<Calendar className="h-5 w-5" />}
                title="Event Management"
                description="Eventbrite, Google Calendar integration"
                status="Available"
              />
              <IntegrationCard
                icon={<Shield className="h-5 w-5" />}
                title="Single Sign-On"
                description="SAML, OAuth, LDAP authentication"
                status="Enterprise"
              />
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Integration Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-gray-700 mb-2">API Connections</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">12</div>
                        <div className="text-xs text-gray-600">Active APIs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">99.9%</div>
                        <div className="text-xs text-gray-600">Uptime</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Recent Sync Activity</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Patron records sync</span>
                        <span className="text-green-600 font-medium">✓ Complete</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Catalog update</span>
                        <span className="text-green-600 font-medium">✓ Complete</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Usage statistics</span>
                        <span className="text-blue-600 font-medium">⟳ In Progress</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Custom Integration Support</h4>
              <p className="text-sm text-gray-600 mb-3">
                Need a specific integration? Our technical team can help you connect with any system through our robust
                API.
              </p>
              <div className="text-xs text-gray-500">
                • RESTful API with comprehensive documentation
                <br />• Webhook support for real-time updates
                <br />• Dedicated integration support team
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntegrationCard({
  icon,
  title,
  description,
  status,
}: {
  icon: React.ReactNode
  title: string
  description: string
  status: string
}) {
  const statusColors = {
    Active: "bg-green-100 text-green-800",
    Available: "bg-blue-100 text-blue-800",
    Enterprise: "bg-purple-100 text-purple-800",
  }

  return (
    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
      <div className="bg-white p-2 rounded-lg text-primary">{icon}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-medium text-gray-900">{title}</h4>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status as keyof typeof statusColors]}`}
          >
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
