import Image from "next/image"
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
                  <Image
                    src="/images/step-back-leap.png"
                    alt="Mobile reading experience"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="customization" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  <div className="relative">
                    <Image
                      src="/images/blue-theme.png"
                      alt="Blue theme customization"
                      width={200}
                      height={400}
                      className="rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="relative mt-8">
                    <Image
                      src="/images/pink-theme.png"
                      alt="Pink theme customization"
                      width={200}
                      height={400}
                      className="rounded-2xl shadow-lg"
                    />
                  </div>
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
                  <Image
                    src="/images/book-collection-1.png"
                    alt="Interactive content features"
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
