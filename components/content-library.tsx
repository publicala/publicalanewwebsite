import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContentLibrary() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Manage Your Digital Content Library</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organize, showcase, and distribute your digital publications with ease
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Powerful Content Management</h3>
            <p className="text-gray-600 mb-6">
              Our platform makes it easy to upload, organize, and manage your digital publications. Create collections,
              set access permissions, and provide a seamless experience for your readers.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-medium">Upload and Organize</h4>
                  <p className="text-sm text-gray-500">
                    Easily upload your content in various formats and organize it into collections.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-medium">Customize and Brand</h4>
                  <p className="text-sm text-gray-500">
                    Apply your branding and customize the reading experience for your audience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-medium">Distribute and Monetize</h4>
                  <p className="text-sm text-gray-500">
                    Share your content with your audience and implement various monetization strategies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                  4
                </div>
                <div>
                  <h4 className="font-medium">Track and Analyze</h4>
                  <p className="text-sm text-gray-500">
                    Monitor performance and reader engagement to optimize your content strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="rounded-md">
                <Link href="/get-started">Start Building Your Library</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-xl rounded-xl bg-white">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/images/book-collection-1.png"
                    alt="Digital content library"
                    width={500}
                    height={800}
                    className="w-full"
                  />
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/5 rounded-full z-0"></div>
                </div>
              </CardContent>
            </Card>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
