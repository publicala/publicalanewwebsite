import Image from "next/image"

export function CaseStudiesHero() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/gradient-background.webp" alt="Background" fill className="object-cover" priority />
      </div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
          Success Stories from <span className="text-primary">Leading Publishers</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Discover how publishers and content creators around the world are achieving remarkable results with
          Publica.la's digital publishing platform.
        </p>
      </div>
    </section>
  )
}
