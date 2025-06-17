import { CaseStudy } from "@/components/case-study"

export function BookshopsCaseStudy() {
  return (
    <CaseStudy
      title="Success Story: BajaLibros"
      subtitle="How Argentina's leading digital library expanded across Latin America and Spain"
      overview="BajaLibros is a digital library platform that centralizes content in one place and lets users take their reading anywhere with its mobile app and online store. Launched in 2013, the platform offers a broad catalogue of Spanish-language eBooks and audiobooks spanning genres such as fiction, self-help, business and technical manuals."
      challenges={[
        "Launch fully localized storefronts in Colombia and Mexico with local branding, currency and payment methods",
        "Adapt catalogues, pricing and tax rules to meet diverse regional requirements and consumer habits",
        "Build brand awareness and establish market presence in Spain's competitive European digital-reading landscape",
        "Scale operations efficiently with a single back-end managing multiple country-specific stores",
      ]}
      solution="Publica.la partnered with BajaLibros to design a multi-store architecture that supports country-specific storefronts under a unified dashboard. Each store features secure eBook and audiobook delivery, fully automated multi-currency payment processing, and flexible content management tools to adapt catalogues per market. The solution included interactive readers via Native App and web, along with Vito AI-powered recommendations for personalized reading experiences."
      results={[
        "20% growth in total revenue within the first year after launching international stores",
        "30% of all new subscriptions originated from Colombia and 25% from Mexico in 2024",
        "10,000+ app downloads in Spain during Q1 2025, establishing a European market foothold",
        "50% reduction in content-management and administrative workload thanks to unified dashboard",
        "35% increase in average session duration through AI-driven recommendations",
        "98% checkout success rate across all markets with localized payment gateways",
      ]}
      quote="Publica.la's multi-store architecture allowed us to expand internationally while maintaining operational efficiency. We now serve readers across four countries with localized experiences, all managed from a single dashboard."
      quoteName="BajaLibros Team"
      quoteRole="Digital Strategy Team"
      imageSrc="/placeholder.svg?height=600&width=800&text=BajaLibros+Multi-Store+Dashboard"
      imageAlt="BajaLibros multi-store dashboard showing Argentina, Colombia, Mexico and Spain storefronts"
    />
  )
}
