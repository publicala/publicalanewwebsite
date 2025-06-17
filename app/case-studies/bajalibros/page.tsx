import { DetailedCaseStudy } from "@/components/detailed-case-study"

export default function BajaLibrosCaseStudy() {
  return (
    <DetailedCaseStudy
      logoAlt="BajaLibros Logo"
      title="BajaLibros"
      subtitle="Expanding Digital Library Across Borders"
      heroImageAlt="BajaLibros Platform Screenshot"
      clientDescription="BajaLibros is a digital library platform that centralizes your content in one place and lets you take your reading anywhere with its mobile app and online store ar.bajalibros.com. Launched in 2013, the platform offers a broad catalogue of Spanish-language eBooks and audiobooks spanning genres such as fiction, self-help, business and technical manuals."
      challengesList={[
        "Launch fully localized storefronts in Colombia and Mexico, each with its own branding, currency and payment methods.",
        "Tailor catalogues, pricing and tax rules to meet local regulations and consumer habits.",
        "Establish a strong market presence and user trust in a competitive European digital-reading landscape.",
        "Implement a single back-end that could manage multiple country-specific stores without multiplying administrative overhead.",
      ]}
      solutionText="Publica.la partnered with BajaLibros to design a multi-store architecture that supports country-specific storefronts under a unified dashboard. Each store features secure eBook and audiobook delivery, fully automated, multi-currency payment processing and flexible content management tools to adapt catalogues per market. Leveraging Publica.la's Global Sales infrastructure, BajaLibros was able to reach readers worldwide with local payment methods like credit cards, PayPal and bank transfers. To drive user engagement, the solution included Publica.la's interactive reader via Native App and web, along with Vito AI–powered recommendations that personalize the reading experience. A subscription-and-trial model—supported alongside retail and library licensing—helped BajaLibros convert new users rapidly, while real-time analytics enabled data-driven decisions for marketing and content strategy."
      resultsList={[
        {
          highlight: "+20%",
          text: "growth in total revenue within the first year after launching international stores",
        },
        {
          highlight: "30%",
          text: "of all new subscriptions originated from Colombia in 2024",
        },
        {
          highlight: "25%",
          text: "of all new subscriptions originated from Mexico in 2024",
        },
        {
          highlight: "10,000+",
          text: "app downloads in Spain during Q1 2025, establishing a foothold in the European market",
        },
        {
          highlight: "50%",
          text: "reduction in content-management and administrative workload thanks to the unified dashboard",
        },
        {
          highlight: "35%",
          text: "increase in average session duration through AI-driven recommendations",
        },
      ]}
      testimonialQuote="Publica.la's multi-store architecture allowed us to expand internationally while maintaining operational efficiency. The unified dashboard and localized payment solutions were game-changers for our growth strategy."
      testimonialAuthor="BajaLibros Team"
      testimonialRole="Digital Strategy"
      whyChooseUsList={[
        "Multi-store architecture with unified management dashboard",
        "Localized payment processing for each market",
        "Interactive reading experience across web and mobile",
        "AI-powered recommendations to increase engagement",
        "Flexible business models including subscriptions and retail",
        "Comprehensive analytics for data-driven decisions",
      ]}
      additionalQuote="The ability to manage multiple country-specific stores from a single dashboard while offering localized experiences has been transformative for our international expansion strategy."
    />
  )
}
