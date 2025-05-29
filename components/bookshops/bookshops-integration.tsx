import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { BookOpen, Laptop, Store, Users, Package, CreditCard, Cloud, Server } from "lucide-react"

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
            icon={<Store size={48} className="text-primary" />}
            flowDiagram={
              <div className="flex flex-col items-center">
                <Store size={32} className="text-gray-700 mb-2" />
                <ArrowRight size={24} className="text-gray-500 mb-2" />
                <Server size={32} className="text-gray-700 mb-2" />
                <ArrowRight size={24} className="text-gray-500 mb-2" />
                <Cloud size={32} className="text-gray-700" />
              </div>
            }
          />
          <IntegrationCard
            title="In-Store Digital Access"
            description="Create in-store kiosks or QR codes that allow customers to browse and purchase digital content while in your shop."
            icon={<Laptop size={48} className="text-primary" />}
            flowDiagram={
              <div className="flex flex-col items-center">
                <Users size={32} className="text-gray-700 mb-2" />
                <ArrowRight size={24} className="text-gray-500 mb-2" />
                <Laptop size={32} className="text-gray-700 mb-2" />
                <ArrowRight size={24} className="text-gray-500 mb-2" />
                <BookOpen size={32} className="text-gray-700" />
              </div>
            }
          />
          <IntegrationCard
            title="Unified Customer Accounts"
            description="Give customers a single account for both physical and digital purchases, with unified loyalty programs and rewards."
            icon={<Users size={48} className="text-primary" />}
            flowDiagram={
              <div className="flex flex-col items-center">
                <Users size={32} className="text-gray-700 mb-2" />
                <ArrowRight size={24} className="text-gray-500 mb-2" />
                <CreditCard size={32} className="text-gray-700 mb-2" />
                <ArrowRight size={24} className="text-gray-500 mb-2" />
                <Package size={32} className="text-gray-700" />
              </div>
            }
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
              <BookOpen size={100} className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntegrationCard({
  title,
  description,
  icon,
  flowDiagram,
}: { title: string; description: string; icon: React.ReactNode; flowDiagram: React.ReactNode }) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
      <div className="h-48 relative flex items-center justify-center">{icon}</div>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4">{flowDiagram}</div>
      </CardContent>
    </Card>
  )
}
