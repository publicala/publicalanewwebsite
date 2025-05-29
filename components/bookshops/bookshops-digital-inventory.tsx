import type React from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function BookshopsDigitalInventory() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Curate Your Digital Inventory</h2>
            <p className="text-lg text-gray-600 mb-8">
              Expand your bookshop's offerings without the constraints of physical shelf space. Curate a digital
              inventory that complements your physical store and reflects your unique brand.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Extensive Catalog</h3>
                <p className="text-gray-600 mb-4">
                  Access a vast library of digital content from major publishers and independent authors.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CheckItem>Bestselling titles</CheckItem>
                  <CheckItem>Indie publications</CheckItem>
                  <CheckItem>Local authors</CheckItem>
                  <CheckItem>Niche genres</CheckItem>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Zero Inventory Costs</h3>
                <p className="text-gray-600 mb-4">
                  Offer an unlimited selection without the overhead of physical inventory management.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CheckItem>No storage costs</CheckItem>
                  <CheckItem>No shipping logistics</CheckItem>
                  <CheckItem>No returns processing</CheckItem>
                  <CheckItem>No inventory depreciation</CheckItem>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Curation Tools</h3>
                <p className="text-gray-600 mb-4">
                  Powerful tools to help you curate a digital inventory that reflects your bookshop's unique identity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CheckItem>Custom collections</CheckItem>
                  <CheckItem>Staff picks highlighting</CheckItem>
                  <CheckItem>Themed promotions</CheckItem>
                  <CheckItem>Seasonal showcases</CheckItem>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/book-collection-2.png"
                alt="Digital inventory management"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/5 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
      <span className="text-gray-700">{children}</span>
    </div>
  )
}
