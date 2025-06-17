import { Users, Award, Building2 } from "lucide-react"
import Image from "next/image"

export function MagazinesNewspapersCaseStudy() {
  const caseStudies = [
    {
      name: "Revista Barcelona",
      logo: "/placeholder.svg?height=60&width=120&text=Barcelona",
      description:
        "Revista Barcelona is a bi-weekly Argentine publication that adopts a newspaper format and stands out for its satirical approach to journalism.",
      industry: "Satirical Journalism",
      results: {
        readers: "+180%",
        revenue: "+65%",
        reach: "Global",
      },
    },
    {
      name: "Forbes Colombia",
      logo: "/images/logos/forbes.png",
      description:
        "Forbes Colombia is a prestigious international and local magazine specializing in business, economics, finance, and lifestyle in Colombia.",
      industry: "Business & Finance",
      results: {
        readers: "+220%",
        revenue: "+85%",
        reach: "LATAM",
      },
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            <Award className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading magazines and newspapers have transformed their digital presence and expanded their reach
            with publica.la.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={study.logo || "/placeholder.svg"}
                    alt={`${study.name} logo`}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{study.name}</h3>
                  <p className="text-gray-600">{study.industry}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{study.description}</p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-lg font-bold text-green-900">{study.results.readers}</div>
                  <div className="text-xs text-green-600">More Readers</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-lg font-bold text-blue-900">{study.results.revenue}</div>
                  <div className="text-xs text-blue-600">Revenue Growth</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-lg font-bold text-purple-900">{study.results.reach}</div>
                  <div className="text-xs text-purple-600">Reach</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community stats */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Join a Formidable Community</h3>
            <p className="text-gray-600">Be part of the digital transformation in publishing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">400+</div>
              <div className="text-gray-600">Customers</div>
              <div className="text-sm text-gray-500 mt-1">Publishers worldwide</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2M+</div>
              <div className="text-gray-600">Users</div>
              <div className="text-sm text-gray-500 mt-1">Active readers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1.8M+</div>
              <div className="text-gray-600">Titles</div>
              <div className="text-sm text-gray-500 mt-1">Digital publications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
