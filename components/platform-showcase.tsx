import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PlatformShowcase() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Platform Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the capabilities of our digital content platform designed for publishers and content creators
          </p>
        </div>

        <Tabs defaultValue="reader" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-xl grid-cols-4">
              <TabsTrigger value="reader">Reader Experience</TabsTrigger>
              <TabsTrigger value="customization">Customization</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="payments">International Payments</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="reader" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Exceptional Reading Experience</h3>
                <p className="text-gray-600 mb-6">
                  Provide your readers with a beautiful, intuitive reading experience across all devices. Our platform
                  supports various content formats and offers features like bookmarking, notes, and search.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Responsive design for all devices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Customizable reading interface</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Support for interactive elements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Offline reading capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Support for PDF, EPUB, Audio and Video</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Exceptional%20Reading%20Experience%20-THX4wxMtwIva8fH1W6KmOkohOKpiQo.png"
                    alt="Exceptional Reading Experience across devices"
                    width={600}
                    height={450}
                    className="rounded-xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="customization" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 flex justify-center">
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
                  <div className="relative mt-4">
                    <Image
                      src="/images/yellow-theme.png"
                      alt="Yellow theme customization"
                      width={200}
                      height={400}
                      className="rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Extensive Customization Options</h3>
                <p className="text-gray-600 mb-6">
                  Tailor the look and feel of your digital publications to match your brand. Choose from various themes,
                  colors, and layout options to create a unique experience for your readers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Custom branding and theming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Multiple layout options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Font and typography controls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Interactive element styling</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Comprehensive Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Gain valuable insights into how your content is performing. Track reader engagement, identify popular
                  sections, and make data-driven decisions to optimize your content strategy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Real-time engagement metrics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Reader behavior analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Content performance tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Customizable reporting</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative max-w-xs">
                  <Image
                    src="/images/control-panel.png"
                    alt="Analytics dashboard"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-xl"
                  />
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="payments" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">We'll Handle Payments For You</h3>
                <p className="text-gray-600 mb-6">
                  Focus on creating great content while we take care of the complex world of international payments and
                  taxes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Sell worldwide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Let your users pay in local currency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Receive your payments consolidated in your own currency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>We'll handle taxes</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative max-w-xs">
                  <Image
                    src="/images/payment-success.png"
                    alt="International payments"
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
