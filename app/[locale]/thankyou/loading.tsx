export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="animate-pulse">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6"></div>
            <div className="h-10 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 bg-gray-200 rounded mb-8"></div>
            <div className="h-6 bg-gray-200 rounded mb-8"></div>
            <div className="h-12 bg-gray-200 rounded w-48 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
