import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DetailedCaseStudy } from "@/components/detailed-case-study"

export const metadata = {
  title: "Forbes Colombia Case Study | Publica.la",
  description:
    "Discover how Forbes Colombia increased digital subscription sales by 15% and expanded their subscriber base with Publica.la's digital publishing platform.",
}

export default function ForbesColombiaPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <DetailedCaseStudy
        logoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-K1krJLrBeqxlMKETgIzySh0VMRplgy.webp"
        logoAlt="Forbes Colombia Logo"
        title="Success Story: Forbes Colombia"
        subtitle="Digital Content Management and Monetization"
        heroImageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disen%CC%83o%20sin%20ti%CC%81tulo%20%2823%29-nGfFDP1fjrcLQcjPTdbSwt6bMGHjp8.png"
        heroImageAlt="Forbes Colombia digital magazine on laptop"
        clientDescription="Forbes Colombia is a prestigious business and economics magazine that has made a significant impact on the global publishing industry. It has become a leading authority in the business and financial world. Throughout its history, Forbes Colombia has been recognized for its rigorous editorial standards and its ability to analyze and evaluate the success and influence of top companies and entrepreneurs. The magazine stands out for its comprehensive coverage of business leaders, economic trends, investment strategies, and current topics related to the corporate world. Today, Forbes Colombia remains an invaluable source of knowledge and guidance for those seeking to understand and succeed in the world of business."
        challengesList={[
          "Offering subscription plans that granted access to both the archive and new issues.",
          "Implementing an automated and efficient payment system that didn't require hours of administrative work.",
          "Finding a secure platform to publish digital content.",
          "Ultimately, they needed an all-in-one solution to effectively manage and monetize their digital content.",
        ]}
        solutionText="Forbes Colombia partnered with Publica.la to implement a comprehensive digital publishing solution that addressed their specific challenges. The platform provided them with the tools to create flexible subscription plans, secure content delivery, and an automated payment system, all while maintaining their prestigious brand identity and editorial standards."
        resultsList={[
          {
            highlight: "+15% in sales in 2022",
            text: "Significant increase in subscription sales during the first year",
          },
          {
            text: "A 15% increase in subscription sales during the first year of implementation (2022).",
          },
          {
            text: "22% of total subscription sales in 2023 came through publica.la.",
          },
          {
            text: "A significant expansion in their subscriber base.",
          },
          {
            text: "Efficient content management and effective digital monetization.",
          },
          {
            text: "Greater market presence and editorial reach.",
          },
          {
            text: "Access to detailed analytics that support strategic decision-making.",
          },
        ]}
        testimonialQuote="These numbers show the positive impact publica.la has had on our business—driving sustainable growth, increasing market share, and improving how we manage our subscriptions. We're very satisfied with the results and value our collaboration with publica.la to keep advancing in the publishing industry."
        testimonialAuthor="Edgar Gonzales"
        testimonialRole="Production Director, Forbes Colombia"
        whyChooseUsList={[
          "Focus on the reader experience through an interactive reader.",
          "Customizable content, including links, additional info, etc.",
          "Flexible subscription plans tailored to boost sales.",
          "Reliable technical support that ensured smooth implementation and operation.",
          "Enhanced reader experience through an interactive reader.",
        ]}
        additionalQuote="We're excited about the positive impact publica.la has had on our business and look forward to continued growth together with the platform."
        additionalImages={[
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disen%CC%83o%20sin%20ti%CC%81tulo%20%2825%29-DY2Yf5OETLZuhSkJvy6htRkLpGe9EU.webp",
            alt: "Forbes Colombia mobile app showing magazine issues",
          },
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disen%CC%83o%20sin%20ti%CC%81tulo%20%2824%29-WVVs049RrKoGqeHeVN1IlgYJeu8rnR.png",
            alt: "Forbes Colombia digital magazine purchase page",
          },
        ]}
      />

      <Footer />
    </main>
  )
}
