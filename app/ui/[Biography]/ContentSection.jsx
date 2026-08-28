import Image from "next/image";
import GradientButton from "@/app/ui/common/GradientButton/GradientButton.jsx";

const principles = [
  { title: "Passion", subtitle: "Without passion, there is no vision", body: "Passion is the spark that ignites purpose. It drives creativity, fuels ambition, and inspires action." },
  { title: "Clarity", subtitle: "Without clarity, there is no direction", body: "Clarity transforms vision into actionable goals. It sharpens focus and illuminates priorities." },
  { title: "Focus", subtitle: "Without focus, there is no achievement", body: "Focus is the discipline that turns intention into reality — eliminating distractions along the way." },
];

export default function ContentSection() {
  return (
    <section className="border-t border-canvas-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <p className="eyebrow mb-3">Our philosophy</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">Passion, Clarity, Focus</h2>
            <p className="mt-6 text-lg text-ink-muted">These three principles guide every project we take on. Your vision becomes our mission.</p>
            <div className="mt-10 space-y-8">
              {principles.map((p) => (
                <div key={p.title} className="border-l-2 border-secondary/40 pl-6">
                  <h3 className="font-display text-lg font-bold text-secondary">{p.title}</h3>
                  <p className="mt-1 text-sm font-medium text-ink">{p.subtitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <GradientButton href="/contact">Let&apos;s Talk</GradientButton>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="card-surface overflow-hidden">
              <Image alt="Kaileb Hammontree at work" src="/img/bio/aboutPic1.jpg" width={800} height={570} className="aspect-[7/5] w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
