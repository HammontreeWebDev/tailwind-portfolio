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
                delay: 5000, // 5 seconds
                disableOnInteraction: false, // Keeps autoplay active
                pauseOnMouseEnter: true, // Pauses autoplay on hover
            }}
            effect="cube" // Apply the cube effect
            cubeEffect={{
                shadow: true, // Add a shadow around the cube
                slideShadows: true, // Add shadows on slides
                shadowOffset: 20, // Shadow offset
                shadowScale: 0.94, // Shadow scale
            }}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="max-w-7xl mx-auto"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    {slide}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}