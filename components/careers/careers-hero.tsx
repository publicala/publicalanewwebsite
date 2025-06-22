import { SectionHeader } from "@/components/ui/section-header"

export function CareersHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeader
          title="Join Our Mission"
          subtitle="Help us transform the future of digital publishing"
          description="We're building the most robust digital content platform for publishers worldwide. Join our passionate team and make an impact on how content is created, distributed, and consumed globally."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">400+</div>
            <div className="text-gray-600">Publishers Trust Us</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">45+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2M+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
        </div>
      </div>
    </section>
  )
}
