import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DetailedCaseStudy } from "@/components/detailed-case-study"

export const metadata = {
  title: "Hammurabi Publishing Case Study | Publica.la",
  description:
    "Discover how Editorial Hammurabi, a leading publisher of legal texts in Argentina, expanded their digital reach and modernized their operations with Publica.la.",
}

export default function HammurabiPublishingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <DetailedCaseStudy
        logoSrc="/placeholder.svg?height=100&width=300"
        logoAlt="Editorial Hammurabi Logo"
        title="Expanding Editorial Hammurabi's Digital Reach"
        subtitle="How a leading legal publisher in Argentina modernized their operations with digital publishing"
        heroImageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disen%CC%83o%20sin%20ti%CC%81tulo%20%2815%29-AM2SIFCXWmh7VmITCRm8rsY0Q7kdME.png"
        heroImageAlt="Hammurabi digital platform on laptop showing a legal publication"
        clientDescription="Editorial Hammurabi is a family-owned SME and a leading publisher of legal texts in Argentina. With decades of experience and a strong reputation in the legal sector, the company sought to modernize its operations and better serve an evolving audience by entering the digital publishing space."
        challengesList={[
          "Transition from traditional print to digital formats",
          "Overcome skepticism from legal professionals unfamiliar with digital reading platforms",
          "Find a reliable and scalable solution to distribute and monetize their content online",
          "Create a seamless experience for both their internal teams and their end users",
        ]}
        solutionText="Partnering with publica.la provided Hammurabi with the tools they needed to succeed in the digital space. The platform allowed them to create a branded digital content store to showcase and sell their legal publications, streamline content distribution with one-click access for users, continuously update materials to keep their audience informed with the latest legal developments, and launch a subscription-based model offering unlimited access to their full library. The option to offer free trials played a key role in building trust among legal professionals, helping them experience the benefits of digital access firsthand."
        resultsList={[
          {
            text: "A significant increase in sales and new subscribers",
          },
          {
            text: "Greater internal collaboration and efficiency in managing digital content",
          },
          {
            text: "An expanded national and international audience, thanks to the ease of access and flexibility of the platform",
          },
          {
            text: "Strengthened position as a forward-thinking legal publisher, providing professionals with instant, reliable access to high-quality legal texts",
          },
        ]}
        testimonialQuote="Publica.la has transformed how we deliver our legal content to professionals across Argentina and beyond. The platform's flexibility and ease of use have helped us overcome the initial skepticism from our traditional audience and opened new opportunities for growth."
        testimonialAuthor="Editorial Hammurabi Team"
        testimonialRole="Leadership Team, Editorial Hammurabi S.R.L."
        whyChooseUsList={[
          "Reliable support and onboarding: Close collaboration ensured a smooth transition and continuous support",
          "Agile content management: Instant updates to legal materials, keeping everything accurate and up-to-date",
          "Scalable distribution model: Their custom digital store opened new market opportunities and revenue streams",
        ]}
        additionalImages={[
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disen%CC%83o%20sin%20ti%CC%81tulo%20%2822%29-1-PTl9oSv5wlQFiijKWcR3j4xPoTlak1.webp",
            alt: "Hammurabi digital platform on mobile devices showing catalog and publication details",
          },
        ]}
      />

      <Footer />
    </main>
  )
}
