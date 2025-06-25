import type React from "react"
import { UserCheck, Users, Cpu, Heart, Eye } from "lucide-react"

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

interface AboutValuesProps {
  dict: {
    aboutValues: {
      title: string
      values: Array<{
        title: string
        description: string
      }>
    }
  }
}

export function AboutValues({ dict }: AboutValuesProps) {
  const icons = [UserCheck, Users, Cpu, Heart, Eye]

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-16">{dict.aboutValues.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {dict.aboutValues.values.map((value, index) => {
            const IconComponent = icons[index]
            return (
              <ValueCard
                key={index}
                icon={<IconComponent className="h-8 w-8" />}
                title={value.title}
                description={value.description}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
