import Link from "next/link"

export function AboutTeam() {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet the people behind the platform</h2>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Founders</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <FounderCard name="Pablo Laurino" />
            <FounderCard name="Franco Gilio" />
          </div>
        </div>
        <div className="mb-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">And our passionate team</h3>
          <p className="text-lg text-gray-600">
            Dedicated individuals working together to shape the future of digital publishing.
          </p>
        </div>

        <div className="mt-16 text-center">
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

function FounderCard({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
  const colors = ["bg-blue-500", "bg-purple-500"] // Simpler colors for two founders
  const colorIndex = name.length % colors.length // Basic way to alternate

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div
        className={`w-24 h-24 ${colors[colorIndex]} rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4`}
      >
        {initials}
      </div>
      <h4 className="text-xl font-bold text-gray-900">{name}</h4>
    </div>
  )
}
