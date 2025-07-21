import { Button } from "@/components/ui/button"
import { Mail, FileText, Users } from "lucide-react"

interface CareersApplicationProps {
  dict?: any
}

export function CareersApplication({ dict }: CareersApplicationProps) {
  const steps = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Apply Online",
      description: "Submit your application with your resume and cover letter",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Initial Interview",
      description: "Meet with our hiring team to discuss your background and interests",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Technical Assessment",
      description: "Complete a role-specific assessment or technical challenge",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Final Interview",
      description: "Meet with team members and leadership for final evaluation",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Application Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hiring process is designed to be transparent and give you the best opportunity to showcase your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Us?</h3>
          <p className="text-gray-600 mb-6">
            Have questions about our open positions or want to learn more about working at publica.la?
          </p>
          <Button 
            size="lg"
            onClick={() => {
              const subject = "Inquiry About Career Opportunities"
              const body = `Hi,

I have questions about your open positions and would like to learn more about working at publica.la.

I'd appreciate the opportunity to discuss potential career opportunities with your team.

Best regards`
              window.open(`mailto:jobs@publica.la?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
            }}
          >
            <Mail className="h-4 w-4 mr-2" />
            Contact Our HR Team
          </Button>
        </div>
      </div>
    </section>
  )
}
