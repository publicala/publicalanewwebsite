import { FileText, Globe, Smartphone, BarChart3, DollarSign, Zap } from "lucide-react"

export function MagazinesNewspapersFeatures() {
  const features = [
    {
      icon: FileText,
      title: "Digital ePaper Creation",
      description:
        "Transform your printed magazine or newspaper into an exact digital replica with all original formatting preserved.",
      color: "blue",
    },
    {
      icon: Smartphone,
      title: "Mobile-Ready Experience",
      description:
        "Your ePaper automatically adapts to all devices with Smart Zoom technology for optimal reading on any screen.",
      color: "green",
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description:
        "Reach subscribers worldwide without geographical limits. Secure connections to your audience anywhere.",
      color: "purple",
    },
    {
      icon: DollarSign,
      title: "Revenue Expansion",
      description:
        "Maximize revenue by reaching more people with your ePaper content and flexible subscription models.",
      color: "orange",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Access comprehensive analytics of your store performance and understand your readers' behavior patterns.",
      color: "pink",
    },
    {
      icon: Zap,
      title: "Marketplace Integration",
      description:
        "Add your catalog to publica.la's marketplace so other publishers can promote and sell your publications.",
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
            Everything You Need for Digital Publishing Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With publica.la, magazines and newspapers gain more readers by transforming their printed editions into
            engaging digital ePapers.
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
