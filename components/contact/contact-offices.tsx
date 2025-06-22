import { MapPin, Users, Globe } from "lucide-react"

export function ContactOffices() {
  const offices = [
    {
      city: "Santiago",
      country: "Chile",
      address: "Av. Providencia 1234, Providencia",
      description: "Our headquarters and main development center",
      team: "25+ team members",
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      city: "Mexico City",
      country: "Mexico",
      address: "Polanco, Miguel Hidalgo",
      description: "Regional office serving Latin American markets",
      team: "15+ team members",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      city: "Remote",
      country: "Global",
      address: "Distributed team worldwide",
      description: "Remote team members across multiple time zones",
      team: "30+ team members",
      icon: <Users className="h-6 w-6" />,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Offices</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have offices and team members around the world to better serve our global customer base
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                  {office.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{office.city}</h3>
                  <p className="text-gray-600">{office.country}</p>
                </div>
              </div>

              <p className="text-gray-900 mb-2">{office.address}</p>
              <p className="text-gray-600 text-sm mb-3">{office.description}</p>
              <p className="text-primary font-medium text-sm">{office.team}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
