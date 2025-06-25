import { SectionHeader } from "@/components/ui/section-header"

interface ContactHeroProps {
  dict: {
    contactHero: {
      title: string
      subtitle: string
      description: string
    }
  }
}

export function ContactHero({ dict }: ContactHeroProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeader
          title={dict.contactHero.title}
          subtitle={dict.contactHero.subtitle}
        />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {dict.contactHero.description}
        </p>
      </div>
    </section>
  )
}
