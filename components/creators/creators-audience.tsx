import Image from "next/image"
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
                  <Image
                    src="/images/blue-theme.png"
                    alt="Audience growth tools"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-50 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="engagement" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/pink-theme.png"
                    alt="Audience engagement tools"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-xl"
                  />
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
                  <Image
                    src="/images/control-panel.png"
                    alt="Audience insights dashboard"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
