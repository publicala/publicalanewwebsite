"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users } from "lucide-react"
import Link from "next/link"

/**
 * CAREERS OPENINGS COMPONENT - ENGLISH ONLY
 *
 * This component displays job openings and is hardcoded in English.
 * Job descriptions, requirements, and application processes are consistent
 * for all candidates regardless of their browser locale.
 */

interface JobOpening {
  title: string
  department: string
  location: string
  type: string
  description: string
  detailsUrl?: string
}

export function CareersOpenings() {
  // Hardcoded job openings in English - consistent for all users
  const openings: JobOpening[] = [
    {
      title: "Full Stack Developer (TypeScript & Mobile)",
      department: "Product Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build mobile and web apps with React Native, TypeScript, and modern frontend technologies. Ship features end-to-end while sharing code across our React, Vue, and React Native applications.",
      detailsUrl: "/en/careers/full-stack-developer-typescript-mobile"
    },
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / Santiago, Chile",
      type: "Full-time",
      description: "Join our frontend team to build beautiful, responsive interfaces for our digital publishing platform using React, TypeScript, and modern web technologies."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Santiago, Chile",
      type: "Full-time",
      description: "Lead product strategy and roadmap for our core publishing platform, working closely with engineering and design teams to deliver exceptional user experiences."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / Mexico City, Mexico",
      type: "Full-time",
      description: "Help our publisher customers succeed by providing strategic guidance, technical support, and ensuring they maximize value from our platform."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Santiago, Chile",
      type: "Full-time",
      description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems to ensure our platform scales reliably for millions of users."
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our growing team and help shape the future of digital publishing
          </p>
        </div>

        <div className="space-y-6">
          {openings.length > 0 ? openings.map((job, index) => (
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
                  {job.detailsUrl ? (
                    <Link href={job.detailsUrl} aria-label={`View details for ${job.title} position`}>
                      <Button>
                        View Details
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      onClick={() => {
                        const subject = `Application for ${job.title} Position`
                        const body = `Hi,

I'm interested in applying for the ${job.title} position in the ${job.department} department.

Please find my resume attached, and I look forward to hearing from you.

Best regards`
                        window.open(`mailto:jobs@publica.la?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
                      }}
                      aria-label={`Apply for ${job.title} position`}
                    >
                      Apply Now
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No job openings found. Please check the data structure.</p>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Don't see a role that fits? We're always looking for talented people.</p>
          <Button 
            variant="outline"
            onClick={() => {
              const subject = "General Application - Open to Opportunities"
              const body = `Hi,

I don't see a specific role that matches my background right now, but I'm very interested in joining the publica.la team.

Please find my resume attached. I'd love to discuss potential opportunities that might be a good fit.

Best regards`
              window.open(`mailto:jobs@publica.la?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
            }}
          >
            Send Us Your Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
