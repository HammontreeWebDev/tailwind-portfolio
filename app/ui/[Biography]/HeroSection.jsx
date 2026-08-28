import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:items-center">
          <div>
            <p className="eyebrow mb-4">Meet the founder</p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-gradient-hero">Kaileb Hammontree</span>
            </h1>
            <h2 className="mt-3 font-display text-xl font-semibold text-secondary sm:text-2xl">
              Founder · Developer · Consultant
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink-muted sm:text-xl">
              Thanks for stopping by. I founded Hammontree Full-Stack Solutions to help ambitious clients turn bold ideas into polished digital products — with the same care I&apos;d put into my own.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="card-surface overflow-hidden">
              <Image alt="Kaileb Hammontree" src="/img/bio/starwars.jpg" width={600} height={500} className="aspect-[6/5] w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
