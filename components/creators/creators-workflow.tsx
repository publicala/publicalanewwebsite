import Image from "next/image"
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
                <Image
                  src="/images/control-panel.png"
                  alt="Creator dashboard"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md"
                />
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
