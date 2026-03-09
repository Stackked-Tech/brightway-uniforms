"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="text-center px-6 py-24 max-w-lg mx-auto">
        <p className="text-amber font-semibold text-sm uppercase tracking-wider mb-4">
          Something went wrong
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-navy mb-4">
          Unexpected Error
        </h1>
        <p className="text-slate text-lg mb-10 leading-relaxed">
          We hit a snag loading this page. Try again, or give us a call
          if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="btn-primary justify-center">
            Try Again
          </button>
          <a href="tel:7048271868" className="btn-outlined-dark justify-center">
            Call 704-827-1868
          </a>
        </div>
      </div>
    </section>
  );
}
