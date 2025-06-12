import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PublishersEngagement() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Audience Engagement Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build stronger relationships with your readers and keep them coming back for more
          </p>
        </div>

        <Tabs defaultValue="reader-experience" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="reader-experience">Reader Experience</TabsTrigger>
              <TabsTrigger value="customization">Customization</TabsTrigger>
              <TabsTrigger value="interaction">Interaction</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="reader-experience" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Exceptional Reading Experience</h3>
                <p className="text-gray-600 mb-6">
                  Provide your readers with a beautiful, intuitive reading experience that keeps them engaged with your
                  content.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Responsive Design</h4>
                      <p className="text-sm text-gray-500">
                        Content adapts perfectly to any device, from desktops to smartphones.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Reading Preferences</h4>
                      <p className="text-sm text-gray-500">
                        Readers can customize font size, background color, and layout to suit their preferences.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Bookmarking & Progress</h4>
                      <p className="text-sm text-gray-500">
                        Automatic bookmarking and progress tracking across devices.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Offline Reading</h4>
                      <p className="text-sm text-gray-500">
                        Readers can download content for offline access, ensuring uninterrupted reading.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  {/* Mobile Reader Engagement Dashboard */}
                  <div className="w-80 h-[600px] bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">Reader Dashboard</h4>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                      {/* Engagement Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                          <div className="text-2xl font-bold text-blue-600">2,847</div>
                          <div className="text-sm text-blue-500">Active Readers</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                          <div className="text-2xl font-bold text-green-600">4.2h</div>
                          <div className="text-sm text-green-500">Avg. Reading</div>
                        </div>
                      </div>

                      {/* Reading Progress */}
                      <div className="space-y-4">
                        <h5 className="font-semibold text-gray-800">Reading Progress</h5>
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
                        <h5 className="font-semibold text-gray-800">Recent Activity</h5>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">New bookmark added</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Comment posted</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Content shared</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-4">
                        <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg text-sm font-medium">
                          Continue Reading
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
                        <h4 className="font-semibold">Brand Customization</h4>
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
                <h3 className="text-2xl font-bold mb-4">Brand Customization</h3>
                <p className="text-gray-600 mb-6">
                  Create a branded reading experience that reinforces your identity and enhances reader loyalty.
                </p>
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
                <h3 className="text-2xl font-bold mb-4">Interactive Content Features</h3>
                <p className="text-gray-600 mb-6">
                  Transform passive reading into active engagement with interactive content elements.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Comments & Annotations</h4>
                      <p className="text-sm text-gray-500">
                        Allow readers to leave comments, highlight text, and create personal annotations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Embedded Media</h4>
                      <p className="text-sm text-gray-500">
                        Enhance your content with videos, audio, galleries, and interactive elements.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Social Sharing</h4>
                      <p className="text-sm text-gray-500">
                        Enable readers to share excerpts or content on social media platforms.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Quizzes & Assessments</h4>
                      <p className="text-sm text-gray-500">
                        Create interactive quizzes, polls, and assessments to engage readers and gather feedback.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  {/* Interactive Features Dashboard */}
                  <div className="w-80 h-[600px] bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-white">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">Interactive Features</h4>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                      {/* Comments Section */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-gray-800">Recent Comments</h5>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                A
                              </div>
                              <span className="text-sm font-medium text-gray-700">Alex M.</span>
                            </div>
                            <p className="text-xs text-gray-600">"Great insights in chapter 3!"</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                S
                              </div>
                              <span className="text-sm font-medium text-gray-700">Sarah K.</span>
                            </div>
                            <p className="text-xs text-gray-600">"This section needs more examples"</p>
                          </div>
                        </div>
                      </div>

                      {/* Annotations */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-gray-800">Highlights & Notes</h5>
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-700 mb-2">"The key to success is..."</div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-1 bg-yellow-400 rounded"></div>
                            <span className="text-xs text-gray-500">12 highlights</span>
                          </div>
                        </div>
                      </div>

                      {/* Social Sharing */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-gray-800">Social Engagement</h5>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-blue-100 p-3 rounded-lg text-center">
                            <div className="w-6 h-6 bg-blue-500 rounded mx-auto mb-1"></div>
                            <div className="text-xs text-blue-600 font-medium">247</div>
                            <div className="text-xs text-gray-500">Shares</div>
                          </div>
                          <div className="bg-pink-100 p-3 rounded-lg text-center">
                            <div className="w-6 h-6 bg-pink-500 rounded mx-auto mb-1"></div>
                            <div className="text-xs text-pink-600 font-medium">89</div>
                            <div className="text-xs text-gray-500">Likes</div>
                          </div>
                          <div className="bg-purple-100 p-3 rounded-lg text-center">
                            <div className="w-6 h-6 bg-purple-500 rounded mx-auto mb-1"></div>
                            <div className="text-xs text-purple-600 font-medium">34</div>
                            <div className="text-xs text-gray-500">Saves</div>
                          </div>
                        </div>
                      </div>

                      {/* Quiz Results */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-gray-800">Quiz Performance</h5>
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Chapter 1 Quiz</span>
                            <span className="text-sm font-bold text-indigo-600">85%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                              style={{ width: "85%" }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">156 participants</div>
                        </div>
                      </div>

                      {/* Interactive Elements */}
                      <div className="flex gap-2">
                        <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 px-3 rounded-lg text-sm font-medium">
                          Add Comment
                        </button>
                        <button className="bg-gray-100 text-gray-600 py-2 px-3 rounded-lg text-sm">Share</button>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full z-0"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
