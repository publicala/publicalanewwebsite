import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, CreditCard, ShoppingCart } from "lucide-react"

export function PaymentShowcase() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Payment Processing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monetize your content with our secure and user-friendly payment system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <Image
                src="/images/payment-success.png"
                alt="Payment success screen"
                width={300}
                height={600}
                className="rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-50 rounded-full z-0"></div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4">Flexible Monetization Options</h3>
            <p className="text-gray-600 mb-6">
              Our platform offers multiple ways to monetize your digital content, from one-time purchases to
              subscriptions and bundled offerings.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Secure Payment Processing</h4>
                  <p className="text-gray-500">
                    Process payments securely with support for multiple payment methods and currencies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <ShoppingCart size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Flexible Pricing Models</h4>
                  <p className="text-gray-500">
                    Set up subscriptions, one-time purchases, rentals, or free content with optional premium features.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Seamless User Experience</h4>
                  <p className="text-gray-500">
                    Provide a frictionless checkout process that maximizes conversions and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="rounded-md">
                <Link href="/pricing">View Pricing Options</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
