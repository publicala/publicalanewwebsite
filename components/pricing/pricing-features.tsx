import type React from "react"
import { Check, X, HelpCircle } from "lucide-react"

export function PricingFeatures() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Compare Plans</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed comparison of features available in each pricing tier
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-4 px-6 font-medium text-gray-700 rounded-tl-lg">Features</th>
                <th className="text-center py-4 px-6 font-medium text-gray-700">Starter</th>
                <th className="text-center py-4 px-6 font-medium text-gray-700">Growth</th>
                <th className="text-center py-4 px-6 font-medium text-gray-700 rounded-tr-lg">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {/* Administration Users */}
              <CategoryRow title="🧩 Administration Users" />
              <FeatureRow feature="Admin Users" starter="Up to 1" growth="Up to 5" enterprise="Unlimited" />

              {/* Sales & Analytics */}
              <CategoryRow title="📈 Sales & Analytics" />
              <FeatureRow feature="Retail and subscription sales" starter={true} growth={true} enterprise={true} />
              <FeatureRow feature="Sales and subscription analysis" starter={true} growth={true} enterprise={true} />
              <FeatureRow feature="Real-time consumption analysis" starter={true} growth={true} enterprise={true} />

              {/* Store & Customization */}
              <CategoryRow title="🛍️ Store & Customization" />
              <FeatureRow feature="Store customization" starter={true} growth={true} enterprise={true} />
              <FeatureRow feature="Offline Reading app" starter={true} growth={true} enterprise={true} />
              <FeatureRow feature="Free content" starter={true} growth={true} enterprise={true} />
              <FeatureRow feature="Custom domain" starter={true} growth={true} enterprise={true} />
              <FeatureRow feature="Advanced customization - CSS" starter={false} growth={true} enterprise={true} />

              {/* Coupons & Smart Features */}
              <CategoryRow title="🎟️ Coupons & Smart Features" />
              <FeatureRow feature="Coupon creation" starter={true} growth={true} enterprise={true} />
              <FeatureRow feature="Smart Zoom (Interactive PDFs)" starter={true} growth={true} enterprise={true} />
              <FeatureRow feature="Google Analytics creation" starter={true} growth={true} enterprise={true} />
              <FeatureRow feature="Bulk coupon creation" starter={false} growth={true} enterprise={true} />

              {/* Institutional & Marketplace */}
              <CategoryRow title="🏢 Institutional & Marketplace" />
              <FeatureRow feature="Institutional sales" starter={false} growth={true} enterprise={true} />
              <FeatureRow
                feature="Sell 3rd-party content via marketplace"
                starter={false}
                growth={true}
                enterprise={true}
              />

              {/* Support & Advisory */}
              <CategoryRow title="🤝 Support & Advisory" />
              <FeatureRow feature="Dedicated Account Manager" starter={false} growth={false} enterprise={true} />
              <FeatureRow feature="Prioritized support" starter={false} growth={false} enterprise={true} />
              <FeatureRow feature="Personalized sales advisory" starter={false} growth={false} enterprise={true} />

              {/* Integrations */}
              <CategoryRow title="🔌 Integrations" />
              <FeatureRow feature="API integrations" starter={true} growth={true} enterprise={true} />
              <FeatureRow
                feature="SAML, LTI, IP, Referrer integrations"
                starter={false}
                growth={true}
                enterprise={true}
              />

              {/* Extra Services */}
              <CategoryRow title="📚 Extra Services" />
              <FeatureRow feature="publica.la Bookshop" starter={true} growth={true} enterprise={true} />
              <FeatureRow
                feature="100% Off Coupon Codes"
                starter="$5 each"
                growth="$1 each"
                enterprise={
                  <span className="flex items-center justify-center gap-1">
                    Contact sales <HelpCircle className="h-4 w-4 text-gray-400" />
                  </span>
                }
              />
              <FeatureRow
                feature="Additional publication"
                starter="$2 each"
                growth="$2 each"
                enterprise={
                  <span className="flex items-center justify-center gap-1">
                    Contact sales <HelpCircle className="h-4 w-4 text-gray-400" />
                  </span>
                }
              />

              {/* Add-ons */}
              <CategoryRow title="🧩 Add-ons (All Plans)" />
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">Customized Offline Reading App</td>
                <td colSpan={3} className="py-4 px-6 text-center">
                  Contact sales
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="py-4 px-6 font-medium">Sell Printed Content (publica.la Paper)</td>
                <td colSpan={3} className="py-4 px-6 text-center">
                  Contact sales
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">CarPlay Integration</td>
                <td colSpan={3} className="py-4 px-6 text-center">
                  Contact sales
                </td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="py-4 px-6 font-medium">Access to Premium Catalog</td>
                <td colSpan={3} className="py-4 px-6 text-center">
                  Contact sales
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function CategoryRow({ title }: { title: string }) {
  return (
    <tr className="bg-gray-100">
      <td colSpan={4} className="py-3 px-6 font-bold text-gray-700">
        {title}
      </td>
    </tr>
  )
}

function FeatureRow({
  feature,
  starter,
  growth,
  enterprise,
}: {
  feature: string
  starter: string | boolean | React.ReactNode
  growth: string | boolean | React.ReactNode
  enterprise: string | boolean | React.ReactNode
}) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-4 px-6 font-medium">{feature}</td>
      <td className="py-4 px-6 text-center">
        {typeof starter === "boolean" ? (
          starter ? (
            <Check className="h-5 w-5 text-green-500 mx-auto" />
          ) : (
            <X className="h-5 w-5 text-red-400 mx-auto" />
          )
        ) : (
          starter
        )}
      </td>
      <td className="py-4 px-6 text-center">
        {typeof growth === "boolean" ? (
          growth ? (
            <Check className="h-5 w-5 text-green-500 mx-auto" />
          ) : (
            <X className="h-5 w-5 text-red-400 mx-auto" />
          )
        ) : (
          growth
        )}
      </td>
      <td className="py-4 px-6 text-center">
        {typeof enterprise === "boolean" ? (
          enterprise ? (
            <Check className="h-5 w-5 text-green-500 mx-auto" />
          ) : (
            <X className="h-5 w-5 text-red-400 mx-auto" />
          )
        ) : (
          enterprise
        )}
      </td>
    </tr>
  )
}
