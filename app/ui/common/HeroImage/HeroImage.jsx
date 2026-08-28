'use client'

import Image from 'next/image'
import GradientButton from '@/app/ui/common/GradientButton/GradientButton.jsx'

function CodeSnippet() {
  return (
    <div
      className="overflow-hidden rounded-xl border border-canvas-border bg-canvas-muted px-4 py-3 font-mono text-xs leading-relaxed"
      aria-hidden="true"
    >
      <span className="text-secondary">const</span>{" "}
      <span className="text-ink">launch</span> ={" "}
      <span className="text-cyan">async</span> () =&gt; {"{"}
      <br />
      {"  "}
      <span className="text-secondary">return</span>{" "}
      <span className="text-copper">&quot;production-ready&quot;</span>
      <span className="animate-[blink_1s_step-end_infinite] text-cyan">|</span>
      <br />
      {"}"};
    </div>
  );
}

export default function HeroImage({ title, subText, buttonText, image1, image2, image3, image4, image5, btnHref, eyebrow }) {
  const images = [image1, image2, image3, image4, image5].filter(Boolean);

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="relative w-full text-center lg:text-left lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
            {eyebrow && <p className="animate-fade-up stagger-1 eyebrow mb-4">{eyebrow}</p>}
            <h1 className="animate-fade-up stagger-2 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient-hero">{title}</span>
            </h1>
            <p className="animate-fade-up stagger-3 mt-6 text-lg leading-relaxed text-ink-muted sm:text-xl">
              {subText}
            </p>
            <div className="animate-fade-up stagger-4 mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              {buttonText && btnHref && (
                <GradientButton href={btnHref}>{buttonText}</GradientButton>
              )}
              <a href="/portfolio" className="btn-ghost">View Our Work</a>
            </div>
            <div className="animate-fade-up stagger-5 mt-10 hidden max-w-sm lg:block">
              <CodeSnippet />
            </div>
          </div>

          {images.length > 0 && (
            <div className="mt-14 flex justify-end gap-4 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-40 flex-none space-y-6 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                {images[0] && (
                  <div className="card-surface card-shine animate-float overflow-hidden">
                    <Image alt="" src={images[0]} width={176} height={264} className="aspect-[2/3] w-full object-cover" />
                  </div>
                )}
              </div>
              <div className="mr-auto w-40 flex-none space-y-6 sm:mr-0 sm:pt-52 lg:pt-36">
                {images[1] && (
                  <div className="card-surface card-shine overflow-hidden">
                    <Image alt="" src={images[1]} width={176} height={264} className="aspect-[2/3] w-full object-cover" />
                  </div>
                )}
                {images[2] && (
                  <div className="card-surface card-shine overflow-hidden">
                    <Image alt="" src={images[2]} width={176} height={264} className="aspect-[2/3] w-full object-cover" />
                  </div>
                )}
              </div>
              <div className="w-40 flex-none space-y-6 pt-32 sm:pt-0">
                {images[3] && (
                  <div className="card-surface card-shine overflow-hidden">
                    <Image alt="" src={images[3]} width={176} height={264} className="aspect-[2/3] w-full object-cover" />
                  </div>
                )}
                {images[4] && (
                  <div className="card-surface card-shine overflow-hidden">
                    <Image alt="" src={images[4]} width={176} height={264} className="aspect-[2/3] w-full object-cover" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
