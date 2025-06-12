import { Card, CardContent } from "@/components/ui/card"

export function CreatorsWorkflow() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Streamlined Creator Workflow</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Focus on creating great content while our platform handles the technical details
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WorkflowCard
            number="01"
            title="Create"
            description="Create your content in your preferred tools and formats."
            details={[
              "Work with familiar creation tools",
              "Support for all major file formats",
              "No technical limitations",
              "Create once, publish everywhere",
            ]}
          />
          <WorkflowCard
            number="02"
            title="Upload"
            description="Upload your content to the platform with just a few clicks."
            details={[
              "Simple drag-and-drop interface",
              "Bulk upload capabilities",
              "Automatic format validation",
              "Secure cloud storage",
            ]}
          />
          <WorkflowCard
            number="03"
            title="Publish"
            description="Set your pricing, customize your storefront, and publish."
            details={[
              "Flexible pricing options",
              "Customizable product pages",
              "Scheduled publishing",
              "Instant availability to customers",
            ]}
          />
        </div>

        <div className="mt-16 relative">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Powerful Creator Tools</h3>
              <p className="text-gray-600 mb-6">
                Our platform includes everything you need to manage your digital content business.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Content Management</h4>
                      <p className="text-sm text-gray-500">
                        Organize your content library with tags, collections, and series.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Customer Management</h4>
                      <p className="text-sm text-gray-500">
                        Manage your audience, track purchases, and communicate directly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Sales Dashboard</h4>
                      <p className="text-sm text-gray-500">
                        Track revenue, bestsellers, and customer acquisition in real-time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Marketing Tools</h4>
                      <p className="text-sm text-gray-500">Create promotions, discount codes, and email campaigns.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      5
                    </div>
                    <div>
                      <h4 className="font-medium">Analytics</h4>
                      <p className="text-sm text-gray-500">
                        Gain insights into customer behavior and content performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      6
                    </div>
                    <div>
                      <h4 className="font-medium">Automated Payouts</h4>
                      <p className="text-sm text-gray-500">
                        Receive your earnings automatically on a schedule you choose.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 border-t border-gray-100">
              <div className="flex items-center justify-center">
                <div className="w-full max-w-4xl mx-auto">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Dashboard Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold">Creator Dashboard</h3>
                          <p className="text-blue-100">Manage your content and track performance</p>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Stats Cards */}
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-green-600 text-sm font-medium">Total Sales</p>
                              <p className="text-2xl font-bold text-green-800">$12,450</p>
                            </div>
                            <div className="bg-green-100 rounded-full p-2">
                              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-blue-600 text-sm font-medium">Active Content</p>
                              <p className="text-2xl font-bold text-blue-800">24</p>
                            </div>
                            <div className="bg-blue-100 rounded-full p-2">
                              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-purple-600 text-sm font-medium">Customers</p>
                              <p className="text-2xl font-bold text-purple-800">1,247</p>
                            </div>
                            <div className="bg-purple-100 rounded-full p-2">
                              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-3">Recent Activity</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">New sale: "Digital Marketing Course" - $49.99</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Content uploaded: "Advanced SEO Guide"</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">New subscriber: Premium Plan</span>
                          </div>
                        </div>
                      </div>
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

function WorkflowCard({
  number,
  title,
  description,
  details,
}: {
  number: string
  title: string
  description: string
  details: string[]
}) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-6">
        <div className="text-4xl font-bold text-primary/20 mb-4">{number}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
              <span className="text-sm text-gray-500">{detail}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
