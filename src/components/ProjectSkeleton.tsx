export default function ProjectSkeleton() {
  return (
    <article className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4 bg-gray-200 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" />
      </div>

      <div className="space-y-2">
        <div className="h-6 bg-gray-200 rounded animate-pulse" />
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
        </div>
        <div className="flex gap-1">
          <div className="h-5 bg-gray-200 rounded-full w-16 animate-pulse" />
          <div className="h-5 bg-gray-200 rounded-full w-20 animate-pulse" />
          <div className="h-5 bg-gray-200 rounded-full w-18 animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
        </div>
      </div>
    </article>
  )
}