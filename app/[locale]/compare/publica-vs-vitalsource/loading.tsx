import { LoadingSkeleton } from "@/components/ui/loading-skeleton"

export default function PublicaVsVitalSourceLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50">
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8 space-x-6">
            <LoadingSkeleton className="h-12 w-48" />
            <LoadingSkeleton className="h-8 w-8 rounded-full" />
            <LoadingSkeleton className="h-12 w-48" />
          </div>

          <LoadingSkeleton className="h-16 w-[800px] mx-auto mb-6" />
          <LoadingSkeleton className="h-6 w-[600px] mx-auto mb-8" />
          <LoadingSkeleton className="h-12 w-48 mx-auto mb-16" />

          <div className="space-y-16">
            <div className="bg-white rounded-2xl p-8">
              <LoadingSkeleton className="h-8 w-96 mx-auto mb-8" />
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <LoadingSkeleton className="h-6 w-32" />
                  <LoadingSkeleton className="h-4 w-full" />
                  <LoadingSkeleton className="h-4 w-full" />
                  <LoadingSkeleton className="h-4 w-3/4" />
                </div>
                <div className="space-y-4">
                  <LoadingSkeleton className="h-6 w-32" />
                  <LoadingSkeleton className="h-4 w-full" />
                  <LoadingSkeleton className="h-4 w-full" />
                  <LoadingSkeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <LoadingSkeleton className="h-8 w-96 mx-auto mb-8" />
              <div className="space-y-4">
                <LoadingSkeleton className="h-12 w-full" />
                <LoadingSkeleton className="h-8 w-full" />
                <LoadingSkeleton className="h-8 w-full" />
                <LoadingSkeleton className="h-8 w-full" />
                <LoadingSkeleton className="h-8 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
