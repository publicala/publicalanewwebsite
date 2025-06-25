import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { BookOpen, Laptop, Store, Users, Package, CreditCard, Cloud, Server } from "lucide-react"

export function BookshopsIntegration({ dict }: { dict: any }) {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.integrations.map((integration: any, idx: number) => (
            <IntegrationCard
              key={integration.title}
              title={integration.title}
              description={integration.description}
              icon={integrationIcons[idx]}
              flowDiagram={integration.flowDiagram}
            />
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{dict.hybridStrategies.title}</h3>
              <p className="text-gray-600 mb-6">
                {dict.hybridStrategies.subtitle}
              </p>
              <ul className="space-y-3">
                {dict.hybridStrategies.strategies.map((strategy: string) => (
                  <li key={strategy} className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <BookOpen size={100} className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const integrationIcons = [
  <Store size={48} className="text-primary" />,
  <Laptop size={48} className="text-primary" />,
  <Users size={48} className="text-primary" />,
]

function IntegrationCard({
  title,
  description,
  icon,
  flowDiagram,
}: { title: string; description: string; icon: React.ReactNode; flowDiagram: React.ReactNode }) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
      <div className="h-48 relative flex items-center justify-center">{icon}</div>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4">{flowDiagram}</div>
      </CardContent>
    </Card>
  )
}
