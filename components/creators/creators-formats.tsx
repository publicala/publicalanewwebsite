import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Music, ImageIcon, Video, FileCode, File } from "lucide-react"

export function CreatorsFormats() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sell Any Type of Digital Content</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform supports a wide range of digital formats to accommodate all types of creators
          </p>
        </div>

        <Tabs defaultValue="text" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto">
            <TabsList className="grid grid-cols-6 w-full max-w-3xl">
              <TabsTrigger value="text" className="flex flex-col gap-1 py-3">
                <FileText className="h-5 w-5 mx-auto" />
                <span>Text</span>
              </TabsTrigger>
              <TabsTrigger value="audio" className="flex flex-col gap-1 py-3">
                <Music className="h-5 w-5 mx-auto" />
                <span>Audio</span>
              </TabsTrigger>
              <TabsTrigger value="images" className="flex flex-col gap-1 py-3">
                <ImageIcon className="h-5 w-5 mx-auto" />
                <span>Images</span>
              </TabsTrigger>
              <TabsTrigger value="video" className="flex flex-col gap-1 py-3">
                <Video className="h-5 w-5 mx-auto" />
                <span>Video</span>
              </TabsTrigger>
              <TabsTrigger value="interactive" className="flex flex-col gap-1 py-3">
                <FileCode className="h-5 w-5 mx-auto" />
                <span>Interactive</span>
              </TabsTrigger>
              <TabsTrigger value="bundles" className="flex flex-col gap-1 py-3">
                <File className="h-5 w-5 mx-auto" />
                <span>Bundles</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="text" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Text-Based Content</h3>
                <p className="text-gray-600 mb-6">
                  Publish and sell ebooks, PDFs, reports, guides, newsletters, and other text-based content with
                  professional formatting and delivery.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileText className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Multiple Formats</h4>
                      <p className="text-sm text-gray-500">
                        Support for EPUB, PDF, MOBI, and other popular text formats.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileText className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Rich Formatting</h4>
                      <p className="text-sm text-gray-500">
                        Maintain your formatting, images, tables, and other elements.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileText className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Chapter Navigation</h4>
                      <p className="text-sm text-gray-500">
                        Readers can easily navigate through chapters and sections.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileText className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sample Previews</h4>
                      <p className="text-sm text-gray-500">
                        Let potential buyers preview a portion of your content before purchasing.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/step-back-leap.png"
                    alt="Text-based content example"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="audio" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/blue-theme.png"
                    alt="Audio content example"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-50 rounded-full z-0"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4">Audio Content</h3>
                <p className="text-gray-600 mb-6">
                  Sell audiobooks, podcasts, music, sound effects, guided meditations, and other audio content with
                  professional delivery and playback features.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Music className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">High-Quality Streaming</h4>
                      <p className="text-sm text-gray-500">
                        Stream audio content at various quality levels to accommodate different devices and connections.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Music className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Offline Listening</h4>
                      <p className="text-sm text-gray-500">
                        Allow customers to download audio for offline listening on their devices.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Music className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Playback Controls</h4>
                      <p className="text-sm text-gray-500">
                        Advanced playback features including speed control, bookmarking, and chapter navigation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Music className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Audio Samples</h4>
                      <p className="text-sm text-gray-500">Provide preview clips to entice potential buyers.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="images" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Image Content</h3>
                <p className="text-gray-600 mb-6">
                  Sell photography, digital art, illustrations, stock photos, design templates, and other visual content
                  with high-quality presentation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <ImageIcon className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">High-Resolution Support</h4>
                      <p className="text-sm text-gray-500">
                        Deliver high-resolution images while protecting your content from unauthorized use.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <ImageIcon className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Gallery Presentation</h4>
                      <p className="text-sm text-gray-500">Create beautiful galleries to showcase your visual work.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <ImageIcon className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Watermarking Options</h4>
                      <p className="text-sm text-gray-500">
                        Add optional watermarks to preview images while delivering clean files to buyers.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <ImageIcon className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Multiple Format Delivery</h4>
                      <p className="text-sm text-gray-500">
                        Provide images in various formats (JPEG, PNG, RAW, etc.) to meet different customer needs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/pink-theme.png"
                    alt="Image content example"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-50 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="video" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/yellow-theme.png"
                    alt="Video content example"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-50 rounded-full z-0"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4">Video Content</h3>
                <p className="text-gray-600 mb-6">
                  Sell courses, tutorials, documentaries, short films, animations, and other video content with
                  professional streaming capabilities.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Video className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Adaptive Streaming</h4>
                      <p className="text-sm text-gray-500">
                        Deliver video at various quality levels based on the viewer's connection speed.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Video className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Course Organization</h4>
                      <p className="text-sm text-gray-500">
                        Organize videos into modules, chapters, or series for educational content.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Video className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Interactive Features</h4>
                      <p className="text-sm text-gray-500">
                        Add quizzes, notes, and other interactive elements to video content.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Video className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Trailer Support</h4>
                      <p className="text-sm text-gray-500">
                        Create free preview trailers to market your premium video content.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="interactive" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Interactive Content</h3>
                <p className="text-gray-600 mb-6">
                  Sell interactive ebooks, web apps, games, quizzes, assessments, and other interactive digital
                  experiences.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileCode className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">HTML5 Support</h4>
                      <p className="text-sm text-gray-500">
                        Deliver interactive HTML5 content that works across devices.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileCode className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Progress Tracking</h4>
                      <p className="text-sm text-gray-500">
                        Track user progress through interactive content like courses or games.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileCode className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">User Input</h4>
                      <p className="text-sm text-gray-500">
                        Support for forms, quizzes, and other interactive elements that accept user input.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <FileCode className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Cross-Platform Compatibility</h4>
                      <p className="text-sm text-gray-500">
                        Ensure your interactive content works on desktop, mobile, and tablet devices.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/control-panel.png"
                    alt="Interactive content example"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bundles" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/book-collection-1.png"
                    alt="Content bundles example"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-50 rounded-full z-0"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4">Content Bundles</h3>
                <p className="text-gray-600 mb-6">
                  Create and sell bundles that combine different types of content for a comprehensive offering.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <File className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Mixed Media Bundles</h4>
                      <p className="text-sm text-gray-500">
                        Combine text, audio, video, and other content types in a single package.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <File className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Series and Collections</h4>
                      <p className="text-sm text-gray-500">
                        Group related content into series or collections with special pricing.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <File className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Tiered Access</h4>
                      <p className="text-sm text-gray-500">
                        Offer different bundle tiers with varying levels of content and features.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <File className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-medium">Bundle Discounts</h4>
                      <p className="text-sm text-gray-500">
                        Incentivize purchases with special pricing for bundled content.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
