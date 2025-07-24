import Link from "next/link"
import Image from "next/image"

interface AboutTeamProps {
  locale?: string
  dict: {
    aboutTeam: {
      title: string
      founders: {
        title: string
        franco: {
          name: string
          role: string
        }
        pablo: {
          name: string
          role: string
        }
        imageAlt: string
      }
      team: {
        title: string
        description: string
      }
      careers: {
        description: string
        linkText: string
      }
    }
  }
}

export function AboutTeam({ dict, locale }: AboutTeamProps) {
  const getLocalizedHref = (href: string) => {
    if (href.startsWith('/')) {
      return `/${locale}${href}`
    }
    return href
  }
  
  const teamImages = [
    { src: "/images/team/team-dinner-1.webp", alt: "Publica.la team dinner" },
    { src: "/images/team/team-gathering-1.webp", alt: "Publica.la team gathering" },
    { src: "/images/team/team-virtual-meeting.webp", alt: "Publica.la team virtual meeting" },
    { src: "/images/team/team-dinner-2.webp", alt: "Publica.la team at a restaurant" },
    { src: "/images/team/team-dinner-3.webp", alt: "Another Publica.la team dinner" },
    { src: "/images/team/founders-pablo-franco.webp", alt: "Publica.la founders at a conference" },
  ]

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{dict.aboutTeam.title}</h2>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">{dict.aboutTeam.founders.title}</h3>
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="relative w-full h-96 md:h-[480px] mb-6 rounded-md overflow-hidden">
              <Image
                src="/images/team/founders-at-booth.webp"
                alt={dict.aboutTeam.founders.imageAlt}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xl font-medium text-gray-800">{dict.aboutTeam.founders.franco.name}</p>
                <p className="text-md text-gray-500">{dict.aboutTeam.founders.franco.role}</p>
              </div>
              <div>
                <p className="text-xl font-medium text-gray-800">{dict.aboutTeam.founders.pablo.name}</p>
                <p className="text-md text-gray-500">{dict.aboutTeam.founders.pablo.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">{dict.aboutTeam.team.title}</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {dict.aboutTeam.team.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-xl text-gray-600 mb-6">
            {dict.aboutTeam.careers.description}
          </p>
          <Link href={getLocalizedHref("/careers")} className="text-blue-600 font-medium hover:underline text-lg">
            {dict.aboutTeam.careers.linkText} →
          </Link>
        </div>
      </div>
    </section>
  )
}
