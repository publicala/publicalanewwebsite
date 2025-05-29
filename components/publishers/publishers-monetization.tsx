import type React from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function PublishersMonetization() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/images/payment-success.png"
                alt="Payment success screen"
                width={300}
                height={600}
                className="rounded-3xl shadow-xl mx-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-50 rounded-full z-0"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Monetization Strategies</h2>
            <p className="text-lg text-gray-600 mb-8">
              Maximize your revenue with multiple monetization options tailored to your publishing goals and audience
              preferences.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Subscription Models</h3>
                <p className="text-gray-600 mb-4">
                  Create recurring revenue streams with flexible subscription options.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CheckItem>Monthly subscriptions</CheckItem>
                  <CheckItem>Annual plans with discounts</CheckItem>
                  <CheckItem>Tiered access levels</CheckItem>
                  <CheckItem>Free trials to convert readers</CheckItem>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Pay-Per-Content</h3>
                <p className="text-gray-600 mb-4">
                  Offer individual purchases for readers who prefer à la carte options.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CheckItem>Single book purchases</CheckItem>
                  <CheckItem>Chapter-by-chapter sales</CheckItem>
                  <CheckItem>Bundle packages</CheckItem>
                  <CheckItem>Time-limited access</CheckItem>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-2">Hybrid Approaches</h3>
                <p className="text-gray-600 mb-4">
                  Combine multiple strategies to maximize revenue and reader satisfaction.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CheckItem>Freemium models</CheckItem>
                  <CheckItem>Premium content upgrades</CheckItem>
                  <CheckItem>Institutional licensing</CheckItem>
                  <CheckItem>Advertising opportunities</CheckItem>
                </div>
              </div>
            </div>
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
