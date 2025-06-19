import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoadingSkeleton } from "@/components/ui/loading-skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <LoadingSkeleton className="h-16 w-96 mx-auto mb-6" />
            <LoadingSkeleton className="h-6 w-2/3 mx-auto mb-8" />
            <div className="flex justify-center gap-8">
              <LoadingSkeleton className="h-32 w-48" />
              <LoadingSkeleton className="h-32 w-48" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <LoadingSkeleton className="h-12 w-96 mx-auto mb-16" />
          <div className="grid md:grid-cols-2 gap-12">
            <LoadingSkeleton className="h-64" />
            <LoadingSkeleton className="h-64" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
