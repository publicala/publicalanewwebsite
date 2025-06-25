import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PublishersEngagement({ dict }: { dict: any }) {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <Tabs defaultValue="reader-experience" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="reader-experience">{dict.tabs.readerExperience}</TabsTrigger>
              <TabsTrigger value="customization">{dict.tabs.customization}</TabsTrigger>
              <TabsTrigger value="interaction">{dict.tabs.interaction}</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="reader-experience" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{dict.readerExperience.title}</h3>
                <p className="text-gray-600 mb-6">
                  {dict.readerExperience.desc}
                </p>
                <ul className="space-y-4">
                  {dict.readerExperience.features.map((feature: any, idx: number) => (
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
                  {/* Mobile Reader Engagement Dashboard */}
                  <div className="w-80 h-[600px] bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{dict.dashboard.readerDashboard}</h4>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                      {/* Engagement Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                          <div className="text-2xl font-bold text-blue-600">2,847</div>
                          <div className="text-sm text-blue-500">{dict.dashboard.activeReaders}</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                          <div className="text-2xl font-bold text-green-600">4.2h</div>
                          <div className="text-sm text-green-500">{dict.dashboard.avgReading}</div>
                        </div>
                      </div>

                      {/* Reading Progress */}
                      <div className="space-y-4">
                        <h5 className="font-semibold text-gray-800">{dict.dashboard.readingProgress}</h5>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">Chapter 1</span>
                              <span className="text-gray-500">85%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                                style={{ width: "85%" }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">Chapter 2</span>
                              <span className="text-gray-500">62%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                                style={{ width: "62%" }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">Chapter 3</span>
                              <span className="text-gray-500">34%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                                style={{ width: "34%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Activity Feed */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-gray-800">{dict.dashboard.recentActivity}</h5>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{dict.dashboard.newBookmark}</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{dict.dashboard.commentPosted}</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{dict.dashboard.contentShared}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-4">
                        <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg text-sm font-medium">
                          {dict.dashboard.continueReading}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="customization" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative">
                  {/* Brand Customization Showcase */}
                  <div className="w-80 h-[500px] bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{dict.customization.title}</h4>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                      {/* Theme Options */}
                      <div className="space-y-4">
                        <h5 className="font-semibold text-gray-800">Theme Options</h5>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg border-2 border-blue-500 relative">
                            <div className="absolute inset-2 bg-white/20 rounded"></div>
                            <div className="absolute bottom-1 left-1 right-1 h-1 bg-white/40 rounded"></div>
                          </div>
                          <div className="aspect-square bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg relative">
                            <div className="absolute inset-2 bg-white/20 rounded"></div>
                            <div className="absolute bottom-1 left-1 right-1 h-1 bg-white/40 rounded"></div>
                          </div>
                          <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-lg relative">
                            <div className="absolute inset-2 bg-white/20 rounded"></div>
                            <div className="absolute bottom-1 left-1 right-1 h-1 bg-white/40 rounded"></div>
                          </div>
                        </div>
                      </div>

                      {/* Brand Colors */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-gray-800">Brand Colors</h5>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Primary: #8B5CF6</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Secondary: #3B82F6</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Accent: #10B981</span>
                          </div>
                        </div>
                      </div>

                      {/* Layout Preview */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-gray-800">Layout Preview</h5>
                        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
                            <div className="h-2 bg-gray-300 rounded flex-1"></div>
                          </div>
                          <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                          <div className="flex gap-2 mt-3">
                            <div className="w-8 h-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded text-xs"></div>
                            <div className="w-8 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded text-xs"></div>
                          </div>
                        </div>
                      </div>

                      {/* Custom Domain */}
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-lg">
                        <div className="text-sm font-medium text-indigo-700">Custom Domain</div>
                        <div className="text-xs text-indigo-600 mt-1">yourstore.com</div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full z-0"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full z-0"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4">{dict.customization.title}</h3>
                <p className="text-gray-600 mb-6">{dict.customization.desc}</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Custom Theming</h4>
                      <p className="text-sm text-gray-500">
                        Apply your brand colors, logos, and design elements throughout the reading experience.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">White-Label Solution</h4>
                      <p className="text-sm text-gray-500">
                        Present a seamless branded experience with no third-party branding.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Custom Domain</h4>
                      <p className="text-sm text-gray-500">
                        Host your digital content on your own domain for a consistent brand experience.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Layout Options</h4>
                      <p className="text-sm text-gray-500">
                        Choose from various layout templates or create custom designs to match your brand guidelines.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="interaction" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{dict.interaction.title}</h3>
                <p className="text-gray-600 mb-6">{dict.interaction.desc}</p>
              </div>
              <div className="flex justify-center">
                {/* Placeholder for interaction visual */}
                <div className="w-80 h-64 bg-primary/5 rounded-3xl flex items-center justify-center text-primary font-bold text-2xl">
                  {dict.interaction.title}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
