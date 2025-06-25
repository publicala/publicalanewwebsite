import React from "react"
import { Check, X, HelpCircle } from "lucide-react"

interface PricingFeaturesProps {
  dict: {
    pricingFeatures: {
      title: string
      subtitle: string
      headers: {
        features: string
        starter: string
        growth: string
        enterprise: string
      }
      categories: Array<{
        title: string
        features: Array<{
          name: string
          starter: string | boolean | React.ReactNode
          growth: string | boolean | React.ReactNode
          enterprise: string | boolean | React.ReactNode
        }>
      }>
      addons: {
        title: string
        items: Array<{
          name: string
          value: string
        }>
      }
    }
  }
}

export function PricingFeatures({ dict }: PricingFeaturesProps) {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{dict.pricingFeatures.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.pricingFeatures.subtitle}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-4 px-6 font-medium text-gray-700 rounded-tl-lg">
                  {dict.pricingFeatures.headers.features}
                </th>
                <th className="text-center py-4 px-6 font-medium text-gray-700">
                  {dict.pricingFeatures.headers.starter}
                </th>
                <th className="text-center py-4 px-6 font-medium text-gray-700">
                  {dict.pricingFeatures.headers.growth}
                </th>
                <th className="text-center py-4 px-6 font-medium text-gray-700 rounded-tr-lg">
                  {dict.pricingFeatures.headers.enterprise}
                </th>
              </tr>
            </thead>
            <tbody>
              {dict.pricingFeatures.categories.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <CategoryRow title={category.title} />
                  {category.features.map((feature, featureIndex) => (
                    <FeatureRow
                      key={featureIndex}
                      feature={feature.name}
                      starter={feature.starter}
                      growth={feature.growth}
                      enterprise={feature.enterprise}
                    />
                  ))}
                </React.Fragment>
              ))}

              {/* Add-ons */}
              <CategoryRow title={dict.pricingFeatures.addons.title} />
              {dict.pricingFeatures.addons.items.map((item, index) => (
                <tr key={index} className={`border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
                  <td className="py-4 px-6 font-medium">{item.name}</td>
                  <td colSpan={3} className="py-4 px-6 text-center">
                    {item.value}
                  </td>
                </tr>
              ))}
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
