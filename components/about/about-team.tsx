import Link from "next/link"
import Image from "next/image"

export function AboutTeam() {
  const teamImages = [
    { src: "/images/team/team-dinner-1.jpg", alt: "Publica.la team dinner" },
    { src: "/images/team/team-gathering-1.jpg", alt: "Publica.la team gathering" },
    { src: "/images/team/team-virtual-meeting.jpg", alt: "Publica.la team virtual meeting" },
    { src: "/images/team/team-dinner-2.jpg", alt: "Publica.la team at a restaurant" },
    { src: "/images/team/team-dinner-3.jpg", alt: "Another Publica.la team dinner" },
  ]

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet the people behind the platform</h2>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">Our Founders</h3>
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="relative w-full h-64 md:h-80 mb-6 rounded-md overflow-hidden">
              <Image
                src="/images/team/founders-pablo-franco.jpg"
                alt="Founders Pablo Laurino and Franco Gilio"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-xl font-medium text-gray-700">Pablo Laurino</p>
              <p className="text-xl font-medium text-gray-700">Franco Gilio</p>
            </div>
          </div>
        </div>

        <div className="mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">And our passionate team</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Dedicated individuals working together to shape the future of digital publishing. Here are a few moments
            with our amazing team.
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
            We’re always looking for curious minds who love building useful things and want to shape the future of
            digital publishing.
          </p>
          <Link href="/careers" className="text-blue-600 font-medium hover:underline text-lg">
            View open positions →
          </Link>
        </div>
      </div>
    </section>
  )
}
