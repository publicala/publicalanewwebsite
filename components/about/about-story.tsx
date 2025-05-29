import Image from "next/image"

export function AboutStory() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/step-back-leap.png"
                alt="Publica.la at a publishing event"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full z-0"></div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                In 2016, we noticed the need for a platform that would enable publishers, authors, and newspapers to
                sell their content directly without intermediaries. That's when we created publica.la, a revolutionary
                platform to drive the publishing and media industry forward.
              </p>
              <p>
                Founded by a team of publishing industry veterans and technology experts, Publica.la was born out of the
                recognition that traditional publishing models were being disrupted, yet the available digital solutions
                weren't adequately serving publishers' needs.
              </p>
              <p>
                We set out to build a platform that would empower publishers of all sizes to take control of their
                digital content, connect directly with their audiences, and maximize their revenue potential in an
                increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
