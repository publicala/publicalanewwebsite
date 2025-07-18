"use client"

import { CalendlyButton } from "@/components/calendly-button"

export function CreatorsHero({ dict }: { dict: any }) {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              {dict.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900" dangerouslySetInnerHTML={{ __html: dict.title.replace("<1>", '<span class="text-primary">').replace("</1>", "</span>") }} />
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
              {dict.subtitle}
            </p>
            <div className="mt-8">
              <CalendlyButton
                size="lg"
                className="rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                showArrow={true}
              >
                {dict.getStarted}
              </CalendlyButton>
            </div>
          </div>

          <div className="relative">
            {/* YouTube Video Embed */}
            <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/ULZaZTvsUQs"
                  title={dict.videoTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
