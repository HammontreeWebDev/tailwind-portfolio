import Image from 'next/image'

export default function Testimonial({ quote, client, occupation, picture }) {
  return (
    <div className="px-4 py-8">
      <figure className="card-surface mx-auto flex max-w-5xl flex-col items-center gap-8 p-8 sm:flex-row sm:p-10">
        <div className="w-full max-w-xs shrink-0 sm:max-w-[200px]">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-canvas-border">
            <Image
              alt={`Photo of ${client}`}
              src={picture}
              width={200}
              height={200}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <blockquote className="text-lg font-medium leading-relaxed text-ink-muted sm:text-xl">
            <p>&ldquo;{quote}&rdquo;</p>
          </blockquote>
          <figcaption className="mt-6 border-t border-canvas-border pt-6">
            <cite className="not-italic">
              <div className="font-display font-semibold text-ink">{client}</div>
              <div className="mt-1 text-sm text-ink-subtle">{occupation}</div>
            </cite>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
