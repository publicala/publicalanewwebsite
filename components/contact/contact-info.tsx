import { Mail, Phone, Clock } from "lucide-react"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Us",
      details: ["hello@publica.la", "support@publica.la"],
      description: "We typically respond within 24 hours",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567"],
      description: "Global support line - Monday to Friday, 9 AM - 6 PM EST",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9 AM - 6 PM EST", "24/7 Priority Support Available"],
      description: "We work across multiple time zones",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      <div className="space-y-8">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
              {method.icon}
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
        ))}
      </div>

      <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">Need Immediate Help?</h3>
        <p className="text-gray-600 mb-4">
          For urgent technical issues or critical support needs, please use our priority support channel.
        </p>
        <div className="flex gap-3">
          <button className="text-primary hover:text-primary/80 font-medium">Priority Support →</button>
          <button className="text-primary hover:text-primary/80 font-medium">Live Chat →</button>
        </div>
      </div>
    </div>
  )
}
