import { FileText, Users, BarChart3, Smartphone, Globe, Shield } from "lucide-react"

export function MagazinesNewspapersFeatures() {
  const features = [
    {
      icon: FileText,
      title: "Editorial Workflow",
      description: "Streamlined content editing and approval process with collaborative tools for your editorial team.",
      color: "blue",
    },
    {
      icon: Globe,
      title: "Multi-Platform Publishing",
      description: "Publish simultaneously across web, mobile apps, print, and social media from a single platform.",
      color: "green",
    },
    {
      icon: Users,
      title: "Subscriber Management",
      description: "Comprehensive subscription management with flexible pricing, access control, and reader analytics.",
      color: "purple",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time insights into article performance, reader engagement, and revenue optimization.",
      color: "orange",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive design ensures your content looks perfect on all devices and screen sizes.",
      color: "pink",
    },
    {
      icon: Shield,
      title: "Content Security",
      description:
        "Advanced DRM protection and access controls to secure your premium content and intellectual property.",
      color: "indigo",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-200",
      green: "bg-green-100 text-green-600 group-hover:bg-green-200",
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-200",
      orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-200",
      pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-200",
      indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Modern Publishing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From content management to reader engagement, our platform provides all the tools magazines and newspapers
            need to thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${getColorClasses(feature.color)}`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
