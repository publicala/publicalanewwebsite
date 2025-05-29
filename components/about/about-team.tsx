import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function AboutTeam() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">The passionate people behind Publica.la</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember
            name="Alex Rodriguez"
            role="Founder & CEO"
            bio="Publishing industry veteran with 15+ years of experience. Passionate about the future of digital content."
          />
          <TeamMember
            name="Maria Chen"
            role="Chief Technology Officer"
            bio="Tech innovator with expertise in building scalable platforms. Leading our engineering team since 2016."
          />
          <TeamMember
            name="David Kim"
            role="Head of Product"
            bio="Former publisher turned product strategist. Focused on creating intuitive tools for content creators."
          />
          <TeamMember
            name="Sarah Johnson"
            role="Chief Marketing Officer"
            bio="Digital marketing expert specializing in helping publishers build their audience and brand."
          />
          <TeamMember
            name="Carlos Mendez"
            role="Customer Success Director"
            bio="Dedicated to ensuring our publishers get the most value from the Publica.la platform."
          />
          <TeamMember
            name="Emma Wilson"
            role="Head of Partnerships"
            bio="Building strategic relationships across the publishing ecosystem to create more value for our users."
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">We're growing! Interested in joining our team?</p>
          <Link href="/careers" className="text-blue-600 font-medium hover:underline text-lg">
            View open positions →
          </Link>
        </div>
      </div>
    </section>
  )
}

function TeamMember({
  name,
  role,
  bio,
}: {
  name: string
  role: string
  bio: string
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
  const colors = ["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-orange-500", "bg-pink-500", "bg-indigo-500"]
  const colorIndex = name.length % colors.length

  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="aspect-square relative flex items-center justify-center">
        <div
          className={`w-32 h-32 ${colors[colorIndex]} rounded-full flex items-center justify-center text-white text-3xl font-bold`}
        >
          {initials}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1 text-gray-900">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="flex gap-3">
          <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
