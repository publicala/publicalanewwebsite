import type React from "react"
import { UserCheck, Users, Cpu, Heart, Eye } from "lucide-react"

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

export function AboutValues() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-16">We believe in</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          <ValueCard
            icon={<UserCheck className="h-8 w-8" />}
            title="Autonomy with responsibility"
            description="We own our work and results, with freedom and accountability."
          />
          <ValueCard
            icon={<Users className="h-8 w-8" />}
            title="Teamwork"
            description="We grow stronger by supporting each other and working as one."
          />
          <ValueCard
            icon={<Cpu className="h-8 w-8" />}
            title="Technology & innovation"
            description="We stay curious, use smart tools, and build for real impact."
          />
          <ValueCard
            icon={<Heart className="h-8 w-8" />}
            title="Customer devotion"
            description="We put our users at the center — and aim to exceed expectations."
          />
          <ValueCard
            icon={<Eye className="h-8 w-8" />}
            title="Transparency"
            description="We believe that clear and honest communication builds trust and alignment."
          />
        </div>
      </div>
    </div>
  )
}
