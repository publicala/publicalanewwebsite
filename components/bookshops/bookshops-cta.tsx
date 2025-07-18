import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"

export function BookshopsCTA({ dict }: { dict: any }) {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-primary/5 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            {dict.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {dict.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {dict.stats.map((stat: any) => (
                <div key={stat.value}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mb-8">
              <CalendlyButton size="lg" className="text-lg px-8 py-6">
                {dict.scheduleButton}
              </CalendlyButton>
            </div>

            <div className="space-y-3">
              {dict.benefits.map((benefit: any) => (
                <div key={benefit.text} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{dict.dashboard.title}</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">{dict.dashboard.revenue}</div>
                    <div className="text-sm text-green-500">{dict.dashboard.revenueLabel}</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">{dict.dashboard.customers}</div>
                    <div className="text-sm text-blue-500">{dict.dashboard.customersLabel}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-800">{dict.dashboard.features}</h4>
                  <div className="space-y-3">
                    {dict.dashboard.featureList.map((feature: string) => (
                      <div key={feature} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/5 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
