"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users } from "lucide-react"

interface CareersOpeningsProps {
  dict?: any
}

export function CareersOpenings({ dict }: CareersOpeningsProps) {
  const openings = dict?.about?.careers?.openings?.jobs || []

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{dict?.about?.careers?.openings?.title || "Open Positions"}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dict?.about?.careers?.openings?.subtitle || "Join our growing team and help shape the future of digital publishing"}
          </p>
        </div>

        <div className="space-y-6">
          {openings.map((job, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </div>
                  </div>
                  <p className="text-gray-600">{job.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <Button 
                    onClick={() => {
                      const subject = (dict?.about?.careers?.openings?.emailSubject || "Application for {{position}} Position").replace('{{position}}', job.title)
                      const body = (dict?.about?.careers?.openings?.emailBody || "Hi,\n\nI'm interested in applying for the {{position}} position in the {{department}} department.\n\nPlease find my resume attached, and I look forward to hearing from you.\n\nBest regards")
                        .replace('{{position}}', job.title)
                        .replace('{{department}}', job.department)
                      window.open(`mailto:jobs@publica.la?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
                    }}
                  >
                    {dict?.about?.careers?.openings?.applyButton || "Apply Now"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">{dict?.about?.careers?.openings?.noRoleMessage || "Don't see a role that fits? We're always looking for talented people."}</p>
          <Button 
            variant="outline"
            onClick={() => {
              const subject = dict?.about?.careers?.openings?.generalEmailSubject || "General Application - Open to Opportunities"
              const body = dict?.about?.careers?.openings?.generalEmailBody || `Hi,

I don't see a specific role that matches my background right now, but I'm very interested in joining the publica.la team.

Please find my resume attached. I'd love to discuss potential opportunities that might be a good fit.

Best regards`
              window.open(`mailto:jobs@publica.la?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
            }}
          >
            {dict?.about?.careers?.openings?.sendResumeButton || "Send Us Your Resume"}
          </Button>
        </div>
      </div>
    </section>
  )
}
