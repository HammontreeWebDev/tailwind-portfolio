'use client';

import dynamic from 'next/dynamic';
import Testimonial from "@/app/ui/common/Testimonial/Testimonial.jsx";

const SwiperCarousel = dynamic(
  () => import('@/app/ui/common/Swiper/SwiperCarousel'),
  {
    ssr: false,
    loading: () => <div className="h-64 animate-pulse rounded-2xl bg-canvas-elevated" aria-hidden="true" />,
  }
);

const slides = [
  <Testimonial
    key="reese"
    quote="Awesome company, and made my life so much easier!"
    client="Reese Wilder"
    occupation="Owner of BroFit Training"
    picture="/img/home/reese.jpeg"
  />,
  <Testimonial
    key="karah"
    quote="I am so thankful for all of Kaileb's hard work, expertise, and flexibility when creating this website from scratch. He was easy to work with and really took the time to listen to my vision. Would recommend to anyone wanting a unique and individually designed website!"
    client="Karah Hammontree"
    occupation="Owner of To Be With Counseling"
    picture="/img/home/karah.png"
  />,
];

export default function TestimonialsSection() {
  return (
    <section className="border-t border-canvas-border py-20 sm:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Client stories</p>
          <h2 id="testimonials-heading" className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What our clients say
          </h2>
        </div>
        <div className="mt-12">
          <SwiperCarousel slides={slides} />
        </div>
      </div>
    </section>
  );
}
