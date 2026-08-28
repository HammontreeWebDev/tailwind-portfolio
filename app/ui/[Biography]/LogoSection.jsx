export default function LogoSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="card-surface relative px-6 py-16 text-center sm:px-16">
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink-muted italic">
            &ldquo;I&apos;m a nerd at heart. Outside of building software, I love video games, writing songs, playing guitar, and sharing all of it with my wife and kids.&rdquo;
          </p>
          <p className="mt-6 font-display text-sm font-semibold text-secondary">— Kaileb Hammontree</p>
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(170,102,57,0.5), transparent 70%)" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
