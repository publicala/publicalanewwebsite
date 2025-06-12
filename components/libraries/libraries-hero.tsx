import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Globe } from "lucide-react"

export function LibrariesHero() {
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
              Solutions for Libraries
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Modernize Your Library with <span className="text-primary">Digital Collections</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
              Transform your library into a digital hub. Provide 24/7 access to ebooks, audiobooks, and digital
              resources while building stronger community connections.
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
            <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 p-6">
              {/* Library Management Dashboard Mockup */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <h3 className="font-semibold text-gray-900">Library Dashboard</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <BookOpen className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-blue-900">12,450</div>
                    <div className="text-xs text-blue-600">Digital Items</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <Users className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-green-900">3,280</div>
                    <div className="text-xs text-green-600">Active Patrons</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                    <Globe className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-purple-900">24/7</div>
                    <div className="text-xs text-purple-600">Access</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700">Recent Activity</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Digital checkouts today</span>
                      <span className="font-medium">847</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
