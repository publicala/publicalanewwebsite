import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ThemeOptions() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customizable Themes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from a variety of color schemes and layouts to match your brand identity
          </p>
        </div>

        <Tabs defaultValue="blue" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="blue" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Blue
              </TabsTrigger>
              <TabsTrigger value="pink" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                Pink
              </TabsTrigger>
              <TabsTrigger value="yellow" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white">
                Yellow
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex justify-center">
            <TabsContent value="blue" className="mt-0 w-full max-w-xs">
              <div className="relative mx-auto">
                <Image
                  src="/images/blue-theme.png"
                  alt="Blue theme"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-xl mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full z-0"></div>
              </div>
            </TabsContent>

            <TabsContent value="pink" className="mt-0 w-full max-w-xs">
              <div className="relative mx-auto">
                <Image
                  src="/images/pink-theme.png"
                  alt="Pink theme"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-xl mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-50 rounded-full z-0"></div>
              </div>
            </TabsContent>

            <TabsContent value="yellow" className="mt-0 w-full max-w-xs">
              <div className="relative mx-auto">
                <Image
                  src="/images/yellow-theme.png"
                  alt="Yellow theme"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-xl mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-50 rounded-full z-0"></div>
              </div>
            </TabsContent>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg font-medium mb-4">Customize every aspect of your reader's experience</p>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">Font Selection</div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">Color Schemes</div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">Button Styles</div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">Layout Options</div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">Navigation Menus</div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">Reading Modes</div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
