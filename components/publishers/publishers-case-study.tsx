import { CaseStudy } from "@/components/case-study"

export function PublishersCaseStudy({ dict }: { dict: any }) {
  return (
    <CaseStudy
      title={dict.title}
      subtitle={dict.subtitle}
      overview={dict.overview}
      challenges={dict.challenges}
      solution={dict.solution}
      results={dict.results}
      quote={dict.quote}
      quoteName={dict.quoteName}
      quoteRole={dict.quoteRole}
      imageSrc="/placeholder.svg?height=600&width=800"
      imageAlt={dict.imageAlt}
    />
  )
}
