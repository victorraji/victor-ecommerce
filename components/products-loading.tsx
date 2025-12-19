import { Skeleton } from "@/components/ui/skeleton"

export function ProductsLoading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8 space-y-4">
        <div>
          <Skeleton className="h-10 w-64" />
          <Skeleton className="mt-2 h-5 w-96" />
        </div>
        <Skeleton className="h-10 w-full max-w-md" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-4 rounded-lg border border-border p-4">
            <Skeleton className="aspect-square w-full" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>
    </main>
  )
}
