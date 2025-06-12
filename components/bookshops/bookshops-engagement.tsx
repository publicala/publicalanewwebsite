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
                  {/* CSS-based personalization dashboard */}
                  <div className="w-[300px] h-[600px] rounded-3xl shadow-xl bg-white overflow-hidden border border-gray-200">
                    {/* Header */}
                    <div className="bg-blue-500 text-white p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">My Reading</h3>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-sm">JD</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 p-4 bg-blue-50">
                      <div className="bg-white p-2 rounded-lg text-center">
                        <div className="text-xl font-bold text-blue-600">12</div>
                        <div className="text-xs text-gray-500">Books</div>
                      </div>
                      <div className="bg-white p-2 rounded-lg text-center">
                        <div className="text-xl font-bold text-blue-600">48h</div>
                        <div className="text-xs text-gray-500">Reading</div>
                      </div>
                      <div className="bg-white p-2 rounded-lg text-center">
                        <div className="text-xl font-bold text-blue-600">5</div>
                        <div className="text-xs text-gray-500">Streak</div>
                      </div>
                    </div>

                    {/* Current Reading */}
                    <div className="p-4">
                      <h4 className="font-medium text-gray-700 mb-3">Currently Reading</h4>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">The Great Gatsby</span>
                            <span className="text-xs text-gray-500">68%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: "68%" }}></div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Dune</span>
                            <span className="text-xs text-gray-500">23%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: "23%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div className="p-4 border-t border-gray-100">
                      <h4 className="font-medium text-gray-700 mb-3">Recommended For You</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <div className="h-24 bg-blue-100 rounded mb-2 flex items-center justify-center">
                            <span className="text-blue-500 text-xs">Book Cover</span>
                          </div>
                          <div className="text-xs font-medium">The Alchemist</div>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <div key={star} className="w-2 h-2 bg-yellow-400 rounded-full mr-0.5"></div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <div className="h-24 bg-blue-100 rounded mb-2 flex items-center justify-center">
                            <span className="text-blue-500 text-xs">Book Cover</span>
                          </div>
                          <div className="text-xs font-medium">1984</div>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[1, 2, 3, 4].map((star) => (
                                <div key={star} className="w-2 h-2 bg-yellow-400 rounded-full mr-0.5"></div>
                              ))}
                              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white">
                      <div className="grid grid-cols-4 py-3">
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-blue-100 mb-1"></div>
                          <span className="text-[10px] text-gray-500">Home</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-blue-500 mb-1"></div>
                          <span className="text-[10px] text-blue-500">Reading</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-blue-100 mb-1"></div>
                          <span className="text-[10px] text-gray-500">Library</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-blue-100 mb-1"></div>
                          <span className="text-[10px] text-gray-500">Profile</span>
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
                  {/* CSS-based community dashboard */}
                  <div className="w-[300px] h-[600px] rounded-3xl shadow-xl bg-white overflow-hidden border border-gray-200">
                    {/* Header */}
                    <div className="bg-pink-500 text-white p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Book Club</h3>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-sm">JD</span>
                        </div>
                      </div>
                    </div>

                    {/* Current Book */}
                    <div className="p-4 bg-pink-50">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Current Book</h4>
                      <div className="bg-white rounded-lg p-3 flex gap-3">
                        <div className="w-16 h-24 bg-pink-100 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-pink-500 text-xs">Cover</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-sm">The Midnight Library</h5>
                          <p className="text-xs text-gray-500 mb-2">Matt Haig</p>
                          <div className="flex gap-2">
                            <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full">Fiction</span>
                            <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full">Fantasy</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Discussion */}
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium text-gray-700">Discussion</h4>
                        <span className="text-xs text-pink-500">View All</span>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-pink-200 flex items-center justify-center flex-shrink-0">
                              <span className="text-xs">SM</span>
                            </div>
                            <div>
                              <div className="text-xs font-medium">Sarah M.</div>
                              <div className="text-[10px] text-gray-500">2 hours ago</div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">
                            I love how the author explores the concept of regret and how our choices shape our lives.
                          </p>
                          <div className="flex gap-3 mt-2">
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-4 rounded-full bg-pink-100"></div>
                              <span className="text-[10px] text-gray-500">12</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-4 rounded-full bg-pink-100"></div>
                              <span className="text-[10px] text-gray-500">Reply</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                              <span className="text-xs">JD</span>
                            </div>
                            <div>
                              <div className="text-xs font-medium">John D.</div>
                              <div className="text-[10px] text-gray-500">5 hours ago</div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">
                            The parallel universes concept reminds me of quantum physics theories. Anyone else notice
                            this?
                          </p>
                          <div className="flex gap-3 mt-2">
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-4 rounded-full bg-pink-100"></div>
                              <span className="text-[10px] text-gray-500">8</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-4 rounded-full bg-pink-100"></div>
                              <span className="text-[10px] text-gray-500">Reply</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="p-4 border-t border-gray-100">
                      <h4 className="font-medium text-gray-700 mb-3">Upcoming Events</h4>
                      <div className="bg-pink-50 p-3 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Author Q&A</span>
                          <span className="text-xs bg-pink-200 text-pink-700 px-2 py-0.5 rounded-full">May 15</span>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">
                          Live discussion with Matt Haig about The Midnight Library
                        </p>
                        <button className="text-xs bg-pink-500 text-white px-3 py-1 rounded-full">RSVP</button>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white">
                      <div className="grid grid-cols-4 py-3">
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-pink-100 mb-1"></div>
                          <span className="text-[10px] text-gray-500">Home</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-pink-500 mb-1"></div>
                          <span className="text-[10px] text-pink-500">Clubs</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-pink-100 mb-1"></div>
                          <span className="text-[10px] text-gray-500">Events</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-pink-100 mb-1"></div>
                          <span className="text-[10px] text-gray-500">Profile</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  {/* CSS-based marketing dashboard */}
                  <div className="w-[300px] h-[600px] rounded-3xl shadow-xl bg-white overflow-hidden border border-gray-200">
                    {/* Header */}
                    <div className="bg-yellow-500 text-white p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Marketing</h3>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-sm">JD</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 p-4 bg-yellow-50">
                      <div className="bg-white p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Email Subscribers</div>
                        <div className="text-xl font-bold text-yellow-600">2,547</div>
                        <div className="text-xs text-green-500 flex items-center mt-1">
                          <span className="mr-1">+12%</span>
                          <span>this month</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Open Rate</div>
                        <div className="text-xl font-bold text-yellow-600">32%</div>
                        <div className="text-xs text-green-500 flex items-center mt-1">
                          <span className="mr-1">+5%</span>
                          <span>vs industry</span>
                        </div>
                      </div>
                    </div>

                    {/* Campaigns */}
                    <div className="p-4">
                      <h4 className="font-medium text-gray-700 mb-3">Active Campaigns</h4>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Summer Reading</span>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Active</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">
                            Promotion for summer reading list with 15% discount
                          </p>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Sent: 1,245</span>
                            <span>Opens: 623</span>
                            <span>Clicks: 187</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">New Releases</span>
                            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                              Draft
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">Announcement of May new releases</p>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Scheduled: May 10</span>
                            <span>Recipients: 2,547</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Social Stats */}
                    <div className="p-4 border-t border-gray-100">
                      <h4 className="font-medium text-gray-700 mb-3">Social Performance</h4>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-blue-50 p-2 rounded-lg text-center">
                          <div className="w-6 h-6 mx-auto bg-blue-100 rounded-full mb-1"></div>
                          <div className="text-sm font-bold">1.2k</div>
                          <div className="text-[10px] text-gray-500">Followers</div>
                        </div>
                        <div className="bg-pink-50 p-2 rounded-lg text-center">
                          <div className="w-6 h-6 mx-auto bg-pink-100 rounded-full mb-1"></div>
                          <div className="text-sm font-bold">845</div>
                          <div className="text-[10px] text-gray-500">Followers</div>
                        </div>
                        <div className="bg-red-50 p-2 rounded-lg text-center">
                          <div className="w-6 h-6 mx-auto bg-red-100 rounded-full mb-1"></div>
                          <div className="text-sm font-bold">2.4k</div>
                          <div className="text-[10px] text-gray-500">Subscribers</div>
                        </div>
                      </div>
                    </div>

                    {/* Upcoming Posts */}
                    <div className="p-4 border-t border-gray-100">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium text-gray-700">Scheduled Posts</h4>
                        <span className="text-xs text-yellow-500">View All</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex gap-2">
                          <div className="w-10 h-10 bg-yellow-100 rounded flex-shrink-0"></div>
                          <div>
                            <div className="text-xs font-medium">Author Spotlight: J.K. Rowling</div>
                            <div className="text-[10px] text-gray-500 mb-1">Tomorrow at 10:00 AM</div>
                            <div className="flex gap-1">
                              <div className="w-4 h-4 rounded-full bg-blue-100"></div>
                              <div className="w-4 h-4 rounded-full bg-pink-100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white">
                      <div className="grid grid-cols-4 py-3">
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-yellow-100 mb-1"></div>
                          <span className="text-[10px] text-gray-500">Dashboard</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-yellow-500 mb-1"></div>
                          <span className="text-[10px] text-yellow-500">Campaigns</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-yellow-100 mb-1"></div>
                          <span className="text-[10px] text-gray-500">Audience</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-yellow-100 mb-1"></div>
                          <span className="text-[10px] text-gray-500">Analytics</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
