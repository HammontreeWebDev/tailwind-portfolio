import GradientButton from "@/app/ui/common/GradientButton/GradientButton.jsx";

function CodePanel() {
  return (
    <div
      className="overflow-hidden rounded-xl border border-canvas-border bg-canvas-muted font-mono text-xs leading-relaxed shadow-card"
      aria-hidden="true"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-canvas-border bg-canvas-elevated px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-copper/60" />
        <span className="h-2 w-2 rounded-full bg-slate/60" />
        <span className="h-2 w-2 rounded-full bg-secondary/40" />
        <span className="ml-2 text-[10px] text-ink-subtle">ship.ts</span>
      </div>
      <div className="space-y-0.5 p-4 text-ink-muted">
        <p>
          <span className="text-secondary">export async function</span>{" "}
          <span className="text-ink">buildProduct</span>
          <span className="text-ink-subtle">(</span>
          <span className="text-cyan">vision</span>
          <span className="text-ink-subtle">: Vision)</span>{" "}
          <span className="text-ink-subtle">{"{"}</span>
        </p>
        <p className="pl-4">
          <span className="text-secondary">const</span> design ={" "}
          <span className="text-cyan">await</span> craftUI(vision);
        </p>
        <p className="pl-4">
          <span className="text-secondary">const</span> app ={" "}
          <span className="text-cyan">await</span> engineer(design);
        </p>
        <p className="pl-4">
          <span className="text-secondary">return</span> deploy(app,{" "}
          <span className="text-copper">&quot;production&quot;</span>);
        </p>
        <p>
          <span className="text-ink-subtle">{"}"}</span>
          <span className="animate-[blink_1s_step-end_infinite] text-cyan">|</span>
        </p>
      </div>
    </div>
  );
}

function StatBar({ label, value }) {
  return (
    <div className="rounded-lg border border-canvas-border bg-canvas-elevated px-4 py-3">
      <p className="text-2xl font-display font-bold text-ink">{value}</p>
      <p className="mt-0.5 text-xs text-ink-subtle">{label}</p>
    </div>
  );
}

export default function HeroSection({
  eyebrow = "Elite Web & App Engineering",
  title = "Engineering Digital Products That Ship",
  subText = "Hammontree Full-Stack Solutions partners with startups and enterprise teams to design, build, and launch custom web and mobile applications — with precision, reliability, and craft.",
  ctaText = "Start Your Project",
  ctaHref = "/contact",
  secondaryText = "View Our Work",
  secondaryHref = "/portfolio",
}) {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Subtle copper accent blur — decorative only */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full opacity-30 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(170,102,57,0.25), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy — 30% secondary palette */}
          <div className="text-center lg:text-left">
            <p className="animate-fade-up stagger-1 eyebrow mb-5">{eyebrow}</p>

            <h1 className="animate-fade-up stagger-2 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              <span className="text-gradient-hero">{title}</span>
            </h1>

            <p className="animate-fade-up stagger-3 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted lg:mx-0">
              {subText}
            </p>

            <div className="animate-fade-up stagger-4 mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              {/* 10% — Orange CTA only */}
              <GradientButton href={ctaHref}>{ctaText}</GradientButton>
              <a href={secondaryHref} className="btn-ghost">
                {secondaryText}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-up stagger-5 mt-12 grid grid-cols-3 gap-3">
              <StatBar value="100%" label="Custom built" />
              <StatBar value="24–72h" label="Response time" />
              <StatBar value="Full-stack" label="Design to deploy" />
            </div>
          </div>

          {/* Visual — 60% canvas + structural teal */}
          <div className="animate-fade-up stagger-3 relative">
            <div className="card-surface card-shine overflow-hidden p-1">
              <CodePanel />
            </div>

            {/* Copper line accent */}
            <div className="absolute -right-2 top-8 hidden h-24 w-px bg-gradient-to-b from-transparent via-copper/50 to-transparent lg:block" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
