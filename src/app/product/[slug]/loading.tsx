export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column Skeleton */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title Skeleton */}
            <div className="h-12 bg-gray-200 rounded animate-pulse"></div>

            {/* Description Skeleton */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>
            </div>

            {/* Sections Skeleton */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
                <div className="space-y-4">
                  <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column Skeleton */}
          <div className="space-y-6">
            {/* Trailer Skeleton */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
              <div className="aspect-video bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* CTA Skeleton */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="text-center space-y-4">
                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Checklist Skeleton */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
