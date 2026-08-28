import GradientButton from '@/app/ui/common/GradientButton/GradientButton.jsx'

export default function CenteredCard({ title, line1, line2, btnText, url }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="card-surface relative isolate overflow-hidden px-6 py-20 text-center sm:px-16 sm:py-24">
          <p className="eyebrow mb-4">Ready to build?</p>
          <h2 className="font-display mx-auto max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-ink-muted">
            {line1}
            {line2 && (<><br />{line2}</>)}
          </p>
          <div className="mt-10 flex justify-center">
            <GradientButton href={url}>{btnText}</GradientButton>
          </div>
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(170,102,57,0.4), transparent 70%)" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
