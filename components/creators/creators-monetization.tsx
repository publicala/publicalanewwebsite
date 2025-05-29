import Image from "next/image"
import { DollarSign, CreditCard, Calendar, Tag, Gift } from "lucide-react"

export function CreatorsMonetization() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Monetization Options</h2>
            <p className="text-lg text-gray-600 mb-8">
              Choose the right pricing model for your content and audience. Our platform supports multiple ways to
              monetize your creative work.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">One-Time Purchases</h4>
                  <p className="text-gray-500">
                    Sell individual items or bundles for a single payment. Set your own prices and offer special
                    promotions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Subscriptions</h4>
                  <p className="text-gray-500">
                    Create recurring revenue with monthly or annual subscriptions. Offer different tiers with varying
                    levels of access.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Tag size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Pay-What-You-Want</h4>
                  <p className="text-gray-500">
                    Let customers decide how much to pay. Set a minimum price or make it completely flexible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Gift size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Freemium Model</h4>
                  <p className="text-gray-500">
                    Offer some content for free to attract an audience, then monetize with premium offerings or
                    upgrades.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <DollarSign size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Licensing Options</h4>
                  <p className="text-gray-500">
                    Offer different license types for your content, such as personal, commercial, or exclusive use.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/payment-success.png"
                alt="Monetization options"
                width={300}
                height={600}
                className="rounded-3xl shadow-xl mx-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-50 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/5 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
