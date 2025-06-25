import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BookshopsEngagement({ dict }: { dict: any }) {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <Tabs defaultValue="recommendations" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="recommendations">{dict.tabs.recommendations}</TabsTrigger>
              <TabsTrigger value="community">{dict.tabs.community}</TabsTrigger>
              <TabsTrigger value="loyalty">{dict.tabs.loyalty}</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="recommendations" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{dict.recommendations.title}</h3>
                <p className="text-gray-600 mb-6">
                  {dict.recommendations.desc}
                </p>
                <ul className="space-y-4">
                  {dict.recommendations.features.map((feature: any, idx: number) => (
                    <li key={feature.title} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-medium">{feature.title}</h4>
                        <p className="text-sm text-gray-500">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-[500px] bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{dict.dashboard.recommendationsTitle}</h4>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="space-y-4">
                        <h5 className="font-semibold text-gray-800">{dict.dashboard.forYou}</h5>
                        <div className="space-y-3">
                          {dict.dashboard.recommendedBooks.map((book: any) => (
                            <div key={book.title} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <div className="w-12 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded flex items-center justify-center">
                                <span className="text-xs font-medium text-blue-600">📚</span>
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-700">{book.title}</div>
                                <div className="text-xs text-gray-500">{book.author}</div>
                                <div className="text-xs text-primary font-medium">{book.match}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="community" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative">
                  <div className="w-80 h-[500px] bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 text-white">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{dict.dashboard.communityTitle}</h4>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{dict.dashboard.communityDesc}</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{dict.community.title}</h3>
                <p className="text-gray-600 mb-6">{dict.community.desc}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="loyalty" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{dict.loyalty.title}</h3>
                <p className="text-gray-600 mb-6">{dict.loyalty.desc}</p>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-64 bg-primary/5 rounded-3xl flex items-center justify-center text-primary font-bold text-2xl">
                  {dict.loyalty.title}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
