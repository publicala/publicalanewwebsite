import { Heart, Users, Zap, Globe } from "lucide-react"

export function CareersValues() {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion for Publishing",
      description: "We're genuinely passionate about empowering publishers and content creators worldwide.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Culture",
      description: "We believe the best solutions come from diverse perspectives working together.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation First",
      description: "We're constantly pushing boundaries to create cutting-edge publishing technology.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "Our work reaches millions of readers across 45+ countries every day.",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core values guide everything we do and shape our company culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
