import Image from 'next/image'

function gridLayoutClass(count) {
  if (count === 1) return 'mx-auto max-w-md grid-cols-1';
  if (count === 2) return 'mx-auto max-w-3xl grid-cols-1 sm:grid-cols-2';
  return 'max-w-none grid-cols-1 lg:grid-cols-3';
}

export default function GridSection({ posts, title, subTitle, eyebrow }) {
  const gridClass = gridLayoutClass(posts.length);

  return (
    <section className="py-20 sm:py-28" aria-labelledby="grid-section-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h2 id="grid-section-heading" className="font-display text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          {subTitle && <p className="mt-4 text-lg text-ink-muted">{subTitle}</p>}
        </div>

        <div className={`mt-14 grid justify-items-center gap-8 ${gridClass}`}>
          {posts.map((post) => (
            <article
              key={post.id}
              className="card-surface card-shine group flex w-full max-w-md flex-col overflow-hidden transition-colors hover:border-secondary/30 lg:max-w-none"
            >
              <a href={post.href} className="relative overflow-hidden" aria-label={`View ${post.title}`}>
                <Image
                  alt={post.alt}
                  src={post.imageUrl}
                  width={600}
                  height={400}
                  loading="lazy"
                  unoptimized={post.imageUrl.endsWith('.svg')}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={
                    post.imageClassName ??
                    'aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:aspect-[2/1] lg:aspect-[3/2]'
                  }
                />
              </a>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-secondary">
                  {post.category.title}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink transition-colors group-hover:text-secondary">
                  <a href={post.href}>{post.title}</a>
                </h3>
                {post.subtitle && (
                  <p className="mt-2 text-sm text-ink-muted">{post.subtitle}</p>
                )}
                {post.roleHistory?.length > 0 && (
                  <ul className="mt-4 space-y-3 border-l border-canvas-border pl-4" aria-label="Role history">
                    {post.roleHistory.map((role) => (
                      <li key={`${role.title}-${role.dates}`}>
                        <p className="text-sm font-medium text-ink">{role.title}</p>
                        <p className="text-xs text-ink-muted">{role.dates}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
