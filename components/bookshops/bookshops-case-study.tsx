import { CaseStudy } from "@/components/case-study"

export function BookshopsCaseStudy() {
  return (
    <CaseStudy
      title="Success Story: Lighthouse Books"
      subtitle="How an independent bookshop expanded their reach with digital offerings"
      overview="Lighthouse Books is a beloved independent bookshop in Portland, Oregon, known for its carefully curated selection and community events. Founded in 2010, they faced increasing competition from large online retailers and needed to adapt to changing reader habits."
      challenges={[
        "Declining foot traffic and sales due to competition from online retailers",
        "Limited physical shelf space for inventory expansion",
        "Customers requesting digital versions of books they carried",
        "Need to reach customers beyond their local area",
      ]}
      solution="Lighthouse Books partnered with Publica.la to create a branded digital bookstore that complemented their physical location. They curated a selection of ebooks and audiobooks that reflected their unique taste and expertise, focusing on local authors and niche genres that were popular with their customer base."
      results={[
        "30% increase in overall revenue within the first year",
        "Expanded customer base to readers across the country",
        "Created a new revenue stream with zero inventory costs",
        "Strengthened relationships with local authors by offering digital publishing options",
        "Integrated physical and digital sales for a unified customer experience",
      ]}
      quote="Publica.la allowed us to maintain our identity as a curated, independent bookshop while expanding into the digital realm. Our customers love being able to support us directly when purchasing ebooks, and we've reached readers we never could have with just our physical store."
      quoteName="Emily Chen"
      quoteRole="Owner, Lighthouse Books"
      imageSrc="/placeholder.svg?height=600&width=800"
      imageAlt="Lighthouse Books storefront and digital bookstore"
    />
  )
}
