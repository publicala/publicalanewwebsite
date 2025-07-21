import { CaseStudy } from "@/components/case-study"

export function CreatorsCaseStudy() {
  return (
    <CaseStudy
      title="Creator Spotlight: Sarah Martinez"
      subtitle="How a photographer built a sustainable business selling digital content"
      overview="Sarah Martinez is a professional landscape photographer who was looking for ways to monetize her extensive portfolio beyond traditional print sales and stock photography sites that took large commissions on her work."
      challenges={[
        "Stock photography sites were taking up to 70% commission on sales",
        "Limited control over pricing and licensing terms",
        "No direct relationship with customers",
        "Difficulty standing out on crowded marketplace platforms",
      ]}
      solution="Sarah created her own digital storefront with Publica.la, offering high-resolution landscape photography with various licensing options. She organized her work into themed collections and offered both individual purchases and subscription options for commercial clients who needed regular access to new content."
      results={[
        "Increased revenue by 215% compared to stock photography platforms",
        "Built a database of over 5,000 direct customers",
        "Created a sustainable monthly income through subscription offerings",
        "Maintained full control over pricing, presentation, and licensing terms",
        "Expanded into educational content with photography tutorials and presets",
      ]}
      quote="Having my own platform has completely transformed my photography business. I'm making more money while having direct relationships with my customers, and I love the freedom to package and price my work in ways that reflect its true value."
      quoteName="Sarah Martinez"
      quoteRole="Professional Photographer"
      imageSrc=""
      imageAlt=""
      reversed={true}
    />
  )
}
