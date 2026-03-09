export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="relative min-h-screen bg-navy/90 flex items-center">
        <div className="container-wide w-full pt-32 lg:pt-[10.25rem] pb-24">
          <div className="max-w-3xl space-y-6">
            <div className="h-5 w-32 bg-white/10 rounded-full" />
            <div className="space-y-3">
              <div className="h-12 w-full bg-white/10 rounded-lg" />
              <div className="h-12 w-3/4 bg-white/10 rounded-lg" />
            </div>
            <div className="h-6 w-2/3 bg-white/10 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="section-padding bg-ivory">
        <div className="container-wide space-y-16">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-12 items-center">
              <div className={`flex-1 space-y-4 ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                <div className="h-8 w-3/4 bg-navy/5 rounded-lg" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-navy/5 rounded" />
                  <div className="h-4 w-5/6 bg-navy/5 rounded" />
                  <div className="h-4 w-4/6 bg-navy/5 rounded" />
                </div>
              </div>
              <div className={`flex-1 ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                <div className="aspect-[4/3] w-full bg-navy/5 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
