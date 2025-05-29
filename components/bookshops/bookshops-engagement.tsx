import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BookshopsEngagement() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Engage Your Readers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build stronger relationships with your customers through personalized digital experiences
          </p>
        </div>

        <Tabs defaultValue="personalization" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="personalization">Personalization</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="personalization" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Personalized Reading Experiences</h3>
                <p className="text-gray-600 mb-6">
                  Offer your customers personalized reading experiences that keep them engaged with your bookshop.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Customized Recommendations</h4>
                      <p className="text-sm text-gray-500">
                        Suggest titles based on customers' reading history and preferences.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Reading Lists</h4>
                      <p className="text-sm text-gray-500">
                        Create curated reading lists for different interests, genres, and occasions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Personalized Notifications</h4>
                      <p className="text-sm text-gray-500">
                        Alert customers when new titles are available from their favorite authors or genres.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Reading Progress Tracking</h4>
                      <p className="text-sm text-gray-500">
                        Help customers track their reading progress across devices and formats.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/blue-theme.png"
                    alt="Personalized reading experience"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="community" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/pink-theme.png"
                    alt="Community building features"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-50 rounded-full z-0"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4">Build a Reading Community</h3>
                <p className="text-gray-600 mb-6">
                  Foster a sense of community among your customers with digital tools that encourage engagement and
                  discussion.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Virtual Book Clubs</h4>
                      <p className="text-sm text-gray-500">
                        Host and manage virtual book clubs for your customers with integrated reading and discussion
                        tools.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Author Events</h4>
                      <p className="text-sm text-gray-500">
                        Organize virtual author readings, Q&As, and book launches to engage your community.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Reader Reviews</h4>
                      <p className="text-sm text-gray-500">
                        Enable customers to share reviews and recommendations with your community.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Social Sharing</h4>
                      <p className="text-sm text-gray-500">
                        Make it easy for readers to share their favorite books and quotes on social media.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="marketing" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Effective Digital Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Leverage digital marketing tools to promote your bookshop and drive sales of both physical and digital
                  inventory.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Email Campaigns</h4>
                      <p className="text-sm text-gray-500">
                        Create targeted email campaigns to promote new releases, special offers, and events.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Social Media Integration</h4>
                      <p className="text-sm text-gray-500">
                        Easily share your digital inventory and promotions across social media platforms.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Loyalty Programs</h4>
                      <p className="text-sm text-gray-500">
                        Implement digital loyalty programs to reward your most engaged customers.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Analytics & Insights</h4>
                      <p className="text-sm text-gray-500">
                        Use data-driven insights to optimize your marketing efforts and inventory selection.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/yellow-theme.png"
                    alt="Digital marketing tools"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-50 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
