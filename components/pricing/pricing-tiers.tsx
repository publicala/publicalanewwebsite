import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export function PricingTiers() {
  return (
    <section className="w-full py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">Starter</CardTitle>
              <CardDescription className="text-base">
                For individuals and small teams just getting started
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$20</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-sm text-gray-500 mb-6">Everything you need to start publishing digital content</p>

              {/* Key features with highlight */}
              <div className="mb-6 space-y-3">
                <div className="bg-primary/5 p-3 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium">Up to 10 publications</p>
                </div>
                <div className="bg-primary/5 p-3 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium">Earn 70% from each sale</p>
                </div>
              </div>

              <ul className="space-y-3">
                <PricingFeatureItem>Basic reader analytics</PricingFeatureItem>
                <PricingFeatureItem>Standard customization options</PricingFeatureItem>
                <PricingFeatureItem>Single payment gateway</PricingFeatureItem>
                <PricingFeatureItem>Email support</PricingFeatureItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full rounded-md" variant="outline">
                <Link href="/signup?plan=starter">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Growth Plan */}
          <Card className="border-2 border-primary shadow-lg relative">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              MOST POPULAR
            </div>
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">Growth</CardTitle>
              <CardDescription className="text-base">For growing publishers with expanding catalogs</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$249</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-sm text-gray-500 mb-6">Advanced features for professional publishers</p>

              {/* Key features with highlight */}
              <div className="mb-6 space-y-3">
                <div className="bg-primary/5 p-3 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium">Up to 300 publications</p>
                </div>
                <div className="bg-primary/5 p-3 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium">Earn 80% from each sale</p>
                </div>
              </div>

              <ul className="space-y-3">
                <PricingFeatureItem>Advanced reader analytics</PricingFeatureItem>
                <PricingFeatureItem>Enhanced customization options</PricingFeatureItem>
                <PricingFeatureItem>Multiple payment gateways</PricingFeatureItem>
                <PricingFeatureItem>Priority email support</PricingFeatureItem>
                <PricingFeatureItem>Custom domain</PricingFeatureItem>
                <PricingFeatureItem>Subscription management</PricingFeatureItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full rounded-md">
                <Link href="/signup?plan=growth">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription className="text-base">For established publishers with large catalogs</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">From $492</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-sm text-gray-500 mb-6">Everything you need for large-scale publishing</p>

              {/* Key features with highlight */}
              <div className="mb-6 space-y-3">
                <div className="bg-primary/5 p-3 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium">Unlimited publications</p>
                </div>
                <div className="bg-primary/5 p-3 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium">Earn 90% from each sale</p>
                </div>
              </div>

              <ul className="space-y-3">
                <PricingFeatureItem>Comprehensive analytics dashboard</PricingFeatureItem>
                <PricingFeatureItem>Full white-labeling</PricingFeatureItem>
                <PricingFeatureItem>All payment gateways</PricingFeatureItem>
                <PricingFeatureItem>24/7 priority support</PricingFeatureItem>
                <PricingFeatureItem>Multiple custom domains</PricingFeatureItem>
                <PricingFeatureItem>Advanced DRM options</PricingFeatureItem>
                <PricingFeatureItem>API access</PricingFeatureItem>
                <PricingFeatureItem>Dedicated account manager</PricingFeatureItem>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full rounded-md" variant="outline">
                <Link href="/signup?plan=enterprise">Contact Sales</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Need a custom plan?{" "}
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Contact our sales team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

function PricingFeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
      <span className="text-gray-700">{children}</span>
    </li>
  )
}
