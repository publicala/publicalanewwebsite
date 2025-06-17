import { DetailedCaseStudy } from "@/components/detailed-case-study"

export default function AntarticaLibreriaCaseStudy() {
  return (
    <DetailedCaseStudy
      logoAlt="Antártica Librería Logo"
      title="Antártica Librería"
      subtitle="Transforming Chile's Largest Bookstore Chain"
      heroImageAlt="Antártica Librería Digital Platform"
      clientDescription="Antártica Librería is Chile's oldest and largest bookstore chain. Founded originally as an importer and distributor in 1958 and opening its first retail store in 1981, today it operates 31 physical locations (21 in Santiago and 10 in regional centers) alongside a digital storefront for eBooks and audiobooks at ebooks.antartica.cl/library."
      challengesList={[
        "Leverage a network of 31 brick-and-mortar stores without diluting Antártica's trusted brand identity.",
        "Attract both traditional readers and digital natives by offering eBooks, audiobooks and more in a single platform.",
        "Implement a unified back-end capable of handling uploads, metadata, DRM and catalog updates across formats.",
        "Ensure smooth discovery, purchase and consumption via web and native mobile apps, matching customer expectations for modern digital services.",
      ]}
      solutionText="Publica.la partnered with Antártica Librería to launch a rich digital store integrated into their existing infrastructure. The implementation included comprehensive content management with bulk upload of EPUB, PDF and audio files, metadata handling and ONIX support. The solution provided secure delivery & payments with industry-grade DRM, SSL-protected checkouts and automated, multi-currency payment processing. Users enjoy an engaging reader experience through embedded web reader and native mobile apps with offline sync, bookmarks and Vito AI–driven recommendations. The platform delivers real-time analytics dashboards for sales, user engagement and geographic insights, enabling data-driven marketing and inventory decisions."
      resultsList={[
        {
          highlight: "30%",
          text: "increase in digital content revenue within 12 months of launch",
        },
        {
          highlight: "15%",
          text: "lift in conversion rate on the digital storefront",
        },
        {
          highlight: "5,000+",
          text: "native app downloads in the first quarter",
        },
        {
          highlight: "50%",
          text: "reduction in content-publishing cycle time thanks to automated workflows",
        },
        {
          highlight: "80%",
          text: "user satisfaction rating in post-launch surveys",
        },
      ]}
      testimonialQuote="Publica.la's platform allowed us to transition effortlessly into the digital market. We now manage our entire catalog from one console, reach new audiences, and offer our customers a modern reading experience without compromising our heritage."
      testimonialAuthor="The Antártica Librería Team"
      testimonialRole="Digital Transformation"
      whyChooseUsList={[
        "Scalable Multi-Format Management: One dashboard for all digital assets",
        "Localized Payments: Support for Chilean pesos and regional payment methods",
        "Interactive Web & Mobile Readers: Seamless reading experiences on any device",
        "AI-Powered Personalization: Boost engagement with smart recommendations",
        "Dedicated Onboarding & Support: Expert guidance through every step",
      ]}
    />
  )
}
