import { LoadingSkeleton } from "@/components/ui/loading-skeleton"

export default function CareersLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 bg-gray-100 animate-pulse" />
      <main>
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <LoadingSkeleton className="h-12 w-96 mx-auto mb-6" />
            <LoadingSkeleton className="h-6 w-[600px] mx-auto mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="text-center">
                  <LoadingSkeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
                  <LoadingSkeleton className="h-6 w-32 mx-auto mb-2" />
                  <LoadingSkeleton className="h-4 w-48 mx-auto" />
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border rounded-lg p-6">
                  <LoadingSkeleton className="h-6 w-48 mb-2" />
                  <LoadingSkeleton className="h-4 w-32 mb-4" />
                  <LoadingSkeleton className="h-4 w-full mb-2" />
                  <LoadingSkeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="h-96 bg-gray-100 animate-pulse" />
    </div>
  )
}
