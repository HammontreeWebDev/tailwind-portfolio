const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "UI/UX Design",
    description: "Precision-crafted interfaces in Figma — intuitive, accessible, and engineered to convert.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Web & App Development",
    description: "Full-stack engineering with React, Next.js, and modern tooling — built to scale and ship.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Performance & Launch",
    description: "Optimized for speed, SEO, and reliability — deployed with monitoring and long-term support.",
  },
];

export default function ServicesSection() {
  return (
    <section className="border-t border-canvas-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">What we do</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            End-to-end engineering, built for impact
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            From architecture to deployment — we handle the full stack so your team can focus on growth.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-surface card-shine p-8 transition-colors hover:border-secondary/30"
            >
              <div className="mb-5 inline-flex rounded-lg border border-canvas-border bg-canvas-muted p-3 text-secondary">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
