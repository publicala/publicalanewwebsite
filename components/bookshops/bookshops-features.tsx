import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ShoppingCart, Users, BarChart2, Globe, Zap } from "lucide-react"

export function BookshopsFeatures() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Solutions for Modern Bookshops</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to expand your bookshop's offerings into the digital realm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BookOpen className="h-6 w-6" />}
            title="Digital Inventory"
            description="Offer ebooks, audiobooks, and digital content alongside your physical inventory."
          />
          <FeatureCard
            icon={<ShoppingCart className="h-6 w-6" />}
            title="Online Sales"
            description="Sell digital content directly to customers through your own branded storefront."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Customer Engagement"
            description="Build stronger relationships with readers through personalized recommendations and content."
          />
          <FeatureCard
            icon={<BarChart2 className="h-6 w-6" />}
            title="Sales Analytics"
            description="Gain insights into customer preferences and purchasing patterns to optimize your offerings."
          />
          <FeatureCard
            icon={<Globe className="h-6 w-6" />}
            title="Expanded Reach"
            description="Reach customers beyond your physical location and sell globally without shipping costs."
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6" />}
            title="Seamless Integration"
            description="Integrate digital offerings with your existing point-of-sale and inventory systems."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border border-gray-200 transition-all hover:shadow-md hover:border-primary/30 h-full">
      <CardHeader>
        <div className="text-primary mb-4 bg-primary/5 w-12 h-12 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
