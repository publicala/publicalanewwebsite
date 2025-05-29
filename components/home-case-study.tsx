import { CaseStudy } from "@/components/case-study"

export function HomeCaseStudy() {
  return (
    <CaseStudy
      title="Featured Success Story: Editorial Hammurabi"
      subtitle="How a leading legal publisher in Argentina expanded their digital reach"
      overview="Editorial Hammurabi is a family-owned SME and a leading publisher of legal texts in Argentina. With decades of experience and a strong reputation in the legal sector, the company sought to modernize its operations and better serve an evolving audience by entering the digital publishing space."
      challenges={[
        "Transition from traditional print to digital formats",
        "Overcome skepticism from legal professionals unfamiliar with digital reading platforms",
        "Find a reliable and scalable solution to distribute and monetize their content online",
        "Create a seamless experience for both their internal teams and their end users",
      ]}
      solution="Partnering with Publica.la provided Hammurabi with the tools they needed to succeed in the digital space. The platform allowed them to create a branded digital content store to showcase and sell their legal publications, streamline content distribution with one-click access for users, continuously update materials to keep their audience informed with the latest legal developments, and launch a subscription-based model offering unlimited access to their full library."
      results={[
        "A significant increase in sales and new subscribers",
        "Greater internal collaboration and efficiency in managing digital content",
        "An expanded national and international audience, thanks to the ease of access and flexibility of the platform",
        "Strengthened position as a forward-thinking legal publisher, providing professionals with instant, reliable access to high-quality legal texts",
      ]}
      quote="Publica.la has transformed how we deliver our legal content to professionals across Argentina and beyond. The platform's flexibility and ease of use have helped us overcome the initial skepticism from our traditional audience and opened new opportunities for growth."
      quoteName="Editorial Hammurabi Team"
      quoteRole="Leadership Team, Editorial Hammurabi S.R.L."
      imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disen%CC%83o%20sin%20ti%CC%81tulo%20%2815%29-AM2SIFCXWmh7VmITCRm8rsY0Q7kdME.png"
      imageAlt="Hammurabi digital platform on laptop showing a legal publication"
      reversed={true}
    />
  )
}
