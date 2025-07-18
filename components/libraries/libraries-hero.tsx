"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"

export function LibrariesHero({ dict }: { dict: any }) {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-200 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-200 rounded-full"></div>
        </div>
      </div>
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
