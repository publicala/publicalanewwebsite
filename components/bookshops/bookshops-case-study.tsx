import { CaseStudy } from "@/components/case-study"

export function BookshopsCaseStudy({ dict }: { dict: any }) {
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
      imageSrc=""
      imageAlt={dict.imageAlt}
    />
  )
}
