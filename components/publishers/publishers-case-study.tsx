import { CaseStudy } from "@/components/case-study"

export function PublishersCaseStudy() {
  return (
    <CaseStudy
      title="Publisher Success: Global Publishing House"
      subtitle="How a traditional publisher transformed their digital strategy"
      overview="Global Publishing House is a mid-sized publisher with a catalog of over 5,000 titles across fiction and non-fiction categories. Despite their established reputation, they were struggling to adapt to the digital publishing landscape and losing market share to more digitally-savvy competitors."
      challenges={[
        "Outdated digital distribution system with limited features",
        "High costs and technical complexity of maintaining their own platform",
        "Limited data on reader engagement and content performance",
        "Difficulty implementing flexible pricing and subscription models",
        "Increasing competition from self-publishing platforms",
      ]}
      solution="Global Publishing House migrated their entire digital catalog to Publica.la, taking advantage of the platform's comprehensive publishing tools, analytics, and monetization options. They implemented a hybrid approach with both individual book sales and a subscription service for their most popular series."
      results={[
        "Reduced technical overhead costs by 65%",
        "Increased digital revenue by 42% in the first year",
        "Gained valuable insights into reader behavior and preferences",
        "Successfully launched a subscription service with 15,000 subscribers",
        "Improved author satisfaction with better royalty reporting and payment systems",
      ]}
      quote="Publica.la has transformed our digital publishing strategy. We now have the tools and insights to compete effectively in the digital space while maintaining our editorial standards and brand identity. The platform's flexibility has allowed us to experiment with new business models that weren't possible before."
      quoteName="Sarah Johnson"
      quoteRole="Digital Director, Global Publishing House"
      imageSrc="/placeholder.svg?height=600&width=800"
      imageAlt="Global Publishing House digital platform and analytics dashboard"
    />
  )
}
