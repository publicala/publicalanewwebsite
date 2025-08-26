import { LoadingSkeleton } from '@/components/ui/loading-skeleton'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <LoadingSkeleton className="h-12 w-96 mb-8" />
        <LoadingSkeleton className="h-8 w-80 mb-4" />
        <LoadingSkeleton className="h-6 w-64 mb-12" />
        <LoadingSkeleton className="h-96 w-full rounded-lg" />
      </div>
    </div>
  )
}
