import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, LineChart, PieChart, TrendingUp, Users } from "lucide-react"

export function PublishersAnalytics({ dict }: { dict: any }) {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.title}</h2>
            <p className="text-lg text-gray-600 mb-8">
              {dict.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {dict.cards.map((card: any, idx: number) => (
                <Card key={card.title}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      {idx === 0 ? <Users size={16} className="text-primary" /> : <TrendingUp size={16} className="text-primary" />}
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{card.value}</div>
                    <p className="text-xs text-muted-foreground">{card.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              {dict.features.map((feature: any, idx: number) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {idx === 0 ? <LineChart size={20} /> : idx === 1 ? <BarChart3 size={20} /> : <PieChart size={20} />}
                  </div>
                  <div>
                    <h4 className="font-medium">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Analytics Dashboard */}
            <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">{dict.dashboard.title}</h3>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">{dict.cards[1].value}</div>
                  <div className="text-sm text-blue-500">{dict.dashboard.pageViews}</div>
                  <div className="text-xs text-green-600">↑ {dict.cards[1].desc}</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">{dict.cards[0].value}</div>
                  <div className="text-sm text-purple-500">{dict.dashboard.avgReading}</div>
                  <div className="text-xs text-green-600">↑ {dict.cards[0].desc}</div>
                </div>
              </div>

              {/* Revenue Chart */}
              <div className="mb-6">
                <div className="text-sm font-medium mb-3">{dict.dashboard.monthlyRevenue}</div>
                <div className="flex items-end gap-2 h-24">
                  {[65, 78, 82, 95, 88, 92].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-sm"
                        style={{ height: `${height}%` }}
                      ></div>
                      <div className="text-xs text-gray-500 mt-1">{["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reader Demographics */}
              <div>
                <div className="text-sm font-medium mb-3">{dict.dashboard.topLocations}</div>
                <div className="space-y-2">
                  {dict.dashboard.countries.map((country: string, i: number) => (
                    <div key={country} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{country}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-primary/60"
                            style={{ width: `${[45, 23, 18][i]}%` }}
                          ></div>
                          <span className="text-xs text-gray-500">{[45, 23, 18][i]}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/5 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
