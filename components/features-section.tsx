import type React from "react"
import { CheckCircle } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enterprise-Grade Features for Professional Publishing
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our platform provides all the tools you need to manage and distribute your digital content with
              confidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <FeatureItem>Advanced content management</FeatureItem>
              <FeatureItem>Multi-format publishing</FeatureItem>
              <FeatureItem>Secure digital rights management</FeatureItem>
              <FeatureItem>Comprehensive analytics</FeatureItem>
              <FeatureItem>Customizable reader experience</FeatureItem>
              <FeatureItem>Global distribution network</FeatureItem>
              <FeatureItem>Monetization tools</FeatureItem>
              <FeatureItem>API access for developers</FeatureItem>
              <FeatureItem>99.9% uptime guarantee</FeatureItem>
              <FeatureItem>Enterprise-grade security</FeatureItem>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="h-6 bg-gray-100 rounded w-1/3"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-primary/5 rounded flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="w-6 h-6 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    <div className="h-24 bg-primary/5 rounded flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="w-6 h-6 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    <div className="h-24 bg-primary/5 rounded flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="w-6 h-6 bg-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-6 bg-gray-100 rounded w-1/2"></div>
                  <div className="h-32 bg-gray-50 rounded border border-gray-200 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-100 rounded w-full"></div>
                      <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-100 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-6 bg-gray-100 rounded w-2/5"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-blue-50 rounded border border-blue-100 p-3 flex items-center">
                      <div className="w-8 h-8 rounded bg-blue-500 mr-2"></div>
                      <div className="space-y-1">
                        <div className="h-3 bg-gray-300 rounded w-16"></div>
                        <div className="h-3 bg-gray-200 rounded w-12"></div>
                      </div>
                    </div>
                    <div className="h-16 bg-green-50 rounded border border-green-100 p-3 flex items-center">
                      <div className="w-8 h-8 rounded bg-green-500 mr-2"></div>
                      <div className="space-y-1">
                        <div className="h-3 bg-gray-300 rounded w-16"></div>
                        <div className="h-3 bg-gray-200 rounded w-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/5 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
      <span className="text-gray-700">{children}</span>
    </div>
  )
}
