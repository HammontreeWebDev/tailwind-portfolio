'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cube";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";

export default function SwiperCarousel({ slides }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectCube]}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      effect="cube"
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="max-w-7xl mx-auto"
      aria-label="Client testimonials carousel"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} role="group" aria-roledescription="slide" aria-label={`Testimonial ${index + 1} of ${slides.length}`}>
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
