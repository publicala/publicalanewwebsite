import { LoadingSkeleton } from "@/components/ui/loading-skeleton"

export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-16 bg-gray-100 animate-pulse" />
      <main>
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <LoadingSkeleton className="h-12 w-96 mx-auto mb-6" />
            <LoadingSkeleton className="h-6 w-[600px] mx-auto mb-12" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                <LoadingSkeleton className="h-10 w-full" />
                <LoadingSkeleton className="h-10 w-full" />
                <LoadingSkeleton className="h-32 w-full" />
                <LoadingSkeleton className="h-12 w-32" />
              </div>

              <div className="space-y-8">
                <div>
                  <LoadingSkeleton className="h-6 w-32 mb-4" />
                  <LoadingSkeleton className="h-4 w-48 mb-2" />
                  <LoadingSkeleton className="h-4 w-40" />
                </div>
                <div>
                  <LoadingSkeleton className="h-6 w-24 mb-4" />
                  <LoadingSkeleton className="h-4 w-36 mb-2" />
                  <LoadingSkeleton className="h-4 w-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="h-96 bg-gray-100 animate-pulse" />
    </div>
  )
}
