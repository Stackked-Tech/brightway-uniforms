import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="text-center px-6 py-24 max-w-lg mx-auto">
        <p className="text-cyan font-semibold text-sm uppercase tracking-wider mb-4">
          404
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-navy mb-4">
          Page Not Found
        </h1>
        <p className="text-slate text-lg mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary justify-center">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-outlined-dark justify-center">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
