import Image from 'next/image'

export default function ExpHeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:items-center">
          <div>
            <p className="eyebrow mb-4">Credentials &amp; expertise</p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-gradient-hero">Knowledge &amp; Experience</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted sm:text-xl">
              Enterprise engineering, data analytics, and hands-on client work — backed by UCF certifications and years of shipping real products.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="card-surface overflow-hidden">
              <Image alt="Professional experience" src="/img/experience/experience.webp" width={600} height={600} className="aspect-square w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
