export function CaseStudiesHero() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-blue-50 to-purple-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-200 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-100 rounded-full"></div>
        </div>
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
