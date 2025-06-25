import { Globe, Users, MapPin } from "lucide-react"

interface ContactPresenceProps {
  dict: {
    contactPresence: {
      title: string
      subtitle: string
      regions: Array<{
        name: string
        count: number
        color: string
      }>
      teamLocations: {
        title: string
        locations: Array<{
          city: string
          country: string
          region: string
          coords: {
            x: number
            y: number
          }
        }>
      }
      remoteWork: {
        title: string
        description: string
      }
    }
  }
}

export function ContactPresence({ dict }: ContactPresenceProps) {
  const teamLocations = dict.contactPresence.teamLocations.locations

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{dict.contactPresence.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dict.contactPresence.subtitle}
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-12">
          <div className="relative w-full h-96 bg-gradient-to-b from-blue-50 to-green-50 rounded-lg overflow-hidden">
            {/* Simple world map background */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 100 60" className="w-full h-full">
                {/* Simplified continent shapes */}
                <path d="M15 20 L25 15 L35 20 L40 25 L35 35 L25 40 L15 35 Z" fill="#94a3b8" />
                <path d="M45 15 L60 12 L70 18 L65 30 L55 35 L45 30 Z" fill="#94a3b8" />
                <path d="M20 45 L35 40 L40 50 L35 65 L25 70 L20 60 Z" fill="#94a3b8" />
              </svg>
            </div>

            {/* Team location markers */}
            {teamLocations.map((location, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ left: `${location.coords.x}%`, top: `${location.coords.y}%` }}
              >
                <div className="w-3 h-3 bg-primary rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                    {location.city}, {location.country}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {dict.contactPresence.regions.map((region, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
              <div className={`w-12 h-12 ${region.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{region.name}</h3>
              <p className="text-2xl font-bold text-primary mb-1">{region.count}</p>
              <p className="text-gray-600 text-sm">Cities</p>
            </div>
          ))}
        </div>

        {/* Team Locations List */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold mb-6 text-center">{dict.contactPresence.teamLocations.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamLocations.map((location, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">{location.city}</p>
                  <p className="text-sm text-gray-600">{location.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Remote Work Benefits */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">{dict.contactPresence.remoteWork.title}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {dict.contactPresence.remoteWork.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
