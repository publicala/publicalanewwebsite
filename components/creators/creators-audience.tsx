import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Mail, Share2, BarChart2 } from "lucide-react"

export function CreatorsAudience() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build and Engage Your Audience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools to help you grow your audience and build a sustainable creative business
          </p>
        </div>

        <Tabs defaultValue="growth" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="growth">Audience Growth</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="insights">Audience Insights</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="growth" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Grow Your Audience</h3>
                <p className="text-gray-600 mb-6">Powerful tools to help you attract new fans and expand your reach.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Share2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Social Sharing</h4>
                      <p className="text-sm text-gray-500">
                        Make it easy for fans to share your content and storefront on social media.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Email Marketing</h4>
                      <p className="text-sm text-gray-500">
                        Build your email list and send newsletters, updates, and promotions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Referral Programs</h4>
                      <p className="text-sm text-gray-500">
                        Incentivize your existing audience to refer new customers.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  {/* Audience Growth Dashboard */}
                  <div className="w-80 bg-white rounded-3xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Users size={16} />
                        </div>
                        <h3 className="font-semibold">Audience Growth</h3>
                      </div>
                      <p className="text-blue-100 text-sm">Track your growing community</p>
                    </div>

                    {/* Growth Stats */}
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-50 p-4 rounded-xl">
                          <div className="flex items-center gap-2 mb-1">
                            <Users size={16} className="text-blue-600" />
                            <span className="text-xs text-gray-600">Total Followers</span>
                          </div>
                          <div className="text-xl font-bold text-blue-600">12,847</div>
                          <div className="text-xs text-green-600">+15% this month</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-xl">
                          <div className="flex items-center gap-2 mb-1">
                            <Share2 size={16} className="text-green-600" />
                            <span className="text-xs text-gray-600">Shares</span>
                          </div>
                          <div className="text-xl font-bold text-green-600">2,341</div>
                          <div className="text-xs text-green-600">+28% this week</div>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-800 text-sm">Recent Activity</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">New subscriber from Twitter</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">Content shared 15 times</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">Email campaign opened</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-50 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="engagement" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative">
                  {/* Audience Engagement Dashboard */}
                  <div className="w-80 bg-white rounded-3xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Users size={16} />
                        </div>
                        <h3 className="font-semibold">Engagement Hub</h3>
                      </div>
                      <p className="text-pink-100 text-sm">Connect with your community</p>
                    </div>

                    {/* Engagement Stats */}
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-pink-50 p-4 rounded-xl">
                          <div className="flex items-center gap-2 mb-1">
                            <Mail size={16} className="text-pink-600" />
                            <span className="text-xs text-gray-600">Messages</span>
                          </div>
                          <div className="text-xl font-bold text-pink-600">847</div>
                          <div className="text-xs text-green-600">+12% today</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-xl">
                          <div className="flex items-center gap-2 mb-1">
                            <Share2 size={16} className="text-purple-600" />
                            <span className="text-xs text-gray-600">Comments</span>
                          </div>
                          <div className="text-xl font-bold text-purple-600">1,234</div>
                          <div className="text-xs text-green-600">+8% this week</div>
                        </div>
                      </div>

                      {/* Recent Interactions */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-800 text-sm">Recent Interactions</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">New comment on your post</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">Direct message received</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">Community discussion started</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-50 rounded-full z-0"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4">Engage Your Audience</h3>
                <p className="text-gray-600 mb-6">
                  Build stronger relationships with your audience through meaningful interactions.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Community Features</h4>
                      <p className="text-sm text-gray-500">
                        Create a space for your audience to connect with you and each other.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Direct Communication</h4>
                      <p className="text-sm text-gray-500">
                        Message your customers directly and respond to their feedback.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Share2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Exclusive Content</h4>
                      <p className="text-sm text-gray-500">
                        Reward your most loyal fans with special content and early access.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Audience Insights</h3>
                <p className="text-gray-600 mb-6">
                  Understand your audience better with detailed analytics and insights.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <BarChart2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Audience Demographics</h4>
                      <p className="text-sm text-gray-500">
                        Learn about your audience's age, location, interests, and more.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <BarChart2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Content Performance</h4>
                      <p className="text-sm text-gray-500">See which content resonates most with your audience.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <BarChart2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Purchase Behavior</h4>
                      <p className="text-sm text-gray-500">
                        Analyze buying patterns to optimize your pricing and offerings.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  {/* Audience Insights Dashboard */}
                  <div className="w-80 bg-white rounded-3xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <BarChart2 size={16} />
                        </div>
                        <h3 className="font-semibold">Audience Insights</h3>
                      </div>
                      <p className="text-indigo-100 text-sm">Understand your audience better</p>
                    </div>

                    {/* Analytics Stats */}
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-indigo-50 p-4 rounded-xl">
                          <div className="flex items-center gap-2 mb-1">
                            <BarChart2 size={16} className="text-indigo-600" />
                            <span className="text-xs text-gray-600">Demographics</span>
                          </div>
                          <div className="text-xl font-bold text-indigo-600">25-34</div>
                          <div className="text-xs text-gray-500">Primary age group</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-xl">
                          <div className="flex items-center gap-2 mb-1">
                            <BarChart2 size={16} className="text-purple-600" />
                            <span className="text-xs text-gray-600">Top Content</span>
                          </div>
                          <div className="text-xl font-bold text-purple-600">87%</div>
                          <div className="text-xs text-green-600">Engagement rate</div>
                        </div>
                      </div>

                      {/* Insights List */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-800 text-sm">Key Insights</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">Peak activity: 7-9 PM</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">Mobile users: 68%</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">Repeat customers: 42%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-50 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
