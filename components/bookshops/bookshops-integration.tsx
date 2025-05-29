import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function BookshopsIntegration() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Integration with Your Physical Store</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bridge the gap between your physical and digital offerings for a unified customer experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IntegrationCard
            title="Point-of-Sale Integration"
            description="Connect your digital inventory to your existing POS system for unified sales tracking and reporting."
            image="/images/control-panel.png"
          />
          <IntegrationCard
            title="In-Store Digital Access"
            description="Create in-store kiosks or QR codes that allow customers to browse and purchase digital content while in your shop."
            image="/images/step-back-leap.png"
          />
          <IntegrationCard
            title="Unified Customer Accounts"
            description="Give customers a single account for both physical and digital purchases, with unified loyalty programs and rewards."
            image="/images/blue-theme.png"
          />
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hybrid Sales Strategies</h3>
              <p className="text-gray-600 mb-6">
                Implement innovative hybrid sales strategies that leverage both physical and digital inventory.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Bundle physical books with digital companions or bonus content</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Offer digital samples of physical books to help customers discover new titles</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Create "read now, buy physical later" options for impatient readers</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Implement digital gift cards that can be redeemed for both physical and digital products</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Create subscription services that combine physical and digital deliveries</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/book-collection-1.png"
                alt="Hybrid sales strategies"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntegrationCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
      <div className="h-48 relative">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
