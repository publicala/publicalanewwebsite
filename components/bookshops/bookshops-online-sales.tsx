import Image from "next/image"
import { CreditCard, ShoppingBag, Tag, Globe } from "lucide-react"

export function BookshopsOnlineSales() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/images/payment-success.png"
                alt="Online sales platform"
                width={300}
                height={600}
                className="rounded-3xl shadow-xl mx-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-50 rounded-full z-0"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Online Sales</h2>
            <p className="text-lg text-gray-600 mb-8">
              Sell digital content directly to your customers through a branded online storefront that integrates with
              your existing website and systems.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Branded Digital Storefront</h4>
                  <p className="text-gray-500">
                    Create a custom-branded digital bookstore that reflects your shop's unique identity and seamlessly
                    integrates with your existing website.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Flexible Payment Options</h4>
                  <p className="text-gray-500">
                    Offer customers multiple payment methods and purchasing options, including one-time purchases,
                    bundles, and subscriptions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Tag size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Promotional Tools</h4>
                  <p className="text-gray-500">
                    Create special offers, discount codes, and promotional bundles to drive sales and engage customers
                    with your digital inventory.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Global Reach</h4>
                  <p className="text-gray-500">
                    Expand your customer base beyond your local area and sell to readers worldwide without shipping
                    costs or logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
