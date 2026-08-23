function PageSkeleton({ compact = false }) {
  return (
    <div className="bg-[#f7f4f0] text-[#151517]" role="status" aria-live="polite" aria-label="Loading page">
      <section className={`bg-[#0b0b0c] px-5 sm:px-8 lg:px-12 xl:px-16 ${compact ? "py-14" : "py-20"}`}>
        <div className="mx-auto max-w-[1680px] animate-pulse">
          <div className="h-3 w-36 bg-white/10" />
          <div className="mt-7 h-12 w-[82%] max-w-3xl bg-white/10 sm:h-16" />
          <div className="mt-4 h-12 w-[58%] max-w-2xl bg-white/10 sm:h-16" />
          <div className="mt-8 h-4 w-full max-w-xl bg-white/8" />
          <div className="mt-3 h-4 w-[78%] max-w-lg bg-white/8" />
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto grid max-w-[1680px] animate-pulse gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: compact ? 3 : 6 }, (_, index) => (
            <div key={index} className="border border-black/8 bg-white p-6">
              <div className="aspect-[16/9] bg-black/[.05]" />
              <div className="mt-6 h-3 w-24 bg-black/[.07]" />
              <div className="mt-4 h-8 w-[88%] bg-black/[.07]" />
              <div className="mt-5 h-3 w-full bg-black/[.05]" />
              <div className="mt-2 h-3 w-[72%] bg-black/[.05]" />
            </div>
          ))}
        </div>
      </section>
      <span className="sr-only">Loading RB Corp content</span>
    </div>
  );
}

export default PageSkeleton;
