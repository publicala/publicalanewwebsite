import type React from "react"
import { Shield, Users, Lightbulb, Zap, Globe, Award } from "lucide-react"

export function AboutValues() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at Publica.la
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <ValueItem
            icon={<Innovation />}
            title="Innovation"
            description="We constantly push the boundaries of what's possible in digital publishing."
          />
          <ValueItem
            icon={<Integrity />}
            title="Integrity"
            description="We operate with transparency and honesty in all our relationships."
          />
          <ValueItem
            icon={<CustomerFocus />}
            title="Customer Focus"
            description="Our publishers' success is our success. We're dedicated to helping them thrive."
          />
          <ValueItem
            icon={<Excellence />}
            title="Excellence"
            description="We strive for the highest quality in our platform, service, and support."
          />
          <ValueItem
            icon={<Inclusivity />}
            title="Inclusivity"
            description="We believe in making publishing accessible to creators from all backgrounds."
          />
          <ValueItem
            icon={<Sustainability />}
            title="Sustainability"
            description="We're committed to the long-term success of the publishing industry."
          />
        </div>
      </div>
    </section>
  )
}

function ValueItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function Innovation() {
  return <Lightbulb className="h-6 w-6" />
}

function Integrity() {
  return <Shield className="h-6 w-6" />
}

function CustomerFocus() {
  return <Users className="h-6 w-6" />
}

function Excellence() {
  return <Award className="h-6 w-6" />
}

function Inclusivity() {
  return <Globe className="h-6 w-6" />
}

function Sustainability() {
  return <Zap className="h-6 w-6" />
}
