const TO_BE_WITH_REPO = 'https://github.com/HammontreeWebDev/to_be_with_counseling';

export default function TimelineSection() {
  const timeline = [
    {
      name: 'Cyber Defense Certificate Program (UCF)',
      description: 'Graduated with expertise in computer networking, network security, system administration, and ethical hacking.',
      date: 'Dec 2021',
      dateTime: '2021-12',
    },
    {
      name: 'Full-Stack Coding Boot Camp (UCF)',
      description: 'Graduated with the technical skills to design and build modern websites and applications — front to back.',
      date: 'Dec 2022',
      dateTime: '2022-12',
    },
    {
      name: 'Founded Hammontree Full-Stack Solutions',
      description: 'Launched the company to bring premium web and app development to clients who want more than a template.',
      date: 'Jun 2023',
      dateTime: '2023-06',
    },
    {
      name: 'BroFit Personal Training',
      description: 'Designed and launched a custom website for BroFit Personal Training — a bold, conversion-focused brand presence.',
      link: { text: 'BroFit Personal Training →', url: 'https://www.reesewilder.com/' },
      date: 'Jun 2023',
      dateTime: '2023-06',
    },
    {
      name: 'Jesse Ryder Brown Foundation',
      description: 'Built "J-Boo Customs" for the Jesse Ryder Brown Foundation. Project unavailable as of January 2025.',
      link: { text: 'J-Boo Customs [No longer available]', url: '' },
      date: 'Sep 2023',
      dateTime: '2023-09',
    },
    {
      name: 'To Be With Counseling',
      description: 'Crafted a warm, professional website for To Be With Counseling. The live site is no longer active — view the source on GitHub.',
      link: { text: 'View on GitHub →', url: TO_BE_WITH_REPO },
      date: 'Jan 2025',
      dateTime: '2025-01',
    },
  ];

  return (
    <section className="border-t border-canvas-border py-20 sm:py-28" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">The journey</p>
          <h2 id="timeline-heading" className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Milestones &amp; launches</h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {timeline.map((item) => (
            <div key={item.name} className="card-surface p-6">
              <time dateTime={item.dateTime} className="flex items-center gap-2 text-sm font-semibold text-secondary">
                <span className="inline-flex h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
                {item.date}
              </time>
              <p className="mt-4 font-display text-lg font-semibold text-ink">{item.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              {item.link && item.link.url && (
                <a
                  className="mt-4 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                  href={item.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
