import { Mail, Phone, Clock } from "lucide-react"

interface ContactInfoProps {
  dict: {
    contactInfo: {
      title: string
      methods: Array<{
        title: string
        details: string[]
        description: string
      }>
      urgentHelp: {
        title: string
        description: string
        prioritySupport: string
        liveChat: string
      }
    }
  }
}

export function ContactInfo({ dict }: ContactInfoProps) {
  const icons = [Mail, Phone, Clock]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{dict.contactInfo.title}</h2>
      <div className="space-y-8">
        {dict.contactInfo.methods.map((method, index) => {
          const IconComponent = icons[index]
          return (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                <IconComponent className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                {method.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-900 mb-1">
                    {detail}
                  </p>
                ))}
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">{dict.contactInfo.urgentHelp.title}</h3>
        <p className="text-gray-600 mb-4">
          {dict.contactInfo.urgentHelp.description}
        </p>
        <div className="flex gap-3">
          <button className="text-primary hover:text-primary/80 font-medium">
            {dict.contactInfo.urgentHelp.prioritySupport} →
          </button>
          <button className="text-primary hover:text-primary/80 font-medium">
            {dict.contactInfo.urgentHelp.liveChat} →
          </button>
        </div>
      </div>
    </div>
  )
}
