import { SectionHeader } from "@/components/ui/section-header"

export function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeader
          title="Get in Touch"
          subtitle="We're here to help you succeed"
          description="Whether you're interested in our platform, need technical support, or want to explore partnership opportunities, our team is ready to assist you."
        />
      </div>
    </section>
  )
}
