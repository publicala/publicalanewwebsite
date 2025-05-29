"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PublishersHero() {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Solutions for Publishers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Transform Your <span className="text-primary">Publishing</span> Business
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
              Empower your publishing strategy with our comprehensive digital platform designed to help you create,
              distribute, and monetize content effectively.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-md font-medium">
                <Link href="/get-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-md font-medium">
                <Link href="/schedule-demo">Request a Demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Replace image with visual dashboard mockup */}
            <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-20 h-2 bg-gray-200 rounded"></div>
                  <div className="w-10 h-2 bg-primary/30 rounded"></div>
                </div>
              </div>

              {/* Dashboard header */}
              <div className="mb-4">
                <div className="w-40 h-6 bg-gray-800 rounded mb-2"></div>
                <div className="flex space-x-2">
                  <div className="w-20 h-4 bg-gray-200 rounded"></div>
                  <div className="w-20 h-4 bg-gray-200 rounded"></div>
                  <div className="w-20 h-4 bg-primary/20 rounded"></div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="h-24 bg-gray-100 rounded p-3">
                  <div className="w-full h-4 bg-primary/30 rounded mb-2"></div>
                  <div className="w-3/4 h-8 bg-gray-800 rounded mb-2"></div>
                  <div className="w-1/2 h-3 bg-gray-300 rounded"></div>
                </div>
                <div className="h-24 bg-gray-100 rounded p-3">
                  <div className="w-full h-4 bg-primary/30 rounded mb-2"></div>
                  <div className="w-1/2 h-8 bg-gray-800 rounded mb-2"></div>
                  <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
                </div>
              </div>

              {/* Chart visualization */}
              <div className="h-32 bg-gray-100 rounded p-3 mb-4">
                <div className="w-1/4 h-4 bg-gray-300 rounded mb-2"></div>
                <div className="flex items-end justify-between h-16 pt-2">
                  <div className="w-[8%] h-[30%] bg-primary/40 rounded-t"></div>
                  <div className="w-[8%] h-[60%] bg-primary/60 rounded-t"></div>
                  <div className="w-[8%] h-[40%] bg-primary/50 rounded-t"></div>
                  <div className="w-[8%] h-[80%] bg-primary/70 rounded-t"></div>
                  <div className="w-[8%] h-[50%] bg-primary/50 rounded-t"></div>
                  <div className="w-[8%] h-[70%] bg-primary/60 rounded-t"></div>
                  <div className="w-[8%] h-[90%] bg-primary/80 rounded-t"></div>
                  <div className="w-[8%] h-[60%] bg-primary/60 rounded-t"></div>
                </div>
              </div>

              {/* Bottom controls */}
              <div className="flex justify-between">
                <div className="w-24 h-8 bg-primary rounded"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
