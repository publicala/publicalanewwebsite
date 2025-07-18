"use client"

import { CalendlyButton } from "@/components/calendly-button"

interface AboutHeroProps {
  dict: {
    aboutHero: {
      title: string
      description: string
      getStartedButton: string
      scheduleDemoButton: string
    }
  }
}

export function AboutHero({ dict }: AboutHeroProps) {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-200 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-blue-300 rounded-full"></div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 text-center mb-12">
          {dict.aboutHero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto text-center">
          {dict.aboutHero.description}
        </p>
        <div className="flex justify-center">
          <CalendlyButton
            size="lg"
            className="rounded-md font-medium bg-blue-600 hover:bg-blue-700 text-white px-8 py-6"
          >
            {dict.aboutHero.getStartedButton}
          </CalendlyButton>
        </div>
      </div>
    </section>
  )
}
