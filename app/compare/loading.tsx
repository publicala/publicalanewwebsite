import { LoadingSkeleton } from "@/components/ui/loading-skeleton"

export default function CompareLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50">
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <LoadingSkeleton className="h-12 w-96 mx-auto mb-6" />
          <LoadingSkeleton className="h-6 w-[600px] mx-auto mb-8" />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <LoadingSkeleton className="h-8 w-full mb-6" />
              <LoadingSkeleton className="h-6 w-full mb-4" />
              <LoadingSkeleton className="h-4 w-3/4 mb-6" />
              <div className="space-y-3 mb-8">
                <LoadingSkeleton className="h-4 w-full" />
                <LoadingSkeleton className="h-4 w-full" />
                <LoadingSkeleton className="h-4 w-full" />
                <LoadingSkeleton className="h-4 w-full" />
              </div>
              <LoadingSkeleton className="h-12 w-full" />
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <LoadingSkeleton className="h-8 w-full mb-6" />
              <LoadingSkeleton className="h-6 w-full mb-4" />
              <LoadingSkeleton className="h-4 w-3/4 mb-6" />
              <div className="space-y-3 mb-8">
                <LoadingSkeleton className="h-4 w-full" />
                <LoadingSkeleton className="h-4 w-full" />
                <LoadingSkeleton className="h-4 w-full" />
                <LoadingSkeleton className="h-4 w-full" />
              </div>
              <LoadingSkeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
